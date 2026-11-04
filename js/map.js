// Interaktiv xarita (3.1-§, 3.6-rasm): klaster filtri, qidiruv, obyekt kartochkasi
header("xarita.html");

const map = L.map("map", { scrollWheelZoom: true }).setView([37.75, 67.45], 8);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const active = { bud: true, zi: true, eko: true, etn: true };
const layers = {};
Object.keys(CLUSTERS).forEach((k) => (layers[k] = L.layerGroup().addTo(map)));
const markers = {};

function popupHtml(f) {
  const p = f.properties, c = CLUSTERS[p.klaster];
  const approx = p.aniqlik === "taxminiy" ? `<p><span class="badge-warn">${t("approx")}</span></p>` : "";
  const [lon, lat] = f.geometry.coordinates;
  return `<span class="tag" style="background:${c.color}">${cname(p.klaster)}</span>
    <h4>${field(p, "nomi")}</h4>
    <div style="font-size:13px;color:#5b6170">${p.tuman}${p.davr && p.davr !== "–" ? " · " + t("period") + ": " + p.davr : ""}</div>
    <p style="margin:8px 0">${field(p, "tavsif")}</p>${approx}
    <a class="btn" style="padding:6px 12px;font-size:14px;margin:0" target="_blank" rel="noopener"
       href="https://www.openstreetmap.org/directions?to=${lat},${lon}#map=13/${lat}/${lon}">${t("route_btn")}</a>
    <p class="src" style="margin-top:8px">${t("source")}: <a href="${p.manba}" target="_blank" rel="noopener">${new URL(p.manba).hostname}</a></p>`;
}

function buildMarkers() {
  Object.values(layers).forEach((lg) => lg.clearLayers());
  objects().forEach((f) => {
    if (!f.geometry) return;
    const [lon, lat] = f.geometry.coordinates, p = f.properties, c = CLUSTERS[p.klaster];
    const m = L.circleMarker([lat, lon], {
      radius: 9, color: "#fff", weight: 2, fillColor: c.color, fillOpacity: 1,
      dashArray: p.aniqlik === "taxminiy" ? "3 3" : null,
    }).bindPopup(popupHtml(f)).bindTooltip(field(p, "nomi"));
    m.addTo(layers[p.klaster]);
    markers[p.id] = m;
  });
}

function renderChips() {
  document.getElementById("chips").innerHTML = Object.entries(CLUSTERS).map(([k, c]) =>
    `<button type="button" class="chip" data-k="${k}" aria-pressed="${active[k]}" style="border-color:${c.color};color:${c.color}">${cname(k)}</button>`).join("");
  document.querySelectorAll(".chip").forEach((b) => b.addEventListener("click", () => {
    const k = b.dataset.k; active[k] = !active[k];
    active[k] ? map.addLayer(layers[k]) : map.removeLayer(layers[k]);
    renderChips(); renderList();
  }));
}

function renderList() {
  const q = (document.getElementById("q").value || "").toLowerCase();
  const items = objects().filter((f) => {
    const p = f.properties;
    const text = [p.nomi_uz, p.nomi_en, p.nomi_ru, p.tuman].join(" ").toLowerCase();
    return active[p.klaster] && (!q || text.includes(q));
  });
  document.getElementById("list").innerHTML = items.map((f) => {
    const p = f.properties, c = CLUSTERS[p.klaster];
    const note = !f.geometry ? ` <span class="badge-warn">${t("no_coords")}</span>` : "";
    return `<button type="button" class="item" data-id="${p.id}" ${!f.geometry ? "disabled" : ""}><span class="dot" style="background:${c.color}"></span>
      <span><b>${field(p, "nomi")}</b><br><small style="color:#5b6170">${cname(p.klaster)} · ${p.tuman}</small>${note}</span></button>`;
  }).join("");
  document.querySelectorAll(".list .item:not([disabled])").forEach((el) => el.addEventListener("click", () => {
    const m = markers[el.dataset.id];
    map.setView(m.getLatLng(), 13); m.openPopup();
  }));
}

document.getElementById("q").addEventListener("input", renderList);
window.pageRender = () => { buildMarkers(); renderChips(); renderList(); };
render();
