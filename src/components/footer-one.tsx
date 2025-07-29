import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Doctors", href: "#doctors" },
  { title: "Reviews", href: "#reviews" },
  { title: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/sumandentalhospital",
    label: "Instagram"
  },
  {
    icon: FaPhone,
    href: "tel:+917823007304",
    label: "Call Suman Dental Clinic"
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/917823007304",
    label: "WhatsApp"
  },
  {
    icon: FaMapMarkerAlt,
    href: "https://maps.google.com/?q=Suman+Dental+Clinic+Amalner",
    label: "Google Maps"
  }
];

const legalLinks = [
  { title: "Privacy Policy", href: "#" },
  { title: "Terms of Service", href: "#" },
  { title: "Cookies Settings", href: "#" }
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-background/80 pb-4 border-gray-200">
      <div className="rounded-3xl bg-white shadow p-6 sm:p-8 max-w-[1420px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-18 w-full">
          
          {/* Branding Section */}
          <div className="space-y-4 w-full">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Suman Dental Clinic Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl sm:text-2xl font-bold text-primary">
                Suman Dental Clinic
              </span>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed">
              Suman Dental Clinic is dedicated to providing advanced,
              compassionate dental care for all ages. Your smile is our
              priority.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-primary text-xl transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 w-full flex flex-col items-center md:items-end md:pr-8">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            
            {/* Desktop Navigation */}
            <ul className="hidden lg:block space-y-2 text-center md:text-right">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile Navigation */}
            <div className="lg:hidden w-full">
              <div className="grid grid-cols-6 gap-2">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm text-center py-2 px-3 rounded-md hover:bg-gray-50"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-gray-400 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Suman Dental Hospital. All rights reserved.
            </span>
            
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs text-gray-400">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
