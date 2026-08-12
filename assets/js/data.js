/* ==========================================================================
   REAL ESTATE PHOTOGRAPHY DIRECTION — CONTENT
   --------------------------------------------------------------------------
   Structure follows the reference deck: each section is a number, a short
   description, a keyword row, and a formula that computes its photo count.
   The formula IS the shot list — it says how many subjects, in which
   orientations, from which angles. Nothing else needs to be written down.

   To change the brief, edit this file only.
   ========================================================================== */

const META = {
  project:  "[ PROJECT / DEVELOPMENT NAME ]",
  client:   "[ CLIENT / BRAND ]",
  document: "Photography Direction",
  version:  "V2.0",
  date:     "August 2026"
};

/* Every section delivers 36 photos. 4 sections = 144 photos per project. */
const SECTIONS = [
  {
    n: "01",
    title: "Masterplan",
    body: "Aerial coverage that reads the development as one complete place. " +
          "Scale, planning, access and the context around it, captured from three " +
          "altitudes so the set is never the same view repeated.",
    keywords: ["Aerial", "Scale", "Context", "Access", "Planning"],
    formula: {
      parts: [
        { v: "3", l: "Altitudes<br>High · Mid · Low" },
        { v: "2", l: "Orientations<br>Landscape · Portrait" },
        { v: "3", l: "Angles<br>90° · 45° · Wide" },
        { v: "2", l: "Light<br>Day · Golden hour" }
      ],
      total: 36
    },
    images: [
      "assets/img/plan/drone-wide/drone-wide-01.jpg",
      "assets/img/plan/drone-90/drone-90-01.jpg",
      "assets/img/plan/drone-90/drone-90-08.jpg",
      "assets/img/plan/drone-90/drone-90-10.jpg",
      "assets/img/plan/perspective/perspective-01.jpg",
      "assets/img/plan/perspective/perspective-04.jpg"
    ],
    source: "real"
  },
  {
    n: "02",
    title: "Architecture",
    body: "The buildings as designed objects. Verticals stay straight, hero frames " +
          "keep open space for headlines, and every subject is covered from the full " +
          "elevation down to the material joint.",
    keywords: ["Straight Verticals", "Negative Space", "Materials", "Entrance"],
    formula: {
      parts: [
        { v: "3", l: "Buildings<br>or facades" },
        { v: "2", l: "Orientations<br>Landscape · Portrait" },
        { v: "3", l: "Angles<br>Front · ¾ · Low" },
        { v: "2", l: "Distances<br>Wide · Detail" }
      ],
      total: 36
    },
    images: [
      "assets/img/architecture/ar-r1.jpg",
      "assets/img/architecture/ar-r5.jpg",
      "assets/img/architecture/ar-r2.jpg",
      "assets/img/architecture/ar-r4.jpg",
      "assets/img/architecture/ar-r6.jpg",
      "assets/img/architecture/ar-r3.jpg"
    ],
    source: "ai"
  },
  {
    n: "03",
    title: "Land & Plots",
    body: "Empty ground photographed on its own reads as nothing. Every plot frame " +
          "is anchored to something real: a road, a boundary, infrastructure or a " +
          "finished building behind it.",
    keywords: ["Plot in Context", "Boundaries", "Infrastructure", "Access Road"],
    formula: {
      parts: [
        { v: "3", l: "Plots<br>across the site" },
        { v: "2", l: "Orientations<br>Landscape · Portrait" },
        { v: "3", l: "Anchors<br>Road · Boundary · Building" },
        { v: "2", l: "Distances<br>Wide · Close" }
      ],
      total: 36
    },
    images: [
      "assets/img/plan/eye-level/eye-level-08.jpg",
      "assets/img/plan/eye-level/eye-level-01.jpg",
      "assets/img/plan/eye-level/eye-level-02.jpg",
      "assets/img/plan/eye-level/eye-level-05.jpg",
      "assets/img/plan/low-angle/low-angle-06.jpg",
      "assets/img/plan/perspective/perspective-03.jpg"
    ],
    source: "real"
  },
  {
    n: "04",
    title: "Lifestyle",
    body: "The project is the hero. People are in the frame to give it scale and " +
          "make it feel used. Everyone is captured mid movement, never posed and " +
          "never looking at the lens.",
    keywords: ["Unposed", "Human Scale", "Golden Hour", "Landscape"],
    formula: {
      parts: [
        { v: "3", l: "Scenes<br>walkway · plaza · green" },
        { v: "2", l: "Orientations<br>Landscape · Portrait" },
        { v: "3", l: "Distances<br>Wide · Medium · Close" },
        { v: "2", l: "Versions<br>With people · Clean" }
      ],
      total: 36
    },
    images: [
      "assets/img/lifestyle/lf-r1.jpg",
      "assets/img/lifestyle/lf-r2.jpg",
      "assets/img/lifestyle/lf-r3.jpg",
      "assets/img/landscape/ls-r1.jpg",
      "assets/img/landscape/ls-r2.jpg",
      "assets/img/landscape/ls-r3.jpg"
    ],
    source: "ai"
  }
];

/* Quick reference. One line each, no prose. */
const RULES = {
  light: [
    { t: "Daylight",    w: "09:00 — 15:00",  f: "Masterplan · Architecture" },
    { t: "Golden hour", w: "45 min to sunset", f: "Lifestyle · Campaigns" },
    { t: "Blue hour",   w: "20 — 35 min after", f: "Hero · Luxury" },
    { t: "Night",       w: "After full dark", f: "Lighting · Entrances" }
  ],
  ratios: [
    { r: "21:9", l: "Web hero" },
    { r: "16:9", l: "Web / Ads" },
    { r: "4:5",  l: "Feed" },
    { r: "1:1",  l: "Square" },
    { r: "9:16", l: "Reels" }
  ],
  deliver: [
    "RAW + JPG, full resolution",
    "Natural colour, no presets",
    "6000 px long edge minimum",
    "Straight verticals",
    "Bracket entrances, blue hour and night",
    "One folder per section"
  ],
  never: [
    "Posing or looking at the lens",
    "People dominating the frame",
    "Empty land with no anchor",
    "The same aerial height twice",
    "Baked-in grading",
    "Tight crops with no margin"
  ]
};

const TOTAL = SECTIONS.reduce(function (n, s) { return n + s.formula.total; }, 0);
