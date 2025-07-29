import ContactSection from "../components/ui/contact-section-one";

export default function ContactPage() {
  return (
    <section className="bg-[#f5f6fa] min-h-screen py-12 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto rounded-3xl bg-white shadow-lg p-0 md:p-10 flex flex-col mt-16">
        <ContactSection />
      </div>
    </section>
  );
} 