export type ShotType = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  best_for: string[];
  avoid_for: string[];
  camera: {
    angle: string;
    focal_length: string;
    aperture: string;
    iso_strategy: string;
  };
  plate_placement: string;
  composition_principle: string;
  common_mistake: string;
  pro_tip: string;
};

export const SHOT_TYPES: ShotType[] = [
  {
    slug: "overhead",
    name: "Overhead",
    tagline: "The flat-lay. Honest, graphic, unforgiving.",
    description:
      "Camera directly above the plate, lens perpendicular to the surface. The shot that says 'here is everything on the table, arranged with intention.' Beautiful for shareable bowls and tables. Murder on anything with height.",
    best_for: [
      "Bowls — ramen, poke, grain bowls, soups with garnish",
      "Pizza, tarts, anything circular",
      "Table scenes with multiple dishes",
      "Flat plates with bold colour patterns",
      "Cocktails arranged in a series",
    ],
    avoid_for: [
      "Burgers, sandwiches, layered builds",
      "Anything where height is the dish (soufflé, towers, Sunday roast)",
      "Sauced plates where the sauce sits below the rim",
    ],
    camera: {
      angle: "90° directly overhead",
      focal_length: "35–50mm full-frame equivalent",
      aperture: "f/5.6 to f/8 — you want the whole plate sharp",
      iso_strategy: "Keep ISO low (100–400). Tripod or overhead rig if you can.",
    },
    plate_placement:
      "Off-centre, following the rule of thirds. The plate's most photogenic edge faces the light source. Negative space on two sides, not all four.",
    composition_principle:
      "Symmetry kills overheads. Aim for slight asymmetry — a spoon at 4 o'clock, a wedge of lemon at 10, a scatter of herbs breaking the rim.",
    common_mistake:
      "Centring the bowl in the frame. It looks like a stock photo. Push the plate one-third off-centre and let napkin, cutlery, or props occupy the rest.",
    pro_tip:
      "If you can't get directly overhead, you're at 80°, which reads as wonky 45°. Either commit to 90° or move to a proper 45°.",
  },
  {
    slug: "45-degree",
    name: "45° Angle",
    tagline: "The diner's view. The most flattering angle in food.",
    description:
      "Roughly the angle of someone sitting at the table about to take a bite. Shows top and side, gives height, reveals texture without flattening the dish. The single most useful angle for restaurants.",
    best_for: [
      "Almost everything. Default to this when unsure.",
      "Layered builds — burgers, club sandwiches, parfaits",
      "Plated mains with sauce work",
      "Pastry with visible cross-section",
    ],
    avoid_for: [
      "Pure flat-lays (bowls of soup)",
      "When you need to show pattern from above",
    ],
    camera: {
      angle: "45° from horizontal — between eye-level and overhead",
      focal_length: "50–85mm equivalent for natural perspective",
      aperture: "f/2.8 to f/4 for selective focus on the hero element",
      iso_strategy: "ISO 200–800 depending on light. Stabilise if hand-held.",
    },
    plate_placement:
      "Hero element of the dish closest to camera and slightly off-centre. The 'best face' of the plate angled toward the light.",
    composition_principle:
      "Leading line — sauce trail, asparagus spear, herb scatter — drawing the eye from foreground to the hero element.",
    common_mistake:
      "Aperture too wide. f/1.4 gives you a sharp parsley leaf and a blurred main protein. Stop down.",
    pro_tip:
      "Shoot a series at f/2.8, f/4, f/5.6 of the same plate. Pick after, not during. The optimal depth-of-field is dish-specific.",
  },
  {
    slug: "hero-straight",
    name: "Hero / Straight-on",
    tagline: "Eye-level. Editorial. Architectural.",
    description:
      "Camera at the same height as the plate, lens parallel to the table. The angle of magazine covers and Michelin-starred cookbooks. Demands a dish with stature — height, structure, sculptural presence.",
    best_for: [
      "Tall builds — towers, layered desserts, club sandwiches",
      "Drinks — cocktails, coffees, beer with head",
      "Pour shots, sauce-being-poured moments",
      "Dishes with a hero ingredient at the top (a perfect egg yolk, a quenelle)",
    ],
    avoid_for: [
      "Flat plates with no vertical interest",
      "Bowls (you can't see in)",
      "Busy backgrounds — they compete with the dish silhouette",
    ],
    camera: {
      angle: "0° — perfectly horizontal, sensor parallel to plate rim",
      focal_length: "85–135mm for compression and isolation",
      aperture: "f/4 to f/5.6 for the dish, f/8+ if background props matter",
      iso_strategy: "Studio or window light. ISO 100–400.",
    },
    plate_placement:
      "Dead-centre or rule-of-thirds vertical. Background must recede — dark, plain, or far enough away to throw out of focus.",
    composition_principle:
      "Silhouette is everything. Plan the shot around the outline of the dish against the background.",
    common_mistake:
      "Busy backgrounds. A hero shot needs a hero. Move the plate forward and the backdrop back, or use a longer lens to compress.",
    pro_tip:
      "Backlight the dish. Light coming from behind separates the silhouette from the backdrop and gives steam something to catch.",
  },
  {
    slug: "hand-in-frame",
    name: "Hand in Frame",
    tagline: "The human moment. Storytelling, not just plating.",
    description:
      "A hand sprinkling salt, finishing a sauce, lifting a slice, breaking a piece of bread. Adds scale, movement, and the implicit story that someone made this — for someone.",
    best_for: [
      "Process shots — finishing salt, cracking pepper, drizzling oil",
      "Lift shots — pulling cheese, breaking bread, scooping",
      "Marketing content where 'the chef' is the brand",
    ],
    avoid_for: [
      "Pure product photography for menus",
      "When the hand competes with the dish for attention",
    ],
    camera: {
      angle: "Usually 45° or overhead — match the underlying composition",
      focal_length: "35–50mm to keep hand in proportion",
      aperture: "f/4 to f/5.6 — hand and dish should both be sharp",
      iso_strategy: "Higher shutter speed (1/250+) to freeze action. Push ISO if needed.",
    },
    plate_placement:
      "Standard placement, but leave intentional space where the hand will enter the frame.",
    composition_principle:
      "The hand is a leading line, not the subject. The dish is still the subject. Frame so the hand points toward the hero.",
    common_mistake:
      "Hand too prominent — looks like a hand modelling for food. Crop tight on wrist and forearm; the hand is a guest, not the host.",
    pro_tip:
      "Clean nails. Roll the sleeve. Watch the watch. These things read instantly in the photo and they break the spell when they're wrong.",
  },
  {
    slug: "action",
    name: "Action Shot",
    tagline: "Motion captured. Pour, drizzle, sprinkle, smoke.",
    description:
      "The moment of the pour, the cascade of garnish, the drift of smoke from a still-resting joint. Visual catnip on social — but technically demanding.",
    best_for: [
      "Pour shots — cream, sauce, dressing, syrup",
      "Sprinkle shots — salt, herbs, chocolate dust",
      "Smoke / steam shots",
      "Knife cuts revealing interior — runny yolk, jammy egg, melted cheese",
    ],
    avoid_for: [
      "When you only have one shot — action means dozens of attempts",
      "Dishes where the action covers the hero",
    ],
    camera: {
      angle: "Usually 45° or hero — angle that best shows the motion",
      focal_length: "50–85mm",
      aperture: "f/4 to f/5.6 — wider aperture risks losing the action",
      iso_strategy: "Shutter speed 1/500+ for liquids, 1/1000+ for sprinkles. ISO accordingly.",
    },
    plate_placement:
      "Plate occupies the lower half or third of the frame. The action needs room above to register.",
    composition_principle:
      "Anticipate the path. The pour should arc into the frame, not appear out of nowhere. Frame for where the action will be at peak moment.",
    common_mistake:
      "Shutter too slow. A 'pour shot' at 1/125 is a blur, not a stream. Up the shutter, up the ISO, accept the noise.",
    pro_tip:
      "Continuous burst mode, then pick the frame. Twenty attempts gets you the shot. Don't try to nail it on the first squeeze.",
  },
  {
    slug: "detail-macro",
    name: "Detail / Macro",
    tagline: "Texture worship. Get uncomfortably close.",
    description:
      "Close-cropped texture — the crackling on a pork belly, the crumb of a sourdough, the bead on a sauce. Sells the dish on craft, not presentation.",
    best_for: [
      "Texture-led dishes — pastry, bread, crackling, foam",
      "Inserts and supporting shots in a feature",
      "Highlighting a specific ingredient or technique",
    ],
    avoid_for: [
      "When the dish is more than the sum of its textures",
      "Menu hero shots (too abstract on its own)",
    ],
    camera: {
      angle: "Variable — go where the texture leads",
      focal_length: "90–105mm macro lens ideally; close-focus 50mm acceptable",
      aperture: "f/8 to f/11 to keep more texture in focus",
      iso_strategy: "Tripod always. Mirror lock or electronic shutter to kill vibration.",
    },
    plate_placement:
      "Often no plate visible. Crop tight on the texture. Edges of the frame should already be in the food.",
    composition_principle:
      "Negative space inside the frame, not outside. Let pattern and texture do the composition work.",
    common_mistake:
      "Aperture too wide — you get one grain of sea salt in focus and everything else mush. Stop down.",
    pro_tip:
      "Light at a hard angle — 80° side or even backlight. Raking light makes texture readable. Flat front light kills it.",
  },
];
