import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-ink text-bone mt-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-display text-4xl tracking-tightest font-light">
                Plate
              </span>
              <span className="text-ember text-2xl">&</span>
              <span className="font-display text-4xl tracking-tightest font-light">
                Frame
              </span>
            </div>
            <p className="font-serif text-lg text-bone/70 max-w-md leading-relaxed">
              A working studio for chefs who&apos;d rather be in the kitchen than
              behind a camera. Built by someone who&apos;s been on the line for
              three decades.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest text-bone/40 mb-4 font-mono">
              Studio
            </h4>
            <ul className="space-y-2.5 text-sm text-bone/80">
              <li><Link href="/critique" className="hover:text-ember transition-colors">Critique</Link></li>
              <li><Link href="/shot-planning" className="hover:text-ember transition-colors">Shot Planning</Link></li>
              <li><Link href="/lighting" className="hover:text-ember transition-colors">Lighting</Link></li>
              <li><Link href="/presets" className="hover:text-ember transition-colors">Presets</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest text-bone/40 mb-4 font-mono">
              Kitchen
            </h4>
            <ul className="space-y-2.5 text-sm text-bone/80">
              <li><Link href="/pricing" className="hover:text-ember transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-ember transition-colors">For Restaurants</Link></li>
              <li><Link href="#" className="hover:text-ember transition-colors">Hospitality Suite</Link></li>
              <li><Link href="#" className="hover:text-ember transition-colors">API access</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-widest text-bone/40 mb-4 font-mono">
              From the pass
            </h4>
            <p className="text-sm text-bone/70 leading-relaxed">
              Weekly notes on plating, light, and the small things that turn a
              good shot into a great one.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="your@kitchen.com"
                className="flex-1 bg-transparent border-b border-bone/30 text-sm py-2 focus:border-ember outline-none placeholder:text-bone/40"
              />
              <button
                type="button"
                className="ml-2 text-[10px] uppercase tracking-widest text-ember hover:text-bone transition-colors"
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bone/15 flex flex-col md:flex-row justify-between gap-4 text-[11px] uppercase tracking-widest text-bone/40 font-mono">
          <span>© 2026 Plate &amp; Frame · A Hospitality Suite product</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-bone">Privacy</Link>
            <Link href="#" className="hover:text-bone">Terms</Link>
            <Link href="#" className="hover:text-bone">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
