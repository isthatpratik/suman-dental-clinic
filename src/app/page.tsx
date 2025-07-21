import Services from "@/components/layout/Services";
import Hero from "../components/layout/Hero";
import About from "@/components/layout/About";
import Doctors from "@/components/layout/Doctors";
import ContactSection from "@/components/ui/contact-section-one";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <div id="home">
        <Hero />
      </div>
      <div className="-translate-y-24 flex flex-col -space-y-2">
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="doctors">
          <Doctors />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
