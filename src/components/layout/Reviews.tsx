"use client"

import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Anjali Jain",
    title: "Homemaker",
    image: "", // Use avatar fallback
    rating: 5,
    quote:
      "I had a wonderful teeth whitening experience here. The results were instant and the staff made me feel at ease throughout the process. Highly recommended for cosmetic dental treatments! The clinic is very clean and the staff is courteous.",
  },
  {
    name: "Rahul Sharma",
    title: "Clerk",
    image: "", // Use avatar fallback
    rating: 5,
    quote:
      "My root canal was completely painless. The doctor explained every step and used the latest technology. I am no longer afraid of dental visits! The procedure was smooth and the follow-up care was excellent.",
  },
  {
    name: "Priya Singh",
    title: "Teacher",
    image: "", // Use avatar fallback
    rating: 4,
    quote:
      "My son had a dental checkup and filling. The pediatric dentist was so gentle and friendly, my child didn’t even cry! Thank you for making dental care easy for kids. My gums feel much healthier now!",
  },
  {
    name: "Amit Patel",
    title: "Business Owner",
    image: "", // Use avatar fallback
    rating: 5,
    quote:
      "I got dental implants done here. The procedure was smooth and the follow-up care was excellent. My smile looks natural and I feel confident again.",
  },
  {
    name: "Sneha Pawar",
    title: "Student",
    image: "", // Use avatar fallback
    rating: 5,
    quote:
      "I had braces for a year and the results are amazing! The orthodontist was very patient and always answered my questions. I love my new smile!",
  },
  {
    name: "Vikram Joshi",
    title: "Accountant",
    image: "", // Use avatar fallback
    rating: 4,
    quote:
      "I went for a wisdom tooth extraction. The procedure was quick and almost painless. The recovery tips given by the doctor helped a lot.",
  },
  {
    name: "Meera",
    title: "Homemaker",
    image: "", // Use avatar fallback
    rating: 5,
    quote:
      "The clinic is very clean and the staff is courteous. I had a gum treatment and regular cleaning. My gums feel much healthier now!",
  },
];

export default function Reviews() {
  // Embla carousel for dot pagination and scroll
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    align: "start",
    dragFree: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    breakpoints: {
      '(max-width: 768px)': { slidesToScroll: 1 },
    },
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [slideCount, setSlideCount] = React.useState(testimonials.length);

  React.useEffect(() => {
    if (!emblaApi) return;
    setSlideCount(emblaApi.slideNodes().length);
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Mouse wheel scroll for desktop
  React.useEffect(() => {
    if (!emblaApi) return;
    const node = emblaApi.containerNode();
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      if (e.deltaY > 0 && emblaApi.canScrollNext()) emblaApi.scrollNext();
      else if (e.deltaY < 0 && emblaApi.canScrollPrev()) emblaApi.scrollPrev();
    };
    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, [emblaApi]);

  return (
    <section className="w-full bg-card rounded-b-3xl px-4 lg:px-8 py-10 pb-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight">
            What <span className="text-primary">Our Patients</span> Say
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">Hear Directly Our Satisfied Clients</p>
        </div>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="pl-2 basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0"
                style={{ minWidth: 0 }}
              >
                <Card className="h-full flex flex-col justify-between border border-gray-200 bg-[#f8f9fa] rounded-2xl shadow-md mx-2 min-h-[260px] max-h-[320px]">
                  <CardContent className="flex flex-col gap-3 py-6 px-4">
                    <div className="flex items-center gap-1 text-yellow-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-base text-gray-700 italic line-clamp-5">“{t.quote}”</p>
                    <div className="flex items-center gap-3 mt-2">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={t.image} alt={t.name} />
                        <AvatarFallback>{t.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.title}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        {/* Dot Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full border-2 ${selectedIndex === i ? "bg-primary border-primary" : "bg-gray-200 border-gray-300"}`}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 