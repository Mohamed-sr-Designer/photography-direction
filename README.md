# Real Estate Photography Direction

A premium editorial production brief, built to be sent to an external photographer
before a shoot. It is a website, not a PDF: one long scrolling document with a
sticky section nav and an interactive shot checklist.

**Current state: wireframe.** Every image on the page is a CSS placeholder frame
with a slot code, an aspect ratio and a caption. No photography and no stock
imagery has been added, by request.

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

## Adding the real images later

Every placeholder prints its slot code in the top left corner (`MP-R1`, `AR-R2`,
`REF-01`). To swap a placeholder for a real photograph, add one line to the
`IMAGES` map at the top of `data.js`:

```js
const IMAGES = {
  'MP-R1': 'assets/img/masterplan/hero-aerial.jpg',
  'AR-R1': 'assets/img/architecture/hero.jpg',
};
```

Anything not listed stays a wireframe, so images can be dropped in one at a time
as they are prepared. The frame keeps its aspect ratio and the image is
`object-fit: cover`, so nothing in the layout shifts.

Suggested folders under `assets/img/`:

```
hero  masterplan  architecture  land  location
lifestyle  landscape  investment  details  drone  night
```

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
