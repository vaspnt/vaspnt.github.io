import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Download } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-32 container-px mx-auto max-w-7xl">
      <div className="mb-16">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">08 — Contact</div>
        <h2 className="font-display text-5xl md:text-8xl text-gradient leading-[1.05] pb-3">
          Let's build the<br /><em className="font-light">next chapter.</em>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Open to conversations with founders, agencies, and high-performance teams who care about the craft of building revenue. Quick replies guaranteed.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        <a
          href="mailto:vpanait007@gmail.com"
          className="lg:col-span-7 group border-gradient p-10 md:p-14 relative overflow-hidden hover:bg-charcoal/60 transition-colors"
        >
          <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" />
          <div className="relative flex items-start justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Primary channel</div>
              <Mail className="w-8 h-8 mb-6 text-primary" />
              <div className="font-display text-3xl md:text-5xl text-gradient leading-[1.15] pb-2 break-all sm:break-normal">vpanait007@gmail.com</div>
              <div className="text-muted-foreground mt-4">Send a brief — context, goal, timeline. I'll reply with next steps.</div>
            </div>
            <ArrowUpRight className="w-8 h-8 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        <div className="lg:col-span-5 grid gap-6">
          <a href="tel:+40741177762" className="border-gradient p-8 group hover:bg-charcoal/60 transition-colors">
            <div className="flex items-start justify-between">
              <Phone className="w-6 h-6 text-primary" />
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition" />
            </div>
            <div className="font-display text-2xl text-gradient mt-6">+40 7411 777 62</div>
            <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-widest">Direct line</div>
          </a>

          <div className="border-gradient p-8">
            <MapPin className="w-6 h-6 text-primary" />
            <div className="font-display text-2xl text-gradient mt-6">Galați, Romania</div>
            <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-widest">Working remotely worldwide · CET</div>
          </div>
        </div>

        <div className="lg:col-span-12 grid sm:grid-cols-2 gap-4 mt-2">
          <a href="#" className="group border-gradient p-6 flex items-center justify-between hover:bg-charcoal/60 transition-colors">
            <div className="flex items-center gap-4">
              <Linkedin className="w-5 h-5 text-primary" />
              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-xs text-muted-foreground">Professional network</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition" />
          </a>
          <a href="/Vasile_Panait_CV.pdf" download className="group border-gradient p-6 flex items-center justify-between bg-foreground text-background hover:opacity-90 transition">
            <div className="flex items-center gap-4">
              <Download className="w-5 h-5" />
              <div>
                <div className="font-medium">Download CV</div>
                <div className="text-xs opacity-70">PDF · Updated 2026</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
