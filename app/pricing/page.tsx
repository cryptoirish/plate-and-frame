import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Pricing — Plate & Frame",
  description:
    "Free to try, fair to subscribe. Three critiques a month free. £9/month for unlimited critiques, all presets, and the full studio.",
};

const tiers = [
  {
    name: "Apprentice",
    price: "Free",
    cadence: "forever",
    description: "Try the studio. No card required.",
    features: [
      "3 AI critiques per month",
      "All shot planning guides",
      "All lighting tutorials",
      "3 free Lightroom presets",
      "Save critiques as text reports",
    ],
    cta: "Start free",
    href: "/critique",
    featured: false,
  },
  {
    name: "Sous Chef",
    price: "£9",
    cadence: "per month",
    description: "Everything, every day, no limits.",
    features: [
      "Unlimited AI critiques",
      "All 8 Lightroom presets",
      "Capture One presets included",
      "PDF critique reports",
      "Compare before/after presets in-app",
      "Priority email support",
      "Cancel anytime",
    ],
    cta: "Start 14-day trial",
    href: "/login?plan=sous-chef",
    featured: true,
  },
  {
    name: "Head of Pass",
    price: "£39",
    cadence: "per month, per kitchen",
    description: "For teams. Up to 10 seats.",
    features: [
      "Everything in Sous Chef",
      "Up to 10 team members",
      "Shared critique history",
      "Brand-consistency mode (lock to your style)",
      "API access to the critique endpoint",
      "First in line for the hospitality suite",
      "Phone support during service hours",
    ],
    cta: "Book a demo",
    href: "/login?plan=head-of-pass",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="paper">
      <section className="pt-12 lg:pt-20 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-ink/50 font-mono mb-10">
            <span>Pricing · 01</span>
            <span>Three tiers</span>
            <span className="hidden md:inline">Cancel anytime</span>
          </div>

          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.92] tracking-tightest">
                Fair for<br />
                <span className="italic text-ember">working kitchens.</span>
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pt-6">
              <div className="border-l-2 border-ember pl-5">
                <p className="font-serif text-lg leading-snug text-ink/80">
                  Three critiques a month, free. Unlimited for the price of a
                  decent bottle of wine. Cancel any time, no questions.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-8 lg:p-10 flex flex-col ${
                  tier.featured ? "bg-ink text-bone" : "bg-bone"
                }`}
              >
                {tier.featured && (
                  <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-3">
                    ★ Most kitchens pick this
                  </div>
                )}
                <h2 className="font-display text-4xl lg:text-5xl font-light tracking-tightest mb-2">
                  {tier.name}
                </h2>
                <p className={`font-serif text-base mb-8 ${tier.featured ? "text-bone/70" : "text-ink/70"}`}>
                  {tier.description}
                </p>

                <div className="mb-8 pb-8 border-b border-current/15">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-6xl font-light tracking-tightest">
                      {tier.price}
                    </span>
                    <span className={`text-sm font-mono uppercase tracking-widest ${tier.featured ? "text-bone/50" : "text-ink/50"}`}>
                      {tier.cadence}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-3 font-serif text-base leading-snug">
                      <Check
                        size={18}
                        className={`shrink-0 mt-0.5 ${tier.featured ? "text-ember" : "text-sage"}`}
                      />
                      <span className={tier.featured ? "text-bone/90" : "text-ink/85"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-4 text-[11px] uppercase tracking-widest transition-colors ${
                    tier.featured
                      ? "bg-ember text-bone hover:bg-bone hover:text-ink"
                      : "bg-ink text-bone hover:bg-ember"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-3">
            Questions, asked honestly
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-light tracking-tightest leading-[0.95] mb-16">
            The fine print,<br /><span className="italic">in plain words.</span>
          </h2>

          <div className="space-y-px bg-ink/15 border border-ink/15">
            {[
              {
                q: "Do I really get 3 critiques free, no card?",
                a: "Yes. No credit card, no email confirmation, no scheme. Three a month, refreshes on the first.",
              },
              {
                q: "Is my data used to train AI models?",
                a: "Your photos are sent to Anthropic's Claude API for the critique, then discarded. We don't store them. We don't train on them. We don't sell them.",
              },
              {
                q: "Can I cancel?",
                a: "Any time, one click. You keep access until the end of the billing period. No exit interviews.",
              },
              {
                q: "What's the hospitality suite I keep seeing mentioned?",
                a: "Plate & Frame is the first product in a wider hospitality-AI line — inventory, recipe costing, HACCP, reservations. Paid users get early access as those launch.",
              },
              {
                q: "Will the AI critique work for my cuisine?",
                a: "It's trained on a broad photographic vocabulary, not on European food specifically. Tested on Japanese, Indian, Levantine, West African, Latin American, and traditional European cooking. If something reads as off, send us the photo.",
              },
            ].map((item) => (
              <details key={item.q} className="bg-bone p-6 lg:p-8 group">
                <summary className="cursor-pointer flex items-baseline justify-between gap-4 list-none">
                  <span className="font-display text-xl lg:text-2xl font-light tracking-tightest">
                    {item.q}
                  </span>
                  <span className="text-ember text-2xl group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <p className="font-serif text-lg text-ink/80 leading-snug mt-4">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
