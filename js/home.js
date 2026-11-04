// Bosh sahifa: uzbekistan.travel shahar sahifasi tartibida qurilgan destinatsiya sahifasi
header("index.html");

const H = {
  crumbs: { uz: ["Bosh sahifa", "Viloyatlar", "Surxondaryo"], en: ["Home", "Regions", "Surkhandarya"], ru: ["Главная", "Регионы", "Сурхандарья"] },
  h1: { uz: "Surxondaryo", en: "Surkhandarya", ru: "Сурхандарья" },
  h2: { uz: "Surxondaryo — tarix qatlamlari", en: "Surkhandarya — layers of time", ru: "Сурхандарья — слои истории" },
  intro: {
    uz: ["O‘zbekistonning eng janubiy viloyati — Amudaryo bo‘yida, Hisor tog‘lari etagida joylashgan voha. Bu yerda turli davrlar bir-birining ustiga qatlam-qatlam bo‘lib tushgan: Kushonlar davrining buddaviy monastirlari, islom olimlarining ziyoratgohlari, tog‘ qishloqlarining jonli an’analari.",
         "Viloyatda 561 ta moddiy madaniy meros obyekti ro‘yxatga olingan, ularning 444 tasi arxeologiya yodgorliklaridir. Surxondaryoga kelgan sayyoh bir kunda ikki ming yillik tarixni bosib o‘tadi."],
    en: ["Uzbekistan’s southernmost region — an oasis on the Amu Darya at the foot of the Hissar mountains. Here the ages lie in layers: Buddhist monasteries of the Kushan era, shrines of Islamic scholars and the living traditions of mountain villages.",
         "The region lists 561 tangible cultural heritage sites, 444 of them archaeological. In Surkhandarya a traveller crosses two thousand years of history in a single day."],
    ru: ["Самый южный регион Узбекистана — оазис на Амударье у подножия Гиссарских гор. Здесь эпохи лежат слоями: буддийские монастыри Кушанского царства, святыни исламских учёных, живые традиции горных кишлаков.",
         "В области учтено 561 объект материального культурного наследия, из них 444 — археологические. В Сурхандарье за один день можно пройти две тысячи лет истории."],
  },
  sec: {
    about: { uz: "Viloyat haqida", en: "About the region", ru: "О регионе" },
    top: { uz: "Asosiy diqqatga sazovor joylar", en: "Top attractions", ru: "Главные достопримечательности" },
    video: { uz: "Surxondaryo haqida video", en: "Video about Surkhandarya", ru: "Видео о Сурхандарье" },
    gallery: { uz: "Fotogalereya 📸", en: "Photo gallery 📸", ru: "Фотогалерея 📸" },
    climate: { uz: "Iqlim 🌡", en: "Climate 🌡", ru: "Климат 🌡" },
    gifts: { uz: "Sovg‘alar va esdaliklar 🛍", en: "Gifts and souvenirs 🛍", ru: "Подарки и сувениры 🛍" },
    food: { uz: "Oshxona 🍽", en: "Cuisine 🍽", ru: "Кухня 🍽" },
    photo: { uz: "Fotozonalar 🙋", en: "Photo spots 🙋", ru: "Фотозоны 🙋" },
    history: { uz: "Tarix 🏺", en: "History 🏺", ru: "История 🏺" },
    map: { uz: "Xarita 🗺", en: "Map 🗺", ru: "Карта 🗺" },
    themes: { uz: "Boshqa yo‘nalishlar", en: "Other themes", ru: "Другие направления" },
  },
  seeall: { uz: "Barchasini ko‘rish →", en: "See all →", ru: "Смотреть все →" },
  allphotos: { uz: "Barcha suratlar →", en: "All photos →", ru: "Все фото →" },
  fullmap: { uz: "To‘liq xaritani ochish →", en: "Open the full map →", ru: "Открыть полную карту →" },
  video_note: { uz: "Viloyatning turistik salohiyati haqidagi targ‘ibot videoroligi shu yerga joylanadi.", en: "A promotional video on the region’s tourism potential will be placed here.", ru: "Здесь будет размещён промо-ролик о туристическом потенциале региона." },
  climate: {
    uz: "Viloyat iqlimi keskin kontinental va quruq. Termizda iyul oyida o‘rtacha kunduzgi harorat 39,8 °C ga yetadi, qayd etilgan eng yuqori harorat 47,0 °C. Yanvarda tungi o‘rtacha harorat −0,2 °C atrofida. Yillik yog‘in miqdori atigi 160,6 mm. Sayohat uchun eng qulay fasllar — bahor (mart–may) va kuz (sentabr–noyabr); yozda tog‘li Boysun va Sariosiyo tumanlari salqinroq.",
    en: "The climate is sharply continental and dry. In Termez the average July daytime high reaches 39.8 °C, with a record of 47.0 °C; the average January night low is about −0.2 °C. Annual precipitation is only 160.6 mm. The best seasons are spring (March–May) and autumn (September–November); in summer the mountain districts of Boysun and Sariosiyo are cooler.",
    ru: "Климат резко континентальный и сухой. В Термезе средний дневной максимум июля — 39,8 °C, рекорд — 47,0 °C; средний ночной минимум января — около −0,2 °C. Осадков всего 160,6 мм в год. Лучшее время — весна (март–май) и осень (сентябрь–ноябрь); летом прохладнее в горных Байсуне и Сариасии.",
  },
  gifts: {
    uz: "Surxon vohasidan esdalik sifatida milliy liboslar va kashtado‘zlik buyumlarini olib ketish mumkin — Jarqo‘rg‘on tumanidagi Milliy liboslar markazi ana shu an’analarni namoyish etadi. Boysun madaniy makoni esa qadimiy marosimlar, qo‘shiqlar va hunarmandchilik bilan mashhur; «Boysun bahori» festivali kunlarida hunarmandlar mahsulotlari bilan tanishish uchun eng yaxshi imkoniyat yaratiladi.",
    en: "Popular keepsakes from the Surkhan oasis are national costumes and embroidery — the National Costumes Centre in Jarqo‘rg‘on district showcases these traditions. The Boysun cultural space is famous for its ancient rituals, songs and crafts; the Boysun Bahori festival is the best time to meet local artisans.",
    ru: "Из Сурханского оазиса привозят национальную одежду и вышивку — эти традиции представляет Центр национальных костюмов в Джаркурганском районе. Культурное пространство Байсуна славится обрядами, песнями и ремёслами; лучшее время познакомиться с мастерами — фестиваль «Бойсун бахори».",
  },
  food: {
    uz: "Surxon dasturxoni o‘zbek milliy oshxonasining boy an’analarini davom ettiradi: palov, tandirda pishirilgan non va go‘sht taomlari, yangi uzilgan meva-sabzavotlar. Termizda savdo va gastronomik turizmni rivojlantirish maqsadida «Saxovat» mahallasi va FOOD BAZAAR loyihasi amalga oshirilmoqda.",
    en: "The Surkhan table continues the rich traditions of Uzbek cuisine: plov, tandoor-baked bread and meat, fresh fruit and vegetables. In Termez the Sakhovat mahalla and FOOD BAZAAR project are being developed for trade and gastronomic tourism.",
    ru: "Сурханский дастархан продолжает традиции узбекской кухни: плов, лепёшки и мясо из тандыра, свежие фрукты и овощи. В Термезе для торгового и гастрономического туризма развивается проект махалли «Сахават» и FOOD BAZAAR.",
  },
  photo_note: {
    uz: "☪ — islomiy ziyoratgoh, ☸ — buddaviylik yodgorligi. Ziyoratgohlarga tashrif buyurganda yelka va tizzani yopuvchi kiyim tavsiya etiladi; ayollar uchun ro‘mol tavsiya qilinadi. Arxeologik yodgorliklarda belgilangan yo‘laklardan chiqmang.",
    en: "☪ — Islamic shrine, ☸ — Buddhist monument. When visiting shrines, clothing covering shoulders and knees is recommended; a headscarf is recommended for women. Stay on marked paths at archaeological sites.",
    ru: "☪ — исламская святыня, ☸ — буддийский памятник. При посещении святынь рекомендуется одежда, закрывающая плечи и колени; женщинам — платок. На археологических памятниках не сходите с обозначенных троп.",
  },
  history: {
    uz: ["Surxon vohasida inson qadimdan yashagan: 1938-yilda Boysuntog‘dagi Teshiktosh g‘orida A. P. Okladnikov neandertal bola qoldiqlarini topgan. Eski Termiz Markaziy Osiyoning eng qadimgi shaharlaridan biri bo‘lib, miloddan avvalgi III asrdan oldin Amudaryo bo‘yida vujudga kelgan.",
         "Kushonlar davrida Termiz buddaviylikning yirik markaziga aylandi — Fayoztepa, Qoratepa va Zurmala stupasi shu davrdan qolgan. IX asrda bu yerda mutasavvif olim Hakim at-Termiziy yashagan; uning maqbarasi atrofida shakllangan majmua bugun ham yirik ziyoratgoh. 1108–1109-yillarda Sulton Sanjar davrida Jarqo‘rg‘on minorasi qad rostladi."],
    en: ["People have lived in the Surkhan oasis since deep antiquity: in 1938 A. P. Okladnikov found the remains of a Neanderthal child in Teshik-Tash cave. Old Termez, founded on the Amu Darya before the 3rd century BC, is one of Central Asia’s oldest towns.",
         "Under the Kushans, Termez became a major Buddhist centre — Fayaz Tepe, Kara Tepe and the Zurmala stupa date from this time. In the 9th century the Sufi scholar Hakim at-Termizi lived here; the complex around his tomb is still a major pilgrimage site. In 1108–1109, under Sultan Sanjar, the Jarkurgan minaret was raised."],
    ru: ["Человек жил в Сурханском оазисе с глубокой древности: в 1938 году А. П. Окладников нашёл в пещере Тешик-Таш останки ребёнка-неандертальца. Старый Термез, возникший на Амударье до III века до н. э., — один из древнейших городов Центральной Азии.",
         "При Кушанах Термез стал крупным буддийским центром — отсюда Фаязтепа, Каратепа и ступа Зурмала. В IX веке здесь жил суфийский учёный Хаким ат-Термизи; комплекс у его мавзолея и сегодня — крупная святыня. В 1108–1109 годах при султане Санджаре был возведён Джаркурганский минарет."],
  },
  src: { uz: "Manbalar: Statistika agentligi (meros obyektlari, 01.01.2023); Vikipediya (Termiz iqlimi, tarixiy ma’lumotlar); Turizm qo‘mitasi (loyihalar). Har bir obyekt manbasi «Yo‘nalishlar» sahifasida.",
         en: "Sources: Statistics Agency (heritage sites, 1 Jan 2023); Wikipedia (Termez climate, history); Tourism Committee (projects). Each site’s source is on the Themes page.",
         ru: "Источники: Агентство статистики (объекты наследия, 01.01.2023); Википедия (климат Термеза, история); Комитет по туризму (проекты). Источник каждого объекта — на странице «Направления»." },
};
const TOP = [7, 1, 2, 3, 8, 11, 13];
const PHOTO_ZONES = [[7, "☪"], [8, "☪"], [10, "☪"], [12, "☪"], [11, ""], [1, "☸"], [2, "☸"], [3, "☸"], [9, ""], [15, ""]];
const SECTIONS = ["about", "top", "video", "gallery", "climate", "gifts", "food", "photo", "history", "map", "themes"];
const L_ = (o) => o[LANG] || o.uz;
let miniMap;

window.pageRender = () => {
  const byId = Object.fromEntries(objects().map((f) => [f.properties.id, f]));
  const crumbs = L_(H.crumbs);
  document.getElementById("crumbs").innerHTML = `<a href="index.html">${crumbs[0]}</a> / <span>${crumbs[1]}</span> / <b>${crumbs[2]}</b>`;
  document.getElementById("h1").textContent = L_(H.h1);
  document.getElementById("h2").textContent = L_(H.h2);
  document.getElementById("intro").innerHTML = L_(H.intro).map((p) => `<p>${p}</p>`).join("");
  SECTIONS.forEach((s) => { const el = document.querySelector(`[data-sec="${s}"]`); if (el) el.textContent = L_(H.sec[s]); });
  document.getElementById("toc").innerHTML = SECTIONS.map((s) => `<a href="#${s}-s">${L_(H.sec[s]).replace(/\s\S+$/u, (m) => (/\p{Extended_Pictographic}/u.test(m) ? "" : m))}</a>`).join("");

  document.getElementById("toplist").innerHTML = TOP.map((id) => `<li>✓ ${field(byId[id].properties, "nomi")}</li>`).join("");
  document.getElementById("topcards").innerHTML = TOP.slice(0, 4).map((id) => {
    const p = byId[id].properties, c = CLUSTERS[p.klaster];
    return `<div class="card">${photoHtml(p, true)}<div class="bar" style="background:${c.color}"></div><div class="body"><h3><a href="yonalishlar.html#${p.klaster}" style="text-decoration:none">${field(p, "nomi")}</a></h3><p>${cname(p.klaster)}</p></div></div>`;
  }).join("");
  const CL = { uz: ["Termiz, iyul (o‘rt. maks.)", "Termiz, yanvar (o‘rt. min.)", "yillik yog‘in"], en: ["Termez, July (avg. high)", "Termez, January (avg. low)", "annual precipitation"], ru: ["Термез, июль (ср. макс.)", "Термез, январь (ср. мин.)", "осадки за год"] };
  document.querySelectorAll(".clim span").forEach((el, i) => (el.textContent = L_(CL)[i]));
  document.querySelectorAll("[data-t]").forEach((el) => (el.textContent = L_(H[el.dataset.t])));

  document.getElementById("gallery").innerHTML = objects().filter((f) => f.properties.foto).slice(0, 3)
    .map((f) => `<div class="card">${photoHtml(f.properties)}<div class="body"><h3 style="font-size:16px">${field(f.properties, "nomi")}</h3></div></div>`).join("");
  document.getElementById("climate").textContent = L_(H.climate);
  document.getElementById("gifts").textContent = L_(H.gifts);
  document.getElementById("food").textContent = L_(H.food);
  document.getElementById("zones").innerHTML = PHOTO_ZONES.map(([id, m]) => `<li>${m ? m + " " : ""}${field(byId[id].properties, "nomi")}</li>`).join("");
  document.getElementById("zonenote").textContent = L_(H.photo_note);
  document.getElementById("history").innerHTML = L_(H.history).map((p) => `<p>${p}</p>`).join("");
  document.getElementById("themes").innerHTML = Object.entries(CLUSTERS).map(([k, c]) => {
    const n = objects().filter((f) => f.properties.klaster === k).length;
    return `<a class="card" href="yonalishlar.html#${k}"><div class="photo"><img src="img/${k}.svg" alt="" style="width:46%;height:auto;object-fit:contain"></div><div class="bar" style="background:${c.color}"></div><div class="body"><h3 style="color:${c.color}">${cname(k)}</h3><p>${n} ${LANG === "uz" ? "ta obyekt" : LANG === "ru" ? "объектов" : "sites"}</p></div></a>`;
  }).join("");
  document.getElementById("srcline").textContent = L_(H.src);

  if (!miniMap && window.L) {
    miniMap = L.map("minimap", { scrollWheelZoom: false }).setView([37.75, 67.45], 8);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(miniMap);
  }
  if (miniMap) {
    miniMap.eachLayer((l) => { if (l instanceof L.CircleMarker) miniMap.removeLayer(l); });
    objects().forEach((f) => {
      if (!f.geometry) return;
      const [lon, lat] = f.geometry.coordinates, p = f.properties;
      L.circleMarker([lat, lon], { radius: 7, color: "#fff", weight: 2, fillColor: CLUSTERS[p.klaster].color, fillOpacity: 1 })
        .bindTooltip(field(p, "nomi")).addTo(miniMap);
    });
  }
};
render();
