/* ==========================================================================
   REAL ESTATE PHOTOGRAPHY DIRECTION — CONTENT
   --------------------------------------------------------------------------
   Structure follows the reference deck: each section is a number, a short
   description, a keyword row, and a formula that computes its photo count.
   The formula IS the shot list — how many subjects, in which orientations,
   from which angles. Nothing else needs writing down.

   To change the brief, edit this file only.
   ========================================================================== */

const META = {
  project:  "[ PROJECT / DEVELOPMENT NAME ]",
  client:   "[ CLIENT / BRAND ]",
  document: "Photography Direction",
  version:  "V3.0",
  date:     "August 2026"
};

/* Shown in the hero: every hero subject is captured in all five. */
const RATIOS = [
  { r: "21:9", l: "Web hero" },
  { r: "16:9", l: "Web / Ads" },
  { r: "4:5",  l: "Feed" },
  { r: "1:1",  l: "Square" },
  { r: "9:16", l: "Reels" }
];

/* Anyone appearing in frame is Saudi: thobe and shemagh, or abaya. */
const CASTING = "Everyone in frame is Saudi. Men in white thobe and shemagh, " +
                "women in abaya. Unposed, mid movement, never facing the lens.";

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
    title: "Interiors",
    body: "The building from the inside. For an office or headquarters: parking, " +
          "reception and the working floors. For a villa: the living spaces, the " +
          "furniture and the open American kitchen. For a compound: the shared " +
          "amenities. Shoot each space wide, then medium, then the finish detail.",
    keywords: ["Reception", "Office Floor", "Parking", "Living & Furniture",
               "American Kitchen", "Amenities"],
    formula: {
      parts: [
        { v: "3", l: "Spaces<br>per property type" },
        { v: "2", l: "Orientations<br>Landscape · Portrait" },
        { v: "3", l: "Distances<br>Wide · Medium · Detail" },
        { v: "2", l: "Light<br>Day · Evening" }
      ],
      total: 36
    },
    images: [
      "assets/img/interior/it-r1.jpg",
      "assets/img/interior/it-r2.jpg",
      "assets/img/interior/it-r3.jpg",
      "assets/img/interior/it-r4.jpg",
      "assets/img/interior/it-r5.jpg",
      "assets/img/interior/it-r6.jpg"
    ],
    source: "ai"
  },
  {
    n: "04",
    title: "Lifestyle",
    body: "The project is the hero. People are in the frame to give it scale and " +
          "make it feel used. Everyone is captured mid movement, never posed and " +
          "never looking at the lens.",
    keywords: ["Saudi Casting", "Unposed", "Human Scale", "Golden Hour"],
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
    { t: "Daylight",    w: "09:00 — 15:00",     f: "Masterplan · Architecture" },
    { t: "Golden hour", w: "45 min to sunset",  f: "Lifestyle · Campaigns" },
    { t: "Blue hour",   w: "20 — 35 min after", f: "Hero · Luxury" },
    { t: "Night",       w: "After full dark",   f: "Lighting · Entrances" }
  ],
  deliver: [
    "RAW + JPG, full resolution",
    "Natural colour, no presets",
    "6000 px long edge minimum",
    "Straight verticals",
    "Bracket interiors, entrances and blue hour",
    "One folder per section"
  ]
};

const TOTAL = SECTIONS.reduce(function (n, s) { return n + s.formula.total; }, 0);
