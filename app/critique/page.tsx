import { CritiqueStudio } from "@/components/CritiqueStudio";

export const metadata = {
  title: "Critique — Plate & Frame",
  description:
    "Upload a food photo. Get a structured, professional-grade critique in under a minute.",
};

export default function CritiquePage() {
  return (
    <div className="paper min-h-[calc(100vh-200px)]">
      <section className="pt-12 lg:pt-20 pb-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-ink/50 font-mono mb-10">
            <span>Studio · 01</span>
            <span>Critique</span>
            <span className="hidden md:inline">Three free per month</span>
          </div>

          <div className="grid grid-cols-12 gap-8 mb-12">
            <div className="col-span-12 md:col-span-8">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.92] tracking-tightest">
                Show us<br />
                <span className="italic text-ember">the plate.</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 md:pt-4">
              <div className="border-l-2 border-ember pl-5">
                <p className="font-serif text-lg leading-snug text-ink/80">
                  Upload one photograph. You&apos;ll get six scored dimensions,
                  the dish identified, and the one thing to change first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CritiqueStudio />
    </div>
  );
}
