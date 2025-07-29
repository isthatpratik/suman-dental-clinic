'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { FaChevronDown } from 'react-icons/fa';

const services = [
  {
    title: 'Dental X-Rays',
    desc: 'Our advanced digital X-rays provide clear, detailed images of your teeth and jaw, allowing for precise diagnostics and effective treatment planning with minimal radiation exposure.',
    img: '/Dental Xray.jpeg',
  },
  {
    title: 'Dental & Oral Examination',
    desc: 'A comprehensive dental oral examination assesses your overall oral health, identifying issues such as cavities, gum disease, and other conditions to ensure timely and appropriate care.',
    img: '/Dental & Oral Examination.jpg',
  },
  {
    title: 'Teeth Whitening',
    desc: 'Teeth whitening services brighten and enhance the appearance of your smile by effectively removing stains and discoloration, using safe and proven techniques for a radiant result.',
    img: '/Teeth Whitening.webp',
  },
  {
    title: 'Painless Extractions',
    desc: 'Our painless extraction procedures utilize advanced techniques and anesthesia to ensure a comfortable and stress-free experience when removing damaged or problematic teeth.',
    img: '/Painless Extractions.jpeg',
  },
  {
    title: 'Root Canals',
    desc: 'Root canal treatment saves damaged or infected teeth by removing the affected tissue, cleaning, and sealing the tooth, restoring its function and preventing further complications.',
    img: '/Root Canals.jpg',
  },
  {
    title: 'Orthodontics Braces and Aligners',
    desc: 'We offer both traditional braces and modern aligners to straighten teeth and correct bite issues, providing personalized solutions for achieving a beautifully aligned smile.',
    img: '/Orthodontics Braces and Aligners.avif',
  },
  {
    title: 'Periodontal Disease',
    desc: 'Periodontal disease involves the infection and inflammation of the gums and supporting structures of the teeth, which can lead to tooth loss if not treated promptly; we offer specialized care to manage and treat this condition effectively.',
    img: '/Periodontal Disease.webp',
  },
  {
    title: 'Implants',
    desc: 'Dental implants are a durable and natural-looking solution for replacing missing teeth, involving the placement of titanium posts that fuse with the jawbone to support custom-made crowns, restoring function and aesthetics.',
    img: '/Implants.jpg',
  },
  {
    title: 'Cosmetic Dentistry',
    desc: 'Cosmetic dentistry focuses on enhancing the appearance of your smile through treatments such as veneers, bonding, and contouring, helping you achieve a confident and radiant look.',
    img: '/Cosmetic Dentistry.jpg',
  },
  {
    title: 'Pediatric Dentistry',
    desc: 'Pediatric dentistry focuses on the oral health of children, offering specialized care to ensure their teeth develop properly and educating them on good dental habits for life.',
    img: '/Pediatric Dentistry.jpeg',
  },
];

export default function Services() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-card p-4 lg:p-8">
      <div className="mx-auto">
        <div className="my-6 lg:my-12 w-full flex ">
          <p className="text-4xl lg:text-5xl xl:text-7xl tracking-tight text-center">Services</p>
        </div>
        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:grid md:grid-cols-5 md:gap-6 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="relative group rounded-2xl overflow-hidden shadow-lg h-[340px] flex flex-col transition-transform duration-300 bg-card min-w-[260px] max-w-[320px] md:min-w-0 md:max-w-none md:group-hover:-translate-y-2"
            >
              {/* Title always at the top with fixed height */}
              <div className="flex items-center justify-between px-4 h-16 bg-background/80 z-30 relative">
                <h3 className="text-white text-lg font-semibold drop-shadow-lg whitespace-normal break-words w-full text-left leading-tight">
                  {service.title}
                </h3>
                {/* Chevron: clickable on mobile, static on desktop */}
                <button
                  type="button"
                  className="ml-2 text-white text-2xl flex-shrink-0 transition-transform duration-300 md:pointer-events-none md:group-hover:translate-x-1 focus:outline-none"
                  onClick={() => handleToggle(idx)}
                  aria-label="Show description"
                >
                  <FaChevronDown className={`transition-transform duration-300 ${expandedIdx === idx ? 'rotate-180' : ''} md:rotate-0`} />
                </button>
              </div>
              {/* Image */}
              <div className="relative flex-1" style={{ flexBasis: '70%', minHeight: 0 }}>
                <div className="absolute inset-0 w-full h-full transition-opacity duration-300 md:group-hover:opacity-0">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover blur-xs md:group-hover:blur-0 md:group-hover:scale-105 transition-all duration-300"
                    style={{ zIndex: 1 }}
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
                {/* Description: overlay on both mobile (if expanded) and desktop (hover) */}
                {(expandedIdx === idx || undefined) && (
                  <div className={`absolute inset-0 w-full h-full flex items-center justify-center p-4 transition-opacity duration-300 bg-black/90 z-20 ${expandedIdx === idx ? 'opacity-100' : 'opacity-0'} md:opacity-0 md:group-hover:opacity-80`}>
                    <p className="text-white text-md drop-shadow-lg whitespace-normal break-words text-center">{service.desc}</p>
                  </div>
                )}
                {/* Desktop: overlay on hover (always rendered for smoothness) */}
                <div className="hidden md:flex absolute inset-0 w-full h-full items-center justify-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-80 bg-black/90 z-20">
                  <p className="text-white text-md drop-shadow-lg whitespace-normal break-words text-center">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 