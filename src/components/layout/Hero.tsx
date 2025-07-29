'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, BadgeCheck, Handshake, Building2 } from 'lucide-react';
import { Clock8 } from "./Clock8";

// Hero section component
export default function Hero() {
  // Dynamic date and time state
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Get day name and formatted time
  const dayName = now.toLocaleDateString(undefined, { weekday: 'long' });
  let timeString = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true });
  // Ensure AM/PM is always uppercase for hydration consistency
  timeString = timeString.replace(/am|pm/, match => match.toUpperCase());

  // For demo, use a placeholder image. Replace src with your own image as needed.
  return (
    <section className="w-full bg-background pb-20 pt-4">
      <div className="mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left: Headline */}
        <div className="flex-1 min-w-0">
          <h1 className="text-white text-7xl text-center md:text-left md:text-[80px] lg:text-[100px] xl:text-[135px] font-semibold md:leading-20 lg:leading-25 xl:leading-30 tracking-tighter lg:max-w-[70%] mb-6 md:mb-0">
            Your Smile comes first
          </h1>
        </div>
        {/* Right: Practice Hours & Date/Time */}
        <div className="flex flex-col gap-4 md:min-w-[220px]">
          <div className="grid grid-cols-1 gap-2 text-white text-sm md:text-base xl:text-lg">
            <span className="font-semibold">Practice Hours</span>
            <span>Monday–Saturday: <span className="font-medium">09:00 AM–8:30 PM</span></span>
            <span>Sunday: <span className="font-medium">Closed</span></span>
          </div>
          <div className="flex items-center justify-between bg-white/20 rounded-lg px-1 py-4 text-white gap-4 text-sm md:text-xl w-full md:w-auto">
            <span className="flex items-center">
              <Clock8 width={24} height={24} stroke="#fff" />
              Today is {dayName}
            </span>
            <span className="opacity-80 mr-2">{timeString}</span>
          </div>
        </div>
      </div>
      {/* Main Card with Image and Feature Cards */}
      <div className="w-full mx-auto mt-10 lg:pb-20 lg:min-h-[680px] bg-card rounded-t-3xl shadow-lg px-4 md:px-6 py-8 flex flex-col items-center justify-end relative bg-[url('/hero-image.png')] bg-cover bg-no-repeat">
        {/* Feature Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Card 1: Advance Treatment */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow p-5 flex flex-col gap-2 min-h-[110px]">
            <div className="font-semibold text-primary text-lg flex items-center gap-2">
              <BadgeCheck className="text-primary" />
              Advance Treatment
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="flex flex-row items-center mt-auto w-full">
                <div className="text-muted-foreground text-sm flex-1">Advanced dental care with the latest technology for your best smile.</div>
                <ArrowUpRight className="text-xl ml-2 shrink-0" />
              </div>
            </div>
          </div>
          {/* Card 2: Guaranteed Results */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow p-5 flex flex-col gap-2 min-h-[110px]">
            <div className="font-semibold text-primary text-lg flex items-center gap-2">
              <Handshake className="text-primary" />
              Guaranteed Results
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="flex flex-row items-center mt-auto w-full">
                <div className="text-muted-foreground text-sm flex-1">Personalized care and expert planning for results you can trust.</div>
                <ArrowUpRight className="text-xl ml-2 shrink-0" />
              </div>
            </div>
          </div>
          {/* Card 3: Modern Equipment */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow p-5 flex flex-col gap-2 min-h-[110px]">
            <div className="font-semibold text-primary text-lg flex items-center gap-2">
              <Building2 className="text-primary" />
              Modern Equipment
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="flex flex-row items-center mt-auto w-full">
                <div className="text-muted-foreground text-sm flex-1">State-of-the-art tools for precise, comfortable, and safe treatments.</div>
                <ArrowUpRight className="text-xl ml-2 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 