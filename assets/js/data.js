/* ==========================================================================
   REAL ESTATE PHOTOGRAPHY DIRECTION — CONTENT
   --------------------------------------------------------------------------
   One brief per project. Each project has its own page; the header switches
   between them. A project is a list of sections, and each section is a
   number, a short description, keywords, and a formula that computes its
   photo count. The formula IS the shot list.

   Sections are built from what each landing page actually has to fill, so
   the counts map to real slots rather than a generic template.

   To change a brief, edit this file only.
   ========================================================================== */

const META = {
  document: "Photography Direction",
  version:  "V5.0",
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

/* ==========================================================================
   THE THREE PROJECTS
   ========================================================================== */

const PROJECTS = [
  /* ------------------------------------------------------------------ 01 */
  {
    id: "baleine",
    file: "index.html",
    name: "Baleine Bleu Maison",
    nameAr: "بالين بلو ميزون",
    type: "Commercial tower",
    place: "Al Sahafa, Riyadh",
    facts: ["24 floors", "Offices & retail", "Nofodh Real Estate"],
    lede: "A 24 floor tower. The building is vertical, so the photography is too.",
    sections: [
      {
        n: "01",
        title: "The Tower",
        body: "The building read as one object. Full height from a distance, the " +
              "crown against the sky, and the base where it meets the plaza. " +
              "Verticals stay straight at every focal length.",
        keywords: ["Full Height", "Vertical", "Crown", "Straight Verticals"],
        formula: {
          parts: [
            { v: "3", l: "Angles<br>Front · ¾ · Low" },
            { v: "2", l: "Light<br>Day · Blue hour" },
            { v: "5", l: "Ratios<br>21:9 · 16:9 · 4:5 · 1:1 · 9:16" }
          ],
          total: 30
        },
        images: [
          "assets/img/tower/tw-1.jpg",
          "assets/img/tower/tw-4.jpg",
          "assets/img/tower/tw-3.jpg",
          "assets/img/sec/ar-3.jpg",
          "assets/img/sec/ar-10.jpg",
          "assets/img/sec/ar-7.jpg"
        ]
      },
      {
        n: "02",
        title: "Arrival",
        body: "The sequence a tenant walks: the plaza, the entrance, the lobby. " +
              "This is what sells a floor plate, so it is shot wide enough to " +
              "show the volume and the finish quality together.",
        keywords: ["Plaza", "Entrance", "Lobby", "Marble", "Volume"],
        formula: {
          parts: [
            { v: "3", l: "Points<br>Plaza · Entrance · Lobby" },
            { v: "2", l: "Distances<br>Wide · Medium" },
            { v: "5", l: "Ratios<br>21:9 · 16:9 · 4:5 · 1:1 · 9:16" }
          ],
          total: 30
        },
        images: [
          "assets/img/tower/tw-2.jpg",
          "assets/img/sec/ar-4.jpg",
          "assets/img/sec/ar-1.jpg",
          "assets/img/sec/ar-12.jpg",
          "assets/img/sec/ar-8.jpg",
          "assets/img/sec/ar-11.jpg"
        ]
      },
      {
        n: "03",
        title: "Position",
        body: "Where the tower sits on the corridor. Aerial frames that put it " +
              "with the road network and the skyline behind, so the location " +
              "argument is made by the photograph and not by a map.",
        keywords: ["Aerial", "Corridor", "Skyline", "Access"],
        formula: {
          parts: [
            { v: "3", l: "Angles<br>90° · 45° · Wide" },
            { v: "2", l: "Shots<br>Mid · Wide" },
            { v: "5", l: "Ratios<br>21:9 · 16:9 · 4:5 · 1:1 · 9:16" }
          ],
          total: 30
        },
        images: [
          "assets/img/sec/mp-4.jpg",
          "assets/img/sec/dr-3.jpg",
          "assets/img/sec/dr-6.jpg",
          "assets/img/sec/mp-1.jpg",
          "assets/img/sec/dr-4.jpg",
          "assets/img/sec/mp-3.jpg"
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ 02 */
  {
    id: "almosa",
    file: "almosa.html",
    name: "Almosa Residence 2",
    nameAr: "الموسى ريزيدنس ٢",
    type: "Residential building",
    place: "Tuwaiq, south Riyadh",
    facts: ["14 apartments", "126 – 167 m²", "Types A · B · C"],
    lede: "A finished building with 14 apartments. Shoot what a buyer walks through.",
    sections: [
      {
        n: "01",
        title: "The Building",
        body: "The finished building from the street. Full elevation, the three " +
              "quarter view and the entrance, in daylight and again lit at blue " +
              "hour. No close ups here.",
        keywords: ["Full Building", "Elevation", "Entrance", "Blue Hour"],
        formula: {
          parts: [
            { v: "3", l: "Angles<br>Front · ¾ · Low" },
            { v: "2", l: "Light<br>Day · Blue hour" },
            { v: "5", l: "Ratios<br>21:9 · 16:9 · 4:5 · 1:1 · 9:16" }
          ],
          total: 30
        },
        images: [
          "assets/img/sec/ar-2.jpg",
          "assets/img/sec/ar-9.jpg",
          "assets/img/sec/ar-5.jpg",
          "assets/img/sec/ar-6.jpg",
          "assets/img/sec/ar-10.jpg",
          "assets/img/sec/ar-4.jpg"
        ]
      },
      {
        n: "02",
        title: "Unit Types",
        body: "Three apartment types, A, B and C. Each one gets the same treatment " +
              "so the buyer can compare like with like: the same rooms, the same " +
              "angles, the same light.",
        keywords: ["Type A · B · C", "Repeatable", "Comparable", "Same Angles"],
        formula: {
          parts: [
            { v: "3", l: "Types<br>A · B · C" },
            { v: "2", l: "Distances<br>Wide · Medium" },
            { v: "5", l: "Ratios<br>21:9 · 16:9 · 4:5 · 1:1 · 9:16" }
          ],
          total: 30
        },
        images: [
          "assets/img/sec/ar-1.jpg",
          "assets/img/sec/ar-12.jpg",
          "assets/img/sec/ar-8.jpg",
          "assets/img/sec/ar-11.jpg",
          "assets/img/sec/ar-7.jpg",
          "assets/img/sec/ar-3.jpg"
        ]
      },
      {
        n: "03",
        title: "Neighbourhood",
        body: "Tuwaiq around the building. The approach road, the nearby landmarks " +
              "and people using the street, so the address feels lived in rather " +
              "than plotted on a map.",
        keywords: ["Approach", "Landmarks", "Unposed", "Human Scale"],
        formula: {
          parts: [
            { v: "3", l: "Scenes<br>street · landmark · approach" },
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
          "assets/img/sec/mp-2.jpg"
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ 03 */
  {
    id: "woroud",
    file: "woroud.html",
    name: "Woroud Almosa",
    nameAr: "مخطط ورود الموسى",
    type: "Land scheme",
    place: "Al Worood, north Jazan",
    facts: ["809,599 m²", "Residential & commercial plots", "8 service networks"],
    lede: "There is no building yet. The product is the land, so the land has to carry the frame.",
    sections: [
      {
        n: "01",
        title: "The Scheme",
        body: "The whole scheme read from the air. The plot grid, the spine road " +
              "and the water channel that runs through it. Flown at three heights " +
              "so the set is never the same view twice.",
        keywords: ["Aerial", "Plot Grid", "Scale", "Water Channel"],
        formula: {
          parts: [
            { v: "3", l: "Angles<br>90° · 45° · Wide" },
            { v: "2", l: "Shots<br>Mid · Wide" },
            { v: "5", l: "Ratios<br>21:9 · 16:9 · 4:5 · 1:1 · 9:16" }
          ],
          total: 30
        },
        images: [
          "assets/img/land/ld-1.jpg",
          "assets/img/land/ld-9.jpg",
          "assets/img/land/ld-10.jpg",
          "assets/img/land/ld-12.jpg",
          "assets/img/land/ld-2.jpg",
          "assets/img/land/ld-5.jpg"
        ]
      },
      {
        n: "02",
        title: "Plots & Services",
        body: "Bare ground reads as nothing on its own. Every plot frame is " +
              "anchored to something real: the kerb, the marker, the lighting " +
              "column, the road that arrives at it.",
        keywords: ["Plot Markers", "Kerbs", "Roads", "Lighting", "Infrastructure"],
        formula: {
          parts: [
            { v: "3", l: "Anchors<br>Road · Marker · Service" },
            { v: "2", l: "Distances<br>Wide · Close" },
            { v: "5", l: "Ratios<br>21:9 · 16:9 · 4:5 · 1:1 · 9:16" }
          ],
          total: 30
        },
        images: [
          "assets/img/land/ld-3.jpg",
          "assets/img/land/ld-4.jpg",
          "assets/img/land/ld-6.jpg",
          "assets/img/land/ld-11.jpg",
          "assets/img/land/ld-7.jpg",
          "assets/img/land/ld-8.jpg"
        ]
      },
      {
        n: "03",
        title: "Context",
        body: "What surrounds the scheme and what is coming. The horizon and the " +
              "hills behind it, the arrival road, and frames left clean enough for " +
              "the 3D massing to be laid over them later.",
        keywords: ["Horizon", "Arrival", "Massing Overlay", "Copy Space"],
        formula: {
          parts: [
            { v: "3", l: "Views<br>horizon · arrival · overlay" },
            { v: "2", l: "Light<br>Day · Golden hour" },
            { v: "5", l: "Ratios<br>21:9 · 16:9 · 4:5 · 1:1 · 9:16" }
          ],
          total: 30
        },
        images: [
          "assets/img/land/ld-5.jpg",
          "assets/img/land/ld-11.jpg",
          "assets/img/land/ld-3.jpg",
          "assets/img/land/ld-6.jpg",
          "assets/img/land/ld-8.jpg",
          "assets/img/land/ld-1.jpg"
        ]
      }
    ]
  }
];

PROJECTS.forEach(function (p) {
  p.total = p.sections.reduce(function (n, s) { return n + s.formula.total; }, 0);
});
