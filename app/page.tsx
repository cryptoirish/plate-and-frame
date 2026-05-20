import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="paper">
      {/* HERO */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-ink/50 font-mono mb-14 rise">
            <span>Volume 01 · Issue 01</span>
            <span className="hidden md:inline">London · Belfast · Wherever you cook</span>
            <span>For working kitchens</span>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="font-display font-light leading-[0.92] tracking-tightest rise rise-delay-1">
                <span className="block text-[14vw] md:text-[10vw] lg:text-[9.5rem]">Food</span>
                <span className="block text-[14vw] md:text-[10vw] lg:text-[9.5rem] italic text-ember -mt-2 lg:-mt-6">
                  photography,
                </span>
                <span className="block text-[14vw] md:text-[10vw] lg:text-[9.5rem] -mt-2 lg:-mt-6">
                  sharpened.
                </span>
              </h1>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:pb-6 rise rise-delay-2">
              <div className="border-l-2 border-ember pl-6">
                <p className="font-serif text-xl lg:text-2xl leading-snug text-ink/90 mb-6">
                  An AI-powered studio for chefs and restaurants. Upload a shot,
                  get the critique you&apos;d hear from a $2,000-a-day food
                  photographer — in twenty seconds.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/critique"
                    className="inline-flex items-center gap-2 bg-ink text-bone px-6 py-3.5 text-[11px] uppercase tracking-widest hover:bg-ember transition-colors"
                  >
                    Critique a shot
                    <ArrowUpRight size={14} />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 border border-ink/30 px-6 py-3.5 text-[11px] uppercase tracking-widest hover:border-ink transition-colors"
                  >
                    See pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/15 border border-ink/15 rise rise-delay-3">
            {[
              { k: "20s", v: "Average critique time" },
              { k: "47", v: "Composition principles" },
              { k: "6", v: "Lighting setups" },
              { k: "Free", v: "First three critiques" },
            ].map((s) => (
              <div key={s.v} className="bg-bone p-6 lg:p-8">
                <div className="font-display text-5xl lg:text-6xl font-light text-ink leading-none mb-3">
                  {s.k}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-ink/60 font-mono">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-ink text-bone py-7 overflow-hidden border-y border-ink">
        <div className="flex whitespace-nowrap marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 text-[11px] uppercase tracking-widest font-mono shrink-0">
              <span>Critique →</span>
              <span className="text-ember">Composition</span>
              <span>Lighting</span>
              <span className="text-ember">Styling</span>
              <span>Colour balance</span>
              <span className="text-ember">Appetite appeal</span>
              <span>Focal point</span>
              <span className="text-ember">Negative space</span>
              <span>Texture</span>
              <span className="text-ember">Garnish discipline</span>
              <span>Plate framing</span>
              <span className="text-ember">Steam &amp; motion</span>
            </div>
          ))}
        </div>
      </section>

      {/* THE METHOD */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 md:col-span-3">
              <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-3">
                01 — The Method
              </div>
              <h2 className="font-display text-5xl lg:text-6xl font-light leading-[0.95] tracking-tightest">
                Four tools.<br />
                <span className="italic">One studio.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-4">
              <p className="font-serif text-xl leading-relaxed text-ink/80">
                Most photography tools are made for photographers. This one is
                made for the person who plated the dish, knows exactly what it
                should look like, and just needs a second pair of eyes that
                actually knows food.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/15 border border-ink/15">
            {[
              {
                n: "I",
                title: "AI Critique",
                body: "Upload a shot. Get back composition, lighting, colour, styling, and appetite appeal — graded and noted line by line. No fluff, just what to fix.",
                href: "/critique",
              },
              {
                n: "II",
                title: "Shot Planning",
                body: "Compositions worth knowing — overhead, 45°, hero, hand-in-frame, action. With camera settings, plate placement, and what dishes each treatment flatters.",
                href: "/shot-planning",
              },
              {
                n: "III",
                title: "Lighting Tutorials",
                body: "Six setups, from a single window to a full three-point rig. Built for kitchens that can&apos;t afford a studio — because most can&apos;t.",
                href: "/lighting",
              },
              {
                n: "IV",
                title: "Editing Presets",
                body: "Lightroom and Capture One presets tuned for food. Warm-savoury, cold-pastry, moody-tasting-menu, bright-brunch — the four families you actually need.",
                href: "/presets",
              },
            ].map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="group bg-bone p-10 lg:p-14 hover:bg-cream transition-colors duration-500 relative"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-7xl font-light text-ember/80 italic leading-none">
                    {f.n}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-ink/40 group-hover:text-ember group-hover:rotate-45 transition-all duration-500"
                  />
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-light tracking-tightest mb-4">
                  {f.title}
                </h3>
                <p className="font-serif text-lg leading-relaxed text-ink/75 max-w-lg">
                  {f.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-24 lg:py-32 bg-cream relative grain">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-8 text-center">
            From the editor
          </div>
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tightest text-center">
            <span className="text-ember text-6xl md:text-8xl leading-none align-top">&ldquo;</span>
            A bad photo of a beautiful plate is a kind of theft. You did the
            work; the camera should at least <span className="italic">honour</span> it.
            <span className="text-ember text-6xl md:text-8xl leading-none align-top">&rdquo;</span>
          </blockquote>
          <div className="mt-10 text-center text-[11px] uppercase tracking-widest text-ink/60 font-mono">
            Sean — Head of Kitchen Notes
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-3">
                02 — Built for
              </div>
              <h2 className="font-display text-5xl lg:text-6xl font-light leading-[0.95] tracking-tightest mb-8">
                Working<br />kitchens.
              </h2>
              <p className="font-serif text-xl text-ink/80 leading-relaxed">
                You don&apos;t need a photographer on retainer. You need to
                photograph the special before service, get it on Instagram by
                three, and have it look like the place you actually want to
                work in.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:pl-12">
              <div className="space-y-px bg-ink/15 border border-ink/15">
                {[
                  {
                    who: "Independent restaurants",
                    why: "Menu refreshes, weekly specials, the Sunday roast post that has to land by 11am.",
                  },
                  {
                    who: "Hotel kitchens",
                    why: "Banquet, room service, breakfast spreads — high volume, no studio time.",
                  },
                  {
                    who: "Private chefs &amp; pop-ups",
                    why: "Portfolio shots that don&apos;t scream &lsquo;phone in one hand, plating with the other.&rsquo;",
                  },
                  {
                    who: "Catering &amp; institutional",
                    why: "Make tray bakes look like tray bakes are supposed to look. Yes, it&apos;s possible.",
                  },
                ].map((c) => (
                  <div key={c.who} className="bg-bone p-6 lg:p-8 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                    <div className="font-display text-2xl font-light tracking-tightest md:w-1/3" dangerouslySetInnerHTML={{ __html: c.who }} />
                    <div className="font-serif text-lg text-ink/75 md:flex-1 leading-snug" dangerouslySetInnerHTML={{ __html: c.why }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ink text-bone relative">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #F4EFE6 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 text-center">
          <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-6">
            Three free critiques · no card required
          </div>
          <h2 className="font-display text-6xl md:text-8xl font-light leading-[0.9] tracking-tightest mb-10">
            Shoot something.<br />
            <span className="italic text-ember">Show us.</span>
          </h2>
          <Link
            href="/critique"
            className="inline-flex items-center gap-3 bg-bone text-ink px-10 py-5 text-[11px] uppercase tracking-widest hover:bg-ember hover:text-bone transition-colors"
          >
            Start in the studio
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
