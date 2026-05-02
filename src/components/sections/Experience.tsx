import { useEffect, useRef } from "react";

const experiences = [
  {
    company: "AERVIS AGENCY",
    role: "Chief Executive Officer",
    period: "Feb 2024 — Present",
    location: "Galați, Romania",
    bullets: [
      "Founded and lead a full-service marketing agency from inception to a multi-client roster.",
      "Owns business strategy, client acquisition, team management and operational execution.",
      "Built the agency's offer architecture, delivery system and internal QA process.",
    ],
    tags: ["Leadership", "Strategy", "Ops"],
    current: true,
  },
  {
    company: "AERVIS AGENCY / FREELANCE",
    role: "Web Designer & Conversion-Focused Marketing Manager",
    period: "Feb 2024 — Present",
    bullets: [
      "Designs and ships high-converting websites and sales funnels for coaches, consultants and trading educators.",
      "Manages landing pages, conversion flows, email sequences and ad creative end-to-end.",
    ],
    tags: ["Web Design", "Funnels", "CRO"],
  },
  {
    company: "ELITEMENTORSHIP — Andrei Valentin",
    role: "Appointment Setter",
    period: "Sep 2025 — Feb 2026",
    bullets: [
      "Owned outreach and qualification for high-ticket coaching programs.",
      "Lifted show-up rates by +40% via personalized messaging and structured follow-up.",
    ],
    tags: ["Setting", "Outreach"],
  },
  {
    company: "NEUROS — Brain Event Bucharest",
    role: "Sales Manager (Closer Team)",
    period: "Jun 2025 — Feb 2026",
    bullets: [
      "Led the closer team — performance, training and ramping new reps.",
      "Built conversion-focused frameworks that improved team close rates.",
    ],
    tags: ["Management", "Coaching"],
  },
  {
    company: "NEUROS Clinic — Brain Event Bucharest",
    role: "Sales Representative · Online Closer",
    period: "May 2025 — Feb 2026",
    bullets: [
      "High-ticket remote sales in a healthcare-focused environment.",
      "Consultative sales approach with disciplined objection handling.",
    ],
    tags: ["Closing", "Healthcare"],
  },
  {
    company: "SALESPAD",
    role: "Sales Executive",
    period: "2026",
    bullets: [
      "Delivered high-conversion demo showcases to close qualified leads.",
      "Scaled high-ticket sales through AI-driven multi-channel outreach.",
      "Consistently outperformed monthly targets via strategic pipeline growth.",
    ],
    tags: ["B2B", "AI Outreach"],
  },
  {
    company: "TRADING PROGRAM — Alex Onta",
    role: "Online Closer · High-Ticket Sales",
    period: "Feb 2023 — Apr 2025",
    bullets: [
      "Closed Forex & Crypto education programs in the €2,000–€10,000+ range.",
      "Handled risk and ROI-skepticism objections with consultative depth.",
      "+25% AOV vs. team average over the engagement.",
    ],
    tags: ["High-Ticket", "Closing"],
  },
  {
    company: "MEDAL.TV",
    role: "Quality Assurance Specialist",
    period: "Sep 2023 — Jan 2026",
    bullets: [
      "Manual + regression testing, structured bug reporting.",
      "Cross-functional collaboration with developers and product teams.",
    ],
    tags: ["QA", "Testing"],
  },
  {
    company: "MEDAL.TV",
    role: "Customer Support & Moderation",
    period: "Jul 2024 — Jan 2026",
    bullets: [
      "Moderated community, handled reports, supported users at scale.",
      "Improved overall experience and engagement signals.",
    ],
    tags: ["Support", "Community"],
  },
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll<HTMLElement>("[data-exp-card]");
    if (!cards) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("exp-in");
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current || !lineRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const pct = total > 0 ? scrolled / total : 0;
      lineRef.current.style.transform = `scaleY(${pct})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="experience" className="relative py-32 container-px mx-auto max-w-7xl">
      <div className="mb-16 max-w-3xl">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">03 — Trajectory</div>
        <h2 className="font-display text-4xl md:text-6xl text-gradient leading-[1.1] pb-2">
          A timeline of revenue, products and the people behind them.
        </h2>
      </div>

      <div ref={containerRef} className="relative" style={{ perspective: "1400px" }}>
        {/* Track */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/60" />
        {/* Progress line */}
        <div
          ref={lineRef}
          className="absolute left-4 md:left-1/2 top-0 w-px h-full bg-gradient-to-b from-primary via-primary-glow to-primary origin-top"
          style={{ transform: "scaleY(0)", boxShadow: "0 0 20px hsl(var(--primary) / 0.6)" }}
        />

        <div className="space-y-16">
          {experiences.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={i}
                data-exp-card
                className="relative grid md:grid-cols-2 gap-8 items-start exp-card"
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-6 z-10">
                  <div className="relative w-4 h-4">
                    <div className="absolute inset-0 rounded-full bg-background border-2 border-primary glow-ring" />
                    <div className="absolute inset-1 rounded-full bg-primary" />
                    {e.current && (
                      <span className="absolute -inset-1 rounded-full border border-primary animate-ping" />
                    )}
                  </div>
                </div>

                {/* Meta */}
                <div className={`pl-10 md:pl-0 ${left ? "md:pr-16 md:text-right" : "md:pr-0 md:order-2 md:pl-16"}`}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {e.period}
                  </div>
                  <div className="font-display text-2xl md:text-3xl text-gradient italic mt-2 leading-tight">
                    {e.company}
                  </div>
                </div>

                {/* Card */}
                <div className={`pl-10 md:pl-0 ${left ? "md:order-2 md:pl-16" : "md:pr-16"}`}>
                  <div
                    className="exp-inner border-gradient p-6 md:p-8 group relative overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative">
                      <h3 className="font-display text-xl md:text-2xl text-gradient leading-tight">{e.role}</h3>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {e.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3">
                            <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {e.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
