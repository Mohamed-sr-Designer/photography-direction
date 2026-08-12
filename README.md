# Real Estate Photography Direction

A photography direction deck for an external photographer. Four sections, one
scroll, ~460 words. Structure follows the supplied reference deck:

> number + title → short description → **keywords** → a **formula** that
> computes the photo count → a uniform image grid.

The formula is the shot list. It says how many subjects, in which orientations,
from which angles — so nothing needs a written shot-by-shot list.

| Section | Formula | Photos |
|---|---|---|
| 01 Masterplan | 3 altitudes × 2 orientations × 3 angles × 2 light | 36 |
| 02 Architecture | 3 buildings × 2 orientations × 3 angles × 2 distances | 36 |
| 03 Land & Plots | 3 plots × 2 orientations × 3 anchors × 2 distances | 36 |
| 04 Lifestyle | 3 scenes × 2 orientations × 3 distances × 2 versions | 36 |
| **Total** | | **144** |

---

## Images

24 images, six per section, all cropped to the same 4:3 tile so the set reads as
one system.

- **Masterplan and Land & Plots** — real reference photographs supplied by the
  art director. Filtered down from 63: thumbnails under 600 px were dropped, and
  so was every frame carrying a listing overlay, a polygon markup, an agency logo
  or a visible watermark. Those are sales graphics, not photography references.
- **Architecture and Lifestyle** — AI direction references, labelled
  `AI reference` on the tile. Generated with Nano Banana 2, enhanced with
  Magnific (`ultra-photo`, 2x); later top-ups used Nano Banana 2 Lite with no
  Magnific pass to save credits.

> The AI frames are not photographs of the project and not photographs of any
> real place. Match the treatment, not the building.

`assets/img/` also holds generated frames not currently placed in the deck
(`ref/`, `masterplan/`, `land/`, `location/`, `investment/`, `details/`,
`drone/`, `night/`). They are kept so any section can be re-imaged without
spending credits again.

---

## Run it

```bash
npx -y serve photo-direction -l 4650
```

Registered in `.claude/launch.json` as `photo-direction`, port **4650**.
No build step, no dependencies.

## Files

```
index.html            page shell, everything else is generated
assets/css/main.css   design system
assets/js/data.js     ALL content — sections, formulas, image lists, rules
assets/js/main.js     renderer, nav, reveal
```

## Editing

Everything lives in `assets/js/data.js`.

- **Change a count** — edit that section's `formula.parts` and `total`.
  The hero total adds itself up from the sections.
- **Swap an image** — point the path in that section's `images` array at a new
  file. Six per section keeps the grid even.
- **Add a section** — append to `SECTIONS`; the nav, drawer and total follow.
- **Mark a section's images as real photography** — set `source` to anything
  other than `"ai"` and the `AI reference` badge disappears.

## Brand

Osolutions: navy `#11253E`, deep `#0C1B2E`, orange `#F76302`, Archivo +
IBM Plex Mono. Logo from `art-lead-review/assets/img/`.

## Notes

- Prints cleanly; respects `prefers-reduced-motion`.
- `noindex` — the supplied reference photographs are third-party material, so
  keep the page unindexed and check rights before any client-facing use.
