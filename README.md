# Real Estate Photography Direction

An image-led photography shot brief for an external photographer. One scroll:
the photographer looks at frames and shoots the list. Roughly 800 words on the
whole page, about ten words per image.

**Images**
- **Masterplan** — 37 real reference photographs supplied by the art director,
  grouped into the 8 shot types they demonstrate (`assets/img/plan/`).
- **Every other category** — AI direction references, labelled `AI` on the frame.
  Generated with Nano Banana 2, enhanced with Magnific (`ultra-photo`, 2x).
  Nine later top-ups used Nano Banana 2 Lite with no Magnific pass to save credits.

> The AI frames are not photographs of the project and not photographs of any
> real place. Match the treatment, not the building.

---

## The core rule

**36 images per category. Per type. Per project.**

| | |
|---|---|
| Categories | 10 |
| Images per category | 36 |
| **Total per project** | **360** |
| Shot slots on the list | 110 |

Each of the 110 shots carries a frame count (`qty`). The frame counts inside a
category always add up to exactly 36. The checklist counts frames, not ticks, so
progress reads `0 / 360`.

Categories: Masterplan · Architecture · Land · Location · Lifestyle · Landscape ·
Investment · Details · Drone · Night.

---

## Run it

```bash
npx -y serve photo-direction -l 4650
```

Registered in `.claude/launch.json` as `photo-direction` on port **4650**.
No build step, no dependencies. It is three static files.

---

## Files

```
photo-direction/
  index.html            page structure + the bespoke editorial modules
  assets/css/main.css   design system (tokens, components, responsive, print)
  assets/js/data.js     ALL photography content — edit this to change the brief
  assets/js/main.js     renderer, checklist, nav, reveal animation
  assets/img/           logo + favicon (Osolutions brand)
```

---

## Editing the brief

All photography content lives in `assets/js/data.js`. Nothing in the shot lists
is written by hand in the markup, so the brief can be updated without touching
the UI.

A shot:

```js
{
  code: "AR-01",                       // slot id, also the file name prefix
  title: "Hero Architectural Shot",
  type: "Wide / Hero",
  composition: "Building on one third of the frame...",
  usage: ["Website", "Ads", "Social"],
  qty: 3,                              // frames required for this shot
  notes: "This is the single most important frame of the shoot."
}
```

If you add or remove a shot, keep the category's `qty` values adding up to 36.
Check it with:

```bash
node -e "const s=require('fs').readFileSync('photo-direction/assets/js/data.js','utf8');const B=new Function(s+';return BRIEF')();B.categories.forEach(c=>console.log(c.id,c.groups.reduce((n,g)=>n+g.shots.reduce((m,x)=>m+x.qty,0),0)))"
```

Project name, client, version and date are at the top of `data.js` under `meta`.
They currently read `[ PROJECT / DEVELOPMENT NAME ]` and `[ CLIENT / BRAND ]`.

---

## Swapping images

Every frame prints its slot code in the top left corner (`MP-R1`, `AR-R2`,
`REF-01`). The `IMAGES` map at the top of `data.js` maps that code to a file:

```js
const IMAGES = {
  'MP-R1': 'assets/img/masterplan/mp-r1.jpg',
};
```

- **Replace with a real photo** — point the same key at the new file.
- **Revert a frame to a wireframe** — delete or comment out its line. Anything
  not listed renders as a placeholder, so the two modes can be mixed freely.

The frame keeps its aspect ratio and the image is `object-fit: cover`, so nothing
in the layout shifts either way.

Folders under `assets/img/`:

```
ref  masterplan  architecture  land  location
lifestyle  landscape  investment  details  drone  night
```

### How the current set was produced

| Step | Tool | Settings |
|---|---|---|
| Generate | Nano Banana 2 (`imagen-nano-banana-2-flash`) | 1K, aspect ratio per slot |
| Enhance | Magnific | `ultra-photo`, 2x, `balanced` preset |
| Web encode | ffmpeg | 1400 px long edge, Lanczos, q4 |

Prompts follow the brief's own rules: straight verticals, natural colour, real
light, negative space where the slot calls for it, people small and never looking
at the lens, and an explicit *no text / no signage / no logos* clause so nothing
renders garbled lettering.

Cost was 75 credits per generation and 90 per Magnific pass, so 165 per image and
about 5,940 for the full set of 36.

Two prompts were rejected by the provider's safety filter as false positives (both
21:9 aerials) and were regenerated with reworded copy.

---

## Checklist

The final section is a working checklist for the shoot. Ticks are stored in
`localStorage` under `repd.checklist.v1`, so a photographer can use it on
location and come back to it. Progress shows completed frames, ticked shots and
finished categories. **Reset** clears everything after a confirmation.

---

## Brand

Carried from the Osolutions Art Team Lead review:

| Token | Value |
|---|---|
| Navy | `#11253E` |
| Deep navy | `#0C1B2E` |
| Orange | `#F76302` |
| Paper | `#FBFAF8` |
| Display / body | Archivo |
| Mono (codes, labels) | IBM Plex Mono |

Logo and favicon copied from `art-lead-review/assets/img/`.

---

## Notes

- Prints cleanly: dark sections invert to white, the checklist expands, and
  reveal animations are disabled for print.
- Respects `prefers-reduced-motion`.
- No external requests except Google Fonts.
