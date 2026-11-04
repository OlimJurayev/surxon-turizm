// Umumiy: tillar, sarlavha, pastki qism, klasterlar
const CLUSTERS = {
  bud: { color: "#B5532F", uz: "Buddaviylik merosi", en: "Buddhist Heritage", ru: "Буддийское наследие" },
  zi:  { color: "#1F7F80", uz: "Ziyorat", en: "Pilgrimage", ru: "Паломничество" },
  eko: { color: "#4F7D3A", uz: "Tog‘ va tabiat", en: "Mountains & Nature", ru: "Горы и природа" },
  etn: { color: "#8E3B5E", uz: "Jonli an’analar", en: "Living Traditions", ru: "Живые традиции" },
};

const T = {
  nav_home: { uz: "Bosh sahifa", en: "Home", ru: "Главная" },
  nav_dir: { uz: "Yo‘nalishlar", en: "Themes", ru: "Направления" },
  nav_map: { uz: "Xarita", en: "Map", ru: "Карта" },
  nav_routes: { uz: "Marshrutlar", en: "Routes", ru: "Маршруты" },
  nav_events: { uz: "Tadbirlar", en: "Events", ru: "События" },
  nav_info: { uz: "Amaliy ma’lumot", en: "Practical info", ru: "Практическая информация" },
  slogan: { uz: "Tarix qatlamlari", en: "Layers of time", ru: "Слои истории" },
  hero_title: { uz: "Surxondaryo — qadimiy sivilizatsiyalar chorrahasi", en: "Surkhandarya — a crossroads of ancient civilizations", ru: "Сурхандарья — перекрёсток древних цивилизаций" },
  hero_text: { uz: "Buddaviylik merosi, ziyoratgohlar, tog‘ tabiati va jonli an’analar — barchasi bitta vohada.", en: "Buddhist heritage, pilgrimage sites, mountain nature and living traditions — all in one oasis.", ru: "Буддийское наследие, святыни, горная природа и живые традиции — в одном оазисе." },
  open_map: { uz: "Xaritani ochish", en: "Open the map", ru: "Открыть карту" },
  see_routes: { uz: "Marshrutlar", en: "Routes", ru: "Маршруты" },
  choose_dir: { uz: "Sayohat yo‘nalishini tanlang", en: "Choose your theme", ru: "Выберите направление" },
  in_numbers: { uz: "Surxondaryo raqamlarda", en: "Surkhandarya in numbers", ru: "Сурхандарья в цифрах" },
  search: { uz: "Obyekt yoki tumanni qidiring…", en: "Search a site or district…", ru: "Поиск объекта или района…" },
  results: { uz: "Natijalar", en: "Results", ru: "Результаты" },
  no_coords: { uz: "joylashuvi aniqlanmoqda", en: "location being verified", ru: "местоположение уточняется" },
  approx: { uz: "taxminiy joylashuv", en: "approximate location", ru: "примерное местоположение" },
  route_btn: { uz: "Marshrut", en: "Directions", ru: "Маршрут" },
  source: { uz: "Manba", en: "Source", ru: "Источник" },
  period: { uz: "Davr", en: "Period", ru: "Период" },
  disclaimer: { uz: "Ushbu sayt magistrlik dissertatsiyasi doirasida ishlab chiqilgan ilmiy prototip bo‘lib, rasmiy davlat sayti emas. Ma’lumotlar ochiq manbalardan olingan va manbasi ko‘rsatilgan.", en: "This site is a research prototype developed for a master’s dissertation and is not an official government website. Data come from open sources, which are cited.", ru: "Сайт — исследовательский прототип, разработанный в рамках магистерской диссертации, и не является официальным государственным сайтом. Данные взяты из открытых источников с указанием источника." },
};

function getLang() {
  const p = new URLSearchParams(location.search).get("lang");
  if (["uz", "en", "ru"].includes(p)) return p;
  try { const s = localStorage.getItem("lang"); if (["uz", "en", "ru"].includes(s)) return s; } catch (e) {}
  return "uz";
}
let LANG = getLang();
const t = (k) => (T[k] ? T[k][LANG] || T[k].uz : k);
const cname = (k) => CLUSTERS[k][LANG] || CLUSTERS[k].uz;
const field = (p, f) => p[`${f}_${LANG}`] || p[`${f}_uz`] || "";

function setLang(l) {
  LANG = l;
  try { localStorage.setItem("lang", l); } catch (e) {}
  document.documentElement.lang = l === "uz" ? "uz" : l;
  render();
}

function render() {
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.l === LANG));
  if (window.pageRender) window.pageRender();
}

function header(active) {
  const links = [["index.html", "nav_home"], ["yonalishlar.html", "nav_dir"], ["xarita.html", "nav_map"], ["marshrutlar.html", "nav_routes"], ["tadbirlar.html", "nav_events"], ["amaliy.html", "nav_info"]];
  const h = document.createElement("header");
  h.className = "site";
  h.innerHTML = `<a class="skip" href="#main">Asosiy mazmunga o‘tish</a><div class="wrap">
    <a class="brand" href="index.html"><img src="img/logo.svg" alt="SURXON logotipi"><b>SURXON</b></a>
    <nav class="main" aria-label="Asosiy menyu">${links.map(([href, k]) => `<a href="${href}" data-i18n="${k}" ${href === active ? 'aria-current="page"' : ""}></a>`).join("")}</nav>
    <div class="lang" role="group" aria-label="Til">${["uz", "en", "ru"].map((l) => `<button type="button" data-l="${l}">${l.toUpperCase()}</button>`).join("")}</div></div>`;
  document.body.prepend(h);
  h.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.l)));
  const f = document.createElement("footer");
  f.className = "site";
  f.innerHTML = `<div class="wrap"><p><b>SURXON</b> · <span data-i18n="slogan"></span></p><p class="disclaimer" data-i18n="disclaimer"></p>
    <p class="disclaimer">© 2026 · Termiz davlat universiteti · magistrlik dissertatsiyasi prototipi</p></div>`;
  document.body.append(f);
}

function objects() { return (window.OBYEKTLAR && window.OBYEKTLAR.features) || []; }

// Wikimedia Commons fotosurati (muallif va litsenziya fayl sahifasida). Yuklanmasa — "FOTO" belgisi.
function photoHtml(p, small) {
  if (!p.foto) return `<div class="photo">FOTO</div>`;
  const src = "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(p.foto) + "?width=" + (small ? 360 : 640);
  const page = "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(p.foto);
  return `<figure style="margin:0"><div class="photo"><img src="${src}" alt="${p.foto_izoh || field(p, "nomi")}" loading="lazy"
    onerror="this.parentNode.textContent='FOTO'"></div>
    <figcaption class="credit">${p.foto_izoh ? p.foto_izoh + " · " : ""}Foto: <a href="${page}" target="_blank" rel="noopener">Wikimedia Commons</a></figcaption></figure>`;
}
