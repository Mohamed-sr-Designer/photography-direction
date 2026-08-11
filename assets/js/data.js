/* ==========================================================================
   REAL ESTATE PHOTOGRAPHY DIRECTION — CONTENT SYSTEM
   --------------------------------------------------------------------------
   Every photography requirement lives here as structured data.
   The UI is generated from this file. To update the brief, edit this file
   only. Do not edit markup to change shot content.

   SHOT SHAPE
   {
     code:        "MP-01",              // unique slot id, also the file prefix
     title:       "Full Development Aerial",
     type:        "Aerial / Ultra Wide",
     composition: "How the frame should be built",
     usage:       ["Website", "Ads"],   // where the image will be used
     qty:         3,                    // frames required for this shot
     notes:       "Optional extra direction"
   }

   FRAME BUDGET
   Every category must deliver 36 final images. Category quotas are the sum
   of the qty values inside that category. 10 categories x 36 = 360 images
   per project.
   ========================================================================== */

/* ==========================================================================
   IMAGE SYSTEM
   --------------------------------------------------------------------------
   The site ships as a wireframe. Every picture on the page is a placeholder
   frame drawn in CSS, so nothing has to be invented before the shoot.

   To drop a real image in, add one line below. The key is the slot code
   printed in the corner of the placeholder (MP-R1, AR-R2, REF-01 ...).
   Anything not listed stays a wireframe, so images can be added one at a
   time as they arrive.

     IMAGES['MP-R1'] = 'assets/img/masterplan/hero-aerial.jpg';

   Suggested folder structure under assets/img/ :
     hero/  masterplan/  architecture/  land/  location/
     lifestyle/  landscape/  investment/  details/  drone/  night/
   ========================================================================== */

const IMAGES = {
  /* Visual language */
  'REF-01': 'assets/img/ref/ref-01.jpg',
  'REF-02': 'assets/img/ref/ref-02.jpg',
  'REF-03': 'assets/img/ref/ref-03.jpg',
  'REF-04': 'assets/img/ref/ref-04.jpg',
  'REF-05': 'assets/img/ref/ref-05.jpg',
  'REF-06': 'assets/img/ref/ref-06.jpg',

  /* 01 Masterplan */
  'MP-R1': 'assets/img/masterplan/mp-r1.jpg',
  'MP-R2': 'assets/img/masterplan/mp-r2.jpg',
  'MP-R3': 'assets/img/masterplan/mp-r3.jpg',

  /* 02 Architecture */
  'AR-R1': 'assets/img/architecture/ar-r1.jpg',
  'AR-R2': 'assets/img/architecture/ar-r2.jpg',
  'AR-R3': 'assets/img/architecture/ar-r3.jpg',

  /* 03 Land */
  'LD-R1': 'assets/img/land/ld-r1.jpg',
  'LD-R2': 'assets/img/land/ld-r2.jpg',
  'LD-R3': 'assets/img/land/ld-r3.jpg',

  /* 04 Location */
  'LO-R1': 'assets/img/location/lo-r1.jpg',
  'LO-R2': 'assets/img/location/lo-r2.jpg',
  'LO-R3': 'assets/img/location/lo-r3.jpg',

  /* 05 Lifestyle */
  'LF-R1': 'assets/img/lifestyle/lf-r1.jpg',
  'LF-R2': 'assets/img/lifestyle/lf-r2.jpg',
  'LF-R3': 'assets/img/lifestyle/lf-r3.jpg',

  /* 06 Landscape */
  'LS-R1': 'assets/img/landscape/ls-r1.jpg',
  'LS-R2': 'assets/img/landscape/ls-r2.jpg',
  'LS-R3': 'assets/img/landscape/ls-r3.jpg',

  /* 07 Investment */
  'IN-R1': 'assets/img/investment/in-r1.jpg',
  'IN-R2': 'assets/img/investment/in-r2.jpg',
  'IN-R3': 'assets/img/investment/in-r3.jpg',

  /* 08 Details */
  'DT-R1': 'assets/img/details/dt-r1.jpg',
  'DT-R2': 'assets/img/details/dt-r2.jpg',
  'DT-R3': 'assets/img/details/dt-r3.jpg',

  /* 09 Drone */
  'DR-R1': 'assets/img/drone/dr-r1.jpg',
  'DR-R2': 'assets/img/drone/dr-r2.jpg',
  'DR-R3': 'assets/img/drone/dr-r3.jpg',

  /* 10 Night */
  'NT-R1': 'assets/img/night/nt-r1.jpg',
  'NT-R2': 'assets/img/night/nt-r2.jpg',
  'NT-R3': 'assets/img/night/nt-r3.jpg'
};

const BRIEF = {

  /* ---------------------------------------------------------------- meta */
  meta: {
    project:  "[ PROJECT / DEVELOPMENT NAME ]",
    client:   "[ CLIENT / BRAND ]",
    document: "Photography Direction",
    type:     "Production Brief",
    version:  "V1.0",
    date:     "August 2026",
    owner:    "Art Direction"
  },

  /* --------------------------------------------------------------- quota */
  quota: {
    perCategory: 36,
    categories: 10,
    total: 360,
    line: "36 images per category. Per type. Per project."
  },

  /* ---------------------------------------------------- 02 · objectives */
  objectives: [
    { n: "01", title: "Scale",       body: "Show how big the development is and how it sits in its surroundings." },
    { n: "02", title: "Location",    body: "Show where it is, what is around it and how people reach it." },
    { n: "03", title: "Architecture",body: "Show the design quality, the materials and the level of finish." },
    { n: "04", title: "Investment",  body: "Show the project as an opportunity, not only as a place." },
    { n: "05", title: "Lifestyle",   body: "Show how the place feels when people are using it." },
    { n: "06", title: "Trust",       body: "Show real progress and real detail so the buyer believes what they see." }
  ],

  /* ----------------------------------------------- 03 · visual language */
  language: [
    { n: "01", title: "Architectural", body: "Straight lines, controlled perspective, clean geometry.", ratio: "4:5" },
    { n: "02", title: "Premium",       body: "Calm framing, restrained colour, no visual noise.",       ratio: "3:2" },
    { n: "03", title: "Natural",       body: "Real light, real texture, natural skin and sky tones.",   ratio: "4:5" },
    { n: "04", title: "Cinematic",     body: "Depth, layers, a clear subject and a quiet background.",  ratio: "21:9" },
    { n: "05", title: "Human",         body: "People behaving normally, never posing for the camera.",  ratio: "3:2" },
    { n: "06", title: "Contemporary",  body: "Modern, current and close to how the brand speaks today.",ratio: "4:5" }
  ],

  /* ------------------------------------------------- 04 · priority tiers */
  priorities: [
    {
      tier: "Must Have",
      rank: "01",
      note: "The shoot is not accepted without these. 144 images.",
      items: ["masterplan", "architecture", "land", "location"]
    },
    {
      tier: "Should Have",
      rank: "02",
      note: "Needed for campaigns and brand storytelling. 72 images.",
      items: ["lifestyle", "landscape"]
    },
    {
      tier: "Nice To Have",
      rank: "03",
      note: "Adds flexibility across digital layouts. 72 images.",
      items: ["investment", "details"]
    }
  ],

  /* --------------------------------------------------- 05 · time of day */
  timeOfDay: [
    {
      n: "01", title: "Daylight", window: "09:00 — 15:00",
      best: ["Masterplan", "Architecture", "Documentation", "Website"],
      body: "Even light and short shadows. This is the documentation window. Most of the must have list is shot here."
    },
    {
      n: "02", title: "Golden Hour", window: "45 min before sunset",
      best: ["Lifestyle", "Emotional campaigns", "Premium imagery"],
      body: "Warm low light and long shadows. Best for people, walkways and anything that needs to feel welcoming."
    },
    {
      n: "03", title: "Blue Hour", window: "20 — 35 min after sunset",
      best: ["Architecture", "Luxury campaigns", "Hero imagery"],
      body: "The short window where sky brightness and building lights balance. The strongest hero images come from here."
    },
    {
      n: "04", title: "Night", window: "After full dark",
      best: ["Lighting", "Entrances", "Facades", "Landscapes"],
      body: "Full dark. Used for lighting design, signage and entrance drama. Needs a tripod and longer exposures."
    }
  ],

  /* ------------------------------------------------- 06 · digital usage */
  usage: [
    {
      n: "01", title: "Website", ratios: ["16:9", "21:9", "3:2"],
      req: [
        "Wide landscape frames",
        "Ultra wide hero frames",
        "Large clean areas for headlines",
        "Subject placed left or right, not centred",
        "Room to crop down to 16:9 later"
      ]
    },
    {
      n: "02", title: "Social Feed", ratios: ["1:1", "4:5", "16:9"],
      req: [
        "Square safe version of every hero frame",
        "4:5 portrait version for feed reach",
        "Subject inside the middle 80 percent",
        "No important detail near the edges"
      ]
    },
    {
      n: "03", title: "Stories & Reels", ratios: ["9:16"],
      req: [
        "Vertical 9:16 captured on location, not cropped later",
        "Centre safe composition",
        "Clear separation between subject and background",
        "Empty space at the top and the bottom for UI and captions"
      ]
    },
    {
      n: "04", title: "Paid Ads", ratios: ["1:1", "4:5", "9:16", "16:9"],
      req: [
        "One strong focal point per frame",
        "Clear visual hierarchy",
        "Copy space on a plain area",
        "Several compositions of the same subject",
        "Clean backgrounds with no clutter"
      ]
    }
  ],

  /* ------------------------------------------- 07 · composition matrix */
  matrix: [
    { g: "Distance",  items: ["Wide", "Medium", "Close up"] },
    { g: "Format",    items: ["Landscape", "Portrait", "Square safe"] },
    { g: "Placement", items: ["Subject left", "Subject right", "Centred"] },
    { g: "Content",   items: ["With people", "Without people", "Clean version", "Environmental version"] }
  ],

  /* ---------------------------------------------------- 08 · technical */
  technical: [
    { t: "High resolution RAW",        d: "Full sensor resolution. No cropping in camera." },
    { t: "High resolution JPG",        d: "Matching JPG export for every RAW file." },
    { t: "Natural colour profile",     d: "Neutral base. No creative colour baked into the file." },
    { t: "Correct exposure",           d: "Protect the highlights. Keep detail in the sky and in the shadow." },
    { t: "Straight architectural lines",d: "Verticals stay vertical. Correct in camera when possible." },
    { t: "Controlled wide angle",      d: "Avoid stretched corners and bent facades." },
    { t: "Clean skies where possible", d: "Wait for the sky. Avoid heavy haze and flat white cloud." },
    { t: "Natural HDR",                d: "Blend for range, not for effect." },
    { t: "No heavy sharpening",        d: "No halos on edges and roof lines." },
    { t: "No heavy presets",           d: "Deliver clean files. Grading is done later by the design team." },
    { t: "Bracketed exposures",        d: "Required for interiors, entrances, blue hour and night." }
  ],

  /* ------------------------------------------------ 09 · delivery specs */
  delivery: [
    { k: "Total images",     v: "360 per project" },
    { k: "Per category",     v: "36 images" },
    { k: "File types",       v: "RAW + JPG" },
    { k: "Colour space",     v: "AdobeRGB, 16 bit" },
    { k: "Long edge",        v: "6000 px minimum" },
    { k: "Naming",           v: "PROJECT_CODE_NUMBER" },
    { k: "Structure",        v: "One folder per category" },
    { k: "Handover",         v: "Drive or WeTransfer, full resolution" }
  ],

  /* ==================================================================
     CATEGORIES — the core of the brief
     ================================================================== */
  categories: [

    /* ------------------------------------------------------ 01 MASTERPLAN */
    {
      id: "masterplan", num: "01", nav: "Masterplan",
      title: "Masterplan & Development",
      tier: "Must Have",
      lede: "The place as a whole.",
      purpose: "Show the development as a complete destination. Communicate scale, planning, access and the context around it.",
      refs: [
        { ratio: "21:9", code: "MP-R1", label: "Hero aerial", note: "Ultra wide, copy space on the left" },
        { ratio: "4:5",  code: "MP-R2", label: "Vertical aerial", note: "For stories and feed" },
        { ratio: "1:1",  code: "MP-R3", label: "Top view", note: "Square safe crop" }
      ],
      groups: [
        {
          label: "Aerial coverage",
          shots: [
            { code: "MP-01", title: "Full Development Aerial", type: "Aerial / Ultra wide", qty: 3,
              composition: "Whole boundary inside the frame. Horizon in the top third. Leave sky above for headlines.",
              usage: ["Website", "Deck", "Ads"] },
            { code: "MP-02", title: "90° Top View", type: "Aerial / Plan", qty: 3,
              composition: "Camera straight down. Roads squared to the frame edges. Shoot near midday for short shadows.",
              usage: ["Website", "Deck", "Print"], notes: "This frame is used as a graphic base for maps and overlays." },
            { code: "MP-03", title: "45° Masterplan Perspective", type: "Aerial / Wide", qty: 3,
              composition: "45 degree tilt. Main axis running corner to corner. Sky in the top quarter.",
              usage: ["Website", "Deck"] },
            { code: "MP-04", title: "Main Entrance From The Air", type: "Aerial / Medium", qty: 3,
              composition: "Entrance in the lower third. Approach road leading in from the frame edge.",
              usage: ["Website", "Social"] }
          ]
        },
        {
          label: "Zones",
          shots: [
            { code: "MP-05", title: "Internal Road Network", type: "Aerial / Wide", qty: 3,
              composition: "Follow one main road through the frame. Use it as a leading line.",
              usage: ["Website", "Deck"] },
            { code: "MP-06", title: "Residential Areas", type: "Aerial / Medium", qty: 3,
              composition: "Repeating rooflines and plot rhythm. Keep the pattern clean.",
              usage: ["Website", "Social"] },
            { code: "MP-07", title: "Commercial Areas", type: "Aerial / Medium", qty: 3,
              composition: "Show the commercial cluster with its parking and access.",
              usage: ["Website", "Deck"] },
            { code: "MP-08", title: "Green Areas", type: "Aerial / Medium", qty: 3,
              composition: "Green mass against built mass. Strong colour separation.",
              usage: ["Website", "Social", "Ads"] }
          ]
        },
        {
          label: "Context",
          shots: [
            { code: "MP-09", title: "Surrounding Context", type: "Aerial / Wide", qty: 3,
              composition: "Development in the lower half, surroundings filling the rest.",
              usage: ["Deck", "Website"] },
            { code: "MP-10", title: "Nearby Landmarks", type: "Aerial / Wide", qty: 3,
              composition: "Landmark and development visible in the same frame. This proves the location.",
              usage: ["Deck", "Ads"], notes: "One frame per landmark if more than one is nearby." },
            { code: "MP-11", title: "Development + Skyline", type: "Aerial / Ultra wide", qty: 3,
              composition: "Low altitude, long lens feel. Skyline compressed behind the development.",
              usage: ["Website", "Ads", "Social"] },
            { code: "MP-12", title: "Wide Environmental Shot", type: "Aerial / Ultra wide", qty: 3,
              composition: "Maximum altitude. Land, road network and horizon together.",
              usage: ["Website", "Deck"] }
          ]
        }
      ]
    },

    /* ---------------------------------------------------- 02 ARCHITECTURE */
    {
      id: "architecture", num: "02", nav: "Architecture",
      title: "Architecture",
      tier: "Must Have",
      lede: "The design quality.",
      purpose: "Show the buildings as designed objects. Form, proportion, material and finish, from the full elevation down to the joint detail.",
      refs: [
        { ratio: "16:9", code: "AR-R1", label: "Hero exterior", note: "Negative space on the left for the headline" },
        { ratio: "9:16", code: "AR-R2", label: "Vertical hero", note: "Shot vertical on location, not cropped" },
        { ratio: "4:5",  code: "AR-R3", label: "Detail", note: "Material and texture" }
      ],
      groups: [
        {
          label: "Exterior",
          shots: [
            { code: "AR-01", title: "Hero Architectural Shot", type: "Wide / Hero", qty: 3,
              composition: "Building on one third of the frame. Sky or a plain wall on the other third for headlines and buttons.",
              usage: ["Website", "Ads", "Social"], notes: "This is the single most important frame of the shoot." },
            { code: "AR-02", title: "Front Elevation", type: "Straight on", qty: 3,
              composition: "Camera square to the facade. Centred. Verticals perfectly straight.",
              usage: ["Website", "Deck", "Print"] },
            { code: "AR-03", title: "Three Quarter Perspective", type: "Wide", qty: 3,
              composition: "Two faces of the building visible. The classic architectural angle.",
              usage: ["Website", "Ads", "Deck"] },
            { code: "AR-04", title: "Side Perspective", type: "Medium", qty: 3,
              composition: "Long side of the building running into the frame. Strong depth.",
              usage: ["Website", "Social"] },
            { code: "AR-05", title: "Low Angle", type: "Wide", qty: 3,
              composition: "Camera low, looking up. Use for height and presence. Keep distortion controlled.",
              usage: ["Ads", "Social"] },
            { code: "AR-06", title: "Wide Environmental", type: "Ultra wide", qty: 3,
              composition: "Building small in a large frame. Shows the setting around it.",
              usage: ["Website", "Deck"] }
          ]
        },
        {
          label: "Relationship",
          shots: [
            { code: "AR-07", title: "Building + Landscape", type: "Wide", qty: 3,
              composition: "Planting or water in the foreground, building behind. Layered depth.",
              usage: ["Website", "Social", "Ads"] },
            { code: "AR-08", title: "Building + People", type: "Wide / Medium", qty: 3,
              composition: "People small in the frame. They give scale. The building stays the subject.",
              usage: ["Website", "Ads"] },
            { code: "AR-09", title: "Entrance", type: "Medium", qty: 3,
              composition: "Entrance centred or on a third. Include the approach and the threshold.",
              usage: ["Website", "Deck"] }
          ]
        },
        {
          label: "Close range",
          shots: [
            { code: "AR-10", title: "Facade Detail", type: "Detail", qty: 3,
              composition: "A repeating element filling the frame. Flat and graphic.",
              usage: ["Website", "Social"] },
            { code: "AR-11", title: "Materials", type: "Detail", qty: 3,
              composition: "Raking light across the surface so texture reads.",
              usage: ["Website", "Print"] },
            { code: "AR-12", title: "Windows, Doors, Textures", type: "Detail", qty: 3,
              composition: "Straight on, aligned to the frame. Clean edges.",
              usage: ["Website", "Social"] }
          ]
        }
      ]
    },

    /* ----------------------------------------------------------- 03 LAND */
    {
      id: "land", num: "03", nav: "Land",
      title: "Land & Plots",
      tier: "Must Have",
      lede: "Empty land, sold with context.",
      purpose: "Land is hard to sell as an image because there is little to look at. Every plot frame must be anchored to something real: a road, a boundary, a building, a service line or the wider masterplan.",
      refs: [
        { ratio: "16:9", code: "LD-R1", label: "Plot in context", note: "Plot plus a built reference" },
        { ratio: "3:2",  code: "LD-R2", label: "Boundary", note: "Corner marker leading the eye" },
        { ratio: "4:5",  code: "LD-R3", label: "Access", note: "Road arriving at the plot" }
      ],
      groups: [
        {
          label: "The plot",
          shots: [
            { code: "LD-01", title: "Individual Plot", type: "Wide", qty: 4,
              composition: "Plot in the lower two thirds. Always include one built reference in the frame.",
              usage: ["Website", "Deck", "Ads"], notes: "Never photograph a plot as empty ground with nothing around it." },
            { code: "LD-02", title: "Plot Boundaries", type: "Medium", qty: 3,
              composition: "Corner marker or boundary line in the foreground running away from the camera.",
              usage: ["Deck", "Website"] },
            { code: "LD-03", title: "Land + Surrounding Development", type: "Wide", qty: 3,
              composition: "Land in the front, existing buildings behind. Shows the plot is not isolated.",
              usage: ["Website", "Ads"] },
            { code: "LD-04", title: "Wide Land Context", type: "Ultra wide", qty: 3,
              composition: "Full land parcel with the horizon high in the frame.",
              usage: ["Website", "Deck"] }
          ]
        },
        {
          label: "Access & services",
          shots: [
            { code: "LD-05", title: "Access Roads", type: "Wide", qty: 3,
              composition: "Road running from the bottom of the frame into the land.",
              usage: ["Website", "Deck"] },
            { code: "LD-06", title: "Infrastructure", type: "Medium", qty: 3,
              composition: "Utilities, kerbs, lighting columns, service trenches. Proof that the land is serviced.",
              usage: ["Deck"] },
            { code: "LD-07", title: "Signage & Plot Numbers", type: "Detail", qty: 3,
              composition: "Sign sharp in the foreground, land soft behind.",
              usage: ["Deck", "Social"] },
            { code: "LD-08", title: "Land Entrance", type: "Wide", qty: 3,
              composition: "Gate or entry point with the approach visible.",
              usage: ["Website", "Deck"] }
          ]
        },
        {
          label: "Coverage",
          shots: [
            { code: "LD-09", title: "Different Plot Locations", type: "Wide", qty: 4,
              composition: "Repeat the same framing logic on plots in different parts of the site.",
              usage: ["Deck", "Website"] },
            { code: "LD-10", title: "Multiple Angles Per Plot", type: "Wide / Medium", qty: 4,
              composition: "Same plot from four sides so the sales team can pick the best view.",
              usage: ["Deck", "Ads"] },
            { code: "LD-11", title: "Plot In Relation To Masterplan", type: "Aerial", qty: 3,
              composition: "Aerial with the plot clearly readable inside the wider plan.",
              usage: ["Website", "Deck"], notes: "The design team will add plot numbers on top of this frame." }
          ]
        }
      ]
    },

    /* ------------------------------------------------------- 04 LOCATION */
    {
      id: "location", num: "04", nav: "Location",
      title: "Location & Accessibility",
      tier: "Must Have",
      lede: "Where it is and how you get there.",
      purpose: "Show where the development is, how people reach it and what surrounds it. Location is often the strongest sales argument, so it needs real images and not only a map.",
      refs: [
        { ratio: "21:9", code: "LO-R1", label: "Approach", note: "Main road leading to the site" },
        { ratio: "16:9", code: "LO-R2", label: "Landmark", note: "Landmark and site together" },
        { ratio: "9:16", code: "LO-R3", label: "Entry", note: "Vertical entry sequence" }
      ],
      groups: [
        {
          label: "Roads & access",
          shots: [
            { code: "LO-01", title: "Main Road Approach", type: "Wide", qty: 4,
              composition: "Shot from the road looking towards the development, the way a visitor arrives.",
              usage: ["Website", "Deck", "Ads"] },
            { code: "LO-02", title: "Internal Roads", type: "Wide", qty: 4,
              composition: "Road as a leading line with landscaping on both sides.",
              usage: ["Website", "Social"] },
            { code: "LO-03", title: "Access Points", type: "Medium", qty: 4,
              composition: "Each junction or turn off that connects the site to the main network.",
              usage: ["Deck"] },
            { code: "LO-04", title: "Entrances", type: "Wide", qty: 4,
              composition: "Entrance with signage readable. Straight on and at an angle.",
              usage: ["Website", "Deck", "Social"] }
          ]
        },
        {
          label: "Context",
          shots: [
            { code: "LO-05", title: "Parking", type: "Wide", qty: 4,
              composition: "Parking with the building behind it. Keep it tidy and low on clutter.",
              usage: ["Deck", "Website"] },
            { code: "LO-06", title: "Nearby Landmarks", type: "Wide", qty: 4,
              composition: "One recognisable landmark per frame. Shoot from a point where the site is also visible.",
              usage: ["Deck", "Ads", "Social"] },
            { code: "LO-07", title: "Surrounding Urban Context", type: "Wide", qty: 4,
              composition: "The neighbourhood around the site. Shows that the area is alive.",
              usage: ["Website", "Deck"] },
            { code: "LO-08", title: "Traffic & Movement", type: "Medium", qty: 4,
              composition: "Slow shutter for light trails or motion. Best at blue hour.",
              usage: ["Ads", "Social"] },
            { code: "LO-09", title: "Connectivity", type: "Aerial", qty: 4,
              composition: "Aerial showing the site and the road network reaching it in one frame.",
              usage: ["Website", "Deck"], notes: "This frame will carry distance and travel time labels." }
          ]
        }
      ]
    },

    /* ------------------------------------------------------ 05 LIFESTYLE */
    {
      id: "lifestyle", num: "05", nav: "Lifestyle",
      title: "Lifestyle",
      tier: "Should Have",
      lede: "The project is the hero. People give it scale.",
      purpose: "People are in the frame to make the place feel used, safe and alive. They provide scale, context and aspiration. They never become the subject of the photograph.",
      refs: [
        { ratio: "16:9", code: "LF-R1", label: "Wide lifestyle", note: "People small, place large" },
        { ratio: "4:5",  code: "LF-R2", label: "Feed portrait", note: "Vertical, subject in the middle 80 percent" },
        { ratio: "9:16", code: "LF-R3", label: "Reel frame", note: "Top and bottom kept empty" }
      ],
      groups: [
        {
          label: "Movement",
          shots: [
            { code: "LF-01", title: "Couple Walking", type: "Wide", qty: 4,
              composition: "Walking away from or across the camera. Never towards the lens.",
              usage: ["Website", "Ads", "Social"] },
            { code: "LF-02", title: "Family Walking", type: "Wide", qty: 4,
              composition: "Family group on a walkway with landscaping in the frame.",
              usage: ["Website", "Ads"] },
            { code: "LF-03", title: "Parents With Children", type: "Medium", qty: 4,
              composition: "Natural interaction. Adults looking at the child, not at the camera.",
              usage: ["Social", "Ads"] },
            { code: "LF-04", title: "Young Professionals", type: "Medium", qty: 4,
              composition: "Walking, talking, on the phone. Everyday movement.",
              usage: ["Website", "Social"] }
          ]
        },
        {
          label: "Use of the place",
          shots: [
            { code: "LF-05", title: "Business People", type: "Medium", qty: 4,
              composition: "Two or three people in conversation outside the building.",
              usage: ["Deck", "Website"] },
            { code: "LF-06", title: "People Entering A Building", type: "Wide", qty: 4,
              composition: "Figure at the threshold, building framing them.",
              usage: ["Website", "Ads"] },
            { code: "LF-07", title: "People Using Outdoor Spaces", type: "Wide", qty: 4,
              composition: "Real activity in the open space. Keep the group small.",
              usage: ["Social", "Website"] },
            { code: "LF-08", title: "People Sitting In A Plaza", type: "Wide / Medium", qty: 4,
              composition: "Seated figures with the architecture behind them.",
              usage: ["Website", "Ads"] },
            { code: "LF-09", title: "People In Landscaped Areas", type: "Wide", qty: 4,
              composition: "Figures under trees or beside planting. Golden hour preferred.",
              usage: ["Ads", "Social"] }
          ]
        }
      ],
      avoid: [
        "Direct to camera poses",
        "Fake smiles",
        "Stock photo behaviour",
        "Heavy posing and staged gestures",
        "Generic looking models",
        "People filling the frame",
        "Groups larger than the space would normally hold",
        "Clothing with visible logos or loud patterns"
      ]
    },

    /* ------------------------------------------------------ 06 LANDSCAPE */
    {
      id: "landscape", num: "06", nav: "Landscape",
      title: "Landscape & Outdoor Spaces",
      tier: "Should Have",
      lede: "The space between the buildings.",
      purpose: "Outdoor space is what buyers walk through every day. Cover it at three distances so the design team can build full sections and small supporting content from the same set.",
      refs: [
        { ratio: "21:9", code: "LS-R1", label: "Wide", note: "Full outdoor space" },
        { ratio: "3:2",  code: "LS-R2", label: "Medium", note: "One feature" },
        { ratio: "1:1",  code: "LS-R3", label: "Detail", note: "Texture and planting" }
      ],
      groups: [
        {
          label: "Green space",
          shots: [
            { code: "LS-01", title: "Green Areas", type: "Wide", qty: 4,
              composition: "Open green with the buildings held at the back of the frame.",
              usage: ["Website", "Ads", "Social"] },
            { code: "LS-02", title: "Gardens", type: "Medium", qty: 3,
              composition: "Planted area with a clear path or edge to lead the eye.",
              usage: ["Website", "Social"] },
            { code: "LS-03", title: "Trees", type: "Medium", qty: 3,
              composition: "Mature planting used as a frame around the architecture.",
              usage: ["Website", "Social"] }
          ]
        },
        {
          label: "Water & plazas",
          shots: [
            { code: "LS-04", title: "Water Features", type: "Medium", qty: 3,
              composition: "Include a reflection of the building where possible.",
              usage: ["Website", "Ads"] },
            { code: "LS-05", title: "Fountains", type: "Medium / Detail", qty: 3,
              composition: "Fast shutter to freeze the water, and one slow frame for movement.",
              usage: ["Social", "Website"] },
            { code: "LS-06", title: "Plazas", type: "Wide", qty: 4,
              composition: "Full plaza with the paving pattern reading clearly.",
              usage: ["Website", "Deck"] },
            { code: "LS-09", title: "Outdoor Gathering Spaces", type: "Wide", qty: 4,
              composition: "Shot both empty and with a few people, from the same position.",
              usage: ["Website", "Ads", "Social"] }
          ]
        },
        {
          label: "Ground level",
          shots: [
            { code: "LS-07", title: "Walkways", type: "Wide", qty: 3,
              composition: "Path running from the bottom corner into the distance.",
              usage: ["Website", "Social"] },
            { code: "LS-08", title: "Seating", type: "Medium", qty: 3,
              composition: "Bench or seating group with the space visible behind it.",
              usage: ["Website"] },
            { code: "LS-10", title: "Landscape Lighting", type: "Medium", qty: 3,
              composition: "Blue hour. Lighting on and sky still holding colour.",
              usage: ["Website", "Ads"] },
            { code: "LS-11", title: "Landscaping Details", type: "Detail", qty: 3,
              composition: "Planting, edging, gravel, ground cover. Close and graphic.",
              usage: ["Social", "Website"] }
          ]
        }
      ]
    },

    /* ----------------------------------------------------- 07 INVESTMENT */
    {
      id: "investment", num: "07", nav: "Investment",
      title: "Investment",
      tier: "Nice To Have",
      lede: "The project as an opportunity.",
      purpose: "Imagery that supports the development as an investment. Professional and believable, closer to documentary than to corporate stock.",
      refs: [
        { ratio: "16:9", code: "IN-R1", label: "Plans on the table", note: "Copy space on the right" },
        { ratio: "4:5",  code: "IN-R2", label: "Hands and detail", note: "Close on the plan" },
        { ratio: "3:2",  code: "IN-R3", label: "Site visit", note: "On location, natural light" }
      ],
      groups: [
        {
          label: "Around the plans",
          shots: [
            { code: "IN-01", title: "Investor Reviewing The Masterplan", type: "Medium", qty: 5,
              composition: "Over the shoulder. Plan sharp, face soft or out of frame.",
              usage: ["Deck", "Website"] },
            { code: "IN-02", title: "Business People Discussing Plans", type: "Medium", qty: 5,
              composition: "Two or three people around a table. Natural light from a window.",
              usage: ["Deck", "Website", "Ads"] },
            { code: "IN-03", title: "Reviewing The Project On A Tablet", type: "Medium / Detail", qty: 5,
              composition: "Screen angled away from the light. Leave the screen area clean for a later mockup.",
              usage: ["Website", "Ads"], notes: "The design team will place the real interface on the screen." },
            { code: "IN-04", title: "Hand Pointing At A Plot", type: "Detail", qty: 4,
              composition: "Close on the hand and the plan. Shallow depth of field.",
              usage: ["Deck", "Social"] }
          ]
        },
        {
          label: "On site",
          shots: [
            { code: "IN-05", title: "Site Inspection", type: "Wide / Medium", qty: 5,
              composition: "People on site with the development behind them.",
              usage: ["Deck", "Website"] },
            { code: "IN-06", title: "Developer Walking The Site", type: "Wide", qty: 4,
              composition: "Walking shot, side on, site clearly readable.",
              usage: ["Deck", "Social"] },
            { code: "IN-07", title: "Masterplan + Device", type: "Detail", qty: 4,
              composition: "Printed plan and a device in the same frame, shot from above.",
              usage: ["Website", "Deck"] },
            { code: "IN-08", title: "Meeting Around The Plans", type: "Wide", qty: 4,
              composition: "Full room. Wide enough to crop into three different formats.",
              usage: ["Deck", "Website"] }
          ]
        }
      ],
      style: ["Professional", "Authentic", "Sophisticated", "Never overly corporate"]
    },

    /* -------------------------------------------------------- 08 DETAILS */
    {
      id: "details", num: "08", nav: "Details",
      title: "Detail Photography",
      tier: "Nice To Have",
      lede: "The layer that holds the design system together.",
      purpose: "Detail frames rarely become the hero image. They do the quiet work: section backgrounds, dividers, social fillers, campaign textures and supporting story frames. Without them every layout has to repeat the same four hero shots.",
      refs: [
        { ratio: "1:1", code: "DT-R1", label: "Texture", note: "Flat and graphic" },
        { ratio: "4:5", code: "DT-R2", label: "Object", note: "Single element, clean background" },
        { ratio: "3:2", code: "DT-R3", label: "Light", note: "Raking light on a surface" }
      ],
      groups: [
        {
          label: "Materials",
          shots: [
            { code: "DT-01", title: "Materials Overview", type: "Detail", qty: 3,
              composition: "Two materials meeting at a joint. Shows the quality of the build.",
              usage: ["Website", "Print"] },
            { code: "DT-02", title: "Stone", type: "Detail", qty: 2,
              composition: "Flat on. Raking light so grain and cut read.", usage: ["Website"] },
            { code: "DT-03", title: "Concrete", type: "Detail", qty: 2,
              composition: "Surface filling the frame. Neutral tone kept accurate.", usage: ["Website"] },
            { code: "DT-04", title: "Glass", type: "Detail", qty: 3,
              composition: "Reflection of sky or landscape in the glass. Control the flare.", usage: ["Website", "Social"] },
            { code: "DT-05", title: "Metal", type: "Detail", qty: 2,
              composition: "Edge or profile with a clean highlight along it.", usage: ["Website"] }
          ]
        },
        {
          label: "Built elements",
          shots: [
            { code: "DT-06", title: "Landscaping Detail", type: "Detail", qty: 3,
              composition: "Planting against a hard surface. Colour contrast.", usage: ["Social", "Website"] },
            { code: "DT-07", title: "Lighting Detail", type: "Detail", qty: 3,
              composition: "Fitting and the light it throws, at blue hour.", usage: ["Website", "Ads"] },
            { code: "DT-08", title: "Signage", type: "Detail", qty: 3,
              composition: "Sign straight on and at an angle. Type fully readable.", usage: ["Deck", "Social"] },
            { code: "DT-09", title: "Architectural Texture", type: "Detail", qty: 3,
              composition: "Repeating pattern across the whole frame.", usage: ["Website", "Social"] }
          ]
        },
        {
          label: "Small detail",
          shots: [
            { code: "DT-10", title: "Doors", type: "Detail", qty: 2, composition: "Square to the frame, fully in shot.", usage: ["Website"] },
            { code: "DT-11", title: "Handles & Hardware", type: "Macro", qty: 2, composition: "Close, shallow depth of field.", usage: ["Website", "Social"] },
            { code: "DT-12", title: "Facade Detail", type: "Detail", qty: 2, composition: "A single bay or module of the facade.", usage: ["Website"] },
            { code: "DT-13", title: "Pavement & Ground", type: "Detail", qty: 2, composition: "Looking down. Pattern squared to the frame.", usage: ["Website", "Social"] },
            { code: "DT-14", title: "Water", type: "Detail", qty: 2, composition: "Surface, ripple or edge. Both fast and slow shutter.", usage: ["Social"] },
            { code: "DT-15", title: "Plants", type: "Detail", qty: 2, composition: "Backlit leaves or planting against a plain wall.", usage: ["Social", "Website"] }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------- 09 DRONE */
    {
      id: "drone", num: "09", nav: "Drone",
      title: "Drone Shot List",
      tier: "Must Have",
      lede: "Altitude, angle and variety.",
      purpose: "The aerial set is judged on variety, not on how many times the same view was captured. Change the height, the direction and the distance for every entry on this list.",
      refs: [
        { ratio: "21:9", code: "DR-R1", label: "High establishing", note: "Maximum altitude" },
        { ratio: "16:9", code: "DR-R2", label: "Low cinematic", note: "Low pass, long lens feel" },
        { ratio: "1:1",  code: "DR-R3", label: "Top down", note: "Graphic plan view" }
      ],
      groups: [
        {
          label: "Aerial set",
          shots: [
            { code: "DR-01", title: "Full Development Aerial", type: "High / Wide", qty: 3, composition: "Whole site inside the frame with margin on all four sides.", usage: ["Website", "Deck"] },
            { code: "DR-02", title: "90° Top View", type: "Top down", qty: 3, composition: "Straight down, geometry squared to the frame.", usage: ["Website", "Deck"] },
            { code: "DR-03", title: "45° Perspective", type: "Mid / Wide", qty: 3, composition: "45 degree gimbal, main axis diagonal.", usage: ["Website", "Ads"] },
            { code: "DR-04", title: "Main Entrance", type: "Low / Medium", qty: 3, composition: "Low pass over the approach road towards the gate.", usage: ["Website", "Social"] },
            { code: "DR-05", title: "Internal Roads", type: "Mid", qty: 2, composition: "Follow the road with the camera tilted forward.", usage: ["Website"] },
            { code: "DR-06", title: "Residential Areas", type: "Mid", qty: 3, composition: "Roof rhythm and plot pattern.", usage: ["Website", "Deck"] },
            { code: "DR-07", title: "Commercial Areas", type: "Mid", qty: 2, composition: "Commercial cluster with its access.", usage: ["Deck"] }
          ]
        },
        {
          label: "Context set",
          shots: [
            { code: "DR-08", title: "Green Areas", type: "Mid", qty: 2, composition: "Green mass against built mass.", usage: ["Website", "Social"] },
            { code: "DR-09", title: "Surrounding Context", type: "High / Wide", qty: 3, composition: "Site plus everything around it.", usage: ["Deck"] },
            { code: "DR-10", title: "Nearby Landmarks", type: "High", qty: 2, composition: "Landmark and site in one frame.", usage: ["Deck", "Ads"] },
            { code: "DR-11", title: "Development + Skyline", type: "Low / Long", qty: 3, composition: "Low altitude with the skyline compressed behind.", usage: ["Website", "Ads", "Social"] },
            { code: "DR-12", title: "Wide Environmental", type: "High / Ultra wide", qty: 2, composition: "Maximum coverage of land and horizon.", usage: ["Website"] },
            { code: "DR-13", title: "Low Altitude Cinematic", type: "Low", qty: 3, composition: "Close to the ground, moving. Strong foreground.", usage: ["Ads", "Social"] },
            { code: "DR-14", title: "High Altitude Establishing", type: "Maximum", qty: 2, composition: "Legal maximum height. The opening frame of the story.", usage: ["Website", "Deck"] }
          ]
        }
      ],
      note: {
        title: "Do not fly the same frame fourteen times",
        body: "Do not capture every aerial image from the same height, direction or distance. The goal is a diverse visual library. If two frames on this list look interchangeable, one of them is wasted."
      }
    },

    /* ---------------------------------------------------------- 10 NIGHT */
    {
      id: "night", num: "10", nav: "Night",
      title: "Night & Lighting",
      tier: "Should Have",
      lede: "The project after dark.",
      purpose: "Night frames carry the lighting design and give campaigns a second visual register. Shoot from a tripod, bracket every frame and start at blue hour before the sky goes fully black.",
      refs: [
        { ratio: "21:9", code: "NT-R1", label: "Blue hour hero", note: "Sky still holding colour" },
        { ratio: "16:9", code: "NT-R2", label: "Facade lit", note: "Windows and wash lighting" },
        { ratio: "4:5",  code: "NT-R3", label: "Entrance", note: "Vertical, light as the subject" }
      ],
      groups: [
        {
          label: "Night set",
          shots: [
            { code: "NT-01", title: "Facade At Night", type: "Wide", qty: 4, composition: "Full elevation with the lighting scheme reading clearly.", usage: ["Website", "Ads"] },
            { code: "NT-02", title: "Entrance Lighting", type: "Medium", qty: 4, composition: "Entrance glowing against the darker surroundings.", usage: ["Website", "Social"] },
            { code: "NT-03", title: "Landscape Lighting", type: "Wide", qty: 4, composition: "Path and planting lights leading into the frame.", usage: ["Website", "Ads"] },
            { code: "NT-04", title: "Illuminated Signage", type: "Detail", qty: 4, composition: "Sign lit, exposed so the type stays readable.", usage: ["Deck", "Social"] },
            { code: "NT-05", title: "Blue Hour Hero", type: "Hero / Wide", qty: 4, composition: "The premium frame. Balanced sky and building light. Copy space kept clear.", usage: ["Website", "Ads", "Social"] },
            { code: "NT-06", title: "Internal Roads At Night", type: "Wide", qty: 4, composition: "Street lighting as a repeating rhythm down the road.", usage: ["Website"] },
            { code: "NT-07", title: "Plaza At Night", type: "Wide", qty: 4, composition: "Open space lit, a few figures for life.", usage: ["Website", "Social"] },
            { code: "NT-08", title: "Amenity & Interior Glow", type: "Medium", qty: 4, composition: "Warm interior light seen from outside through glass.", usage: ["Website", "Ads"] },
            { code: "NT-09", title: "Development + Skyline At Night", type: "Aerial / Wide", qty: 4, composition: "Aerial or high vantage with the city lights behind.", usage: ["Website", "Ads", "Social"] }
          ]
        }
      ]
    }
  ]
};

/* Convenience lookups used by the renderer */
BRIEF.byId = BRIEF.categories.reduce(function (map, c) { map[c.id] = c; return map; }, {});
BRIEF.allShots = BRIEF.categories.reduce(function (all, c) {
  c.groups.forEach(function (g) { g.shots.forEach(function (s) { all.push(Object.assign({ cat: c.id }, s)); }); });
  return all;
}, []);
