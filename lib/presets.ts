export type Preset = {
  slug: string;
  name: string;
  family: "Warm Savoury" | "Cold Pastry" | "Moody Tasting" | "Bright Brunch";
  tagline: string;
  description: string;
  best_for: string[];
  adjustments: { label: string; value: string }[];
  paid: boolean;
};

export const PRESETS: Preset[] = [
  {
    slug: "warm-roast",
    name: "Warm Roast",
    family: "Warm Savoury",
    tagline: "Sunday lunch, glow on.",
    description:
      "Pushes oranges and yellows just enough to make roasts, gravies and burnished crusts look fed-from-the-oven warm without going full saturation crime.",
    best_for: ["Roast meats", "Stews", "Gravy", "Caramel crusts", "Burnished pastry"],
    adjustments: [
      { label: "Temperature", value: "+8" },
      { label: "Tint", value: "+3" },
      { label: "Highlights", value: "−15" },
      { label: "Shadows", value: "+20" },
      { label: "Vibrance", value: "+12" },
      { label: "Orange Hue", value: "−4" },
      { label: "Orange Saturation", value: "+18" },
      { label: "Yellow Luminance", value: "+8" },
    ],
    paid: false,
  },
  {
    slug: "sear-and-char",
    name: "Sear & Char",
    family: "Warm Savoury",
    tagline: "Maillard worship.",
    description:
      "Built for protein at the centre of the plate — steak, lamb chops, anything that's seen serious heat. Deepens the blacks of char without crushing detail; lifts the rendered fats into amber.",
    best_for: ["Steak", "Lamb", "Yakitori", "Charred vegetables", "Burgers"],
    adjustments: [
      { label: "Contrast", value: "+18" },
      { label: "Blacks", value: "−25" },
      { label: "Whites", value: "+10" },
      { label: "Clarity", value: "+22" },
      { label: "Orange Saturation", value: "+10" },
      { label: "Red Luminance", value: "−6" },
    ],
    paid: false,
  },
  {
    slug: "cold-pastry",
    name: "Cold Pastry",
    family: "Cold Pastry",
    tagline: "Glass, sugar, ice.",
    description:
      "Cooler temperature, lifted whites, gentle contrast. Pastry, ice cream, and anything that should read 'recently out of the fridge' instead of 'sat on the pass for ten minutes.'",
    best_for: ["Ice cream", "Sorbet", "Lamination", "Glass desserts", "Mille-feuille"],
    adjustments: [
      { label: "Temperature", value: "−6" },
      { label: "Tint", value: "−2" },
      { label: "Whites", value: "+22" },
      { label: "Highlights", value: "−8" },
      { label: "Clarity", value: "−6" },
      { label: "Dehaze", value: "−4" },
      { label: "Blue Luminance", value: "+10" },
    ],
    paid: false,
  },
  {
    slug: "porcelain-pastry",
    name: "Porcelain Pastry",
    family: "Cold Pastry",
    tagline: "White plate, white food, no apology.",
    description:
      "For pastry chefs photographing white-on-white — mascarpone, meringue, vanilla, white chocolate. Keeps separation between tones that all want to be the same tone.",
    best_for: ["White chocolate", "Meringue", "Crème", "Pavlova", "Vanilla ice cream"],
    adjustments: [
      { label: "Contrast", value: "+10" },
      { label: "Whites", value: "+15" },
      { label: "Highlights", value: "−18" },
      { label: "Texture", value: "+12" },
      { label: "Clarity", value: "+6" },
      { label: "Yellow Luminance", value: "−4" },
    ],
    paid: true,
  },
  {
    slug: "tasting-menu",
    name: "Tasting Menu",
    family: "Moody Tasting",
    tagline: "Fine dining in shadow.",
    description:
      "Crushed shadows, low overall exposure, kept-honest highlights. The look of a winter tasting menu shot at the pass under a single lamp. Reads as serious without being murky.",
    best_for: ["Plated tasting courses", "Dark sauces", "Mushroom dishes", "Black plates"],
    adjustments: [
      { label: "Exposure", value: "−0.4" },
      { label: "Contrast", value: "+25" },
      { label: "Highlights", value: "−25" },
      { label: "Shadows", value: "−15" },
      { label: "Blacks", value: "−18" },
      { label: "Clarity", value: "+8" },
      { label: "Vibrance", value: "−6" },
    ],
    paid: true,
  },
  {
    slug: "midnight-supper",
    name: "Midnight Supper",
    family: "Moody Tasting",
    tagline: "Single-source, candle-warm.",
    description:
      "Built for shots where one warm light source — a candle, a single overhead lamp, a fading window — does all the work. Preserves that source's intent instead of fighting it.",
    best_for: ["Candlelit scenes", "Late service shots", "Whisky and spirits", "Bistro plates"],
    adjustments: [
      { label: "Temperature", value: "+12" },
      { label: "Exposure", value: "−0.3" },
      { label: "Highlights", value: "−30" },
      { label: "Shadows", value: "+10" },
      { label: "Whites", value: "−10" },
      { label: "Orange Hue", value: "+5" },
      { label: "Orange Saturation", value: "+8" },
    ],
    paid: true,
  },
  {
    slug: "bright-brunch",
    name: "Bright Brunch",
    family: "Bright Brunch",
    tagline: "Saturday morning, every time.",
    description:
      "The Instagram-perfect breakfast look — clean, bright, lifted shadows, slightly cool. For places where 'airy and welcoming' is the brand.",
    best_for: ["Eggs benedict", "Pancakes", "Avocado anything", "Flat whites", "Acai bowls"],
    adjustments: [
      { label: "Exposure", value: "+0.2" },
      { label: "Highlights", value: "+8" },
      { label: "Shadows", value: "+30" },
      { label: "Whites", value: "+12" },
      { label: "Vibrance", value: "+18" },
      { label: "Saturation", value: "+4" },
      { label: "Green Luminance", value: "+10" },
    ],
    paid: false,
  },
  {
    slug: "garden-fresh",
    name: "Garden Fresh",
    family: "Bright Brunch",
    tagline: "Greens that taste green.",
    description:
      "Tuned for salads, herbs, leafy plates. Pulls greens away from the yellow bias that makes basil look tired and lettuce look limp, even when they aren't.",
    best_for: ["Salads", "Herb-led dishes", "Pesto", "Watercress", "Garden tables"],
    adjustments: [
      { label: "Green Hue", value: "−8" },
      { label: "Green Saturation", value: "+15" },
      { label: "Green Luminance", value: "+5" },
      { label: "Yellow Hue", value: "+4" },
      { label: "Vibrance", value: "+15" },
      { label: "Clarity", value: "+8" },
    ],
    paid: true,
  },
];

export const FAMILIES = [
  {
    name: "Warm Savoury",
    accent: "ember",
    description: "Roasts, sears, stews, gravies. Everything that wants to look fed-from-the-oven.",
  },
  {
    name: "Cold Pastry",
    accent: "sage",
    description: "Pastry, dessert, ice cream. Cool, lifted, glass-like.",
  },
  {
    name: "Moody Tasting",
    accent: "ink",
    description: "Fine dining and atmospheric. Crushed shadows, considered light.",
  },
  {
    name: "Bright Brunch",
    accent: "ochre",
    description: "Airy, optimistic, café-bright. The Instagram default.",
  },
] as const;
