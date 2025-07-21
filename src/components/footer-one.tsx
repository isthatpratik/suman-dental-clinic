import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Doctors", href: "#doctors" },
  { title: "Reviews", href: "#reviews" },
  { title: "Contact", href: "#contact" },
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-background/80 pb-4 border-gray-200">
      <div className="rounded-3xl bg-white shadow p-8 flex flex-col  max-w-[1420px] mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 w-full">
            {/* Branding and description */}
            <div className="flex-1 min-w-[220px] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Suman Dental Clinic Logo"
                  className="h-10 w-auto"
                />
                <span className="text-2xl font-bold text-primary">
                  Suman Dental Clinic
                </span>
              </div>
              <p className="text-gray-500 text-sm max-w-xs">
                Suman Dental Clinic is dedicated to providing advanced,
                compassionate dental care for all ages. Your smile is our
                priority.
              </p>
              <div className="flex gap-4 mt-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-primary text-xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-primary text-xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-primary text-xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="text-gray-400 hover:text-primary text-xl"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            {/* Navigation links */}
            <div className="flex-1 flex flex-col sm:flex-row justify-end gap-8">
              <div>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-primary transition-colors text-base"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Bottom row - stacked below main content */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full mt-4 px-2 gap-2 border-t border-gray-100 pt-4">
            <span className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Suman Dental Hospital. All rights
              reserved.
            </span>
            <div className="flex gap-4 text-xs text-gray-400">
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
}
