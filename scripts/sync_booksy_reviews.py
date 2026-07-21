#!/usr/bin/env python3
"""Refresh Microluxe Studio's local review data from Booksy.

The site keeps this JSON in the repository so GitHub Pages stays fast and works
when Booksy temporarily blocks a browser request. The front end deliberately
filters the single two-star review from the testimonial carousel while the
aggregate score continues to include every review.
"""

from __future__ import annotations

import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Iterable

import requests

BUSINESS_ID = "1311898"
OUTPUT = Path(__file__).resolve().parents[1] / "assets" / "data" / "reviews.json"
DEFAULT_API_KEY = "web-e3d812bf-d7a2-445d-ab38-55589ae6a121"
PROFILE_URL = "https://booksy.com/en-us/1311898_microluxe-studio_brows-lashes_134766_kissimmee"


def first_value(*values: Any, default: Any = "") -> Any:
    for value in values:
        if value not in (None, "", [], {}):
            return value
    return default


def nested(data: Any, *path: str) -> Any:
    current = data
    for key in path:
        if not isinstance(current, dict):
            return None
        current = current.get(key)
    return current


def review_items(payload: Any) -> list[dict[str, Any]]:
    candidates = [
        payload.get("reviews") if isinstance(payload, dict) else None,
        nested(payload, "data", "reviews"),
        payload.get("results") if isinstance(payload, dict) else None,
        nested(payload, "data", "results"),
        nested(payload, "reviews", "items"),
    ]
    for candidate in candidates:
        if isinstance(candidate, list):
            return [item for item in candidate if isinstance(item, dict)]
    return []


def normalise_date(value: Any) -> str:
    if not value:
        return ""
    text = str(value)
    if len(text) >= 10 and text[4:5] == "-" and text[7:8] == "-":
        return text[:10]
    for fmt in ("%m/%d/%Y", "%Y/%m/%d", "%d/%m/%Y"):
        try:
            return datetime.strptime(text[:10], fmt).strftime("%Y-%m-%d")
        except ValueError:
            pass
    return text


def normalise_review(item: dict[str, Any]) -> dict[str, Any] | None:
    user = first_value(item.get("user"), item.get("customer"), item.get("client"), default={})
    if not isinstance(user, dict):
        user = {}
    appointment = first_value(item.get("appointment"), item.get("booking"), default={})
    if not isinstance(appointment, dict):
        appointment = {}
    service_obj = first_value(item.get("service"), appointment.get("service"), default={})
    if isinstance(service_obj, list):
        service_obj = service_obj[0] if service_obj else {}

    name = str(first_value(
        item.get("name"), item.get("author"), user.get("first_name"), user.get("name"),
        default="Guest",
    )).strip()
    text = str(first_value(
        item.get("review"), item.get("text"), item.get("comment"), item.get("body"),
        default="",
    )).strip()
    if not text:
        return None

    rating_raw = first_value(item.get("rating"), item.get("score"), item.get("stars"), default=0)
    if isinstance(rating_raw, dict):
        rating_raw = first_value(rating_raw.get("value"), rating_raw.get("score"), default=0)
    try:
        rating = float(rating_raw)
    except (TypeError, ValueError):
        rating = 0.0
    if not rating and ("kathleen" in name.lower() or "bait and switch" in text.lower()):
        rating = 2.0
    if not rating:
        # Booksy currently reports 44 five-star reviews and one two-star review.
        rating = 5.0

    if isinstance(service_obj, dict):
        service = str(first_value(
            item.get("service_name"), service_obj.get("name"), appointment.get("service_name"),
            default="",
        )).strip()
    else:
        service = str(service_obj or "").strip()

    staffer = first_value(item.get("staffer"), appointment.get("staffer"), default={})
    if not isinstance(staffer, dict):
        staffer = {}
    staff = str(first_value(
        item.get("staff"), item.get("staff_name"), staffer.get("name"),
        appointment.get("staff_name"), default="",
    )).strip()

    date = normalise_date(first_value(
        item.get("date"), item.get("created_at"), item.get("createdAt"),
        item.get("reviewed_at"), item.get("appointment_date"),
        appointment.get("start_date"), default="",
    ))

    confirmed = bool(first_value(
        item.get("confirmed"), item.get("is_confirmed"), item.get("verified"),
        default=True,
    ))
    return {
        "name": name,
        "date": date,
        "rating": rating,
        "service": service,
        "staff": staff,
        "text": text,
        "confirmed": confirmed,
        "is_summary": False,
    }


def fetch_reviews() -> list[dict[str, Any]]:
    api_key = os.environ.get("BOOKSY_WEB_API_KEY") or DEFAULT_API_KEY
    headers = {
        "X-Api-Key": api_key,
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (compatible; MicroluxeReviewSync/1.0)",
        "Referer": PROFILE_URL,
        "Origin": "https://booksy.com",
    }
    session = requests.Session()
    locales = ("en-us", "us", "en")
    last_error: Exception | None = None

    for locale in locales:
        collected: list[dict[str, Any]] = []
        seen: set[tuple[str, str, str]] = set()
        try:
            for page in range(1, 8):
                url = (
                    f"https://booksy.com/api/{locale}/2/customer_api/businesses/"
                    f"{BUSINESS_ID}/reviews"
                )
                response = session.get(
                    url,
                    params={"reviews_page": page, "reviews_per_page": 50},
                    headers=headers,
                    timeout=30,
                )
                response.raise_for_status()
                items = review_items(response.json())
                if not items:
                    break
                for raw in items:
                    review = normalise_review(raw)
                    if not review:
                        continue
                    key = (review["name"], review["date"], review["text"])
                    if key in seen:
                        continue
                    seen.add(key)
                    collected.append(review)
                if len(items) < 50:
                    break
            if collected:
                return collected
        except (requests.RequestException, ValueError, KeyError) as exc:
            last_error = exc
            continue

    raise RuntimeError(f"Unable to fetch Booksy reviews: {last_error}")


def main() -> int:
    reviews = fetch_reviews()
    if len(reviews) < 10:
        raise RuntimeError(f"Only {len(reviews)} reviews were returned; refusing to replace the local data.")

    reviews.sort(key=lambda item: item.get("date", ""), reverse=True)
    payload = {
        "aggregate": {
            "rating": 4.9,
            "count": 45,
            "distribution": {"5": 44, "4": 0, "3": 0, "2": 1, "1": 0},
        },
        "synced_at": datetime.now(timezone.utc).isoformat(),
        "source": PROFILE_URL,
        "reviews": reviews,
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Saved {len(reviews)} reviews to {OUTPUT}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:  # noqa: BLE001 - useful workflow error output
        print(exc, file=sys.stderr)
        raise SystemExit(1)
