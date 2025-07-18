import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="w-full bg-card rounded-t-3xl px-4 lg:px-8 py-16">
      <div className="mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
        {/* Left: Title, points, button */}
        <div className="flex-1 flex flex-col items-start justify-start gap-8 max-w-xl">
          <h2 className="text-5xl lg:text-7xl tracking-tighter leading-tight text-left mb-2">Our clinic</h2>
          <ul className="space-y-5 text-lg md:text-xl text-muted-foreground pl-2">
            <li className="flex items-start gap-3">
              <span className="mt-1 block w-2 h-2 rounded-full bg-primary"></span>
              <span>Experienced and highly qualified dental specialists</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 block w-2 h-2 rounded-full bg-primary"></span>
              <span>Modern, comfortable, and welcoming environment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 block w-2 h-2 rounded-full bg-primary"></span>
              <span>Personalized care for every patient</span>
            </li>
          </ul>
          <button className="mt-6 bg-primary text-primary-foreground rounded-md px-8 py-4 font-medium text-base flex items-center gap-2 shadow hover:bg-primary/90 transition">
            Book an appointment <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="rounded-3xl overflow-hidden w-full max-w-[540px] aspect-[4/5] bg-gray-100 shadow-lg">
            <Image
              src="/clinic-1.jpeg"
              alt="Clinic Interior"
              width={540}
              height={675}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 