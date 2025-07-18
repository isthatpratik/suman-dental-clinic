import React from 'react';
import Image from "next/image";

const services = [
  {
    title: 'Dental X-Rays',
    desc: 'Our advanced digital X-rays provide clear, detailed images of your teeth and jaw, allowing for precise diagnostics and effective treatment planning with minimal radiation exposure.',
    img: 'https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Dental & Oral Examination',
    desc: 'A comprehensive dental oral examination assesses your overall oral health, identifying issues such as cavities, gum disease, and other conditions to ensure timely and appropriate care.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Painless Extractions',
    desc: 'Our painless extraction procedures utilize advanced techniques and anesthesia to ensure a comfortable and stress-free experience when removing damaged or problematic teeth.',
    img: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Root Canals',
    desc: 'Root canal treatment saves damaged or infected teeth by removing the affected tissue, cleaning, and sealing the tooth, restoring its function and preventing further complications.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Orthodontics Braces and Aligners',
    desc: 'We offer both traditional braces and modern aligners to straighten teeth and correct bite issues, providing personalized solutions for achieving a beautifully aligned smile.',
    img: 'https://images.unsplash.com/photo-1511485977113-f34e90b2cd7e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Periodontal Disease',
    desc: 'Periodontal disease involves the infection and inflammation of the gums and supporting structures of the teeth, which can lead to tooth loss if not treated promptly; we offer specialized care to manage and treat this condition effectively.',
    img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Implants',
    desc: 'Dental implants are a durable and natural-looking solution for replacing missing teeth, involving the placement of titanium posts that fuse with the jawbone to support custom-made crowns, restoring function and aesthetics.',
    img: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Cosmetic Dentistry',
    desc: 'Cosmetic dentistry focuses on enhancing the appearance of your smile through treatments such as veneers, bonding, and contouring, helping you achieve a confident and radiant look.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Teeth Whitening',
    desc: 'Teeth whitening services brighten and enhance the appearance of your smile by effectively removing stains and discoloration, using safe and proven techniques for a radiant result.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Pediatric Dentistry',
    desc: 'Pediatric dentistry focuses on the oral health of children, offering specialized care to ensure their teeth develop properly and educating them on good dental habits for life.',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Services() {
  return (
    <section className="w-full bg-card p-4 lg:p-8">
      <div className="mx-auto">
        <div className="my-6 lg:my-12 w-full flex ">
          <p className="text-4xl lg:text-5xl xl:text-7xl tracking-tight text-center">Services</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="relative group rounded-2xl overflow-hidden shadow-lg h-[340px] flex flex-col justify-end"
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                style={{ zIndex: 1 }}
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
              <div className="relative z-20 p-6 mt-auto">
                <h3 className="text-white text-xl font-semibold mb-2 drop-shadow-lg">{service.title}</h3>
                <p className="text-white text-sm drop-shadow-lg line-clamp-3">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 