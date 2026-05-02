const items = [
  "High-Ticket Sales",
  "AI Sales Automation",
  "Conversion Design",
  "Appointment Setting",
  "Sales Coaching",
  "Quality Assurance",
  "Team Leadership",
  "Psychology-Based Marketing",
  "Pipeline Growth",
  "Customer Experience",
];

export const Marquee = () => {
  return (
    <section className="relative py-10 border-y border-border/60 overflow-hidden bg-charcoal/40">
      <div className="flex ticker whitespace-nowrap">
        {[...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-display text-2xl md:text-4xl text-gradient italic font-light">{it}</span>
            <span className="text-primary text-2xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};
