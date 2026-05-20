"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, X, AlertCircle, Loader2 } from "lucide-react";
import type { CritiqueResponse } from "@/types/critique";
import { CritiqueResult } from "./CritiqueResult";

type State =
  | { kind: "idle" }
  | { kind: "preview"; file: File; url: string }
  | { kind: "uploading"; file: File; url: string }
  | { kind: "result"; file: File; url: string; data: CritiqueResponse & { _meta?: { remaining: number; limit: number } } }
  | { kind: "error"; file?: File; url?: string; message: string };

export function CritiqueStudio() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setState({ kind: "error", message: "Please upload an image file." });
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      setState({ kind: "error", message: "Image must be under 8MB." });
      return;
    }
    const url = URL.createObjectURL(file);
    setState({ kind: "preview", file, url });
  }, []);

  const handleSubmit = useCallback(async () => {
    if (state.kind !== "preview") return;
    setState({ kind: "uploading", file: state.file, url: state.url });

    const formData = new FormData();
    formData.append("image", state.file);

    try {
      const res = await fetch("/api/critique", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setState({
          kind: "error",
          file: state.file,
          url: state.url,
          message: data.message || "Something went wrong.",
        });
        return;
      }

      setState({ kind: "result", file: state.file, url: state.url, data });
    } catch (e) {
      setState({
        kind: "error",
        file: state.file,
        url: state.url,
        message: "Network error. Please try again.",
      });
    }
  }, [state]);

  const reset = useCallback(() => {
    if (state.kind === "preview" || state.kind === "uploading" || state.kind === "result") {
      URL.revokeObjectURL(state.url);
    }
    setState({ kind: "idle" });
  }, [state]);

  if (state.kind === "result") {
    return <CritiqueResult imageUrl={state.url} data={state.data} onReset={reset} />;
  }

  return (
    <section className="pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {state.kind === "idle" || state.kind === "error" ? (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              const f = e.dataTransfer.files[0];
              if (f) handleFile(f);
            }}
            onClick={() => inputRef.current?.click()}
            className={`relative cursor-pointer border-2 border-dashed transition-all duration-300 p-12 lg:p-20 flex flex-col items-center justify-center text-center min-h-[420px] ${
              dragOver
                ? "border-ember bg-cream"
                : "border-ink/25 hover:border-ink/50 hover:bg-cream/40"
            }`}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFile(f);
              }}
            />
            <div className="w-20 h-20 rounded-full bg-ink/5 flex items-center justify-center mb-6">
              <Upload size={28} className="text-ink/60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tightest mb-4">
              Drop a photograph
            </h2>
            <p className="font-serif text-lg text-ink/70 max-w-md mb-6">
              JPEG, PNG, WebP, or GIF — under 8MB. One image at a time. The
              cleaner the file, the better the read.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-mono text-ember">
              <span>Or click to browse</span>
            </div>

            {state.kind === "error" && (
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 bg-ember/10 border border-ember/30 text-ember text-sm">
                <AlertCircle size={16} />
                <span>{state.message}</span>
              </div>
            )}
          </div>
        ) : null}

        {(state.kind === "preview" || state.kind === "uploading") && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="relative bg-ink/5 border border-ink/15">
                <img
                  src={state.url}
                  alt="Upload preview"
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
                {state.kind === "preview" && (
                  <button
                    onClick={reset}
                    className="absolute top-4 right-4 w-10 h-10 bg-ink text-bone flex items-center justify-center hover:bg-ember transition-colors"
                    aria-label="Remove image"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              <div className="mt-3 flex justify-between text-[10px] uppercase tracking-widest text-ink/50 font-mono">
                <span>{state.file.name}</span>
                <span>{(state.file.size / 1024 / 1024).toFixed(2)} MB</span>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-6 flex flex-col">
              {state.kind === "preview" ? (
                <>
                  <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-3">
                    Ready to send
                  </div>
                  <h3 className="font-display text-4xl font-light tracking-tightest mb-6 leading-[1]">
                    Send to the<br />
                    <span className="italic">photo desk?</span>
                  </h3>
                  <p className="font-serif text-lg text-ink/75 leading-snug mb-8">
                    The critique takes about twenty seconds. You&apos;ll get six
                    scored dimensions, what to fix, and the one change that
                    matters most.
                  </p>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={handleSubmit}
                      className="bg-ink text-bone px-8 py-4 text-[11px] uppercase tracking-widest hover:bg-ember transition-colors"
                    >
                      Send for critique
                    </button>
                    <button
                      onClick={reset}
                      className="border border-ink/30 px-8 py-4 text-[11px] uppercase tracking-widest hover:border-ink transition-colors"
                    >
                      Choose a different photo
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-[10px] uppercase tracking-widest text-ember font-mono mb-3">
                    Reading the frame
                  </div>
                  <h3 className="font-display text-4xl font-light tracking-tightest mb-8 leading-[1]">
                    Working<br />through it…
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Identifying the dish",
                      "Reading composition",
                      "Measuring light",
                      "Checking colour balance",
                      "Assessing appetite appeal",
                    ].map((step, i) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 py-2"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      >
                        <Loader2 size={14} className="text-ember animate-spin" />
                        <span className="text-sm text-ink/70 font-serif">{step}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
