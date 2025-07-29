import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Darshan Kothari",
    degree: "B.D.S, FAD (Germany)",
    img: "/darshan.png",
    socials: [
      { icon: Facebook, href: "https://www.facebook.com/darshan.kothari.357", bg: "bg-[#1877F3]" },
      { icon: Instagram, href: "https://www.instagram.com/dr.darshankothari?igsh=MmVrcWppZXV2MnI4", bg: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
      { icon: FaWhatsapp, href: "https://wa.me/917823007304", bg: "bg-[#25D366]" },
    ],
    description:
      "Dr. Darshan Kothari, a skilled and passionate dental professional with an impressive background in advanced dentistry. A graduate of the esteemed Government Dental College & JJ Group of Hospitals in Mumbai. He is a fellow member of Greifswald University of Germany. He is the founder of Dr. Kothari’s Suman Dental Hospital & has honed his expertise across a wide range of dental procedures, with a specialization in implantology that underscores his commitment to offering innovative and effective solutions to his patients. He stays constantly updated on the ever-changing concepts in dentistry & dedicated to bringing cutting-edge technology into his clinic ensuring to provide the highest quality care and best possible service to his patients.",
  },
  {
    name: "Dr. Darshika Kotecha",
    degree: "B.D.S",
    img: "/darshika.png",
    socials: [
      { icon: Facebook, href: "https://www.facebook.com/darshika.kotecha", bg: "bg-[#1877F3]" },
      { icon: Instagram, href: "https://www.instagram.com/dr_darshika_?igsh=MTJkbTVodXVtZGJyeQ%3D%3D", bg: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
    ],
    description:
      "Dr. Darshika Kotecha (Kothari), a graduate of MGV’s KBH Dental College & Hospital, Nashik, is a highly skilled dentist who has practiced Advanced Dentistry at Aastha Dental Hospital in Pachora for 3 years. In addition to her expertise in Conservative Dentistry and Root Canal treatments, she has a special aptitude for Smile Designing and Smile Corrections. She has also contributed to the dental field through online lectures and case presentations, some of which have been featured in the International Journal of Dental Science.",
  },
];

const consultants = [
  {
    name: "Dr. Shrenik Oswal",
    degree: "M.D.S (Oral Surgeon)",
  },
  {
    name: "Dr. Amit Zope",
    degree: "M.D.S (Orthodontist)",
  },
  {
    name: "Dr. Hitesh Talreja",
    degree: "M.D.S (Prosthodontist)",
  },
];

export default function Doctors() {
  return (
    <section className="w-full bg-card px-4 lg:px-8 py-16 pb-24">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-7xl mb-12 tracking-tight">Our Doctors</h2>
        <div className="flex flex-row flex-wrap gap-10 md:gap-16 items-start p-4 bg-muted rounded-2xl justify-center">
          {/* Doctor 1 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-[120px] lg:w-[300px] h-[200px] lg:h-[400px] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src={doctors[0].img}
                alt={doctors[0].name}
                width={200}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{doctors[0].name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{doctors[0].degree}</p>
                <div className="flex gap-3 mb-2">
                  {doctors[0].socials.map((s, i) => (
                    <a key={i} href={s.href} className="group" target="_blank" rel="noopener noreferrer">
                      <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full ${s.bg} transition-all group-hover:scale-110`}>
                        <s.icon className="w-5 h-5 text-white" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mt-2 text-justify">{doctors[0].description}</p>
            </div>
          </div>
          {/* Doctor 2 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-[120px] lg:w-[300px] h-[200px] lg:h-[400px] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src={doctors[1].img}
                alt={doctors[1].name}
                width={200}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{doctors[1].name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{doctors[1].degree}</p>
                <div className="flex gap-3 mb-2">
                  {doctors[1].socials.map((s, i) => (
                    <a key={i} href={s.href} className="group" target="_blank" rel="noopener noreferrer">
                      <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full ${s.bg} transition-all group-hover:scale-110`}>
                        <s.icon className="w-5 h-5 text-white" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mt-2 text-justify">{doctors[1].description}</p>
            </div>
          </div>
        </div>
        {/* Consultant Doctors */}
        <div className="mt-16">
          <h4 className="text-2xl font-semibold text-center mb-8 tracking-tight">Consultant Doctors</h4>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            {consultants.map((c, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-medium text-gray-900">{c.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.degree}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 