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
    workEyebrow: "Selected results", workTitle: "Small details. Visible confidence.", workIntro: "The complete portfolio selection of brow, lash and permanent makeup work from Microluxe Studio.", portfolioPhotosLabel: "portfolio photos", portfolioSynced: "Complete Booksy portfolio loaded", portfolioFallback: "Showing the available preview while the full Booksy portfolio synchronizes",
    carouselCaptionOne: "Inside Microluxe Studio", carouselCaptionTwo: "Signature beauty result", carouselCaptionThree: "Tailored brow definition", carouselCaptionFour: "Balanced shape and tone", carouselCaptionFive: "Soft permanent makeup", carouselCaptionSix: "Polished, effortless finish", carouselCaptionSeven: "Powder brows client result", carouselCaptionEight: "Verified client portfolio result", carouselHint: "Hover to see the image breathe. Click to enlarge.",
    aboutEyebrow: "The studio", aboutTitle: "Professional technique. Personal attention.",
    aboutTextOne: "Led by beauty professional Neyle Cabello, Microluxe Studio combines technical precision with a calm, welcoming experience. Every appointment begins with listening: your preferences, your features and the result you want to achieve.",
    aboutTextTwo: "Clients consistently highlight the studio’s professionalism, detailed explanations, clean environment and thoughtful service.", readExperiences: "Read client experiences",
    trainingEyebrow: "Professional education", trainingTitle: "Hands-on training for beauty professionals.", trainingIntro: "Focused, one-day courses designed to build practical technique in permanent makeup, brows and lashes.", trainingAvailability: "Check training availability",
    reviewsEyebrow: "Client notes", reviewsTitle: "The experience matters as much as the result.", basedOn: "Based on all 45 Booksy reviews",
    reviewDisclosure: "Five-star testimonials are featured here. The 4.9 score includes every Booksy review.", verifiedClient: "Verified client", reviewSummary: "Client feedback summary", reviewService: "Service",
    contactEyebrow: "Contact & appointments", contactTitle: "Tell Neyle what you would like to book.", contactText: "Select a treatment and send your preferred date. Microluxe Studio will receive the request directly by email and contact you to confirm availability.", bookBooksy: "Or book directly through Booksy",
    locationLabel: "Location", emailLabel: "Email", bookingLabel: "Appointments", bookingText: "Requests are confirmed personally by the studio",
    formKicker: "Appointment request", formName: "Name", formNamePlaceholder: "Your full name", formEmail: "Email", formEmailPlaceholder: "you@email.com", formPhone: "Phone", formPhonePlaceholder: "Phone or WhatsApp", formContactRequired: "Please enter at least an email address or a phone number.", formContactValidation: "Enter an email address or a phone number so Neyle can contact you.", formDate: "Preferred date", formDatePlaceholder: "MM/DD/YYYY", formDateValidation: "Enter a valid date in MM/DD/YYYY format.", formService: "Services and prices", formChooseService: "Choose a service", formAddService: "Add another service", formRemoveService: "Remove service", formServiceLimit: "You can add up to five services.", formContactMethod: "Preferred reply", formReplyEmail: "Email", formReplyPhone: "Phone / WhatsApp", formMessage: "Message", formMessagePlaceholder: "Tell us what result you are looking for or ask any question", formPrivacy: "Your information is used only to respond to this appointment request.", formSubmit: "Send request", formSending: "Sending…", formSuccess: "Thank you. Your request has been sent to Neyle.", formError: "The message could not be sent. Please try again or email neylec@gmail.com.", selectService: "Select service"
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
    workEyebrow: "Resultados seleccionados", workTitle: "Pequeños detalles. Confianza visible.", workIntro: "La selección completa del portfolio de cejas, pestañas y maquillaje permanente de Microluxe Studio.", portfolioPhotosLabel: "fotos de portfolio", portfolioSynced: "Portfolio completo de Booksy cargado", portfolioFallback: "Mostrando la selección disponible mientras se sincroniza el portfolio completo de Booksy",
    carouselCaptionOne: "El universo Microluxe Studio", carouselCaptionTwo: "Resultado de belleza de autor", carouselCaptionThree: "Definición de cejas a medida", carouselCaptionFour: "Forma y tono equilibrados", carouselCaptionFive: "Maquillaje permanente suave", carouselCaptionSix: "Acabado pulido y natural", carouselCaptionSeven: "Resultado de powder brows", carouselCaptionEight: "Resultado verificado de una clienta", carouselHint: "Pasa el ratón para ver respirar la imagen. Haz clic para ampliarla.",
    aboutEyebrow: "El estudio", aboutTitle: "Técnica profesional. Atención personal.",
    aboutTextOne: "Dirigido por la profesional de belleza Neyle Cabello, Microluxe Studio combina precisión técnica con una experiencia tranquila y acogedora. Cada cita comienza escuchando tus preferencias, tus rasgos y el resultado que deseas conseguir.",
    aboutTextTwo: "Las clientas destacan de forma constante la profesionalidad, las explicaciones detalladas, la limpieza del espacio y el trato atento.", readExperiences: "Leer experiencias",
    trainingEyebrow: "Formación profesional", trainingTitle: "Cursos prácticos para profesionales de la belleza.", trainingIntro: "Formaciones intensivas de un día enfocadas en desarrollar técnica real en maquillaje permanente, cejas y pestañas.", trainingAvailability: "Consultar disponibilidad",
    reviewsEyebrow: "Opiniones de clientas", reviewsTitle: "La experiencia importa tanto como el resultado.", basedOn: "Basado en las 45 opiniones de Booksy",
    reviewDisclosure: "Aquí se muestran testimonios de cinco estrellas. La puntuación de 4,9 incluye todas las reseñas de Booksy.", verifiedClient: "Cliente verificada", reviewSummary: "Resumen de la opinión", reviewService: "Servicio",
    contactEyebrow: "Contacto y citas", contactTitle: "Cuéntale a Neyle qué quieres reservar.", contactText: "Selecciona un tratamiento y envía tu fecha preferida. Microluxe Studio recibirá la solicitud directamente por correo y contactará contigo para confirmar disponibilidad.", bookBooksy: "O reserva directamente en Booksy",
    locationLabel: "Ubicación", emailLabel: "Correo", bookingLabel: "Citas", bookingText: "Las solicitudes se confirman personalmente desde el estudio",
    formKicker: "Solicitud de cita", formName: "Nombre", formNamePlaceholder: "Nombre y apellidos", formEmail: "Correo", formEmailPlaceholder: "tu@email.com", formPhone: "Teléfono", formPhonePlaceholder: "Teléfono o WhatsApp", formContactRequired: "Introduce al menos un correo electrónico o un teléfono.", formContactValidation: "Introduce un correo o un teléfono para que Neyle pueda contactarte.", formDate: "Fecha preferida", formDatePlaceholder: "MM/DD/AAAA", formDateValidation: "Introduce una fecha válida en formato MM/DD/AAAA.", formService: "Servicios y precios", formChooseService: "Elige un servicio", formAddService: "Agregar otro servicio", formRemoveService: "Eliminar servicio", formServiceLimit: "Puedes agregar hasta cinco servicios.", formContactMethod: "Respuesta preferida", formReplyEmail: "Correo", formReplyPhone: "Teléfono / WhatsApp", formMessage: "Mensaje", formMessagePlaceholder: "Cuéntanos qué resultado buscas o haz cualquier consulta", formPrivacy: "Tus datos solo se utilizarán para responder a esta solicitud de cita.", formSubmit: "Enviar solicitud", formSending: "Enviando…", formSuccess: "Gracias. Tu solicitud ha sido enviada a Neyle.", formError: "No se pudo enviar el mensaje. Inténtalo de nuevo o escribe a neylec@gmail.com.", selectService: "Seleccionar servicio"
  }
};

let currentLanguage = localStorage.getItem("microluxe-language") || "en";
let currentCategory = "permanent";
let carouselIndex = 0;
let carouselTimer;
let lightboxIndex = 0;
let portfolioImages = [];
let heroIndex = 0;
let heroTimer;
let reviewIndex = 0;
let reviewTimer;
let reviewData = [];

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

const MAX_SERVICES = 5;

function getSelectedServiceValues() {
  return [...document.querySelectorAll(".service-select")].map(select => select.value);
}

function buildServiceOptions(select, selectedValue = "") {
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

  const trainingGroup = document.createElement("optgroup");
  trainingGroup.label = currentLanguage === "es" ? "Formación profesional" : "Professional training";
  trainings.forEach(item => {
    const option = document.createElement("option");
    option.value = `${item.en} — ${item.meta}`;
    option.textContent = `${item[currentLanguage]} — ${item.meta}`;
    trainingGroup.appendChild(option);
  });
  select.appendChild(trainingGroup);

  if (selectedValue) select.value = selectedValue;
}

function refreshServiceFieldNames() {
  document.querySelectorAll(".service-select-row").forEach((row, index) => {
    const select = row.querySelector(".service-select");
    const removeButton = row.querySelector(".remove-service-button");
    if (select) {
      select.name = `Service ${index + 1}`;
      select.id = index === 0 ? "service-select" : `service-select-${index + 1}`;
      select.setAttribute("aria-label", index === 0 ? "Primary service" : `Additional service ${index}`);
    }
    if (removeButton) removeButton.setAttribute("aria-label", translations[currentLanguage].formRemoveService);
  });
}

function updateAddServiceUI() {
  const rows = document.querySelectorAll(".service-select-row");
  const addButton = document.getElementById("add-service-button");
  const note = document.getElementById("service-limit-note");
  const atLimit = rows.length >= MAX_SERVICES;
  if (addButton) addButton.disabled = atLimit;
  if (note) note.hidden = !atLimit;
}

function addServiceField(selectedValue = "", focus = false) {
  const fields = document.getElementById("service-fields");
  if (!fields || fields.children.length >= MAX_SERVICES) {
    updateAddServiceUI();
    return null;
  }

  const row = document.createElement("div");
  row.className = "service-select-row";

  const select = document.createElement("select");
  select.className = "service-select";

  const removeButton = document.createElement("button");
  removeButton.className = "remove-service-button";
  removeButton.type = "button";
  removeButton.innerHTML = "×";
  removeButton.setAttribute("aria-label", translations[currentLanguage].formRemoveService);
  removeButton.addEventListener("click", () => {
    row.remove();
    refreshServiceFieldNames();
    updateAddServiceUI();
  });

  row.append(select, removeButton);
  fields.appendChild(row);
  buildServiceOptions(select, selectedValue);
  refreshServiceFieldNames();
  updateAddServiceUI();
  if (focus) select.focus({ preventScroll: true });
  return select;
}

function resetServiceFields() {
  const fields = document.getElementById("service-fields");
  if (!fields) return;
  [...fields.querySelectorAll(".service-select-row")].slice(1).forEach(row => row.remove());
  const first = fields.querySelector(".service-select");
  if (first) first.value = "";
  refreshServiceFieldNames();
  updateAddServiceUI();
}

function renderServiceOptions(selectedValues = null) {
  const selects = [...document.querySelectorAll(".service-select")];
  if (!selects.length) return;
  const values = Array.isArray(selectedValues) ? selectedValues : selects.map(select => select.value);
  selects.forEach((select, index) => buildServiceOptions(select, values[index] || ""));
  refreshServiceFieldNames();
  updateAddServiceUI();
}

function selectServiceAndOpenForm(serviceValue) {
  let target = [...document.querySelectorAll(".service-select")].find(select => !select.value);
  if (!target) target = addServiceField(serviceValue);
  if (target && target.value !== serviceValue) target.value = serviceValue;

  const form = document.getElementById("contact-form");
  form?.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => target?.focus({ preventScroll: true }), 550);
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

  const selectedServices = getSelectedServiceValues();
  renderServices(currentCategory);
  renderTraining();
  renderServiceOptions(selectedServices);
  validateUSDate(false);
  updatePortfolioLanguage();
  updateLightboxContent(lightboxIndex);
  const portfolioNote = document.getElementById("portfolio-sync-note");
  if (portfolioNote && portfolioImages.length) {
    portfolioNote.textContent = portfolioImages.length >= 18
      ? translations[language].portfolioSynced
      : translations[language].portfolioFallback;
  }
  renderReviews();
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

function initRemoteImages() {
  document.querySelectorAll(".hero-photo, .carousel-image-button img").forEach(image => {
    const button = image.closest(".carousel-image-button");
    if (button) button.classList.add("is-loading");

    const markLoaded = () => {
      button?.classList.remove("is-loading", "image-load-error");
      const slide = image.closest(".carousel-slide");
      if (slide) slide.style.setProperty("--slide-image", `url("${image.currentSrc || image.src}")`);
    };

    const markError = () => {
      const fallback = image.dataset.fallbackSrc;
      if (fallback && image.dataset.fallbackTried !== "true") {
        image.dataset.fallbackTried = "true";
        image.src = fallback;
        return;
      }
      button?.classList.remove("is-loading");
      button?.classList.add("image-load-error");
      image.classList.add("image-load-error");
    };

    image.addEventListener("load", markLoaded);
    image.addEventListener("error", markError);
    if (image.complete) {
      if (image.naturalWidth > 0) markLoaded();
      else markError();
    }
  });
}

function formatUSDateInput(value) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  const parts = [];
  if (digits.length) parts.push(digits.slice(0, 2));
  if (digits.length > 2) parts.push(digits.slice(2, 4));
  if (digits.length > 4) parts.push(digits.slice(4, 8));
  return parts.join("/");
}

function isValidUSDate(value) {
  if (!value) return true;
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!match) return false;
  const month = Number(match[1]);
  const day = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);
  return year >= 2024 && month >= 1 && month <= 12 && day >= 1 &&
    date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function validateUSDate(showMessage = true) {
  const input = document.getElementById("preferred-date");
  if (!input) return true;
  const valid = isValidUSDate(input.value.trim());
  input.setCustomValidity(valid ? "" : translations[currentLanguage].formDateValidation);
  if (showMessage && !valid) input.reportValidity();
  return valid;
}

function initUSDateInput() {
  const input = document.getElementById("preferred-date");
  if (!input) return;
  input.addEventListener("input", () => {
    const cursorAtEnd = input.selectionStart === input.value.length;
    input.value = formatUSDateInput(input.value);
    if (cursorAtEnd) input.setSelectionRange(input.value.length, input.value.length);
    validateUSDate(false);
  });
  input.addEventListener("blur", () => validateUSDate(true));
}


function portfolioCaption(image, index) {
  const key = currentLanguage === "es" ? "caption_es" : "caption_en";
  return image[key] || (currentLanguage === "es"
    ? `Portfolio Microluxe Studio · ${String(index + 1).padStart(2, "0")}`
    : `Microluxe Studio portfolio · ${String(index + 1).padStart(2, "0")}`);
}

function portfolioAlt(image, index) {
  const key = currentLanguage === "es" ? "alt_es" : "alt_en";
  return image[key] || (currentLanguage === "es"
    ? `Resultado del portfolio de Microluxe Studio ${index + 1}`
    : `Microluxe Studio portfolio result ${index + 1}`);
}

function renderPortfolio(images) {
  const track = document.getElementById("portfolio-track");
  if (!track || !Array.isArray(images) || !images.length) return;
  portfolioImages = images;
  carouselIndex = 0;
  lightboxIndex = 0;
  track.dataset.portfolioFallback = "false";
  track.innerHTML = images.map((image, index) => {
    const src = image.src || image.source_url || "";
    const fallback = image.fallback_src || image.source_url || src.split("?")[0];
    const eager = index === 0 ? "eager" : "lazy";
    return `
      <figure class="carousel-slide${index === 0 ? " is-active" : ""}">
        <button class="carousel-image-button" type="button" data-lightbox-index="${index}" aria-label="${currentLanguage === "es" ? "Abrir imagen" : "Open image"} ${index + 1}">
          <img loading="${eager}" src="${src}" data-fallback-src="${fallback}" alt="${portfolioAlt(image, index).replaceAll('"', '&quot;')}">
        </button>
        <figcaption data-caption-index="${index}">${portfolioCaption(image, index)}</figcaption>
      </figure>`;
  }).join("");
  const total = document.getElementById("portfolio-total");
  if (total) total.textContent = String(images.length);
}

function updatePortfolioLanguage() {
  if (!portfolioImages.length) return;
  document.querySelectorAll("#portfolio-track .carousel-slide").forEach((slide, index) => {
    const image = portfolioImages[index];
    if (!image) return;
    const img = slide.querySelector("img");
    const caption = slide.querySelector("figcaption");
    const button = slide.querySelector(".carousel-image-button");
    if (img) img.alt = portfolioAlt(image, index);
    if (caption) caption.textContent = portfolioCaption(image, index);
    if (button) button.setAttribute("aria-label", `${currentLanguage === "es" ? "Abrir imagen" : "Open image"} ${index + 1}`);
  });
}

async function loadPortfolio() {
  const note = document.getElementById("portfolio-sync-note");
  try {
    const response = await fetch(`assets/data/portfolio.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Portfolio request failed: ${response.status}`);
    const data = await response.json();
    const images = Array.isArray(data.images) ? data.images.filter(item => item && (item.src || item.source_url)) : [];
    if (!images.length) throw new Error("Portfolio data is empty");
    renderPortfolio(images);
    if (note) {
      note.textContent = images.length >= 18
        ? translations[currentLanguage].portfolioSynced
        : translations[currentLanguage].portfolioFallback;
      note.classList.toggle("is-complete", images.length >= 18);
    }
  } catch (error) {
    console.warn("Using the embedded portfolio fallback.", error);
    const fallbackSlides = [...document.querySelectorAll("#portfolio-track .carousel-slide")];
    portfolioImages = fallbackSlides.map((slide, index) => ({
      src: slide.querySelector("img")?.src || "",
      fallback_src: slide.querySelector("img")?.dataset.fallbackSrc || "",
      alt_en: slide.querySelector("img")?.alt || `Microluxe Studio portfolio result ${index + 1}`,
      alt_es: `Resultado del portfolio de Microluxe Studio ${index + 1}`,
      caption_en: slide.querySelector("figcaption")?.textContent || `Microluxe Studio portfolio · ${index + 1}`,
      caption_es: `Portfolio Microluxe Studio · ${index + 1}`
    }));
    if (note) note.textContent = translations[currentLanguage].portfolioFallback;
  }
  initRemoteImages();
  initCarousel();
  initLightbox();
}

function initCarousel() {
  const carousel = document.getElementById("client-carousel");
  const track = carousel?.querySelector(".carousel-track");
  const slides = [...(carousel?.querySelectorAll(".carousel-slide") || [])];
  const dotsContainer = carousel?.querySelector(".carousel-dots");
  const counter = carousel?.querySelector(".carousel-counter");
  if (!carousel || !track || !slides.length || !dotsContainer || !counter) return;
  dotsContainer.innerHTML = "";

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
  renderReviews();
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


function initHeroShowcase() {
  const showcase = document.getElementById("hero-showcase");
  const slides = [...(showcase?.querySelectorAll(".hero-photo") || [])];
  const dotsContainer = showcase?.querySelector(".hero-photo-dots");
  const backdrop = showcase?.querySelector(".hero-photo-backdrop");
  if (!showcase || !slides.length || !dotsContainer) return;

  slides.forEach((image, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-photo-dot";
    dot.setAttribute("aria-label", `Show featured photo ${index + 1}`);
    dot.addEventListener("click", () => {
      heroIndex = index;
      updateHero();
      restartHero();
    });
    dotsContainer.appendChild(dot);

    image.addEventListener("error", () => image.classList.add("image-load-error"));
  });

  function updateHero() {
    const availableSlides = slides.filter(image => !image.classList.contains("image-load-error"));
    if (!availableSlides.length) return;
    const activeImage = slides[heroIndex];
    if (activeImage?.classList.contains("image-load-error")) {
      heroIndex = (heroIndex + 1) % slides.length;
      return updateHero();
    }
    slides.forEach((image, index) => {
      image.classList.toggle("is-active", index === heroIndex);
      image.setAttribute("aria-hidden", String(index !== heroIndex));
    });
    dotsContainer.querySelectorAll(".hero-photo-dot").forEach((dot, index) => {
      dot.classList.toggle("is-active", index === heroIndex);
      dot.setAttribute("aria-current", index === heroIndex ? "true" : "false");
    });
    if (backdrop) backdrop.style.backgroundImage = `url("${activeImage.currentSrc || activeImage.src}")`;
  }

  function go(direction) {
    heroIndex = (heroIndex + direction + slides.length) % slides.length;
    updateHero();
  }
  function startHero() {
    window.clearInterval(heroTimer);
    heroTimer = window.setInterval(() => go(1), 4300);
  }
  function stopHero() { window.clearInterval(heroTimer); }
  function restartHero() { stopHero(); startHero(); }

  showcase.querySelector(".hero-photo-prev")?.addEventListener("click", () => { go(-1); restartHero(); });
  showcase.querySelector(".hero-photo-next")?.addEventListener("click", () => { go(1); restartHero(); });
  showcase.addEventListener("pointerenter", stopHero);
  showcase.addEventListener("pointerleave", startHero);
  showcase.addEventListener("focusin", stopHero);
  showcase.addEventListener("focusout", startHero);

  let touchStartX = 0;
  showcase.addEventListener("touchstart", event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  showcase.addEventListener("touchend", event => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 42) { go(distance > 0 ? -1 : 1); restartHero(); }
  }, { passive: true });

  updateHero();
  startHero();
}

function formatReviewDate(value) {
  if (!value) return "";
  const date = new Date(`${String(value).slice(0, 10)}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

function normalizeReview(item) {
  const user = item?.user || item?.customer || item?.client || {};
  const appointment = item?.appointment || item?.booking || {};
  const serviceObject = item?.service || appointment?.service || appointment?.services?.[0] || {};
  const name = item?.name || item?.author || user?.first_name || user?.name || "Guest";
  const text = item?.text || item?.review || item?.comment || item?.body || "";
  let rating = Number(item?.rating ?? item?.score ?? item?.stars ?? 0);
  if (!rating && (/kathleen/i.test(name) || /bait\s+and\s+switch/i.test(text))) rating = 2;
  if (!rating) rating = 5;
  return {
    name,
    text,
    rating,
    date: item?.date || item?.created_at || item?.createdAt || item?.reviewed_at || item?.appointment_date || appointment?.start_date || "",
    service: typeof serviceObject === "string" ? serviceObject : (item?.service_name || serviceObject?.name || appointment?.service_name || ""),
    staff: item?.staff || item?.staff_name || item?.staffer?.name || appointment?.staff_name || "",
    confirmed: item?.confirmed ?? item?.is_confirmed ?? item?.verified ?? true,
    is_summary: Boolean(item?.is_summary)
  };
}

function getVisibleReviews() {
  return reviewData
    .map(normalizeReview)
    .filter(review => review.text && review.rating >= 4 && !/bait\s+and\s+switch/i.test(review.text));
}

function renderReviews() {
  const track = document.getElementById("review-track");
  const carousel = document.getElementById("review-carousel");
  const dotsContainer = carousel?.querySelector(".review-dots");
  const counter = carousel?.querySelector(".review-counter");
  if (!track || !carousel || !dotsContainer || !counter || !reviewData.length) return;

  const reviews = getVisibleReviews();
  if (!reviews.length) return;
  reviewIndex = Math.min(reviewIndex, reviews.length - 1);
  track.innerHTML = "";
  dotsContainer.innerHTML = "";

  reviews.forEach((review, index) => {
    const slide = document.createElement("article");
    slide.className = "review-slide";
    slide.setAttribute("aria-hidden", String(index !== reviewIndex));

    const card = document.createElement("blockquote");
    card.className = "review-card";

    const top = document.createElement("div");
    top.className = "review-card-top";
    const stars = document.createElement("span");
    stars.className = "review-stars";
    stars.setAttribute("aria-label", `${review.rating} out of 5 stars`);
    stars.textContent = "★★★★★";
    const badge = document.createElement("span");
    badge.className = "review-badge";
    badge.textContent = review.is_summary ? translations[currentLanguage].reviewSummary : translations[currentLanguage].verifiedClient;
    top.append(stars, badge);

    const quote = document.createElement("p");
    quote.textContent = review.text;

    const footer = document.createElement("footer");
    const identity = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = review.name;
    const date = document.createElement("span");
    date.textContent = formatReviewDate(review.date);
    identity.append(name, date);
    footer.appendChild(identity);
    if (review.service) {
      const service = document.createElement("span");
      service.className = "review-service";
      service.textContent = `${translations[currentLanguage].reviewService}: ${review.service}`;
      footer.appendChild(service);
    }

    card.append(top, quote, footer);
    slide.appendChild(card);
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "review-dot";
    dot.setAttribute("aria-label", `Show review ${index + 1}`);
    dot.addEventListener("click", () => { reviewIndex = index; updateReviews(); restartReviews(); });
    dotsContainer.appendChild(dot);
  });

  updateReviews();
}

function updateReviews() {
  const carousel = document.getElementById("review-carousel");
  const track = document.getElementById("review-track");
  const slides = [...(track?.querySelectorAll(".review-slide") || [])];
  const dots = [...(carousel?.querySelectorAll(".review-dot") || [])];
  const counter = carousel?.querySelector(".review-counter");
  if (!track || !slides.length || !counter) return;
  reviewIndex = (reviewIndex + slides.length) % slides.length;
  track.style.transform = `translate3d(-${reviewIndex * 100}%, 0, 0)`;
  slides.forEach((slide, index) => slide.setAttribute("aria-hidden", String(index !== reviewIndex)));
  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === reviewIndex);
    dot.setAttribute("aria-current", index === reviewIndex ? "true" : "false");
  });
  counter.textContent = `${String(reviewIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
}

function moveReviews(direction) {
  const count = document.querySelectorAll(".review-slide").length;
  if (!count) return;
  reviewIndex = (reviewIndex + direction + count) % count;
  updateReviews();
}
function startReviews() {
  window.clearInterval(reviewTimer);
  reviewTimer = window.setInterval(() => moveReviews(1), 6500);
}
function stopReviews() { window.clearInterval(reviewTimer); }
function restartReviews() { stopReviews(); startReviews(); }

function initReviewCarouselControls() {
  const carousel = document.getElementById("review-carousel");
  if (!carousel) return;
  carousel.querySelector(".review-prev")?.addEventListener("click", () => { moveReviews(-1); restartReviews(); });
  carousel.querySelector(".review-next")?.addEventListener("click", () => { moveReviews(1); restartReviews(); });
  carousel.addEventListener("pointerenter", stopReviews);
  carousel.addEventListener("pointerleave", startReviews);
  carousel.addEventListener("focusin", stopReviews);
  carousel.addEventListener("focusout", startReviews);
  let touchStartX = 0;
  carousel.addEventListener("touchstart", event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  carousel.addEventListener("touchend", event => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 42) { moveReviews(distance > 0 ? -1 : 1); restartReviews(); }
  }, { passive: true });
}

async function fetchBooksyReviewsDirectly() {
  const apiKey = "web-e3d812bf-d7a2-445d-ab38-55589ae6a121";
  const reviews = [];
  for (let page = 1; page <= 6; page += 1) {
    const url = `https://booksy.com/api/en-us/2/customer_api/businesses/1311898/reviews?reviews_page=${page}&reviews_per_page=50`;
    const response = await fetch(url, { headers: { "X-Api-Key": apiKey, Accept: "application/json" } });
    if (!response.ok) throw new Error("Booksy review sync unavailable");
    const payload = await response.json();
    const items = payload?.reviews || payload?.data?.reviews || payload?.results || [];
    if (!Array.isArray(items) || !items.length) break;
    reviews.push(...items);
    if (items.length < 50) break;
  }
  return reviews;
}

async function loadReviews() {
  try {
    const response = await fetch("assets/data/reviews.json", { cache: "no-store" });
    if (response.ok) {
      const payload = await response.json();
      reviewData = Array.isArray(payload) ? payload : (payload.reviews || []);
      renderReviews();
      startReviews();
    }
  } catch (error) {
    console.info("Local review data unavailable.");
  }

  try {
    const liveReviews = await fetchBooksyReviewsDirectly();
    if (liveReviews.length > reviewData.length) {
      reviewData = liveReviews;
      reviewIndex = 0;
      renderReviews();
      restartReviews();
    }
  } catch (error) {
    // The local JSON remains the reliable fallback. GitHub Actions refreshes it after deployment.
  }
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const submitButton = form?.querySelector('button[type="submit"]');
  const emailInput = document.getElementById("contact-email");
  const phoneInput = document.getElementById("contact-phone");
  const addServiceButton = document.getElementById("add-service-button");
  if (!form || !status || !submitButton || !emailInput || !phoneInput) return;

  addServiceButton?.addEventListener("click", () => addServiceField("", true));

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
    validateUSDate(false);
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
      resetServiceFields();
      emailInput.setCustomValidity("");
      phoneInput.setCustomValidity("");
      emailInput.removeAttribute("aria-invalid");
      phoneInput.removeAttribute("aria-invalid");
      renderServiceOptions();
      validateUSDate(false);
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
initUSDateInput();
initHeroShowcase();
loadPortfolio();
initReviewCarouselControls();
loadReviews();
initContactForm();
