const BOOKSY_URL = "https://booksy.com/en-us/1311898_microluxe-studio_brows-lashes_134766_kissimmee";

const services = {
  permanent: {
    en: "Permanent makeup",
    es: "Maquillaje permanente",
    items: [
      { en: "Microblading", es: "Microblading", price: "$320", duration: "3h" },
      { en: "Powder brows", es: "Powder brows", price: "$320", duration: "3h" },
      { en: "Lip blush", es: "Lip blush", price: "$320", duration: "3h 30m" },
      { en: "Classic eyeliner", es: "Delineado clásico", price: "$320", duration: "2h" },
      { en: "Lip neutralization", es: "Neutralización de labios", price: "$320", duration: "3h" },
      { en: "Yearly touch-up", es: "Retoque anual", price: "$200", duration: "2h 30m" },
      { en: "Touch-up · 8 weeks to 6 months", es: "Retoque · 8 semanas a 6 meses", price: "$112", duration: "30m" }
    ]
  },
  brows: {
    en: "Brows",
    es: "Cejas",
    items: [
      { en: "Brow wax or threading with mapping", es: "Diseño y depilación de cejas con cera o hilo", price: "$25", duration: "30m" },
      { en: "Eyebrow grooming with wax", es: "Depilación de cejas con cera", price: "$15", duration: "15m" },
      { en: "Brow shape, wax/threading and tint", es: "Diseño, depilación y tinte de cejas", price: "$45", duration: "1h" },
      { en: "Eyebrow wax/threading + tint", es: "Depilación de cejas + tinte", price: "$40", duration: "15m" },
      { en: "Brow lamination bare", es: "Laminado de cejas básico", price: "$75", duration: "1h" },
      { en: "Brow lamination deluxe", es: "Laminado de cejas deluxe", price: "$90", duration: "1h 15m" },
      { en: "Eyebrow tint or henna", es: "Tinte o henna de cejas", price: "$25", duration: "30m" },
      { en: "Brow and lash tint combo", es: "Tinte de cejas y pestañas", price: "$45", duration: "45m" }
    ]
  },
  lashes: {
    en: "Lashes",
    es: "Pestañas",
    items: [
      { en: "Lash lift and tint", es: "Lifting y tinte de pestañas", price: "$95", duration: "1h" },
      { en: "Lash lifting", es: "Lifting de pestañas", price: "$75", duration: "1h" }
    ]
  },
  facials: {
    en: "Facials",
    es: "Faciales",
    items: [
      { en: "Hydrafacial", es: "Hydrafacial", price: "$120", duration: "1h 30m" },
      { en: "Hydrafacial + microneedling", es: "Hydrafacial + microneedling", price: "$160", duration: "1h 30m" },
      { en: "Microneedling", es: "Microneedling", price: "$95", duration: "45m" },
      { en: "Hollywood peel", es: "Hollywood peel", price: "$150", duration: "30m" },
      { en: "Combination facial package", es: "Paquete facial combinado", price: "$800", duration: "See Booksy" }
    ]
  }
};

const trainings = [
  { en: "Powder brows training", es: "Formación powder brows", meta: "$1,500 · 8h" },
  { en: "Lip blush training", es: "Formación lip blush", meta: "$1,500 · 7h" },
  { en: "Powder brows + lip blush combo", es: "Formación powder brows + lip blush", meta: "$2,500 · 8h" },
  { en: "Brow design, wax, tint and lamination", es: "Diseño, depilación, tinte y laminado de cejas", meta: "$1,000 · 8h" },
  { en: "Brow shape, wax and tint", es: "Diseño, depilación y tinte de cejas", meta: "$800 · 8h" },
  { en: "Brow lamination, wax and lash lift", es: "Laminado, depilación y lifting de pestañas", meta: "$1,350 · 8h" }
];

const translations = {
  en: {
    navServices: "Services", navWork: "Work", navTraining: "Training", navReviews: "Reviews", navContact: "Contact",
    bookNow: "Book now", heroEyebrow: "Brows · Lashes · Permanent makeup · Skin",
    heroLogoLabel: "Signature beauty studio", heroMediaLabel: "Luxury beauty in Kissimmee",
    heroTitle: "Refined beauty, designed around you.",
    heroIntro: "Precision treatments for natural-looking results, delivered with care in Kissimmee, Florida.",
    reserveAppointment: "Reserve an appointment", exploreServices: "Explore services", ratingLabel: "Booksy rating", reviewsLabel: "verified reviews", servicesLabel: "specialized services",
    statement: "Beauty should still feel like you—only more defined, balanced and effortless.",
    servicesEyebrow: "Treatment menu", servicesTitle: "Specialized services for every detail.",
    servicesIntro: "From subtle brow definition to advanced permanent makeup and skin treatments, each service is selected to complement your features and goals.",
    permanentMakeup: "Permanent makeup", permanentMakeupText: "Microblading, powder brows, lip blush, lip neutralization and classic eyeliner.",
    brows: "Brows", browsText: "Mapping, shaping, waxing or threading, tinting, henna and lamination.",
    lashes: "Lashes", lashesText: "Natural lash lifting with optional tint for a polished, low-maintenance look.",
    facials: "Facials", facialsText: "Hydrafacial, microneedling, Hollywood peel and combination treatments.",
    viewTreatments: "View treatments", selectedCategory: "Selected category", priceNotice: "Prices and availability may change. Booksy always shows the current information.",
    waxText: "Facial waxing and threading are also available.", fullMenu: "View full menu and current promotions",
    workEyebrow: "Selected results", workTitle: "Small details. Visible confidence.", workIntro: "A selection of brow, lash and permanent makeup work from Microluxe Studio.",
    carouselCaptionOne: "Tailored brow definition", carouselCaptionTwo: "Balanced shape and tone", carouselCaptionThree: "Soft permanent makeup", carouselCaptionFour: "Polished, effortless finish", carouselCaptionFive: "Powder brows result", carouselHint: "Hover to see the image breathe. Click to enlarge.",
    aboutEyebrow: "The studio", aboutTitle: "Professional technique. Personal attention.",
    aboutTextOne: "Led by beauty professional Neyle Cabello, Microluxe Studio combines technical precision with a calm, welcoming experience. Every appointment begins with listening: your preferences, your features and the result you want to achieve.",
    aboutTextTwo: "Clients consistently highlight the studio’s professionalism, detailed explanations, clean environment and thoughtful service.", readExperiences: "Read client experiences",
    trainingEyebrow: "Professional education", trainingTitle: "Hands-on training for beauty professionals.", trainingIntro: "Focused, one-day courses designed to build practical technique in permanent makeup, brows and lashes.", trainingAvailability: "Check training availability",
    reviewsEyebrow: "Client notes", reviewsTitle: "The experience matters as much as the result.", basedOn: "Based on 45 Booksy reviews",
    reviewOne: "“Knowledgeable and detail-oriented. She made sure I was happy with the results.”", reviewTwo: "“Beautiful and professional work, lovely and clean space.”", reviewThree: "“She is so sweet and explains everything. I will recommend her.”",
    contactEyebrow: "Contact & appointments", contactTitle: "Tell Neyle what you would like to book.", contactText: "Select a treatment and send your preferred date. Microluxe Studio will receive the request directly by email and contact you to confirm availability.", bookBooksy: "Or book directly through Booksy",
    locationLabel: "Location", emailLabel: "Email", bookingLabel: "Appointments", bookingText: "Requests are confirmed personally by the studio",
    formKicker: "Appointment request", formName: "Name", formNamePlaceholder: "Your full name", formEmail: "Email", formEmailPlaceholder: "you@email.com", formPhone: "Phone", formPhonePlaceholder: "Phone or WhatsApp", formContactRequired: "Please enter at least an email address or a phone number.", formContactValidation: "Enter an email address or a phone number so Neyle can contact you.", formDate: "Preferred date", formService: "Service and price", formChooseService: "Choose a service", formContactMethod: "Preferred reply", formReplyEmail: "Email", formReplyPhone: "Phone / WhatsApp", formMessage: "Message", formMessagePlaceholder: "Tell us what result you are looking for or ask any question", formPrivacy: "Your information is used only to respond to this appointment request.", formSubmit: "Send request", formSending: "Sending…", formSuccess: "Thank you. Your request has been sent to Neyle.", formError: "The message could not be sent. Please try again or email neylec@gmail.com.", selectService: "Select service"
  },
  es: {
    navServices: "Servicios", navWork: "Trabajos", navTraining: "Formación", navReviews: "Opiniones", navContact: "Contacto",
    bookNow: "Reservar", heroEyebrow: "Cejas · Pestañas · Maquillaje permanente · Piel",
    heroLogoLabel: "Estudio de belleza de autor", heroMediaLabel: "Belleza de lujo en Kissimmee",
    heroTitle: "Belleza refinada, diseñada para ti.",
    heroIntro: "Tratamientos precisos y resultados naturales, realizados con cuidado en Kissimmee, Florida.",
    reserveAppointment: "Reservar una cita", exploreServices: "Ver servicios", ratingLabel: "valoración en Booksy", reviewsLabel: "opiniones verificadas", servicesLabel: "servicios especializados",
    statement: "La belleza debe seguir sintiéndose como tú: más definida, equilibrada y natural.",
    servicesEyebrow: "Carta de tratamientos", servicesTitle: "Servicios especializados para cada detalle.",
    servicesIntro: "Desde una definición sutil de las cejas hasta maquillaje permanente y tratamientos avanzados para la piel, cada servicio se adapta a tus rasgos y objetivos.",
    permanentMakeup: "Maquillaje permanente", permanentMakeupText: "Microblading, powder brows, lip blush, neutralización de labios y delineado clásico.",
    brows: "Cejas", browsText: "Diseño, mapeo, depilación con cera o hilo, tinte, henna y laminado.",
    lashes: "Pestañas", lashesText: "Lifting natural con opción de tinte para un resultado elegante y de bajo mantenimiento.",
    facials: "Faciales", facialsText: "Hydrafacial, microneedling, Hollywood peel y tratamientos combinados.",
    viewTreatments: "Ver tratamientos", selectedCategory: "Categoría seleccionada", priceNotice: "Los precios y la disponibilidad pueden cambiar. Booksy siempre muestra la información actual.",
    waxText: "También se ofrece depilación facial con cera e hilo.", fullMenu: "Ver carta completa y promociones actuales",
    workEyebrow: "Resultados seleccionados", workTitle: "Pequeños detalles. Confianza visible.", workIntro: "Una selección de trabajos de cejas, pestañas y maquillaje permanente de Microluxe Studio.",
    carouselCaptionOne: "Definición de cejas a medida", carouselCaptionTwo: "Forma y tono equilibrados", carouselCaptionThree: "Maquillaje permanente suave", carouselCaptionFour: "Acabado pulido y natural", carouselCaptionFive: "Resultado powder brows", carouselHint: "Pasa el ratón para ver respirar la imagen. Haz clic para ampliarla.",
    aboutEyebrow: "El estudio", aboutTitle: "Técnica profesional. Atención personal.",
    aboutTextOne: "Dirigido por la profesional de belleza Neyle Cabello, Microluxe Studio combina precisión técnica con una experiencia tranquila y acogedora. Cada cita comienza escuchando tus preferencias, tus rasgos y el resultado que deseas conseguir.",
    aboutTextTwo: "Las clientas destacan de forma constante la profesionalidad, las explicaciones detalladas, la limpieza del espacio y el trato atento.", readExperiences: "Leer experiencias",
    trainingEyebrow: "Formación profesional", trainingTitle: "Cursos prácticos para profesionales de la belleza.", trainingIntro: "Formaciones intensivas de un día enfocadas en desarrollar técnica real en maquillaje permanente, cejas y pestañas.", trainingAvailability: "Consultar disponibilidad",
    reviewsEyebrow: "Opiniones de clientas", reviewsTitle: "La experiencia importa tanto como el resultado.", basedOn: "Basado en 45 opiniones de Booksy",
    reviewOne: "“Tiene mucho conocimiento y cuida cada detalle. Se aseguró de que estuviera satisfecha con el resultado.”", reviewTwo: "“Trabajo precioso y profesional, en un espacio agradable y limpio.”", reviewThree: "“Es muy amable y lo explica todo. La recomendaría.”",
    contactEyebrow: "Contacto y citas", contactTitle: "Cuéntale a Neyle qué quieres reservar.", contactText: "Selecciona un tratamiento y envía tu fecha preferida. Microluxe Studio recibirá la solicitud directamente por correo y contactará contigo para confirmar disponibilidad.", bookBooksy: "O reserva directamente en Booksy",
    locationLabel: "Ubicación", emailLabel: "Correo", bookingLabel: "Citas", bookingText: "Las solicitudes se confirman personalmente desde el estudio",
    formKicker: "Solicitud de cita", formName: "Nombre", formNamePlaceholder: "Nombre y apellidos", formEmail: "Correo", formEmailPlaceholder: "tu@email.com", formPhone: "Teléfono", formPhonePlaceholder: "Teléfono o WhatsApp", formContactRequired: "Introduce al menos un correo electrónico o un teléfono.", formContactValidation: "Introduce un correo o un teléfono para que Neyle pueda contactarte.", formDate: "Fecha preferida", formService: "Servicio y precio", formChooseService: "Elige un servicio", formContactMethod: "Respuesta preferida", formReplyEmail: "Correo", formReplyPhone: "Teléfono / WhatsApp", formMessage: "Mensaje", formMessagePlaceholder: "Cuéntanos qué resultado buscas o haz cualquier consulta", formPrivacy: "Tus datos solo se utilizarán para responder a esta solicitud de cita.", formSubmit: "Enviar solicitud", formSending: "Enviando…", formSuccess: "Gracias. Tu solicitud ha sido enviada a Neyle.", formError: "No se pudo enviar el mensaje. Inténtalo de nuevo o escribe a neylec@gmail.com.", selectService: "Seleccionar servicio"
  }
};

let currentLanguage = localStorage.getItem("microluxe-language") || "en";
let currentCategory = "permanent";
let carouselIndex = 0;
let carouselTimer;
let lightboxIndex = 0;

function getServiceValue(item) {
  return `${item.en} — ${item.price} — ${item.duration}`;
}

function renderServices(category) {
  currentCategory = category;
  const data = services[category];
  const title = document.getElementById("service-panel-title");
  const list = document.getElementById("service-list");
  if (!title || !list) return;

  title.textContent = data[currentLanguage];
  list.innerHTML = data.items.map(item => `
    <button class="service-row" type="button" data-service="${getServiceValue(item).replaceAll('"', '&quot;')}">
      <span class="service-copy">
        <strong>${item[currentLanguage]}</strong>
        <small>${translations[currentLanguage].selectService}</small>
      </span>
      <span class="service-meta">${item.price} · ${item.duration}</span>
    </button>
  `).join("");

  document.querySelectorAll(".service-open").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.category === category));
  });

  list.querySelectorAll(".service-row").forEach(button => {
    button.addEventListener("click", () => selectServiceAndOpenForm(button.dataset.service));
  });
}

function renderServiceOptions(selectedValue = "") {
  const select = document.getElementById("service-select");
  if (!select) return;

  select.innerHTML = `<option value="">${translations[currentLanguage].formChooseService}</option>`;
  Object.values(services).forEach(category => {
    const group = document.createElement("optgroup");
    group.label = category[currentLanguage];
    category.items.forEach(item => {
      const option = document.createElement("option");
      option.value = getServiceValue(item);
      option.textContent = `${item[currentLanguage]} — ${item.price} · ${item.duration}`;
      group.appendChild(option);
    });
    select.appendChild(group);
  });

  trainings.forEach((training, index) => {
    if (index === 0) {
      const group = document.createElement("optgroup");
      group.label = currentLanguage === "es" ? "Formación profesional" : "Professional training";
      trainings.forEach(item => {
        const option = document.createElement("option");
        option.value = `${item.en} — ${item.meta}`;
        option.textContent = `${item[currentLanguage]} — ${item.meta}`;
        group.appendChild(option);
      });
      select.appendChild(group);
    }
  });

  if (selectedValue) select.value = selectedValue;
}

function selectServiceAndOpenForm(serviceValue) {
  renderServiceOptions(serviceValue);
  const form = document.getElementById("contact-form");
  form?.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => document.getElementById("service-select")?.focus({ preventScroll: true }), 550);
}

function renderTraining() {
  const list = document.getElementById("training-list");
  if (!list) return;
  list.innerHTML = trainings.map((item, index) => `
    <button class="training-row" type="button" data-training="${item.en} — ${item.meta}">
      <strong>${String(index + 1).padStart(2, "0")} · ${item[currentLanguage]}</strong>
      <span>${item.meta}</span>
    </button>
  `).join("");
  list.querySelectorAll(".training-row").forEach(button => {
    button.addEventListener("click", () => selectServiceAndOpenForm(button.dataset.training));
  });
}

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("microluxe-language", language);
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.dataset.i18n;
    if (translations[language][key]) node.textContent = translations[language][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
    const key = node.dataset.i18nPlaceholder;
    if (translations[language][key]) node.placeholder = translations[language][key];
  });

  const languageToggle = document.querySelector(".language-toggle");
  if (languageToggle) languageToggle.textContent = language === "en" ? "EN / ES" : "ES / EN";

  const selectedService = document.getElementById("service-select")?.value || "";
  renderServices(currentCategory);
  renderTraining();
  renderServiceOptions(selectedService);
  updateLightboxContent(lightboxIndex);
}

function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  });

  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }));
}

function initReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function initCarousel() {
  const carousel = document.getElementById("client-carousel");
  const track = carousel?.querySelector(".carousel-track");
  const slides = [...(carousel?.querySelectorAll(".carousel-slide") || [])];
  const dotsContainer = carousel?.querySelector(".carousel-dots");
  const counter = carousel?.querySelector(".carousel-counter");
  if (!carousel || !track || !slides.length || !dotsContainer || !counter) return;

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Show image ${index + 1}`);
    dot.addEventListener("click", () => {
      carouselIndex = index;
      updateCarousel();
      restartCarousel();
    });
    dotsContainer.appendChild(dot);
  });

  function updateCarousel() {
    track.style.transform = `translate3d(-${carouselIndex * 100}%, 0, 0)`;
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === carouselIndex);
      slide.setAttribute("aria-hidden", String(index !== carouselIndex));
    });
    dotsContainer.querySelectorAll(".carousel-dot").forEach((dot, index) => {
      dot.classList.toggle("is-active", index === carouselIndex);
      dot.setAttribute("aria-current", index === carouselIndex ? "true" : "false");
    });
    counter.textContent = `${String(carouselIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  }

  function go(direction) {
    carouselIndex = (carouselIndex + direction + slides.length) % slides.length;
    updateCarousel();
  }

  function startCarousel() {
    window.clearInterval(carouselTimer);
    carouselTimer = window.setInterval(() => go(1), 4800);
  }

  function stopCarousel() {
    window.clearInterval(carouselTimer);
  }

  function restartCarousel() {
    stopCarousel();
    startCarousel();
  }

  carousel.querySelector(".carousel-prev")?.addEventListener("click", () => { go(-1); restartCarousel(); });
  carousel.querySelector(".carousel-next")?.addEventListener("click", () => { go(1); restartCarousel(); });
  carousel.addEventListener("pointerenter", stopCarousel);
  carousel.addEventListener("pointerleave", startCarousel);
  carousel.addEventListener("focusin", stopCarousel);
  carousel.addEventListener("focusout", startCarousel);

  let touchStartX = 0;
  carousel.addEventListener("touchstart", event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  carousel.addEventListener("touchend", event => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) {
      go(distance > 0 ? -1 : 1);
      restartCarousel();
    }
  }, { passive: true });

  carousel.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") { go(-1); restartCarousel(); }
    if (event.key === "ArrowRight") { go(1); restartCarousel(); }
  });

  carousel.querySelectorAll(".carousel-image-button").forEach(button => {
    button.addEventListener("click", () => openLightbox(Number(button.dataset.lightboxIndex)));
  });

  window.updateCarousel = updateCarousel;
  window.restartCarousel = restartCarousel;
  updateCarousel();
  startCarousel();
}

function getCarouselSlides() {
  return [...document.querySelectorAll(".carousel-slide")];
}

function updateLightboxContent(index) {
  const slides = getCarouselSlides();
  const slide = slides[index];
  const image = slide?.querySelector("img");
  const caption = slide?.querySelector("figcaption");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  if (!slide || !image || !lightboxImage || !lightboxCaption) return;

  lightboxIndex = index;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = caption?.textContent || "";
}

function openLightbox(index) {
  const dialog = document.getElementById("image-lightbox");
  if (!dialog) return;
  updateLightboxContent(index);
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  const dialog = document.getElementById("image-lightbox");
  if (!dialog) return;
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
  document.body.classList.remove("lightbox-open");
}

function moveLightbox(direction) {
  const slides = getCarouselSlides();
  lightboxIndex = (lightboxIndex + direction + slides.length) % slides.length;
  updateLightboxContent(lightboxIndex);
}

function initLightbox() {
  const dialog = document.getElementById("image-lightbox");
  if (!dialog) return;

  dialog.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
  dialog.querySelector(".lightbox-prev")?.addEventListener("click", () => moveLightbox(-1));
  dialog.querySelector(".lightbox-next")?.addEventListener("click", () => moveLightbox(1));
  dialog.addEventListener("click", event => {
    if (event.target === dialog) closeLightbox();
  });
  dialog.addEventListener("close", () => document.body.classList.remove("lightbox-open"));
  dialog.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const submitButton = form?.querySelector('button[type="submit"]');
  const emailInput = document.getElementById("contact-email");
  const phoneInput = document.getElementById("contact-phone");
  if (!form || !status || !submitButton || !emailInput || !phoneInput) return;

  const validateContactFields = () => {
    const hasEmail = emailInput.value.trim() !== "";
    const hasPhone = phoneInput.value.trim() !== "";
    const message = hasEmail || hasPhone ? "" : translations[currentLanguage].formContactValidation;

    emailInput.setCustomValidity(message);
    phoneInput.setCustomValidity(message);
    emailInput.toggleAttribute("aria-invalid", Boolean(message));
    phoneInput.toggleAttribute("aria-invalid", Boolean(message));
    return !message;
  };

  [emailInput, phoneInput].forEach(input => {
    input.addEventListener("input", validateContactFields);
    input.addEventListener("blur", validateContactFields);
  });

  form.addEventListener("submit", async event => {
    event.preventDefault();
    validateContactFields();
    if (!form.reportValidity()) return;

    const originalText = translations[currentLanguage].formSubmit;
    submitButton.disabled = true;
    submitButton.textContent = translations[currentLanguage].formSending;
    status.className = "form-status is-visible";
    status.textContent = translations[currentLanguage].formSending;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success === false) throw new Error(data.message || "Form submission failed");

      status.className = "form-status is-visible is-success";
      status.textContent = translations[currentLanguage].formSuccess;
      form.reset();
      emailInput.setCustomValidity("");
      phoneInput.setCustomValidity("");
      emailInput.removeAttribute("aria-invalid");
      phoneInput.removeAttribute("aria-invalid");
      renderServiceOptions();
    } catch (error) {
      console.error(error);
      status.className = "form-status is-visible is-error";
      status.textContent = translations[currentLanguage].formError;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}

document.querySelectorAll(".service-open").forEach(button => {
  button.addEventListener("click", () => {
    renderServices(button.dataset.category);
    document.getElementById("service-panel")?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

document.querySelector(".language-toggle")?.addEventListener("click", () => applyLanguage(currentLanguage === "en" ? "es" : "en"));
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

renderTraining();
renderServices(currentCategory);
renderServiceOptions();
applyLanguage(currentLanguage);
initNavigation();
initReveal();
initCarousel();
initLightbox();
initContactForm();
