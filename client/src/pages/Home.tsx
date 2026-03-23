/*
 * ANDREIA ALVES — Home Page
 * Design: Maison Signature — Luxo Discreto Francês
 * Página principal com todas as secções integradas
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import GallerySection from "@/components/GallerySection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--aa-ivory)", overflowX: "hidden" }}>
      {/* Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About / Apresentação */}
      <AboutSection />

      {/* 3. Services */}
      <ServicesSection />

      {/* 4. Differentials */}
      <DifferentialsSection />

      {/* 5. Gallery */}
      <GallerySection />

      {/* 6. Experience */}
      <ExperienceSection />

      {/* 7. Testimonials */}
      <TestimonialsSection />

      {/* 8. Booking Process */}
      <BookingSection />

      {/* 9. FAQ */}
      <FAQSection />

      {/* 10. Final CTA */}
      <CTASection />

      {/* 11. Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}
