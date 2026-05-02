import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const projects = [
  {
    code: "CS-01",
    title: "Conversion-Focused Funnel Architecture",
    blurb: "Rebuilt funnel system for a coaching brand — clearer offer, sharper hierarchy, measurable lift.",
    problem: "A high-ticket coaching offer was burning paid traffic through a generic, copy-heavy long-form page that didn't qualify or convert.",
    approach: "Restructured the funnel around the buying decision: a tight VSL-style hero, identity-led copy, qualifying form, and a calendar gated by intent. Tied every block to a single conversion goal.",
    outcome: "Higher booked-call rate at the same ad spend; cleaner pipeline of qualified leads ready for the closer team.",
    stack: ["Funnel Design", "Conversion Copy", "Webflow / Framer", "Calendly", "GA4"],
  },
  {
    code: "CS-02",
    title: "High-Ticket Sales System for €2K–€10K Offers",
    blurb: "Consultative closing framework deployed across coaching, trading and healthcare verticals.",
    problem: "Reps were defaulting to pitch-mode on €2K+ offers — long calls, weak qualification, fragile closes.",
    approach: "Installed a consultative discovery + diagnosis structure, objection trees rehearsed via role-play, and a follow-up cadence designed for high-consideration buyers.",
    outcome: "+25% AOV vs. team baseline on the trading program; consistent over-target performance on subsequent deployments.",
    stack: ["Consultative Sales", "Objection Handling", "Role-Play", "Pipeline Ops"],
  },
  {
    code: "CS-03",
    title: "AI Sales Outreach Workflow",
    blurb: "Multi-channel outreach system that personalizes at scale and instruments every step.",
    problem: "Manual outbound was unscalable and personalization died after 50 prospects per day per rep.",
    approach: "Designed an AI-assisted outreach engine: enrichment, segment-specific hooks, channel sequencing (email + LinkedIn + DMs), and a feedback loop on reply quality — not just volume.",
    outcome: "Outperformed monthly targets via strategic pipeline growth; recovered SDR hours back into closing.",
    stack: ["AI Tooling", "Apollo/Clay", "Email", "LinkedIn", "n8n / Make"],
  },
  {
    code: "CS-04",
    title: "Lead Qualification & Appointment Setting Process",
    blurb: "Setter playbook that lifted show-up rates by +40% on a high-ticket coaching program.",
    problem: "Booked calls were filling the calendar, but show-ups and close rates lagged. Setter messaging was generic.",
    approach: "Built a qualification rubric, a personalized DM/voice-note framework, and a multi-touch confirmation sequence — including a pre-call value asset.",
    outcome: "+40% show-up rate vs. baseline; downstream close rate improved without changing the closer team.",
    stack: ["Setting", "DM Strategy", "Confirmation Flow", "Loom"],
  },
  {
    code: "CS-05",
    title: "QA & Process Optimization at Product Scale",
    blurb: "QA rigor applied to a consumer product used by millions — manual, regression and reporting.",
    problem: "Fast release cadence was outpacing test coverage; bug reports were inconsistent across the team.",
    approach: "Standardized regression suites, created a tight bug-report template (repro, severity, environment), and built developer-friendly triage rituals.",
    outcome: "Faster ticket resolution, fewer regressions hitting production, cleaner product feedback loop with engineering.",
    stack: ["Manual QA", "Regression", "Bug Triage", "Cross-Functional Ops"],
  },
  {
    code: "CS-06",
    title: "Brand & Conversion Strategy for an Agency",
    blurb: "Positioning + site + funnel for a marketing agency entering a saturated market.",
    problem: "New agency, undifferentiated offer, no inbound.",
    approach: "Sharpened the positioning around a niche outcome, designed a premium dark-aesthetic site, and built a discovery-call funnel matched to the ICP.",
    outcome: "Inbound conversations replaced cold outbound as primary deal source; first multi-client roster within months.",
    stack: ["Positioning", "Brand", "Web Design", "Funnel"],
  },
];

export const Projects = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="projects" className="relative py-32 container-px mx-auto max-w-7xl">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">04 — Case Studies</div>
          <h2 className="font-display text-4xl md:text-6xl text-gradient leading-tight">
            Selected work. Built around outcomes, not vanity metrics.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          Each case study captures a real problem, the operating approach, and the measurable shift that followed. Click to expand.
        </p>
      </div>

      <div className="space-y-3">
        {projects.map((p, i) => {
          const isOpen = open === i;
          return (
            <article key={p.code} className={`border-gradient overflow-hidden transition-all duration-500 ${isOpen ? "bg-charcoal/50" : ""}`}>
              <button onClick={() => setOpen(isOpen ? null : i)} className="w-full text-left p-6 md:p-8 flex items-start gap-6 group">
                <div className="font-mono text-xs text-primary tracking-widest pt-2 hidden sm:block">{p.code}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-display text-xl md:text-3xl text-gradient leading-tight">{p.title}</h3>
                      <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl">{p.blurb}</p>
                    </div>
                    <div className="shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="px-6 md:px-8 pb-8 grid md:grid-cols-3 gap-8 border-t border-border/50 pt-8">
                    {[
                      { k: "Problem", v: p.problem },
                      { k: "Approach", v: p.approach },
                      { k: "Outcome", v: p.outcome },
                    ].map((b) => (
                      <div key={b.k}>
                        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">{b.k}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{b.v}</p>
                      </div>
                    ))}
                    <div className="md:col-span-3 flex flex-wrap gap-2 pt-2">
                      {p.stack.map((s) => (
                        <span key={s} className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-border text-muted-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
