import portrait from "@/assets/portrait.png";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { Scene3D } from "@/components/Scene3D";

export const Hero = () => {
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!portraitRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      portraitRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Backdrop layers */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />

      {/* Decorative orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/10 animate-spin-slow pointer-events-none hidden md:block">
        <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-primary glow-ring" />
      </div>

      {/* 3D scene — desktop only, behind content */}
      <div className="absolute inset-0 hidden md:block opacity-70 pointer-events-none">
        <Scene3D />
      </div>

      <div className="container-px mx-auto max-w-7xl relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3 glass rounded-full pl-2 pr-5 py-2 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
              Available for select engagements · 2026
            </span>
          </div>

          <div className="space-y-4">
            <div className="font-mono text-xs tracking-[0.4em] uppercase text-primary/80 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Galați, Romania — Tech-Driven Business Professional
            </div>
            <h1 className="font-display text-[14vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.95] tracking-tighter text-shadow-glow">
              <span className="block overflow-hidden">
                <span className="block animate-fade-up text-gradient">Turning Vision</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-fade-up text-gradient italic font-light" style={{ animationDelay: "0.15s" }}>
                  into <span className="text-gradient-primary not-italic font-semibold">Value.</span>
                </span>
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
            I'm <span className="text-foreground font-medium">Vasile Panait</span> — a multidisciplinary operator engineering growth at the intersection of <span className="text-foreground">high-ticket sales</span>, <span className="text-foreground">AI automation</span>, and <span className="text-foreground">conversion-focused design</span>. Built for founders, agencies and teams who measure outcomes, not activity.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.55s" }}>
            <a href="#experience" className="magnetic-btn group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-full text-sm font-medium tracking-wide">
              View Experience
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="magnetic-btn inline-flex items-center gap-3 glass px-7 py-4 rounded-full text-sm font-medium tracking-wide hover:border-primary/40">
              <Mail className="w-4 h-4" /> Contact Me
            </a>
            <a href="/Vasile_Panait_CV.pdf" download className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </a>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-border/60 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            {[
              { k: "5+", v: "Years operating across sales & growth" },
              { k: "€2K–€10K+", v: "Avg. high-ticket deal range" },
              { k: "+40%", v: "Show-up rate uplift via outreach systems" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-2xl md:text-3xl text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait side */}
        <div className="lg:col-span-5 relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <div ref={portraitRef} className="relative transition-transform duration-700 ease-out">
            <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-[2.5rem]" />
            <div className="relative border-gradient overflow-hidden rounded-[2rem] shadow-elegant noise">
              <div className="aspect-[4/5] relative bg-charcoal">
                <img
                  src={portrait}
                  alt="Vasile Panait portrait"
                  className="w-full h-full object-cover grayscale-[30%] contrast-110"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">
                  <span>● REC</span>
                  <span>2026 / VP</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80 flex justify-between">
                  <span>Frame 001</span>
                  <span>50.45° N · 28.03° E</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 glass rounded-2xl px-4 py-3 shadow-elegant hidden md:flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-background text-xs font-bold">★</div>
              <div className="text-xs leading-tight">
                <div className="font-medium">High-Ticket Closer</div>
                <div className="text-muted-foreground">€2K–€10K+ deals</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
