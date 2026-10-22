"use strict";

/* ==========================================================
   Plataforma de Capacitaciones · Municipalidad de Las Toscas
   Mock demostrativo estilo e-learning: clases grabadas a tu
   ritmo + capacitaciones en vivo. Todos los datos son de
   ejemplo. Editá el array COURSES para cambiar el catálogo.
   ========================================================== */

/* ---------- Categorías ---------- */
const CATEGORIES = [
  { id: "todos",       label: "Todos",            icon: "✨" },
  { id: "oficios",     label: "Oficios",          icon: "🛠️" },
  { id: "tecnologia",  label: "Tecnología",       icon: "💻" },
  { id: "gastronomia", label: "Gastronomía",      icon: "🥐" },
  { id: "salud",       label: "Salud y Estética", icon: "🩺" },
  { id: "agro",        label: "Agro y Ambiente",  icon: "🌱" },
  { id: "arte",        label: "Arte y Cultura",   icon: "🎨" },
];

/* ---------- Capacitaciones (mock) ----------
   modality: "Grabado" → clases 24/7 | "En vivo" → fecha + cupos
------------------------------------------------ */
const COURSES = [
  {
    id: "electricidad", icon: "⚡", title: "Electricidad Domiciliaria",
    category: "oficios", modality: "Grabado", level: "Inicial",
    lessons: 24, duration: "6 h de video", rating: 4.8, students: 231,
    desc: "Instalaciones básicas, tableros, seguridad eléctrica y reparación de artefactos del hogar, paso a paso y a tu ritmo.",
    curriculum: ["Bienvenida y seguridad básica", "Circuitos y tableros paso a paso", "Instalación práctica sobre maqueta", "Reparación de artefactos", "Evaluación final"],
  },
  {
    id: "costura", icon: "🧵", title: "Costura y Confección Textil",
    category: "oficios", modality: "Grabado", level: "Inicial",
    lessons: 18, duration: "4,5 h de video", rating: 4.9, students: 189,
    desc: "Toma de medidas, corte y confección de prendas. Salida laboral desde tu propio taller, mirando cada clase cuando quieras.",
    curriculum: ["Conociendo la máquina de coser", "Tomas de medida y moldes", "Confección de prendas simples", "Arreglos y terminaciones", "Proyecto final: tu primera prenda"],
  },
  {
    id: "ofimatica", icon: "⌨️", title: "Operador/a de PC y Ofimática",
    category: "tecnologia", modality: "Grabado", level: "Inicial",
    lessons: 32, duration: "8 h de video", rating: 4.7, students: 402,
    desc: "Planillas de cálculo, procesadores de texto e internet para mejorar tu empleabilidad, explicado desde cero.",
    curriculum: ["Primeros pasos en la PC", "Word para trámites cotidianos", "Excel para tu emprendimiento", "Internet, mail y redes", "Evaluación final"],
  },
  {
    id: "prog-web", icon: "💻", title: "Programación Web Inicial",
    category: "tecnologia", modality: "Grabado", level: "Inicial",
    lessons: 40, duration: "12 h de video", rating: 4.8, students: 356,
    desc: "HTML, CSS y fundamentos de programación para dar tus primeros pasos en el mundo IT, con proyectos prácticos.",
    curriculum: ["Cómo funciona una web", "HTML: la estructura", "CSS: estilo y diseño", "Tu primer proyecto online", "Evaluación final"],
  },
  {
    id: "marketing", icon: "📱", title: "Marketing Digital y Redes",
    category: "tecnologia", modality: "Grabado", level: "Inicial",
    lessons: 16, duration: "4 h de video", rating: 4.6, students: 275,
    desc: "Ventas por internet, redes sociales y herramientas gratuitas para llevar tu emprendimiento al siguiente nivel.",
    curriculum: ["Redes para tu negocio", "Fotos con el celular", "Publicaciones que venden", "WhatsApp Business", "Evaluación final"],
  },
  {
    id: "panaderia", icon: "🥐", title: "Panadería y Repostería Artesanal",
    category: "gastronomia", modality: "Grabado", level: "Inicial",
    lessons: 22, duration: "5,5 h de video", rating: 4.9, students: 198,
    desc: "Panificación, facturas y productos de confitería. Ideal para un emprendimiento familiar, con recetas descargables.",
    curriculum: ["Masa madre y levaduras", "Pan de campo y facturas", "Hojaldre y rellenos", "Costos y venta desde casa", "Evaluación final"],
  },
  {
    id: "huerta", icon: "🌱", title: "Huerta Orgánica Familiar",
    category: "agro", modality: "Grabado", level: "Inicial",
    lessons: 12, duration: "3 h de video", rating: 4.8, students: 167,
    desc: "Siembra, abonado y riego para tener tu propia huerta. Alimentación sana y ahorro directo en tu hogar.",
    curriculum: ["Prepará la tierra", "Siembra y calendario", "Riego y abono natural", "Plagas y cuidados", "Cosecha y evaluación"],
  },
  {
    id: "apicultura", icon: "🐝", title: "Apicultura: Primeros Pasos",
    category: "agro", modality: "Grabado", level: "Inicial",
    lessons: 14, duration: "3,5 h de video", rating: 4.7, students: 121,
    desc: "Manejo de colmenas, extracción de miel y normativa apícola regional, con videos filmados en campo.",
    curriculum: ["El mundo de las abejas", "Armado del colmenar", "Extracción de miel", "Sanidad y normativa", "Evaluación final"],
  },
  {
    id: "dibujo", icon: "🎨", title: "Dibujo y Pintura para Todos",
    category: "arte", modality: "Grabado", level: "Inicial",
    lessons: 20, duration: "5 h de video", rating: 4.9, students: 143,
    desc: "Técnicas de dibujo, color y composición. Un espacio de expresión para toda la familia, sin experiencia previa.",
    curriculum: ["Materiales y trazos", "Perspectiva fácil", "Color y sombreado", "Tu primera obra", "Galería final del grupo"],
  },
  {
    id: "guitarra", icon: "🎸", title: "Guitarra Criolla Inicial",
    category: "arte", modality: "Grabado", level: "Inicial",
    lessons: 28, duration: "7 h de video", rating: 4.8, students: 210,
    desc: "Acordes básicos, ritmo y repertorio folclórico argentino. Solo necesitás tu guitarra y las ganas de tocar.",
    curriculum: ["Postura y primeros acordes", "Ritmos folclóricos", "Canciones simples", "Tocá y cantá", "Recital final"],
  },
  {
    id: "albanileria", icon: "🧱", title: "Albañilería y Terminaciones",
    category: "oficios", modality: "En vivo", level: "Inicial",
    lessons: 4, duration: "4 encuentros · 2 h c/u", rating: 4.8, students: 96,
    schedule: "Comienza 12/08 · Lun y Mié 18 h", spots: 10, total: 15,
    desc: "Revoques, mampostería y colocación de cerámicos, con práctica guiada en obra. Queda grabado por si no podés asistir.",
    curriculum: ["Encuentro 1: Mampostería base", "Encuentro 2: Revoques", "Encuentro 3: Cerámicos", "Encuentro 4: Práctica integradora"],
  },
  {
    id: "carpinteria", icon: "🪚", title: "Carpintería en Madera",
    category: "oficios", modality: "En vivo", level: "Inicial",
    lessons: 6, duration: "6 encuentros · 2 h c/u", rating: 4.7, students: 84,
    schedule: "Comienza 19/08 · Vie 17 h", spots: 4, total: 12,
    desc: "Manejo de herramientas, uniones y armado de muebles, con proyecto final a elección. Cupos limitados por taller.",
    curriculum: ["Encuentro 1: Herramientas y seguridad", "Encuentro 2: Uniones y ensambles", "Encuentro 3: Mueble pequeño", "Encuentros 4 a 6: Proyecto final"],
  },
  {
    id: "enfermeria", icon: "🩺", title: "Auxiliar de Enfermería",
    category: "salud", modality: "En vivo", level: "Intermedio",
    lessons: 12, duration: "12 encuentros · 3 h c/u", rating: 4.9, students: 150,
    schedule: "Comienza 05/08 · Lun a Vie 9 h", spots: 5, total: 20,
    desc: "Cuidados básicos del paciente, primeros auxilios y RCP, con prácticas supervisadas. Requiere secundario en curso.",
    curriculum: ["Rol del auxiliar y ética", "Higiene y movilización del paciente", "Primeros auxilios y RCP", "Prácticas supervisadas"],
  },
  {
    id: "peluqueria", icon: "💈", title: "Peluquería y Barbería Urbana",
    category: "salud", modality: "En vivo", level: "Inicial",
    lessons: 8, duration: "8 encuentros · 2 h c/u", rating: 4.8, students: 112,
    schedule: "Comienza 26/08 · Mar y Jue 15 h", spots: 7, total: 12,
    desc: "Cortes clásicos y modernos, colorimetría y atención al cliente, con práctica sobre modelos reales.",
    curriculum: ["Corte clásico y degradado", "Colorimetría básica", "Barbería y afeitado", "Atención y precios"],
  },
  {
    id: "cocina-regional", icon: "🍲", title: "Cocina Regional Santafesina",
    category: "gastronomia", modality: "En vivo", level: "Inicial",
    lessons: 3, duration: "3 encuentros · 2,5 h c/u", rating: 4.9, students: 130,
    schedule: "Comienza 14/08 · Sáb 10 h", spots: 8, total: 15,
    desc: "Batidos, pescados del río y dulces típicos del litoral. Cociná en vivo junto al instructor y tus vecinos.",
    curriculum: ["Batidos y pucheros santafesinos", "Pescados del río y picadas", "Dulces típicos y cierres"],
  },
];

/* ---------- Helpers ---------- */
const $ = (sel, ctx) => (ctx || document).querySelector(sel);
const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fmt = (n) => n.toLocaleString("es-AR");
const fmtRating = (r) => r.toFixed(1).replace(".", ",");

const CATEGORY_META = {};
CATEGORIES.forEach(function (c) {
  if (c.id !== "todos") CATEGORY_META[c.id] = c;
});

/* ---------- "Continuar aprendiendo" (mock) ---------- */
const CONTINUE = [
  { id: "electricidad", at: 2, progress: 40, lesson: "Módulo 3 de 5 · Instalación práctica sobre maqueta", remaining: "≈ 1 h 5 m restantes" },
  { id: "huerta", at: 3, progress: 60, lesson: "Módulo 4 de 5 · Plagas y cuidados", remaining: "≈ 45 m restantes" },
  { id: "prog-web", at: 2, progress: 40, lesson: "Módulo 3 de 5 · CSS: estilo y diseño", remaining: "≈ 7 h restantes" },
];

/* Progreso del usuario (mock, en memoria de la sesión) */
const USER_PROGRESS = {};
CONTINUE.forEach(function (item) {
  USER_PROGRESS[item.id] = {
    percent: item.progress,
    lessonIdx: item.at,
    lesson: item.lesson,
    remaining: item.remaining,
  };
});

/* ---------- Estado de filtros ---------- */
let activeCat = "todos";
let activeMod = "todos"; // "todos" | "grabado" | "vivo"
let searchQuery = "";

/* ---------- Animaciones de aparición (reveal) ---------- */
const hasIO = typeof IntersectionObserver !== "undefined";
const revealObserver = hasIO
  ? new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          const el = en.target;
          el.classList.add("in");
          // Quitamos el delay en cascada para que el hover no quede demorado
          setTimeout(function () { el.style.transitionDelay = ""; }, 900);
          revealObserver.unobserve(el);
        }
      });
    }, { threshold: 0.12 })
  : null;

function observeReveals(scope) {
  const els = $$(".reveal:not(.in)", scope || document);
  if (!revealObserver) {
    // Navegador sin IntersectionObserver → mostramos todo directo
    els.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  els.forEach(function (el) { revealObserver.observe(el); });
}

/* ---------- Render de chips de categoría ---------- */
function renderChips() {
  const box = $("#filterChips");
  box.innerHTML = CATEGORIES.map(function (c) {
    const active = c.id === "todos";
    return '<button class="chip' + (active ? " active" : "") + '" data-cat="' + c.id + '" aria-pressed="' + active + '">' +
      '<span aria-hidden="true">' + c.icon + "</span>" + c.label + "</button>";
  }).join("");
}

/* ---------- Filtrado ---------- */
function getFiltered() {
  const q = searchQuery.trim().toLowerCase();
  return COURSES.filter(function (c) {
    const byCat = activeCat === "todos" || c.category === activeCat;
    const byMod = activeMod === "todos" ||
      (activeMod === "vivo" ? c.modality === "En vivo" : c.modality === "Grabado");
    const byText = !q || (c.title + " " + c.desc).toLowerCase().includes(q);
    return byCat && byMod && byText;
  });
}

/* ---------- Tarjeta de capacitación ---------- */
function cardHTML(c, i) {
  const cat = CATEGORY_META[c.category];
  const isLive = c.modality === "En vivo";
  const full = isLive && c.spots === 0;

  let meta = "";
  if (isLive) {
    meta =
      '<li><span aria-hidden="true">📅</span> ' + c.schedule + "</li>" +
      '<li><span aria-hidden="true">🎯</span> ' + c.duration + "</li>" +
      '<li><span aria-hidden="true">👥</span> ' + (full ? "Sin cupos disponibles" : c.spots + " cupos disponibles") + "</li>";
  } else {
    meta =
      '<li><span aria-hidden="true">🎬</span> ' + c.lessons + " clases · " + c.duration + "</li>" +
      '<li><span aria-hidden="true">🚀</span> Acceso inmediato · A tu ritmo 24/7</li>' +
      '<li><span aria-hidden="true">🏆</span> Certificado al completar</li>';
  }

  const cta = full
    ? '<button class="btn btn-outline btn-sm" disabled>Sin cupos</button>'
    : isLive
      ? '<button class="btn btn-primary btn-sm" data-enroll="' + c.id + '">Reservar lugar</button>'
      : '<button class="btn btn-primary btn-sm" data-start="' + c.id + '">▶ Empezar ahora</button>';

  const spotsBar = isLive
    ? '<div class="spots-bar" aria-hidden="true"><span class="' + (full ? "full" : "") + '" style="width:' +
      Math.round(((c.total - c.spots) / c.total) * 100) + '%"></span></div>'
    : "";

  return (
    '<article class="course-card reveal' + (full ? " is-full" : "") + ' cat-' + c.category + '" data-detail="' + c.id + '" style="transition-delay:' + ((i % 3) * 70) + 'ms">' +
      '<div class="course-top">' +
        '<span class="course-icon" aria-hidden="true">' + c.icon + "</span>" +
        '<span class="badge ' + (isLive ? "envivo" : "grabado") + '">' + (isLive ? "En vivo" : "🎬 Grabado") + "</span>" +
      "</div>" +
      '<span class="course-cat">' + cat.icon + " " + cat.label + "</span>" +
      "<h3>" + c.title + "</h3>" +
      '<div class="rating"><span class="stars" aria-hidden="true">★★★★★</span><strong>' + fmtRating(c.rating) + '</strong><span class="students">(' + fmt(c.students) + " vecinos)</span></div>" +
      '<p class="course-desc">' + c.desc + "</p>" +
      '<ul class="course-meta">' + meta + "</ul>" +
      spotsBar +
      '<div class="course-footer">' +
        '<span class="level">Nivel ' + c.level + "</span>" + cta +
      "</div>" +
    "</article>"
  );
}

function renderCourses() {
  const list = getFiltered();
  $("#courseGrid").innerHTML = list.map(cardHTML).join("");
  $("#noResults").hidden = list.length > 0;
  $("#resultCount").textContent = list.length === COURSES.length
    ? "Mostrando las " + COURSES.length + " capacitaciones disponibles"
    : "Mostrando " + list.length + " de " + COURSES.length + " capacitaciones";
  observeReveals($("#courseGrid"));
}

/* ---------- Render de "Continuar aprendiendo" ---------- */
function renderContinue() {
  $("#continueGrid").innerHTML = CONTINUE.map(function (item) {
    const c = COURSES.find(function (x) { return x.id === item.id; });
    if (!c) return "";
    const up = USER_PROGRESS[item.id] || { percent: item.progress, lesson: item.lesson, remaining: item.remaining };
    return (
      '<article class="cont-card reveal cat-' + c.category + '" data-detail="' + c.id + '">' +
        '<span class="cont-icon" aria-hidden="true">' + c.icon + "</span>" +
        '<div class="cont-body">' +
          "<strong>" + c.title + "</strong>" +
          '<span class="cont-lesson">' + up.lesson + "</span>" +
          '<div class="cont-progress" aria-hidden="true"><span style="width:' + up.percent + '%"></span></div>' +
          '<span class="cont-note">' + up.percent + "% completado · " + up.remaining + "</span>" +
        "</div>" +
        '<button class="btn ' + (up.percent >= 100 ? "btn-outline" : "btn-primary") + ' btn-sm">' +
          (up.percent >= 100 ? "🎓 Certificado" : "Continuar") +
        "</button>" +
      "</article>"
    );
  }).join("");
  observeReveals($("#continueGrid"));
}

/* ---------- Contadores animados ---------- */
function animateCounter(el) {
  const target = Number(el.dataset.target);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  if (prefersReducedMotion) {
    el.textContent = prefix + fmt(target) + suffix;
    return;
  }
  const duration = 1500;
  const t0 = performance.now();
  function tick(now) {
    const p = Math.min((now - t0) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + fmt(Math.round(target * eased)) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const countersObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (en) {
    if (en.isIntersecting) {
      animateCounter(en.target);
      countersObserver.unobserve(en.target);
    }
  });
}, { threshold: 0.5 });

/* ---------- Header: sombra al hacer scroll + botón "volver arriba" ---------- */
const header = $("#siteHeader");
const toTop = $("#toTop");

function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 10);
  toTop.classList.toggle("show", window.scrollY > 600);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

toTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
});

/* ---------- Menú hamburguesa ---------- */
const hamburger = $("#hamburger");
const mainNav = $("#mainNav");

function toggleNav(force) {
  const open = typeof force === "boolean" ? force : !mainNav.classList.contains("open");
  mainNav.classList.toggle("open", open);
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", String(open));
  hamburger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
}
function closeMobileNav() { toggleNav(false); }

hamburger.addEventListener("click", function () { toggleNav(); });
$$("#mainNav a").forEach(function (a) {
  a.addEventListener("click", closeMobileNav);
});

/* ---------- Overlays: detalle + inscripción ---------- */
const overlay = $("#modalOverlay");
const detailOverlay = $("#detailOverlay");
const form = $("#enrollForm");
const successPanel = $("#successPanel");
const courseSelect = $("#fCourse");

function showOverlay(ov) {
  ov.hidden = false;
  requestAnimationFrame(function () { ov.classList.add("show"); });
  document.body.style.overflow = "hidden";
}
function hideOverlay(ov) {
  ov.classList.remove("show");
  setTimeout(function () { ov.hidden = true; }, 260);
  // Si el reproductor quedó abierto debajo, mantenemos el scroll bloqueado
  if (playerScreen.hidden) document.body.style.overflow = "";
}

/* Cierre con Escape + trampa de foco para accesibilidad */
document.addEventListener("keydown", function (e) {
  const ov = !overlay.hidden ? overlay : !detailOverlay.hidden ? detailOverlay : !certOverlay.hidden ? certOverlay : null;
  if (!ov) return;
  if (e.key === "Escape") { hideOverlay(ov); return; }
  if (e.key === "Tab") {
    const items = $$('button:not([disabled]), input:not([disabled]), select', $(".modal", ov))
      .filter(function (el) { return el.offsetParent !== null; });
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
  }
});

/* Cerrar tocando el fondo oscuro (certOverlay se registra en su propio módulo,
   porque se declara más adelante en este archivo) */
[overlay, detailOverlay].forEach(function (ov) {
  ov.addEventListener("mousedown", function (e) {
    if (e.target === ov) hideOverlay(ov);
  });
});

/* ---------- Modal de detalle (estilo e-learning) ---------- */
function openDetail(id) {
  const c = COURSES.find(function (x) { return x.id === id; });
  if (!c) return;
  const cat = CATEGORY_META[c.category];
  const isLive = c.modality === "En vivo";
  const full = isLive && c.spots === 0;

  $("#detailHead").className = "detail-head cat-" + c.category;
  $("#detailIcon").textContent = c.icon;
  const badge = $("#detailBadge");
  badge.className = "badge " + (isLive ? "envivo" : "grabado");
  badge.textContent = isLive ? "En vivo" : "🎬 Grabado";
  $("#detailTitle").textContent = c.title;
  $("#detailCat").textContent = cat.icon + " " + cat.label;

  const chips = [
    '<span class="meta-chip"><span class="stars" aria-hidden="true">★★★★★</span>' + fmtRating(c.rating) + " · " + fmt(c.students) + " vecinos</span>",
  ];
  if (isLive) {
    chips.push('<span class="meta-chip">📅 ' + c.schedule + "</span>");
    chips.push('<span class="meta-chip">🎯 ' + c.duration + "</span>");
    if (!full) chips.push('<span class="meta-chip">👥 ' + c.spots + " cupos libres</span>");
  } else {
    chips.push('<span class="meta-chip">🎬 ' + c.lessons + " clases</span>");
    chips.push('<span class="meta-chip">⏱️ ' + c.duration + "</span>");
    chips.push('<span class="meta-chip">🔓 Acceso 24/7</span>');
  }
  chips.push('<span class="meta-chip">🏆 Nivel ' + c.level + "</span>");
  $("#detailMeta").innerHTML = chips.join("");

  $("#detailDesc").textContent = c.desc;
  $("#detailCurriculum").innerHTML = c.curriculum.map(function (m, idx) {
    return '<li><span class="cur-n">' + (idx + 1) + "</span><span>" + m + "</span></li>";
  }).join("") + '<li class="muted"><span class="cur-n">🎁</span><span>Materiales descargables y evaluación final</span></li>';

  $("#detailFoot").innerHTML =
    (full
      ? '<button class="btn btn-outline btn-block" disabled>Sin cupos por ahora</button>'
      : isLive
        ? '<button class="btn btn-primary btn-block" data-enroll="' + c.id + '">Reservar mi lugar</button>'
        : '<button class="btn btn-primary btn-block" data-start="' + c.id + '">▶ Empezar ahora</button>') +
    '<p class="detail-note">100% gratuito · Certificado oficial municipal</p>';

  showOverlay(detailOverlay);
  closeMobileNav();
}

/* ---------- Modal de inscripción ---------- */
function populateSelect() {
  const groups = { Grabado: [], "En vivo": [] };
  COURSES.forEach(function (c) { groups[c.modality].push(c); });
  courseSelect.innerHTML = '<option value="">Seleccioná una capacitación…</option>' +
    ["Grabado", "En vivo"].map(function (mod) {
      const opts = groups[mod].map(function (c) {
        const dis = mod === "En vivo" && c.spots === 0;
        return '<option value="' + c.id + '"' + (dis ? " disabled" : "") + ">" +
          c.icon + " " + c.title + (dis ? " (sin cupos)" : "") + "</option>";
      }).join("");
      const label = mod === "Grabado" ? "🎬 Grabadas · a tu ritmo" : "📡 En vivo · con fecha";
      return '<optgroup label="' + label + '">' + opts + "</optgroup>";
    }).join("");
}

function openModal(courseId) {
  showOverlay(overlay);
  form.reset();
  $$(".field.invalid", form).forEach(function (f) { f.classList.remove("invalid"); });
  form.hidden = false;
  successPanel.hidden = true;
  if (courseId) courseSelect.value = courseId;
  closeMobileNav();
  setTimeout(function () {
    const target = courseId ? $("#fName") : courseSelect;
    if (target && target.focus) target.focus();
  }, 130);
}

/* ---------- Delegación global de clics ---------- */
document.addEventListener("click", function (e) {
  if (e.target.closest("[data-close-modal]")) {
    [overlay, detailOverlay, certOverlay].forEach(function (ov) { if (!ov.hidden) hideOverlay(ov); });
    return;
  }
  if (e.target.closest("[data-open-modal]")) { openModal(); return; }

  const enrollBtn = e.target.closest("[data-enroll]");
  if (enrollBtn) {
    if (!detailOverlay.hidden) hideOverlay(detailOverlay);
    openModal(enrollBtn.dataset.enroll);
    return;
  }

  const startBtn = e.target.closest("[data-start]");
  if (startBtn) {
    if (!detailOverlay.hidden) hideOverlay(detailOverlay);
    openPlayer(startBtn.dataset.start);
    return;
  }
});

/* Click en una tarjeta del catálogo → abre el detalle */
$("#courseGrid").addEventListener("click", function (e) {
  if (e.target.closest("button")) return; // los botones tienen su propia acción
  const card = e.target.closest("[data-detail]");
  if (card) openDetail(card.dataset.detail);
});

/* Click en "Continuar aprendiendo" → reproductor, o certificado si ya terminó */
$("#continueGrid").addEventListener("click", function (e) {
  const card = e.target.closest("[data-detail]");
  if (!card) return;
  const up = USER_PROGRESS[card.dataset.detail];
  if (up && up.percent >= 100) openCertificate(card.dataset.detail);
  else openPlayer(card.dataset.detail);
});

/* ---------- Validación del formulario ---------- */
const validators = {
  fCourse: function (v) { return v !== ""; },
  fName: function (v) { return /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:[ '\-][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)+$/.test(v.trim()); },
  fDni: function (v) { return /^\d{7,8}$/.test(v.trim()); },
  fPhone: function (v) { return v.replace(/\D/g, "").length >= 10; },
  fEmail: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); },
  fTerms: function (v, el) { return el.checked; },
};

function validateField(el) {
  const fn = validators[el.id];
  if (!fn) return true;
  const ok = fn(el.value, el);
  el.closest(".field").classList.toggle("invalid", !ok);
  return ok;
}

function validateForm() {
  const ids = ["fCourse", "fName", "fDni", "fPhone", "fEmail", "fTerms"];
  let firstBad = null;
  ids.forEach(function (id) {
    const field = $("#" + id);
    if (!validateField(field) && !firstBad) firstBad = field;
  });
  if (firstBad && firstBad.focus) firstBad.focus();
  return !firstBad;
}

/* Limpiar el error del campo mientras el usuario escribe */
["input", "change"].forEach(function (evt) {
  form.addEventListener(evt, function (e) {
    const t = e.target;
    if (t.id && validators[t.id] && t.closest(".field")) {
      t.closest(".field").classList.remove("invalid");
    }
  });
});

/* ---------- Envío simulado (mock, sin backend) ---------- */
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validateForm()) {
    showToast("Revisá los campos marcados en rojo ⚠️");
    return;
  }
  // Recordamos el nombre para el certificado
  try { localStorage.setItem("capName", $("#fName").value.trim()); } catch (err) {}
  const btn = $("#submitBtn");
  btn.disabled = true;
  btn.textContent = "Enviando…";

  setTimeout(function () {
    const name = $("#fName").value.trim().split(/\s+/)[0];
    const course = COURSES.find(function (c) { return c.id === courseSelect.value; });

    $("#successMsg").textContent = course && course.modality === "Grabado"
      ? "¡Gracias, " + name + "! Ya tenés acceso a «" + course.title +
        "». Ingresá cuando quieras y mirá las clases a tu ritmo."
      : "¡Gracias, " + name + "! Reservamos tu lugar en «" +
        (course ? course.title : "la capacitación") +
        "». Te contactaremos para confirmar los detalles.";

    form.hidden = true;
    successPanel.hidden = false;
    btn.disabled = false;
    btn.textContent = "Confirmar inscripción";
    showToast("✅ Listo · Inscripción registrada (demo)");
  }, 900);
});

/* ---------- Toast de notificaciones ---------- */
let toastTimer = null;
function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove("show"); }, 3400);
}

/* ---------- FAQ (acordeón) ---------- */
$$(".faq-item").forEach(function (item) {
  const btn = $(".faq-q", item);
  btn.addEventListener("click", function () {
    const wasOpen = item.classList.contains("open");
    $$(".faq-item.open").forEach(function (other) {
      other.classList.remove("open");
      $(".faq-q", other).setAttribute("aria-expanded", "false");
      $(".faq-a", other).style.maxHeight = "";
    });
    if (!wasOpen) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
      const panel = $(".faq-a", item);
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

/* ---------- Filtros: modalidad, categorías, buscador y reset ---------- */
$("#modalityToggle").addEventListener("click", function (e) {
  const btn = e.target.closest(".mod-btn");
  if (!btn) return;
  activeMod = btn.dataset.mod;
  $$("#modalityToggle .mod-btn").forEach(function (b) {
    b.classList.toggle("active", b === btn);
  });
  renderCourses();
});

$("#filterChips").addEventListener("click", function (e) {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  activeCat = chip.dataset.cat;
  $$("#filterChips .chip").forEach(function (ch) {
    const on = ch === chip;
    ch.classList.toggle("active", on);
    ch.setAttribute("aria-pressed", String(on));
  });
  renderCourses();
});

$("#searchInput").addEventListener("input", function (e) {
  searchQuery = e.target.value;
  renderCourses();
});

$("#resetFilters").addEventListener("click", function () {
  activeCat = "todos";
  activeMod = "todos";
  searchQuery = "";
  $("#searchInput").value = "";
  $$("#modalityToggle .mod-btn").forEach(function (b) {
    b.classList.toggle("active", b.dataset.mod === "todos");
  });
  $$("#filterChips .chip").forEach(function (ch) {
    const on = ch.dataset.cat === "todos";
    ch.classList.toggle("active", on);
    ch.setAttribute("aria-pressed", String(on));
  });
  renderCourses();
});

/* ============================================================
   PANTALLA DE REPRODUCCIÓN (mock de reproductor de clases)
   ============================================================ */
const playerScreen = $("#playerScreen");
const psVideo = $("#psVideo");
let P = null; // estado del reproductor
let psTimer = null;

/* Duración determinista por curso y módulo (6 a 20 min) */
function lessonDur(course, i) {
  let h = 0;
  for (const ch of course.id) h = (h * 31 + ch.charCodeAt(0)) % 997;
  return 6 + ((h + i * 7) % 15);
}
function fmtTime(s) {
  s = Math.max(0, Math.round(s));
  return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
}
function fmtMinutes(min) {
  if (min < 60) return "≈ " + Math.max(5, Math.round(min / 5) * 5) + " m";
  const h = Math.floor(min / 60);
  const m = Math.round((min % 60) / 5) * 5;
  return "≈ " + h + " h" + (m ? " " + m + " m" : "");
}

function openPlayer(courseId) {
  const c = COURSES.find(function (x) { return x.id === courseId; });
  if (!c) return;
  const lessons = c.curriculum.map(function (t, i) {
    return { title: t, dur: lessonDur(c, i) };
  });
  const saved = USER_PROGRESS[courseId];
  const current = saved ? Math.min(saved.lessonIdx, lessons.length - 1) : 0;
  P = {
    course: c,
    lessons: lessons,
    current: current,
    completed: lessons.map(function (_, i) { return i < current; }),
    seconds: 0,
    playing: false,
    speed: 1,
  };
  if (!detailOverlay.hidden) hideOverlay(detailOverlay);
  closeMobileNav();
  playerScreen.hidden = false;
  playerScreen.scrollTop = 0;
  document.body.style.overflow = "hidden";
  renderPlayer();
}

function closePlayer() {
  pausePs();
  if (P) syncProgress();
  playerScreen.hidden = true;
  document.body.style.overflow = "";
  renderContinue();
}

/* Sincroniza el avance del reproductor con "Continuar aprendiendo" */
function syncProgress() {
  const total = P.lessons.length;
  const done = P.completed.filter(Boolean).length;
  let remaining = 0;
  P.lessons.forEach(function (l, i) {
    if (!P.completed[i]) remaining += l.dur;
  });
  USER_PROGRESS[P.course.id] = {
    percent: Math.round((done / total) * 100),
    lessonIdx: P.current,
    lesson: "Módulo " + (P.current + 1) + " de " + total + " · " + P.lessons[P.current].title,
    remaining: remaining ? fmtMinutes(remaining) + " restantes" : "¡curso completado! 🎉",
  };
}

function renderPlayer() {
  const c = P.course;
  const cat = CATEGORY_META[c.category];
  $("#psCrumb").textContent = cat.icon + " " + cat.label + " · " + c.title;
  $("#psCourse").textContent = c.title;
  $("#psEmoji").textContent = c.icon;
  $("#psLessonCrumb").textContent = "Módulo " + (P.current + 1) + " de " + P.lessons.length;
  $("#psLessonTitle").textContent = P.lessons[P.current].title;

  const done = P.completed.filter(Boolean).length;
  const pct = Math.round((done / P.lessons.length) * 100);
  $("#psProgress").style.width = pct + "%";
  $("#psProgressText").textContent = pct + "% completado";

  $("#psList").innerHTML = P.lessons.map(function (l, i) {
    const st = i === P.current ? "current" : (P.completed[i] ? "done" : "");
    const n = P.completed[i] ? "✓" : (i === P.current ? "▶" : String(i + 1));
    const info = P.completed[i] ? "Completado" : (i === P.current ? "Reproduciendo" : "Disponible");
    return '<li class="' + st + '" data-lesson="' + i + '">' +
      '<span class="ps-n">' + n + "</span>" +
      '<div class="ps-li-body"><strong>' + l.title + "</strong><span>" + l.dur + " min · " + info + "</span></div>" +
      "</li>";
  }).join("");

  $("#psComplete").disabled = P.completed[P.current];
  $("#psComplete").textContent = P.completed[P.current] ? "✓ Completada" : "✓ Marcar como completada";
  $("#psPrev").disabled = P.current === 0;
  $("#psNext").disabled = P.current === P.lessons.length - 1;
  $("#psCertBtn").hidden = done < P.lessons.length; // visible con el curso al 100%
  renderPsTime();
}

/* ---------- Reproducción simulada ---------- */
function renderPsTime() {
  const l = P.lessons[P.current];
  $("#psTime").textContent = fmtTime(P.seconds) + " / " + fmtTime(l.dur * 60);
  $("#psSeekFill").style.width = Math.min(100, (P.seconds / (l.dur * 60)) * 100) + "%";
}

function playPs() {
  if (!P || P.playing) return;
  P.playing = true;
  psVideo.classList.add("playing");
  $("#psPlay").textContent = "⏸";
  psTimer = setInterval(function () {
    P.seconds += 0.25 * P.speed;
    const dur = P.lessons[P.current].dur * 60;
    if (P.seconds >= dur) {
      P.seconds = dur;
      renderPsTime();
      completePs(true); // terminó el módulo → lo marcamos y avanzamos
      return;
    }
    renderPsTime();
  }, 250);
}

function pausePs() {
  if (!P) return;
  P.playing = false;
  psVideo.classList.remove("playing");
  $("#psPlay").textContent = "▶";
  clearInterval(psTimer);
}

function goToLesson(i, autoplay) {
  if (!P) return;
  P.current = Math.max(0, Math.min(P.lessons.length - 1, i));
  P.seconds = 0;
  renderPlayer();
  if (autoplay) playPs();
  else pausePs();
}

function completePs(auto) {
  P.completed[P.current] = true;
  syncProgress();
  const next = P.current + 1;
  if (next < P.lessons.length) {
    goToLesson(next, false);
    showToast((auto ? "🎉 ¡Módulo terminado! " : "✅ Módulo completado. ") + "Seguimos con el siguiente.");
  } else {
    pausePs();
    renderPlayer();
    showToast("🎓 ¡Curso completado! Generá tu certificado ↓");
    setTimeout(function () { openCertificate(P.course.id); }, 800);
  }
}

/* ---------- Controles del reproductor ---------- */
$("#psBack").addEventListener("click", closePlayer);
$("#psBigPlay").addEventListener("click", playPs);
$("#psPlay").addEventListener("click", function () {
  if (P.playing) pausePs();
  else playPs();
});
$("#psSeek").addEventListener("click", function (e) {
  const r = this.getBoundingClientRect();
  const pct = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
  P.seconds = pct * P.lessons[P.current].dur * 60;
  renderPsTime();
});
$("#psMute").addEventListener("click", function () {
  this.textContent = this.textContent === "🔊" ? "🔇" : "🔊";
});
$("#psSpeed").addEventListener("click", function () {
  const speeds = [1, 1.25, 1.5, 2];
  P.speed = speeds[(speeds.indexOf(P.speed) + 1) % speeds.length];
  this.textContent = String(P.speed).replace(".", ",") + "x";
});
$("#psFull").addEventListener("click", function () {
  if (psVideo.requestFullscreen) psVideo.requestFullscreen().catch(function () {});
  else showToast("Pantalla completa no disponible en este navegador");
});
$("#psPrev").addEventListener("click", function () { goToLesson(P.current - 1, P.playing); });
$("#psNext").addEventListener("click", function () { goToLesson(P.current + 1, P.playing); });
$("#psComplete").addEventListener("click", function () { completePs(false); });
$("#psCertBtn").addEventListener("click", function () { if (P) openCertificate(P.course.id); });

/* Click en un módulo de la playlist → cambia de clase */
$("#psList").addEventListener("click", function (e) {
  const li = e.target.closest("[data-lesson]");
  if (li) goToLesson(Number(li.dataset.lesson), false);
});

/* Escape cierra el reproductor */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !playerScreen.hidden) closePlayer();
});

/* ============================================================
   CERTIFICADO DESCARGABLE — se dibuja en Canvas, en el
   propio navegador (sin servidores ni dependencias)
   ============================================================ */
const certOverlay = $("#certOverlay");
const certCanvas = document.createElement("canvas");
certCanvas.width = 1600;
certCanvas.height = 1131;
const certCtx = certCanvas.getContext("2d");
let CERT = { course: null };
let certDebounce = null;

/* Cerrar tocando el fondo oscuro */
certOverlay.addEventListener("mousedown", function (e) {
  if (e.target === certOverlay) hideOverlay(certOverlay);
});

function certText(txt, x, y, font, color, align, spacing) {
  certCtx.font = font;
  certCtx.fillStyle = color;
  certCtx.textAlign = align || "center";
  if ("letterSpacing" in certCtx) certCtx.letterSpacing = (spacing || 0) + "px";
  certCtx.fillText(txt, x, y);
  if ("letterSpacing" in certCtx) certCtx.letterSpacing = "0px";
}

function certWrap(txt, maxW) {
  const words = String(txt).split(" ");
  const lines = [];
  let line = "";
  words.forEach(function (w) {
    const t = line ? line + " " + w : w;
    if (certCtx.measureText(t).width > maxW && line) { lines.push(line); line = w; }
    else line = t;
  });
  if (line) lines.push(line);
  return lines;
}

function certRoundRect(x, y, w, h, r) {
  const c = certCtx;
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

function certCode(c, name) {
  const base = (c.id || "curso") + "|" + (name || "") + "|" + new Date().getFullYear();
  let h = 0;
  for (let i = 0; i < base.length; i++) h = (h * 31 + base.charCodeAt(i)) >>> 0;
  return "LT-" + new Date().getFullYear() + "-" + ("0000000" + h.toString(36).toUpperCase()).slice(-7);
}

function renderCertificate(name) {
  const c = CERT.course;
  if (!c) return;
  const ctx = certCtx;
  const W = certCanvas.width, H = certCanvas.height, cx = W / 2;

  // Fondo
  ctx.fillStyle = "#fffdf6";
  ctx.fillRect(0, 0, W, H);
  let g = ctx.createRadialGradient(130, 100, 10, 130, 100, 430);
  g.addColorStop(0, "rgba(37,99,235,0.07)"); g.addColorStop(1, "rgba(37,99,235,0)");
  ctx.fillStyle = g; ctx.fillRect(0, 0, 640, 540);
  g = ctx.createRadialGradient(W - 130, H - 100, 10, W - 130, H - 100, 430);
  g.addColorStop(0, "rgba(245,158,11,0.09)"); g.addColorStop(1, "rgba(245,158,11,0)");
  ctx.fillStyle = g; ctx.fillRect(W - 640, H - 540, 640, 540);

  // Marcos doble (azul + dorado) con diamantes en las esquinas
  ctx.strokeStyle = "#1e3a8a"; ctx.lineWidth = 10;
  certRoundRect(34, 34, W - 68, H - 68, 26); ctx.stroke();
  ctx.strokeStyle = "rgba(217,161,59,0.9)"; ctx.lineWidth = 2.5;
  certRoundRect(58, 58, W - 116, H - 116, 18); ctx.stroke();
  [[58, 58], [W - 58, 58], [58, H - 58], [W - 58, H - 58]].forEach(function (p) {
    ctx.save(); ctx.translate(p[0], p[1]); ctx.rotate(Math.PI / 4);
    ctx.fillStyle = "#f59e0b"; ctx.fillRect(-7, -7, 14, 14); ctx.restore();
  });

  // Escudo municipal
  (function () {
    const s = 58, sx = cx, sy = 168;
    const grad = ctx.createLinearGradient(sx - 50, sy - 70, sx + 50, sy + 70);
    grad.addColorStop(0, "#3b82f6"); grad.addColorStop(1, "#12275c");
    ctx.beginPath();
    ctx.moveTo(sx, sy - s);
    ctx.lineTo(sx + s * 0.85, sy - s * 0.6);
    ctx.lineTo(sx + s * 0.85, sy + s * 0.05);
    ctx.quadraticCurveTo(sx + s * 0.82, sy + s * 0.72, sx, sy + s);
    ctx.quadraticCurveTo(sx - s * 0.82, sy + s * 0.72, sx - s * 0.85, sy + s * 0.05);
    ctx.lineTo(sx - s * 0.85, sy - s * 0.6);
    ctx.closePath();
    ctx.fillStyle = grad; ctx.fill();
    ctx.strokeStyle = "#fbbf24"; ctx.lineWidth = 3; ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(sx - 32, sy + 24);
    ctx.quadraticCurveTo(sx, sy + 50, sx + 32, sy + 24);
    ctx.strokeStyle = "#fbbf24"; ctx.lineWidth = 4; ctx.stroke();
    certText("LT", sx, sy + 12, "700 32px Georgia, serif", "#ffffff", "center", 1);
  })();

  // Encabezado
  certText("MUNICIPALIDAD DE LAS TOSCAS", cx, 292, "800 36px 'Segoe UI', Arial, sans-serif", "#0f2a6b", "center", 4);
  certText("SANTA FE · ARGENTINA", cx, 324, "600 20px 'Segoe UI', Arial, sans-serif", "#5b6b83", "center", 6);
  ctx.strokeStyle = "#f59e0b"; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx - 150, 352); ctx.lineTo(cx + 150, 352); ctx.stroke();
  ctx.save(); ctx.translate(cx, 352); ctx.rotate(Math.PI / 4);
  ctx.fillStyle = "#f59e0b"; ctx.fillRect(-6, -6, 12, 12); ctx.restore();

  // Título
  certText("CERTIFICADO", cx, 452, "800 88px Georgia, 'Times New Roman', serif", "#0f2a6b", "center", 10);
  certText("DE FINALIZACIÓN", cx, 498, "700 30px 'Segoe UI', Arial, sans-serif", "#1d4ed8", "center", 8);
  certText("Se certifica que", cx, 556, "italic 400 28px Georgia, serif", "#5b6b83", "center", 1);

  // Nombre del titular (con filete dorado debajo)
  const nombre = (name && name.trim().length >= 3 ? name : "Nombre y Apellido").toUpperCase();
  certCtx.font = "700 64px Georgia, serif";
  const nLines = certWrap(nombre, 1240).slice(0, 2);
  let ny = 628;
  nLines.forEach(function (l) { certText(l, cx, ny, "700 64px Georgia, serif", "#0f172a"); ny += 72; });
  const fy = ny - 44;
  const fg = ctx.createLinearGradient(cx - 280, 0, cx + 280, 0);
  fg.addColorStop(0, "rgba(245,158,11,0)"); fg.addColorStop(0.5, "#f59e0b"); fg.addColorStop(1, "rgba(245,158,11,0)");
  ctx.strokeStyle = fg; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(cx - 280, fy); ctx.lineTo(cx + 280, fy); ctx.stroke();

  // Capacitación
  let y = fy + 58;
  certText("completó satisfactoriamente la capacitación", cx, y, "italic 26px Georgia, serif", "#5b6b83");
  y += 56;
  certCtx.font = "800 42px 'Segoe UI', Arial, sans-serif";
  certWrap(c.title, 1220).slice(0, 2).forEach(function (l) {
    certText(l, cx, y, "800 42px 'Segoe UI', Arial, sans-serif", "#1d4ed8");
    y += 50;
  });
  y += 2;
  const horas = c.modality === "En vivo" ? c.duration : c.lessons + " clases · " + c.duration;
  certText("Nivel " + c.level + "  ·  " + horas + "  ·  Modalidad " + (c.modality === "En vivo" ? "en vivo" : "a tu ritmo"), cx, y, "600 23px 'Segoe UI', Arial, sans-serif", "#5b6b83");

  // Pie: fecha · sello · firma
  const fecha = "Las Toscas, " + new Date().toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
  certText(fecha, 150, H - 148, "italic 24px Georgia, serif", "#5b6b83", "left");

  (function () {
    const sx = cx, sy = H - 168, r = 82;
    ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2);
    ctx.strokeStyle = "#f59e0b"; ctx.lineWidth = 5; ctx.stroke();
    ctx.beginPath(); ctx.arc(sx, sy, r - 9, 0, Math.PI * 2);
    ctx.fillStyle = "#1e3a8a"; ctx.fill();
    ctx.beginPath(); ctx.arc(sx, sy, r - 24, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(251,191,36,0.85)"; ctx.lineWidth = 1.5; ctx.stroke();
    certText("★", sx, sy - 14, "34px Georgia, serif", "#fbbf24", "center");
    certText("LAS TOSCAS", sx, sy + 14, "800 13px 'Segoe UI', Arial", "#ffffff", "center", 2);
    certText("SANTA FE", sx, sy + 34, "700 11px 'Segoe UI', Arial", "rgba(255,255,255,0.85)", "center", 2);
  })();

  ctx.strokeStyle = "#9aa9c4"; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(W - 460, H - 170); ctx.lineTo(W - 150, H - 170); ctx.stroke();
  certText("Secretaría de Desarrollo Humano", W - 305, H - 140, "700 20px 'Segoe UI', Arial", "#0f172a");
  certText("y Promoción Local", W - 305, H - 114, "600 17px 'Segoe UI', Arial", "#5b6b83");

  certText("Código de verificación: " + certCode(c, name) + "  ·  Capacita Las Toscas (demo)", cx, H - 62, "600 18px 'Segoe UI', Arial", "#8ba1c9", "center", 1);

  $("#certImg").src = certCanvas.toDataURL("image/png");
}

function openCertificate(courseId) {
  const c = COURSES.find(function (x) { return x.id === courseId; });
  if (!c) return;
  CERT.course = c;
  let guardado = "";
  try { guardado = localStorage.getItem("capName") || ""; } catch (err) {}
  $("#certName").value = guardado;
  $("#certName").closest(".field").classList.remove("invalid");
  certOverlay.hidden = false;
  requestAnimationFrame(function () { certOverlay.classList.add("show"); });
  document.body.style.overflow = "hidden";
  renderCertificate(guardado);
}

/* Vista previa en vivo mientras se escribe el nombre */
$("#certName").addEventListener("input", function () {
  this.closest(".field").classList.remove("invalid");
  clearTimeout(certDebounce);
  const v = this.value;
  certDebounce = setTimeout(function () { renderCertificate(v); }, 350);
});

$("#certRegen").addEventListener("click", function () {
  renderCertificate($("#certName").value);
});

$("#certDownload").addEventListener("click", function () {
  const v = $("#certName").value.trim();
  if (v.length < 3) {
    $("#certName").closest(".field").classList.add("invalid");
    showToast("Escribí tu nombre para generar el certificado ⚠️");
    return;
  }
  try { localStorage.setItem("capName", v); } catch (err) {}
  renderCertificate(v);
  const a = document.createElement("a");
  a.href = certCanvas.toDataURL("image/png");
  a.download = "Certificado - " + CERT.course.title.replace(/[\\/:*?"<>|]/g, "") + ".png";
  document.body.appendChild(a);
  a.click();
  a.remove();
  showToast("🎓 Certificado descargado (demo)");
});

/* ---------- Inicialización ---------- */
renderChips();
populateSelect();
renderCourses();
renderContinue();
observeReveals();
$$(".stat-num").forEach(function (el) { countersObserver.observe(el); });
$("#year").textContent = String(new Date().getFullYear());

// JS funcionando: cancelamos el "plan B" del head (no hace falta mostrar todo forzado)
if (window.__revealFallback) clearTimeout(window.__revealFallback);

/* Red de seguridad: si IntersectionObserver no reacciona por cualquier motivo,
   mostramos igualmente lo que ya está en pantalla (o cerca) */
setTimeout(function () {
  $$(".reveal:not(.in)").forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight * 2) {
      el.classList.add("in");
    }
  });
}, 900);






