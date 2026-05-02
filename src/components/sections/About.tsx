export const About = () => {
  return (
    <section id="about" className="relative py-32 container-px mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-6">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">01 — About</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-gradient">
            An operator built at the intersection of <em className="font-light">people, systems</em> and <em className="font-light">conversion</em>.
          </h2>
          <div className="glass rounded-2xl p-6">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Operating Principles</div>
            <ul className="space-y-2 text-sm">
              {["Conversion is engineered, not guessed.", "Sales with structure, not chaos.", "Strategy. Systems. Execution.", "Outcomes over activity."].map((p) => (
                <li key={p} className="flex gap-3"><span className="text-primary">→</span>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <p className="text-2xl md:text-3xl font-display leading-relaxed text-gradient">
            I help founders, agencies and high-performance teams turn ambition into measurable revenue — combining the discipline of a closer, the leverage of automation, and the intuition of a designer who understands how people decide.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
            <p>
              Across the last five years I've operated in environments where margins are thin, attention is scarce and the buyer is sophisticated — high-ticket coaching, trading education, healthcare consultations and fast-moving tech products. The constant: human behavior. The work: shaping every touchpoint so it earns trust, removes friction, and converts.
            </p>
            <p>
              I move fluently between the boardroom and the build room — closing five-figure deals, designing the funnels that feed them, training the closers who scale them, and instrumenting the AI workflows that compound their reach. One discipline informs the next.
            </p>
            <p>
              My toolkit blends consultative selling, conversion psychology, web design, QA rigor and modern AI tooling. The output is the same regardless of vertical: a clearer offer, a sharper pipeline, and a system the team can run without me in the room.
            </p>
            <p>
              I work best with operators who care about the craft — clean copy, honest numbers, opinionated design and offers that earn their price tag. If that's you, we'll get along.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            {[
              { k: "Sales", v: "Closer · Setter · Manager" },
              { k: "Build", v: "Funnels · Sites · Systems" },
              { k: "Automate", v: "AI outreach · Workflows" },
              { k: "Lead", v: "Teams · Coaches · Founders" },
            ].map((c) => (
              <div key={c.k} className="border-gradient p-5">
                <div className="font-display text-lg">{c.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
