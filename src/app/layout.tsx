import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import FooterSection from "@/components/footer-one";

export const metadata: Metadata = {
  title: "Suman Dental Hospital - Your Smile, Our Priority",
  description: "Suman Dental Hospital in Amalner, Maharashtra offers advanced dental care with modern equipment. Specializing in cosmetic dentistry, root canals, implants, orthodontics, and pediatric dentistry. Book your appointment today for professional, compassionate dental care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/FAVICON.png" type="image/png" />
      <body className="manrope-main bg-background">
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
