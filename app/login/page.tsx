import Link from "next/link";

export const metadata = {
  title: "Sign in — Plate & Frame",
};

export default function LoginPage() {
  return (
    <div className="paper min-h-[calc(100vh-200px)] flex items-center">
      <div className="max-w-[480px] mx-auto px-6 py-20 w-full">
        <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-3 text-center">
          The kitchen door
        </div>
        <h1 className="font-display text-5xl font-light tracking-tightest leading-[0.95] text-center mb-10">
          Sign in.
        </h1>

        <form className="space-y-5">
          <div>
            <label className="text-[10px] uppercase tracking-widest text-ink/60 font-mono mb-2 block">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@kitchen.com"
              className="w-full bg-transparent border-b-2 border-ink/30 py-3 text-lg font-serif focus:border-ember outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-widest text-ink/60 font-mono mb-2 block">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full bg-transparent border-b-2 border-ink/30 py-3 text-lg font-serif focus:border-ember outline-none"
            />
          </div>

          <button
            type="button"
            className="w-full mt-8 bg-ink text-bone py-4 text-[11px] uppercase tracking-widest hover:bg-ember transition-colors"
          >
            Sign in
          </button>

          <div className="text-center text-sm text-ink/60 font-serif">
            No account yet?{" "}
            <Link href="/critique" className="text-ember hover:underline">
              Start with 3 free critiques
            </Link>
          </div>
        </form>

        <div className="mt-12 pt-8 border-t border-ink/15 text-center text-[10px] uppercase tracking-widest text-ink/40 font-mono">
          Authentication scaffolded — wire to Clerk in production
        </div>
      </div>
    </div>
  );
}
