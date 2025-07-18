'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const LANGUAGES = [
  { code: "en", label: "Eng" },
  { code: "hi", label: "Hindi" },
  { code: "mr", label: "Marathi" },
];

function detectPreferredLanguage() {
  if (typeof window === 'undefined') return 'en';
  const navLangs = navigator.languages || [navigator.language || 'en'];
  for (const lang of navLangs) {
    if (lang.startsWith('mr')) return 'mr';
    if (lang.startsWith('hi')) return 'hi';
  }
  return 'en';
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [language, setLanguage] = React.useState('en');

  // Detect preferred language on mount
  useEffect(() => {
    setLanguage(detectPreferredLanguage());
  }, []);

  const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];
  const otherLangs = LANGUAGES.filter(l => l.code !== language);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/50 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4">
        {/* Logo/Brand */}
        <Link href="#home" className="flex items-center gap-2 rounded-md bg-white px-6 py-2" scroll={false}>
          <Image
            src="/logo-removebg-preview.png"
            alt="Suman Dental Hospital Logo"
            width={180}
            height={60}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <ul className="flex gap-8 xl:space-x-12 rounded-md bg-card/20 px-8 py-3">
            {NAV_LINKS.map((link, idx) => (
              <li key={link.label} className="flex items-center gap-1">
                {idx === 0 && (
                  <span className="text-yellow-400 text-lg">•</span>
                )}
                <Link
                  href={link.href}
                  className="text-white font-medium manrope-main transition-colors hover:text-[#F9D923]"
                  scroll={false}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* CTA & Language Dropdown (Desktop only) */}
        <div className="hidden lg:flex items-center gap-4">
          <Button className="rounded-md px-8 py-6 text-lg font-medium bg-white text-black hover:bg-gray-100 cursor-pointer">
            Get in touch
          </Button>
          {/* Language Dropdown */}
          {/* <div className="ml-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-white font-medium flex items-center gap-1">
                  {currentLang.label}
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {otherLangs.map((lang) => (
                  <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)}>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div> */}
        </div>
        {/* Mobile Hamburger with shadcn DropdownMenu */}
        <div className="lg:hidden flex items-center relative">
          <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Open menu"
                className="w-10 h-10 flex items-center justify-center rounded-sm bg-card/20 transition-colors focus:outline-none"
                data-state={menuOpen ? "open" : "closed"}
              >
                <div className="relative w-5 h-7 flex flex-col items-center justify-center">
                  {/* Top line */}
                  <span
                    className={
                      "block absolute left-0 right-0 h-0.5 rounded bg-white transition-all duration-200 " +
                      (menuOpen
                        ? " rotate-45 top-3.5"
                        : " top-2")
                    }
                  />
                  {/* Bottom line */}
                  <span
                    className={
                      "block absolute left-0 right-0 h-0.5 rounded bg-white transition-all duration-200 " +
                      (menuOpen
                        ? " -rotate-45 top-3.5"
                        : " top-5")
                    }
                  />
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2 bg-card/90 py-4 rounded-lg shadow-lg animate-fade-in">
              {NAV_LINKS.map((link) => (
                <DropdownMenuItem key={link.label} asChild>
                  <Link
                    href={link.href}
                    className="block px-6 py-3 text-black font-medium manrope-main rounded-md hover:bg-card/60 transition-colors"
                    scroll={false}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <div className="mt-2 px-4 flex flex-col gap-2 md:gap-4">
                <Button className="w-full bg-black text-white rounded-md px-8 py-4 text-sm hover:bg-gray-900 cursor-pointer">
                  Get in touch
                </Button>
                <div className="w-full">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="w-full text-black flex items-center px-3 gap-1 rounded-md py-2 bg-white">
                        {currentLang.label}
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      {otherLangs.map((lang) => (
                        <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)}>
                          {lang.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
} 