const groups = [
  {
    title: "Sales",
    items: ["High-Ticket B2B & B2C Sales", "Sales Closing", "Appointment Setting", "Lead Qualification", "Sales Management", "Consultative Selling", "Negotiation"],
  },
  {
    title: "Growth & Marketing",
    items: ["AI Sales Automation", "Conversion Optimization", "Sales Funnels", "Digital Marketing", "SEO", "Psychology-Based Marketing"],
  },
  {
    title: "Build & Quality",
    items: ["Web Design", "Quality Assurance", "Manual Testing", "Regression Testing", "Process Optimization"],
  },
  {
    title: "People & Communication",
    items: ["Team Leadership", "Sales Coaching", "Customer Support", "Strategic Communication", "Psychology"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-32 container-px mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-5">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">05 — Capabilities</div>
          <h2 className="font-display text-4xl md:text-6xl text-gradient leading-tight">
            The toolkit. Sharpened across verticals.
          </h2>
        </div>
        <p className="lg:col-span-7 text-muted-foreground text-lg leading-relaxed self-end">
          A multidisciplinary stack — from cold outbound to live closing, from QA to web design, from team coaching to AI-assisted growth ops. The edges are where the leverage lives.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g, i) => (
          <div key={g.title} className="border-gradient p-8 group hover:bg-charcoal/40 transition-colors">
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="font-display text-2xl text-gradient">{g.title}</h3>
              <span className="font-mono text-xs text-muted-foreground tracking-widest">/ 0{i + 1}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="text-xs px-4 py-2 rounded-full border border-border bg-charcoal/60 hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
