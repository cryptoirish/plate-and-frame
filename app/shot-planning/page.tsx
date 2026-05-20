import { SHOT_TYPES } from "@/lib/shot-types";
import { ArrowDown } from "lucide-react";

export const metadata = {
  title: "Shot Planning - Plate and Frame",
  description: "Six compositions every chef should know.",
};

export default function ShotPlanningPage() {
  return (
    <div className="paper">
      <section className="pt-12 lg:pt-20 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.92] tracking-tightest">
            Pick the<br />
            <span className="italic text-ember">right angle.</span>
          </h1>
          <p className="font-serif text-lg leading-snug text-ink/80 mt-8 max-w-2xl">
            Six compositions every chef should know. Each one is matched to the dishes it flatters, the camera settings that work, and the mistake everyone makes.
          </p>

          <div className="mt-16 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-ember font-mono">
            <ArrowDown size={14} />
            Scroll through the six
          </div>
        </div>
      </section>

      <section className="border-y border-ink/15 bg-cream/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-px">
            {SHOT_TYPES.map((s, i) => (
              <a key={s.slug} href={`#${s.slug}`} className="bg-bone p-4 hover:bg-cream transition-colors group">
                <div className="font-display text-3xl font-light italic text-ember/70 leading-none mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-ink/70 group-hover:text-ink">
                  {s.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-24 lg:space-y-32">
          {SHOT_TYPES.map((s, i) => (
            <article key={s.slug} id={s.slug} className="scroll-mt-28">
              <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-10">
                <div className="col-span-12 lg:col-span-2">
                  <div className="font-display text-8xl lg:text-9xl font-light italic text-ember/60 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-10">
                  <h2 className="font-display text-5xl md:text-6xl font-light tracking-tightest leading-[0.95] mb-4">
                    {s.name}
                  </h2>
                  <p className="font-display text-2xl italic text-ember leading-tight">
                    {s.tagline}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-8 mb-12">
                <div className="col-span-12 lg:col-span-7 lg:col-start-3">
                  <p className="font-serif text-xl leading-relaxed text-ink/85">
                    {s.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6">
                  <div className="text-[10px] uppercase tracking-widest text-sage font-mono mb-4">Best for</div>
                  <ul className="space-y-2.5 mb-8">
                    {s.best_for.map((b) => (
                      <li key={b} className="font-serif text-base text-ink/85 flex gap-3 leading-snug">
                        <span className="text-sage mt-1.5 shrink-0 text-xs">+</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-4">Avoid for</div>
                  <ul className="space-y-2.5">
                    {s.avoid_for.map((b) => (
                      <li key={b} className="font-serif text-base text-ink/85 flex gap-3 leading-snug">
                        <span className="text-ember mt-1.5 shrink-0 text-xs">x</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <div className="bg-ink text-bone p-8 lg:p-10">
                    <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-6">Camera settings</div>
                    <dl className="space-y-5">
                      {[
                        ["Angle", s.camera.angle],
                        ["Focal length", s.camera.focal_length],
                        ["Aperture", s.camera.aperture],
                        ["ISO strategy", s.camera.iso_strategy],
                      ].map(([k, v]) => (
                        <div key={k} className="border-t border-bone/15 pt-4 first:border-t-0 first:pt-0">
                          <dt className="text-[10px] uppercase tracking-widest text-bone/50 font-mono mb-1">{k}</dt>
                          <dd className="font-serif text-lg text-bone/95 leading-snug">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
