import { IntroOverlay } from "@/components/IntroOverlay";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Value } from "@/components/sections/Value";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="relative">
      <IntroOverlay />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Value />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
