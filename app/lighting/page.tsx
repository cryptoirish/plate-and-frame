import { LIGHTING_SETUPS } from "@/lib/lighting-setups";
import { LightingDiagram } from "@/components/LightingDiagram";

export const metadata = {
  title: "Lighting — Plate & Frame",
  description:
    "Six lighting setups for food, from a single window to a full three-point rig. Built for kitchens, not studios.",
};

const difficultyColor = {
  Easy: "text-sage",
  Moderate: "text-ochre",
  Advanced: "text-ember",
};

export default function LightingPage() {
  return (
    <div className="paper">
      <section className="pt-12 lg:pt-20 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-ink/50 font-mono mb-10">
            <span>Studio · 03</span>
            <span>Lighting</span>
            <span className="hidden md:inline">Six setups, kitchen to studio</span>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.92] tracking-tightest">
                Light is<br />
                <span className="italic text-ember">the food.</span>
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pt-6">
              <div className="border-l-2 border-ember pl-5">
                <p className="font-serif text-lg leading-snug text-ink/80">
                  Six setups, ordered by what you actually own. Start with the
                  window. Earn your way to the three-point rig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 space-y-24 lg:space-y-32">
        {LIGHTING_SETUPS.map((s, i) => (
          <article key={s.slug} id={s.slug} className="scroll-mt-28">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-10">
                <div className="col-span-12 lg:col-span-2">
                  <div className="font-display text-7xl lg:text-8xl font-light italic text-ember/60 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-10">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
                    <h2 className="font-display text-5xl md:text-6xl font-light tracking-tightest leading-[0.95]">
                      {s.name}
                    </h2>
                    <span className={`text-[10px] uppercase tracking-widest font-mono ${difficultyColor[s.difficulty]}`}>
                      ◆ {s.difficulty}
                    </span>
                  </div>
                  <p className="font-display text-2xl italic text-ember leading-tight">
                    {s.tagline}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-8 mb-12">
                <div className="col-span-12 lg:col-span-6">
                  <p className="font-serif text-xl leading-relaxed text-ink/85 dropcap mb-10">
                    {s.description}
                  </p>

                  <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-5">
                    Gear
                  </div>
                  <ul className="space-y-2 mb-10">
                    {s.gear.map((g) => (
                      <li key={g} className="font-serif text-base text-ink/85 flex gap-3 leading-snug">
                        <span className="text-ember mt-1.5 shrink-0 text-xs">▸</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-5">
                    Step by step
                  </div>
                  <ol className="space-y-4">
                    {s.setup_steps.map((step, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="font-display text-2xl italic text-ember/70 leading-none shrink-0 w-6">
                          {idx + 1}
                        </span>
                        <p className="font-serif text-base text-ink/85 leading-snug">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="col-span-12 lg:col-span-6 lg:pl-4">
                  <LightingDiagram setup={s} />

                  <div className="mt-8 bg-ink text-bone p-8">
                    <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-3">
                      Light quality
                    </div>
                    <p className="font-serif text-lg text-bone/95 leading-snug mb-6">
                      {s.light_quality}
                    </p>

                    <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-3">
                      Mood
                    </div>
                    <p className="font-serif text-lg italic text-bone/95 leading-snug mb-6">
                      {s.mood}
                    </p>

                    <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-3">
                      Best for
                    </div>
                    <ul className="space-y-2">
                      {s.best_for.map((b) => (
                        <li key={b} className="font-serif text-base text-bone/85 flex gap-3 leading-snug">
                          <span className="text-ember mt-1.5 shrink-0 text-xs">●</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
