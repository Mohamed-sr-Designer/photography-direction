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
  version:  "V4.0",
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

/* Every section delivers 30 photos. 3 sections = 90 photos per project. */
const SECTIONS = [
  {
    n: "01",
    title: "Masterplan",
    body: "Aerial coverage that reads the development as one complete place. " +
          "Scale, planning, access and the context around it, flown so the set " +
          "is never the same view repeated.",
    keywords: ["Aerial", "Scale", "Context", "Mid Shot", "Wide Shot"],
    formula: {
      parts: [
        { v: "3", l: "Angles<br>90° · 45° · Wide" },
        { v: "2", l: "Shots<br>Mid · Wide" },
        { v: "5", l: "Ratios<br>21:9 · 16:9 · 4:5 · 1:1 · 9:16" }
      ],
      total: 30
    },
    /* Shown as two columns, side by side. */
    groups: [
      {
        label: "Masterplan",
        note: "The place as one whole",
        images: [
          "assets/img/sec/mp-1.jpg",
          "assets/img/sec/mp-2.jpg",
          "assets/img/sec/mp-3.jpg",
          "assets/img/sec/mp-4.jpg",
          "assets/img/sec/mp-5.jpg",
          "assets/img/sec/mp-6.jpg"
        ]
      },
      {
        label: "Drone",
        note: "Mid and wide, at 45° and 90°",
        images: [
          "assets/img/sec/dr-1.jpg",
          "assets/img/sec/dr-2.jpg",
          "assets/img/sec/dr-3.jpg",
          "assets/img/sec/dr-4.jpg",
          "assets/img/sec/dr-5.jpg",
          "assets/img/sec/dr-6.jpg"
        ]
      }
    ],
    source: "ai"
  },
  {
    n: "02",
    title: "Architecture",
    body: "The buildings as designed objects. Every frame holds the whole " +
          "building: full elevations, three quarter views and the setting around " +
          "it. No close ups in this section.",
    keywords: ["Full Building", "Straight Verticals", "Negative Space", "Entrance"],
    formula: {
      parts: [
        { v: "3", l: "Angles<br>Front · ¾ · Low" },
        { v: "2", l: "Distances<br>Wide · Medium" },
        { v: "5", l: "Ratios<br>21:9 · 16:9 · 4:5 · 1:1 · 9:16" }
      ],
      total: 30
    },
    images: [
      "assets/img/sec/ar-1.jpg",
      "assets/img/sec/ar-2.jpg",
      "assets/img/sec/ar-3.jpg",
      "assets/img/sec/ar-4.jpg",
      "assets/img/sec/ar-5.jpg",
      "assets/img/sec/ar-6.jpg",
      "assets/img/sec/ar-7.jpg",
      "assets/img/sec/ar-8.jpg",
      "assets/img/sec/ar-9.jpg",
      "assets/img/sec/ar-10.jpg",
      "assets/img/sec/ar-11.jpg",
      "assets/img/sec/ar-12.jpg"
    ],
    source: "ai"
  },
  {
    n: "03",
    title: "Lifestyle",
    body: "The project is the hero. People are in the frame to give it scale and " +
          "make it feel used. Everyone is captured mid movement, never posed and " +
          "never looking at the lens.",
    keywords: ["Unposed", "Human Scale", "Golden Hour", "Landscape"],
    formula: {
      parts: [
        { v: "3", l: "Scenes<br>walkway · plaza · green" },
        { v: "2", l: "Versions<br>With people · Clean" },
        { v: "5", l: "Ratios<br>21:9 · 16:9 · 4:5 · 1:1 · 9:16" }
      ],
      total: 30
    },
    images: [
      "assets/img/sec/lf-1.jpg",
      "assets/img/sec/lf-2.jpg",
      "assets/img/sec/lf-3.jpg",
      "assets/img/sec/lf-4.jpg",
      "assets/img/sec/lf-5.jpg",
      "assets/img/sec/lf-6.jpg"
    ],
    source: "ai"
  }
];

/* Quick reference. One line each, no prose. */
const RULES = {
  light: [
    { t: "Daylight",    f: "Masterplan · Architecture" },
    { t: "Golden hour", f: "Lifestyle · Campaigns" },
    { t: "Night",       f: "Lighting · Entrances" }
  ],
  deliver: [
    "RAW + JPG, full resolution",
    "6000 px long edge minimum",
    "One folder per section"
  ]
};

const TOTAL = SECTIONS.reduce(function (n, s) { return n + s.formula.total; }, 0);
