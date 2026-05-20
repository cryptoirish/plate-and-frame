"use client";

import { RotateCcw, Download } from "lucide-react";
import type { CritiqueResponse, CritiqueDimension } from "@/types/critique";

type Props = {
  imageUrl: string;
  data: CritiqueResponse & { _meta?: { remaining: number; limit: number } };
  onReset: () => void;
};

function scoreColor(score: number) {
  if (score >= 8) return "text-sage";
  if (score >= 6) return "text-ochre";
  return "text-ember";
}

function ScoreBar({ score }: { score: number }) {
  const pct = Math.max(0, Math.min(100, (score / 10) * 100));
  return (
    <div className="h-px bg-ink/15 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-ember rise"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function DimensionBlock({ d }: { d: CritiqueDimension }) {
  return (
    <div className="border-t border-ink/15 py-8 first:border-t-0 first:pt-0">
      <div className="flex items-baseline justify-between mb-4 gap-4">
        <h3 className="font-display text-3xl font-light tracking-tightest">
          {d.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className={`font-display text-5xl font-light leading-none ${scoreColor(d.score)}`}>
            {d.score.toFixed(1)}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-ink/40 font-mono">/10</span>
        </div>
      </div>
      <ScoreBar score={d.score} />
      <p className="font-serif text-xl italic text-ink/85 mt-5 leading-snug">
        {d.verdict}
      </p>

      {d.notes && d.notes.length > 0 && (
        <div className="mt-6">
          <div className="text-[10px] uppercase tracking-widest text-ink/50 font-mono mb-3">
            What I&apos;m seeing
          </div>
          <ul className="space-y-2">
            {d.notes.map((n, i) => (
              <li key={i} className="font-serif text-base text-ink/80 flex gap-3 leading-snug">
                <span className="text-ember mt-1.5 shrink-0 text-xs">●</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {d.fixes && d.fixes.length > 0 && (
        <div className="mt-5">
          <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-3">
            What to try
          </div>
          <ul className="space-y-2">
            {d.fixes.map((f, i) => (
              <li key={i} className="font-serif text-base text-ink/80 flex gap-3 leading-snug">
                <span className="text-ember mt-1.5 shrink-0 text-xs">→</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function CritiqueResult({ imageUrl, data, onReset }: Props) {
  const dims = [
    data.dimensions.composition,
    data.dimensions.lighting,
    data.dimensions.colour,
    data.dimensions.styling,
    data.dimensions.focus_sharpness,
    data.dimensions.appetite_appeal,
  ];

  const handleDownload = () => {
    const lines: string[] = [];
    lines.push(`PLATE & FRAME — CRITIQUE REPORT`);
    lines.push(``);
    lines.push(`Dish: ${data.dish_identified}`);
    lines.push(`Shot type: ${data.shot_type}`);
    lines.push(`Overall: ${data.overall_score.toFixed(1)}/10`);
    lines.push(`Verdict: ${data.one_line_verdict}`);
    lines.push(``);
    lines.push(`---`);
    lines.push(``);
    dims.forEach((d) => {
      lines.push(`${d.name.toUpperCase()} — ${d.score.toFixed(1)}/10`);
      lines.push(d.verdict);
      lines.push(``);
      lines.push(`Observations:`);
      d.notes.forEach((n) => lines.push(`  • ${n}`));
      lines.push(``);
      lines.push(`Fixes:`);
      d.fixes.forEach((f) => lines.push(`  → ${f}`));
      lines.push(``);
      lines.push(``);
    });
    lines.push(`---`);
    lines.push(``);
    lines.push(`RESHOOT PRIORITY:`);
    data.reshoot_priority.forEach((p, i) => lines.push(`${i + 1}. ${p}`));
    lines.push(``);
    lines.push(`IF YOU ONLY DO ONE THING:`);
    lines.push(data.if_you_only_do_one_thing);

    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `critique-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="text-[10px] uppercase tracking-widest text-ink/50 font-mono">
            Critique · Issued {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 border border-ink/30 px-5 py-2.5 text-[11px] uppercase tracking-widest hover:border-ink transition-colors"
            >
              <Download size={14} />
              Save report
            </button>
            <button
              onClick={onReset}
              className="inline-flex items-center gap-2 bg-ink text-bone px-5 py-2.5 text-[11px] uppercase tracking-widest hover:bg-ember transition-colors"
            >
              <RotateCcw size={14} />
              New critique
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 rise">
          <div className="lg:col-span-7">
            <div className="relative bg-ink/5 border border-ink/15">
              <img src={imageUrl} alt="Critiqued" className="w-full h-auto object-contain max-h-[70vh]" />
            </div>
            <div className="mt-4 flex justify-between text-[10px] uppercase tracking-widest text-ink/50 font-mono">
              <span>{data.dish_identified}</span>
              <span>Shot: {data.shot_type}</span>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-4">
              Overall verdict
            </div>
            <div className="flex items-baseline gap-3 mb-6">
              <span className={`font-display text-[10rem] lg:text-[12rem] font-light leading-[0.85] ${scoreColor(data.overall_score)}`}>
                {data.overall_score.toFixed(1)}
              </span>
              <span className="text-sm uppercase tracking-widest text-ink/40 font-mono">/10</span>
            </div>
            <p className="font-display text-3xl lg:text-4xl font-light italic leading-tight tracking-tightest text-ink/90">
              &ldquo;{data.one_line_verdict}&rdquo;
            </p>

            {data._meta && data._meta.limit !== Infinity && (
              <div className="mt-8 pt-6 border-t border-ink/15 text-[11px] uppercase tracking-widest text-ink/60 font-mono">
                {data._meta.remaining} of {data._meta.limit} free critiques remaining this month
              </div>
            )}
          </div>
        </div>

        <div className="bg-ink text-bone p-10 lg:p-16 mb-16 relative">
          <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-4">
            If you only do one thing
          </div>
          <p className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tightest">
            {data.if_you_only_do_one_thing}
          </p>
        </div>

        <div className="mb-20">
          <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-6">
            Reshoot priority
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
            {data.reshoot_priority.map((p, i) => (
              <li key={i} className="bg-bone p-8">
                <div className="font-display text-7xl font-light italic text-ember/80 leading-none mb-4">
                  {i + 1}
                </div>
                <p className="font-serif text-lg text-ink/85 leading-snug">{p}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-3">
                The full read
              </div>
              <h2 className="font-display text-4xl font-light tracking-tightest leading-[0.95]">
                Six dimensions, scored.
              </h2>
              <p className="font-serif text-base text-ink/70 mt-4 leading-snug">
                Each one is the way a working photo editor would frame the
                feedback to a chef on deadline.
              </p>
            </div>
          </div>
          <div className="lg:col-span-9">
            {dims.map((d) => (
              <DimensionBlock key={d.name} d={d} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
