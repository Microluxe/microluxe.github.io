#!/usr/bin/env python3
"""Synchronize all 18 Microluxe Studio Portfolio photos from Booksy.

The Booksy profile only exposes a handful of photos in its initial HTML. The
complete set is loaded after opening "Show all photos" and selecting the
"Portfolio" tab, so this script uses Chromium through Playwright, records the
images loaded by the page, downloads them into the repository, and writes a
small JSON manifest used by the GitHub Pages carousel.
"""

from __future__ import annotations

import json
import re
import shutil
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.parse import urlsplit, urlunsplit

import requests
from playwright.sync_api import Page, Response, TimeoutError as PlaywrightTimeoutError, sync_playwright

BUSINESS_ID = "1311898"
EXPECTED_COUNT = 18
PROFILE_URL = "https://booksy.com/en-us/1311898_microluxe-studio_brows-lashes_134766_kissimmee"
ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "data" / "portfolio.json"
IMAGE_DIR = ROOT / "assets" / "images" / "portfolio"
API_KEY = "web-e3d812bf-d7a2-445d-ab38-55589ae6a121"


def clean_image_url(value: str) -> str:
    """Return a stable 1280px Booksy image URL."""
    value = value.replace("\\u0026", "&").replace("\\/", "/").strip()
    if value.startswith("//"):
        value = "https:" + value
    if not value.startswith("http"):
        return ""
    parts = urlsplit(value)
    if "d2zdpiztbgorvt.cloudfront.net" not in parts.netloc:
        return ""
    if f"/region1/us/{BUSINESS_ID}/inspiration/" not in parts.path:
        return ""
    return urlunsplit((parts.scheme or "https", parts.netloc, parts.path, "size=1280x0", ""))


def collect_urls_from_value(value: Any, output: list[str]) -> None:
    if isinstance(value, str):
        cleaned = clean_image_url(value)
        if cleaned:
            output.append(cleaned)
        return
    if isinstance(value, dict):
        for nested in value.values():
            collect_urls_from_value(nested, output)
        return
    if isinstance(value, list):
        for nested in value:
            collect_urls_from_value(nested, output)


def dismiss_overlays(page: Page) -> None:
    labels = (
        "Accept all",
        "Accept All",
        "I agree",
        "Allow all",
        "Got it",
        "Continue",
        "Aceptar todo",
        "Aceptar",
    )
    for label in labels:
        try:
            locator = page.get_by_role("button", name=re.compile(rf"^{re.escape(label)}$", re.I))
            if locator.count() and locator.first.is_visible():
                locator.first.click(timeout=1200)
                page.wait_for_timeout(350)
        except Exception:
            pass


def click_first_visible(page: Page, candidates: list[Any], timeout: int = 4000) -> bool:
    for locator in candidates:
        try:
            if locator.count() and locator.first.is_visible():
                locator.first.click(timeout=timeout)
                return True
        except Exception:
            continue
    return False


def scroll_lazy_content(page: Page) -> None:
    for _ in range(14):
        page.evaluate(
            """
            () => {
              window.scrollTo(0, document.body.scrollHeight);
              const elements = [...document.querySelectorAll('*')];
              for (const el of elements) {
                const style = getComputedStyle(el);
                const scrollable = /(auto|scroll)/.test(style.overflowY || '') && el.scrollHeight > el.clientHeight + 80;
                if (scrollable) el.scrollTop = el.scrollHeight;
              }
            }
            """
        )
        page.mouse.wheel(0, 1800)
        page.wait_for_timeout(450)


def collect_dom_urls(page: Page) -> list[str]:
    values = page.locator("img").evaluate_all(
        """
        images => images.flatMap(img => [
          img.currentSrc,
          img.src,
          img.getAttribute('data-src'),
          img.getAttribute('data-lazy-src'),
          img.getAttribute('srcset')
        ]).filter(Boolean)
        """
    )
    urls: list[str] = []
    for value in values:
        if not isinstance(value, str):
            continue
        # srcset may contain several URLs.
        for candidate in value.split(","):
            cleaned = clean_image_url(candidate.strip().split(" ")[0])
            if cleaned:
                urls.append(cleaned)
    return urls


def deduplicate(urls: list[str]) -> list[str]:
    unique: list[str] = []
    seen: set[str] = set()
    for url in urls:
        path = urlsplit(url).path
        if path in seen:
            continue
        seen.add(path)
        unique.append(url)
    return unique


def scrape_urls() -> list[str]:
    captured: list[str] = []

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1440, "height": 1200},
            locale="en-US",
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
            ),
        )
        page = context.new_page()

        def record_response(response: Response) -> None:
            if "booksy.com" not in response.url:
                return
            if response.request.resource_type not in {"xhr", "fetch", "document"}:
                return
            try:
                content_type = response.headers.get("content-type", "")
                if "json" in content_type:
                    collect_urls_from_value(response.json(), captured)
                elif response.request.resource_type == "document":
                    text = response.text()
                    for match in re.findall(r"https?:[^\"'<> ]+", text):
                        cleaned = clean_image_url(match)
                        if cleaned:
                            captured.append(cleaned)
            except Exception:
                pass

        page.on("response", record_response)
        page.goto(PROFILE_URL, wait_until="domcontentloaded", timeout=90000)
        page.wait_for_timeout(2200)
        dismiss_overlays(page)

        opened = click_first_visible(
            page,
            [
                page.get_by_text("Show all photos", exact=True),
                page.get_by_role("button", name=re.compile("show all photos", re.I)),
                page.locator("text=/Show all photos/i"),
            ],
            timeout=7000,
        )
        if not opened:
            raise RuntimeError("Could not open Booksy's 'Show all photos' gallery.")

        page.wait_for_timeout(1800)
        dismiss_overlays(page)
        click_first_visible(
            page,
            [
                page.get_by_role("button", name=re.compile(r"^Portfolio$", re.I)),
                page.get_by_role("tab", name=re.compile(r"^Portfolio$", re.I)),
                page.get_by_text("Portfolio", exact=True),
            ],
            timeout=5000,
        )
        page.wait_for_timeout(1300)
        scroll_lazy_content(page)
        captured.extend(collect_dom_urls(page))

        # Some galleries expose a next arrow instead of a scrollable grid. Walk it
        # repeatedly so each lazy image is requested and becomes available.
        for _ in range(EXPECTED_COUNT + 4):
            clicked = click_first_visible(
                page,
                [
                    page.get_by_role("button", name=re.compile("next", re.I)),
                    page.locator('button[aria-label*="Next" i]'),
                    page.locator('[data-testid*="next" i]'),
                ],
                timeout=1000,
            )
            if not clicked:
                break
            page.wait_for_timeout(250)
            captured.extend(collect_dom_urls(page))

        browser.close()

    urls = deduplicate(captured)
    if len(urls) < EXPECTED_COUNT:
        raise RuntimeError(
            f"Booksy returned only {len(urls)} unique Portfolio images; expected {EXPECTED_COUNT}. "
            "The existing site files were left unchanged."
        )
    return urls[:EXPECTED_COUNT]


def download_images(urls: list[str]) -> list[dict[str, str]]:
    temp_dir = IMAGE_DIR.with_name("portfolio-tmp")
    if temp_dir.exists():
        shutil.rmtree(temp_dir)
    temp_dir.mkdir(parents=True, exist_ok=True)

    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; MicroluxePortfolioSync/1.0)",
        "Referer": PROFILE_URL,
        "X-Api-Key": API_KEY,
    }
    session = requests.Session()
    records: list[dict[str, str]] = []

    for index, url in enumerate(urls, start=1):
        response = session.get(url, headers=headers, timeout=45)
        response.raise_for_status()
        content_type = response.headers.get("content-type", "")
        extension = ".png" if "png" in content_type else ".jpg"
        filename = f"portfolio-{index:02d}{extension}"
        target = temp_dir / filename
        target.write_bytes(response.content)
        if target.stat().st_size < 8_000:
            raise RuntimeError(f"Downloaded Portfolio image {index} is unexpectedly small.")
        records.append(
            {
                "id": f"portfolio-{index:02d}",
                "src": f"assets/images/portfolio/{filename}",
                "fallback_src": url,
                "source_url": url,
                "alt_en": f"Microluxe Studio portfolio result {index}",
                "alt_es": f"Resultado del portfolio de Microluxe Studio {index}",
                "caption_en": f"Microluxe Studio portfolio · {index:02d}",
                "caption_es": f"Portfolio Microluxe Studio · {index:02d}",
            }
        )

    if IMAGE_DIR.exists():
        shutil.rmtree(IMAGE_DIR)
    temp_dir.rename(IMAGE_DIR)
    return records


def main() -> int:
    urls = scrape_urls()
    records = download_images(urls)
    payload = {
        "expected_count": EXPECTED_COUNT,
        "count": len(records),
        "synced_at": datetime.now(timezone.utc).isoformat(),
        "source": PROFILE_URL,
        "images": records,
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Saved all {len(records)} Booksy Portfolio images.")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (PlaywrightTimeoutError, requests.RequestException, RuntimeError) as exc:
        print(exc, file=sys.stderr)
        raise SystemExit(1)
