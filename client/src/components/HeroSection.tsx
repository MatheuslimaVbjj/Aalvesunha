/*
 * ANDREIA ALVES — Hero Section
 * Design: Maison Signature — Luxo Discreto Francês
 * Full-screen hero com imagem premium, headline editorial e CTAs
 */

import { useEffect, useRef } from "react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663464870036/PMC3NywCVz9V3cJDvVrG6h/hero-manicure-VQda52imBXNe2kVpBLf4Ro.webp";
const WHATSAPP_URL = "https://wa.me/351927251381?text=Olá%20Andreia!%20Gostaria%20de%20marcar%20um%20serviço.";

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.style.opacity = "1";
        contentRef.current.style.transform = "translateY(0)";
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    const el = document.querySelector("#servicos");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="inicio" style={{ minHeight: "100vh" }}>
      {/* Background Image */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundPosition: "60% center",
        }}
      />
      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 10, paddingTop: "100px", paddingBottom: "80px" }}>
        <div
          ref={contentRef}
          style={{
            maxWidth: "600px",
            opacity: 0,
            transform: "translateY(40px)",
            transition: "opacity 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {/* Label */}
          <div className="text-label" style={{ color: "var(--aa-gold)", marginBottom: "20px" }}>
            Manicure · Pedicure · Sintra
          </div>

          {/* Gold line */}
          <div className="gold-line" style={{ marginBottom: "28px" }} />

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              lineHeight: 1.05,
              color: "var(--aa-dark)",
              marginBottom: "24px",
              letterSpacing: "-0.01em",
            }}
          >
            A arte de cuidar<br />
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>com requinte.</em>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "var(--aa-taupe)",
              marginBottom: "44px",
              maxWidth: "440px",
            }}
          >
            Serviços premium de manicure e pedicure em Sintra. 
            Cada detalhe pensado para si — do acabamento impecável 
            à experiência que merece.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar pelo WhatsApp
            </a>
            <button
              onClick={scrollToServices}
              className="btn-outline"
            >
              Ver Serviços
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.5,
          zIndex: 10,
        }}
      >
        <div className="text-label" style={{ color: "var(--aa-taupe)", fontSize: "0.55rem" }}>
          Descobrir
        </div>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--aa-taupe), transparent)",
            animation: "scrollPulse 2s infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.7; transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  );
}
