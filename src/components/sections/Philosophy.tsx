export const Philosophy = () => {
  const principles = [
    { k: "Turning Vision Into Value", v: "I translate ambition into systems that pay back — measurably and repeatedly." },
    { k: "Sales with structure, not chaos", v: "Pipelines win quietly. Process is the unfair advantage." },
    { k: "Conversion is engineered, not guessed", v: "Every block earns its place. If it doesn't move the needle, it leaves." },
    { k: "Strategy. Systems. Execution.", v: "Three legs of the same stool. Drop one and the whole thing falls." },
  ];
  return (
    <section className="relative py-32 container-px mx-auto max-w-7xl">
      <div className="border-gradient p-10 md:p-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="relative grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">07 — Philosophy</div>
            <h2 className="font-display text-4xl md:text-5xl text-gradient leading-tight">
              How I work.
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              I'm allergic to vague work. I want clear offers, honest numbers, and the right thing built well. The best collaborations happen with operators who feel the same way.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6">
            {principles.map((p, i) => (
              <div key={p.k} className="group flex gap-6 border-b border-border/60 pb-6 last:border-0">
                <div className="font-mono text-xs text-primary pt-1">0{i + 1}</div>
                <div>
                  <div className="font-display text-xl md:text-2xl text-gradient italic">{p.k}</div>
                  <div className="text-muted-foreground mt-2 leading-relaxed">{p.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
