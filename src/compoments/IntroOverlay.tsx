import { useEffect, useState } from "react";

export const IntroOverlay = () => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const duration = 1800;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setStage(1), 350);
        setTimeout(() => setStage(2), 1250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (stage === 2) return null;

  const pct = Math.round(progress * 100);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col transition-all duration-[900ms] ease-out ${
        stage >= 1 ? "opacity-0 pointer-events-none" : ""
      }`}
      style={{ clipPath: stage >= 1 ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)" }}
    >
      {/* Backdrop layers */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />

      {/* Top bar */}
      <div className="relative flex justify-between items-center px-8 py-6 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        <span>V · P · Studio</span>
        <span>Galați · 50.45° N</span>
        <span className="hidden md:inline">Edition 2026</span>
      </div>

      {/* Center */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6">
        <div className="font-mono text-[10px] tracking-[0.5em] uppercase text-primary mb-8 animate-fade-in">
          — Loading Portfolio —
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-center leading-[0.95]">
          <span className="block overflow-hidden">
            <span className="block animate-intro text-gradient">Vasile</span>
          </span>
          <span className="block overflow-hidden mt-1">
            <span
              className="block animate-intro text-gradient italic"
              style={{ animationDelay: "0.25s" }}
            >
              Panait
            </span>
          </span>
        </h1>

        <div className="mt-12 w-full max-w-md">
          <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
            <span>Initializing</span>
            <span className="text-primary tabular-nums">{String(pct).padStart(3, "0")}%</span>
          </div>
          <div className="h-px bg-border relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary-glow to-primary"
              style={{ width: `${pct}%`, transition: "width 80ms linear" }}
            />
            <div
              className="absolute top-0 h-full w-12 bg-primary blur-md opacity-80"
              style={{ left: `calc(${pct}% - 24px)` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative flex justify-between items-center px-8 py-6 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        <span>Turning Vision Into Value</span>
        <span className="hidden md:inline">© Vasile Panait</span>
      </div>
    </div>
  );
};
