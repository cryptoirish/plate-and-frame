export type LightingSetup = {
  slug: string;
  name: string;
  tagline: string;
  difficulty: "Easy" | "Moderate" | "Advanced";
  gear: string[];
  description: string;
  setup_steps: string[];
  light_quality: string;
  best_for: string[];
  mood: string;
  diagram: {
    elements: Array<{
      type: "camera" | "subject" | "key" | "fill" | "rim" | "diffuser" | "reflector" | "window";
      x: number;
      y: number;
      label: string;
    }>;
  };
};

export const LIGHTING_SETUPS: LightingSetup[] = [
  {
    slug: "single-window",
    name: "The Single Window",
    tagline: "One window. One reflector. Most of your shots, sorted.",
    difficulty: "Easy",
    gear: [
      "One north-facing window (or any window with indirect light)",
      "One white foam board (A2 size or larger)",
      "Optional: a black foam board for shadow control",
    ],
    description:
      "If you only learn one setup, learn this one. It costs nothing, it's available in every kitchen with a window, and it produces the soft, directional light that makes food look like food.",
    setup_steps: [
      "Position the table 60–80cm from the window, parallel to the glass.",
      "Camera on the opposite side from the window. The window is at 90° to your shooting axis — side light.",
      "Place the white foam board on the camera-side of the plate, angled to bounce window light back onto the shadow side. Move it closer or further to control shadow depth.",
      "Shoot 45° or overhead. If shadows on the camera-side are too dark, slide the reflector closer. If the food looks flat, slide it further away.",
      "If a hard sunbeam comes through, hang a thin white curtain or sheet of tracing paper over the window to diffuse it.",
    ],
    light_quality:
      "Soft, directional, naturally cool-warm depending on time of day. Reads as 'documentary' and 'editorial' — never as 'studio'.",
    best_for: [
      "Restaurant menu photography on a budget",
      "Daily Instagram content",
      "Cookbook-style shots",
      "Pastry, breakfast, brunch — anything benefiting from natural light",
    ],
    mood: "Honest. Calm. The mood of a Sunday cookbook.",
    diagram: {
      elements: [
        { type: "window", x: 50, y: 20, label: "Window" },
        { type: "subject", x: 50, y: 50, label: "Plate" },
        { type: "reflector", x: 50, y: 80, label: "White board" },
        { type: "camera", x: 80, y: 50, label: "Camera" },
      ],
    },
  },
  {
    slug: "window-plus-diffuser",
    name: "Window + Diffuser",
    tagline: "Window light, softened. For when the sun is too honest.",
    difficulty: "Easy",
    gear: [
      "Window (any direction)",
      "Diffuser — purpose-built panel, or a white bedsheet pinned over the window",
      "White reflector",
    ],
    description:
      "The single window's harder-light cousin, tamed. When the sun is direct, or the window is south-facing and the shadows are knife-sharp, you diffuse first and then bounce. Same logic, gentler outcome.",
    setup_steps: [
      "Hang the diffuser directly across the window. A bedsheet, a shower curtain, even a roll of tracing paper taped up will do.",
      "Position the plate 60–90cm from the diffused window.",
      "Place white reflector opposite, as in the single-window setup.",
      "Test exposure — you'll likely lose 1–2 stops of light, so widen aperture or up ISO accordingly.",
      "If shadows are still too soft, pull the reflector back or remove it entirely.",
    ],
    light_quality:
      "Very soft, wraparound, almost shadowless. Reads as 'expensive' and 'commercial' without obvious studio cues.",
    best_for: [
      "Bright, airy aesthetics (cafés, brunch, pastry)",
      "Glossy and reflective foods that hate hard light",
      "Sauces, glazes, anything where highlights matter",
    ],
    mood: "Bright, clean, optimistic. Sunday morning.",
    diagram: {
      elements: [
        { type: "window", x: 50, y: 18, label: "Window" },
        { type: "diffuser", x: 50, y: 30, label: "Diffuser" },
        { type: "subject", x: 50, y: 55, label: "Plate" },
        { type: "reflector", x: 50, y: 82, label: "White board" },
        { type: "camera", x: 82, y: 55, label: "Camera" },
      ],
    },
  },
  {
    slug: "moody-backlight",
    name: "Moody Backlight",
    tagline: "Window behind. Mystery in front. Tasting menu energy.",
    difficulty: "Moderate",
    gear: [
      "Window or single artificial source",
      "Black foam board (negative fill) — two ideally",
      "White card (small, for selective fill if needed)",
    ],
    description:
      "Light from behind, shadows in front. The opposite intuition of beginner photography, and it's exactly why fine-dining shots look the way they do. The food emerges from shadow with rim-lit highlights on the edges.",
    setup_steps: [
      "Position the plate so the light source is directly behind it, slightly elevated.",
      "Shoot 45° or hero straight-on from the dark side.",
      "Place black foam boards on either side of the plate close to the camera — they suck light out, deepening shadows and increasing contrast.",
      "If the front of the plate is too dark, introduce a small white card to bounce a whisper of light back. Be sparing — the mood comes from the darkness.",
      "Expose for the highlights on the rim of the food. Let the shadows go.",
    ],
    light_quality:
      "Hard rim light, deep shadows, high contrast. Sculptural.",
    best_for: [
      "Tasting menu and fine-dining photography",
      "Dark, rich, sauce-led dishes (red wine reductions, mushroom, beef)",
      "Cocktails and spirits",
      "Steam shots — backlight makes steam glow",
    ],
    mood: "Cinematic. Serious. The mood of a tasting menu in winter.",
    diagram: {
      elements: [
        { type: "window", x: 50, y: 18, label: "Light" },
        { type: "subject", x: 50, y: 50, label: "Plate" },
        { type: "rim", x: 25, y: 60, label: "Black flag" },
        { type: "rim", x: 75, y: 60, label: "Black flag" },
        { type: "camera", x: 50, y: 85, label: "Camera" },
      ],
    },
  },
  {
    slug: "two-light-clamshell",
    name: "Two-Light Clamshell",
    tagline: "One above, one below. Glossy, even, flattering.",
    difficulty: "Moderate",
    gear: [
      "Two LED panels or speedlights with softboxes (60×90cm or larger)",
      "Two light stands",
      "A clean white surface for the fill below",
    ],
    description:
      "The classic beauty-lighting setup adapted for food. Top key light, bottom fill light, both softened. Produces the polished, evenly-lit look you see in commercial food photography — glossy, generous, all surfaces revealed.",
    setup_steps: [
      "Top key light: 45° above and slightly in front of the subject, softbox facing down at the plate.",
      "Bottom fill: just below the lens height, pointing up at the plate at roughly half the key's power.",
      "Camera shoots through the gap between top and bottom lights.",
      "Adjust top-to-bottom ratio: 2:1 for visible shadows, 1:1 for shadowless commercial look.",
      "Background: a roll of seamless paper or a textured backdrop, 1m+ behind the subject.",
    ],
    light_quality:
      "Soft, even, glossy. Highlights everywhere — every drop of sauce, every ice crystal, every glaze gets its sparkle.",
    best_for: [
      "Menu photography for delivery apps and catalogues",
      "Bright, glossy commercial work",
      "Products with reflective elements (drinks, glazed desserts)",
      "Any time evenness matters more than mood",
    ],
    mood: "Commercial. Polished. The mood of a deliveroo hero shot.",
    diagram: {
      elements: [
        { type: "key", x: 50, y: 18, label: "Key (top)" },
        { type: "subject", x: 50, y: 50, label: "Plate" },
        { type: "fill", x: 50, y: 78, label: "Fill (bottom)" },
        { type: "camera", x: 82, y: 50, label: "Camera" },
      ],
    },
  },
  {
    slug: "three-point",
    name: "Three-Point",
    tagline: "Key, fill, rim. The full studio rig.",
    difficulty: "Advanced",
    gear: [
      "Three lights — strobes or continuous, doesn't matter, but match colour temperature",
      "Three stands, one with boom arm",
      "Soft modifier on key (softbox), grid on rim, bounce or small fill",
      "Light meter highly recommended",
    ],
    description:
      "Total control. Three lights placed to do three jobs: key (the main light, shapes the subject), fill (lifts the shadows from key), rim (separates the subject from background). The setup that gives you full editorial command.",
    setup_steps: [
      "Key light: 45° to the side, softbox, the dominant exposure. Set this first; meter it.",
      "Fill light: opposite side from key, lower power (1 to 2 stops below key), unmodified or with a small softbox.",
      "Rim light: from behind the subject, slightly above, fitted with a grid or snoot to control spill. This is what separates subject from background.",
      "Background: separately controlled if needed — a fourth light, or position the subject far from a dark backdrop.",
      "Meter each light independently. Shoot test frames adjusting each light's ratio.",
    ],
    light_quality:
      "Total command. Whatever you want — soft, hard, dramatic, even. The full classical setup.",
    best_for: [
      "Cookbook photography",
      "Editorial assignments",
      "Anything with paid time and total creative control",
      "Composite or styled hero shots",
    ],
    mood: "Whatever you decide. That's the point.",
    diagram: {
      elements: [
        { type: "rim", x: 50, y: 18, label: "Rim" },
        { type: "key", x: 22, y: 38, label: "Key" },
        { type: "subject", x: 50, y: 50, label: "Plate" },
        { type: "fill", x: 78, y: 38, label: "Fill" },
        { type: "camera", x: 50, y: 85, label: "Camera" },
      ],
    },
  },
  {
    slug: "phone-on-the-pass",
    name: "Phone on the Pass",
    tagline: "Phone, plate, window. Service in five minutes.",
    difficulty: "Easy",
    gear: [
      "A phone with a half-decent camera",
      "A window. Even a small one.",
      "A piece of white paper from the printer",
    ],
    description:
      "Designed for the moment service is starting in fifteen minutes and the special needs to be on Instagram now. Not the best shot you'll ever take. The best shot you can take in the time you have.",
    setup_steps: [
      "Pick the cleanest table closest to a window. Wipe it.",
      "Place the plate 30–60cm from the window, perpendicular to it.",
      "Hold a sheet of white printer paper on the side opposite the window — bounce the light back, lift the shadows.",
      "Open the camera app, tap the brightest part of the food to set focus and exposure, then drag the exposure slider DOWN by one notch. Phones consistently overexpose food.",
      "Shoot from 45° at about 30cm distance. Shoot ten frames. Pick after, don't pick during.",
    ],
    light_quality:
      "However the window is. Don't fight it; work with it.",
    best_for: [
      "Daily specials on social",
      "Service-time emergencies",
      "Documentation when the proper rig isn't an option",
      "Anyone who claims they don't have time for photography",
    ],
    mood: "Honest. Working-kitchen. Surprisingly good if you do the four steps right.",
    diagram: {
      elements: [
        { type: "window", x: 25, y: 50, label: "Window" },
        { type: "subject", x: 50, y: 50, label: "Plate" },
        { type: "reflector", x: 75, y: 50, label: "Paper" },
        { type: "camera", x: 50, y: 82, label: "Phone" },
      ],
    },
  },
];
