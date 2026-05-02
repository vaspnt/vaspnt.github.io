const pillars = [
  { n: "01", t: "High-Ticket Sales & Closing", d: "Consultative discovery, objection handling, and structured closes for €2K–€10K+ offers across coaching, trading education and healthcare.", span: "md:col-span-7" },
  { n: "02", t: "AI Sales Automation", d: "Multi-channel outreach systems that compound. Personalized at scale, instrumented for conversion.", span: "md:col-span-5" },
  { n: "03", t: "Appointment Setting & Lead Qualification", d: "Frameworks that lift show-up rates and route only sales-ready conversations to closers.", span: "md:col-span-5" },
  { n: "04", t: "Conversion-Focused Web Design", d: "Sites and funnels engineered around the buying decision — copy, hierarchy and motion working as one.", span: "md:col-span-7" },
  { n: "05", t: "Sales Strategy & Pipeline Growth", d: "Offer architecture, pricing, sequences and dashboards that make the pipeline a system, not a guess.", span: "md:col-span-6" },
  { n: "06", t: "Psychology-Based Marketing", d: "Messaging built on cognitive, identity and status drivers — what actually moves the human across the line.", span: "md:col-span-6" },
  { n: "07", t: "Quality Assurance & Process Optimization", d: "QA-grade rigor applied to products and to revenue ops. If it can be measured, it can be improved.", span: "md:col-span-7" },
  { n: "08", t: "Team Leadership & Coaching", d: "Building closer teams that hit number — playbooks, role-play, scorecards and live coaching.", span: "md:col-span-5" },
];

export const Value = () => {
  return (
    <section id="value" className="relative py-32 container-px mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">02 — What I Do</div>
          <h2 className="font-display text-4xl md:text-6xl text-gradient max-w-3xl">
            A full-stack operator. Eight disciplines, one outcome.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          I don't sell isolated services. I assemble the parts of a revenue engine — strategy, systems, conversion and people — and tune them until the numbers move.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-4 md:gap-6">
        {pillars.map((p, i) => (
          <article
            key={p.n}
            className={`group relative border-gradient p-8 md:p-10 overflow-hidden ${p.span} hover:bg-charcoal/60 transition-colors`}
          >
            <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative">
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-xs text-muted-foreground tracking-widest">/ {p.n}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  Discipline {i + 1}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-gradient leading-tight mb-4">{p.t}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg">{p.d}</p>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
