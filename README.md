# SURXON — Surxondaryo turizmi raqamli targ‘ib qilish tizimi

Magistrlik dissertatsiyasi («Surxondaryo viloyati turizm salohiyatini raqamli grafik dizayn vositalari orqali targ‘ib qilish tizimini ishlab chiqish», III bob) uchun ilmiy prototip. Rasmiy davlat sayti emas.

## Tarkibi
- `index.html` — bosh sahifa; `yonalishlar.html` — 4 tematik yo‘nalish; `xarita.html` — interaktiv xarita (Leaflet); `marshrutlar.html`, `tadbirlar.html`, `amaliy.html`
- `data/obyektlar.csv` — turistik obyektlar ma’lumotlar bazasi (2.3-jadval). Har bir yozuvda manba ko‘rsatilgan.
- `tools/csv_to_geojson.py` — CSV ni `obyektlar.geojson` va `obyektlar.js` ga o‘tkazadi.
- `img/` — SURXON logotipi va klaster sub-belgilari; `vendor/leaflet` — Leaflet 1.9.4 (BSD-2 litsenziya).

## Ma’lumotni yangilash
1. `data/obyektlar.csv` ni tahrirlang (koordinatalar: `kenglik`, `uzunlik`; `aniqlik`: aniq / taxminiy / kiritilmagan).
2. `python3 tools/csv_to_geojson.py` ni ishga tushiring.
3. O‘zgarishlarni commit qiling.

## Tekshirilishi kerak
`aniqlik` ustunida «taxminiy» yoki «kiritilmagan» belgisi bor obyektlar koordinatalarini joyida tekshirib kiritish lozim.
