import Services from "@/components/layout/Services";
import Hero from "../components/layout/Hero";
import About from "@/components/layout/About";
import Doctors from "@/components/layout/Doctors";
import Reviews from "@/components/layout/Reviews";
import ContactSection from "@/components/ui/contact-section-one";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <div id="home" className="scroll-mt-26">
        <Hero />
      </div>
      <div className="-translate-y-24 flex flex-col -space-y-2">
        <div id="about" className="scroll-mt-16">
          <About />
        </div>
        <div id="services" className="scroll-mt-16">
          <Services />
        </div>
        <div id="doctors" className="scroll-mt-16">
          <Doctors />
        </div>
        <div id="reviews" className="scroll-mt-16">
          <Reviews />
        </div>
        <div id="contact" className="scroll-mt-16">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
