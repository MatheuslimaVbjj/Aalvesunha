/*
 * ANDREIA ALVES — Final CTA Section
 * Design: Maison Signature — Luxo Discreto Francês
 * Chamada para ação final com fundo de imagem e copy emocional
 */

import { useEffect, useRef } from "react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663464870036/PMC3NywCVz9V3cJDvVrG6h/nail-art-gallery-N6mwPtY2JhhPdwsbgZFkdL.webp";
const WHATSAPP_URL = "https://wa.me/351927251381?text=Olá%20Andreia!%20Gostaria%20de%20marcar%20um%20serviço.";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "120px 0",
        overflow: "hidden",
        backgroundColor: "var(--aa-dark)",
      }}
    >
      {/* Background image with overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.85) 100%)",
        }}
      />

      {/* Decorative gold lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--aa-gold), transparent)",
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--aa-gold), transparent)",
          opacity: 0.5,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        {/* Label */}
        <div className="reveal">
          <span className="text-label" style={{ color: "var(--aa-gold)", display: "block", marginBottom: "20px" }}>
            Andreia Alves · Sintra
          </span>
          <div
            style={{
              width: "60px",
              height: "1px",
              backgroundColor: "var(--aa-gold)",
              margin: "0 auto 36px",
              opacity: 0.7,
            }}
          />
        </div>

        {/* Headline */}
        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1.1,
            color: "var(--aa-ivory)",
            marginBottom: "28px",
            maxWidth: "700px",
            margin: "0 auto 28px",
          }}
        >
          Cuide de si com a elegância<br />
          <em style={{ fontStyle: "italic" }}>que sempre mereceu.</em>
        </h2>

        {/* Subtext */}
        <p
          className="reveal reveal-delay-2"
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 300,
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "rgba(253, 250, 246, 0.65)",
            maxWidth: "500px",
            margin: "0 auto 48px",
          }}
        >
          Não espere mais para se presentear com o cuidado 
          que merece. Marque agora e descubra o que significa 
          ser tratada com verdadeira excelência.
        </p>

        {/* CTAs */}
        <div
          className="reveal reveal-delay-3"
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ fontSize: "0.72rem", padding: "16px 40px" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Agendar Agora
          </a>
          <a
            href="#servicos"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#servicos");
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className="btn-whatsapp-outline"
            style={{ fontSize: "0.72rem", padding: "16px 40px" }}
          >
            Ver Serviços
          </a>
        </div>

        {/* Trust indicators */}
        <div
          className="reveal reveal-delay-4"
          style={{
            display: "flex",
            gap: "48px",
            justifyContent: "center",
            marginTop: "64px",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "+500", label: "Clientes satisfeitas" },
            { value: "+8 anos", label: "De experiência" },
            { value: "5★", label: "Avaliação média" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem",
                  fontWeight: 300,
                  color: "var(--aa-ivory)",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {item.value}
              </div>
              <div className="text-label" style={{ color: "rgba(253, 250, 246, 0.5)", fontSize: "0.6rem" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
