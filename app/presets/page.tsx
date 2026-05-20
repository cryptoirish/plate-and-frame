import { PRESETS, FAMILIES } from "@/lib/presets";
import { Download, Lock } from "lucide-react";

export const metadata = {
  title: "Presets — Plate & Frame",
  description:
    "Lightroom presets tuned for food. Four families, eight presets. Free downloads on three. Subscription unlocks the rest.",
};

const familyColors: Record<string, { bg: string; text: string; border: string }> = {
  "Warm Savoury": { bg: "bg-ember/10", text: "text-ember", border: "border-ember/30" },
  "Cold Pastry": { bg: "bg-sage/10", text: "text-sage", border: "border-sage/30" },
  "Moody Tasting": { bg: "bg-ink/10", text: "text-ink", border: "border-ink/30" },
  "Bright Brunch": { bg: "bg-ochre/10", text: "text-ochre", border: "border-ochre/30" },
};

export default function PresetsPage() {
  return (
    <div className="paper">
      <section className="pt-12 lg:pt-20 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-ink/50 font-mono mb-10">
            <span>Studio · 04</span>
            <span>Presets</span>
            <span className="hidden md:inline">Lightroom · Capture One</span>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.92] tracking-tightest">
                Edits that<br />
                <span className="italic text-ember">taste like food.</span>
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pt-6">
              <div className="border-l-2 border-ember pl-5">
                <p className="font-serif text-lg leading-snug text-ink/80">
                  Eight Lightroom presets in four families. Three free,
                  five with subscription. Drop the .xmp file into Lightroom
                  and apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 border-y border-ink/15 bg-cream/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {FAMILIES.map((f) => (
              <div key={f.name} className="border-l-2 border-ember pl-4">
                <div className="text-[10px] uppercase tracking-widest font-mono text-ember mb-2">
                  Family
                </div>
                <h3 className="font-display text-2xl font-light tracking-tightest mb-2">
                  {f.name}
                </h3>
                <p className="font-serif text-sm text-ink/75 leading-snug">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PRESETS.map((p, i) => {
              const colors = familyColors[p.family];
              return (
                <div
                  key={p.slug}
                  className="border border-ink/15 bg-bone p-8 lg:p-10 relative"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className={`inline-block px-3 py-1 text-[10px] uppercase tracking-widest font-mono border ${colors.border} ${colors.text}`}
                    >
                      {p.family}
                    </span>
                    <span className="font-display text-2xl italic text-ember/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display text-4xl lg:text-5xl font-light tracking-tightest mb-3 leading-[0.95]">
                    {p.name}
                  </h3>
                  <p className="font-display text-xl italic text-ember mb-5 leading-tight">
                    {p.tagline}
                  </p>
                  <p className="font-serif text-base text-ink/80 leading-relaxed mb-6">
                    {p.description}
                  </p>

                  <div className="text-[10px] uppercase tracking-widest text-ink/50 font-mono mb-3">
                    Best for
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.best_for.map((b) => (
                      <span
                        key={b}
                        className="text-xs text-ink/70 border border-ink/20 px-2.5 py-1"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <details className="mb-6 group">
                    <summary className="cursor-pointer text-[10px] uppercase tracking-widest text-ember font-mono inline-flex items-center gap-1 list-none">
                      <span className="group-open:rotate-90 inline-block transition-transform">▸</span>
                      View adjustments ({p.adjustments.length})
                    </summary>
                    <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 pt-4 border-t border-ink/15">
                      {p.adjustments.map((a) => (
                        <div key={a.label} className="flex justify-between font-mono text-xs">
                          <span className="text-ink/60">{a.label}</span>
                          <span className="text-ink font-bold">{a.value}</span>
                        </div>
                      ))}
                    </div>
                  </details>

                  {p.paid ? (
                    <button
                      disabled
                      className="w-full inline-flex items-center justify-center gap-2 border border-ink/20 px-6 py-3.5 text-[11px] uppercase tracking-widest text-ink/40 cursor-not-allowed"
                    >
                      <Lock size={14} />
                      Subscription required
                    </button>
                  ) : (
                    
                      href={`/api/preset-download?slug=${p.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-ink text-bone px-6 py-3.5 text-[11px] uppercase tracking-widest hover:bg-ember transition-colors"
                    >
                      <Download size={14} />
                      Download .xmp
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink text-bone">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4">
              <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-3">
                How to install
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-light tracking-tightest leading-[0.95]">
                Three steps,<br />
                <span className="italic">two minutes.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <ol className="space-y-8">
                {[
                  {
                    title: "Download the .xmp",
                    body: "Click any free preset above. The .xmp file will save to your downloads folder.",
                  },
                  {
                    title: "Import into Lightroom",
                    body: "In Lightroom, go to File → Import Develop Presets. Select the .xmp. You can also drag-drop into the Presets panel.",
                  },
                  {
                    title: "Apply and adjust",
                    body: "Click the preset in your Presets panel. Treat the result as a starting point — every dish needs a touch. Slide what's off, save your variant.",
                  },
                ].map((step, i) => (
                  <li key={i} className="grid grid-cols-12 gap-6 border-t border-bone/15 pt-6 first:border-t-0 first:pt-0">
                    <div className="col-span-2 md:col-span-1">
                      <span className="font-display text-5xl font-light italic text-ember">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      <h3 className="font-display text-2xl font-light tracking-tightest mb-2">
                        {step.title}
                      </h3>
                      <p className="font-serif text-lg text-bone/80 leading-snug">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
