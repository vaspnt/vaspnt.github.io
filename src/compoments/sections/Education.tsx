export const Education = () => {
  const items = [
    {
      title: "Bachelor of Engineering and Management",
      org: "Faculty of Entrepreneurship, Engineering and Business Management (FAIMA)",
      period: "2019 — 2023",
      detail: "Engineering rigor meets business systems thinking — a foundation for operating at the intersection of product, ops and growth.",
    },
    {
      title: "Sales Mentorship — Closing & Setting",
      org: "SalesClub by Ionut Prundeanu",
      period: "Aug 2024 — Aug 2025",
      detail: "Investment: €2,000. B2B & B2C sales, closing, setting, role-play, live coaching — under one of Romania's most respected sales operators.",
    },
  ];
  return (
    <section id="education" className="relative py-32 container-px mx-auto max-w-7xl">
      <div className="mb-16 max-w-3xl">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">06 — Education & Training</div>
        <h2 className="font-display text-4xl md:text-6xl text-gradient leading-tight">
          Formal study. Field-tested practice.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <article key={it.title} className="border-gradient p-8 md:p-10">
            <div className="font-mono text-[11px] uppercase tracking-widest text-primary mb-4">{it.period}</div>
            <h3 className="font-display text-2xl md:text-3xl text-gradient leading-tight">{it.title}</h3>
            <div className="text-sm text-muted-foreground mt-2">{it.org}</div>
            <p className="text-muted-foreground mt-6 leading-relaxed">{it.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
