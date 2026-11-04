"""obyektlar.csv -> obyektlar.geojson (2.3-jadvaldagi ma'lumotlar bazasi).
Koordinatasi kiritilmagan obyektlar xaritaga chiqmaydi, lekin ro'yxatda qoladi."""
import csv, json, sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent
rows = list(csv.DictReader(open(root / "data/obyektlar.csv", encoding="utf-8")))
features, missing = [], []
for r in rows:
    props = {k: v for k, v in r.items() if k not in ("kenglik", "uzunlik")}
    props["id"] = int(r["id"])
    geom = None
    if r["kenglik"] and r["uzunlik"]:
        lat, lon = float(r["kenglik"]), float(r["uzunlik"])
        if not (36.5 < lat < 39.5 and 66.5 < lon < 68.8):
            sys.exit(f"Xato: {r['nomi_uz']} koordinatasi viloyat chegarasidan tashqarida")
        geom = {"type": "Point", "coordinates": [lon, lat]}
    else:
        missing.append(r["nomi_uz"])
    features.append({"type": "Feature", "geometry": geom, "properties": props})
out = {"type": "FeatureCollection", "features": features}
(root / "data/obyektlar.geojson").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
(root / "data/obyektlar.js").write_text("window.OBYEKTLAR = " + json.dumps(out, ensure_ascii=False) + ";\n", encoding="utf-8")
print(f"{len(features)} ta obyekt; koordinatasi kiritilmagan: {len(missing)} ta")
for m in missing: print("  -", m)
