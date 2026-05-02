import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "value", label: "What I Do" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Case Studies" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className={`container-px mx-auto max-w-7xl flex items-center justify-between ${scrolled ? "glass rounded-full px-6 py-3" : ""} transition-all duration-500`}>
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-full glass flex items-center justify-center overflow-hidden">
            <span className="font-display text-lg text-gradient-primary">V</span>
            <div className="absolute inset-0 rounded-full border border-primary/40 animate-pulse-glow" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-medium tracking-wide">Vasile Panait</div>
            <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em]">V/P · 007</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-3 right-3 bottom-1 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex magnetic-btn text-xs font-medium tracking-wider uppercase px-5 py-2.5 rounded-full bg-foreground text-background hover:opacity-90 transition"
          >
            Let's Talk
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden glass w-10 h-10 rounded-full flex items-center justify-center"
          >
            <div className="w-4 h-px bg-foreground relative">
              <span className={`absolute left-0 w-4 h-px bg-foreground transition-transform ${open ? "rotate-45 top-0" : "-top-1.5"}`} />
              <span className={`absolute left-0 w-4 h-px bg-foreground transition-transform ${open ? "-rotate-45 top-0" : "top-1.5"}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-2 mx-4 glass rounded-3xl p-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block py-3 px-4 text-sm border-b border-border/40 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
