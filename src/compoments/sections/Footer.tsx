export const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 mt-20">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-3xl text-gradient">Vasile Panait</div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mt-2">Turning Vision Into Value</div>
            <p className="text-muted-foreground mt-6 max-w-md leading-relaxed">
              Tech-driven business professional. Building revenue systems where sales, design and AI converge.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigate</div>
            <ul className="space-y-2 text-sm">
              {[["About","about"],["What I Do","value"],["Experience","experience"],["Case Studies","projects"],["Contact","contact"]].map(([l,id]) => (
                <li key={id}><a href={`#${id}`} className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Direct</div>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:vpanait007@gmail.com" className="hover:text-primary transition-colors">vpanait007@gmail.com</a></li>
              <li><a href="tel:+40741177762" className="hover:text-primary transition-colors">+40 7411 777 62</a></li>
              <li className="text-muted-foreground">Galați, Romania</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Vasile Panait — All rights reserved.</div>
          <div>Designed & engineered with intent.</div>
        </div>
      </div>
    </footer>
  );
};
