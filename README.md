# Real Estate Photography Direction

A photography brief with **one page per project**, switched from the header.
Each section is a number, a short description, keywords, and a formula that
computes its photo count. The formula is the shot list.

| Page | Project | Type | Place | Photos |
|---|---|---|---|---|
| `index.html` | Baleine Bleu Maison | Commercial tower, 24 floors | Al Sahafa, Riyadh | 90 |
| `almosa.html` | Almosa Residence 2 | 14 apartments | Tuwaiq, south Riyadh | 90 |
| `woroud.html` | Woroud Almosa | Land scheme, 809,599 m² | Al Worood, north Jazan | 90 |
| | | | **Total** | **270** |

Every section is `3 × 2 × 5 = 30`. The five delivery ratios are a counted
factor, because the brief requires each hero subject shot in all five on
location rather than cropped afterwards.

Sections are drawn from what each landing page actually has to fill, so the
counts map to real slots:

- **Baleine** — The Tower · Arrival · Position (vertical building, lobby, corridor)
- **Almosa** — The Building · Unit Types · Neighbourhood (finished block, A/B/C, street)
- **Woroud** — The Scheme · Plots & Services · Context (no building exists yet)

## Run it

```bash
npx -y serve photo-direction -l 4650
```

## Images

All frames are **1200 × 900 (4:3)**, matching the card exactly, so each fills
its card with nothing cropped and no letterboxing.

- `assets/img/land/` — supplied masterplan photography, used for Woroud Almosa
- `assets/img/tower/` — generated tower set for Baleine
- `assets/img/sec/` — generated Saudi architecture, drone and lifestyle frames

Generated frames are labelled `Reference` on the tile. They are direction
references, not photographs of the projects.

## Editing

Everything lives in `assets/js/data.js` — `PROJECTS` holds the three briefs.
Adding a project means adding an entry plus a copy of `index.html` with a
different `PROJECT_ID`. Totals and the section count are derived from the data.
