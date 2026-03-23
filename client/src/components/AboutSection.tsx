/*
 * ANDREIA ALVES — About Section
 * Design: Maison Signature — Luxo Discreto Francês
 * Apresentação editorial da profissional com imagem e texto refinado
 */

import { useEffect, useRef } from "react";

const PROFESSIONAL_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663464870036/PMC3NywCVz9V3cJDvVrG6h/beauty-professional-NFemSFLCWhmDJnfqyCrNfP.webp";
const WHATSAPP_URL = "https://wa.me/351927251381?text=Olá%20Andreia!%20Gostaria%20de%20marcar%20um%20serviço.";

export default function AboutSection() {
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
    <section id="sobre" className="section-padding" ref={sectionRef} style={{ backgroundColor: "var(--aa-ivory)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Image column */}
          <div className="reveal" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                right: "20px",
                bottom: "20px",
                border: "1px solid var(--aa-champagne)",
                zIndex: 0,
              }}
            />
            <div style={{ position: "relative", zIndex: 1, overflow: "hidden" }}>
              <img
                src={PROFESSIONAL_IMAGE}
                alt="Andreia Alves — Especialista em Manicure e Pedicure em Sintra"
                style={{
                  width: "100%",
                  height: "520px",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                right: "-16px",
                backgroundColor: "var(--aa-dark)",
                color: "var(--aa-ivory)",
                padding: "20px 24px",
                zIndex: 2,
                textAlign: "center",
              }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, lineHeight: 1 }}>
                +8
              </div>
              <div className="text-label" style={{ color: "var(--aa-champagne)", fontSize: "0.55rem", marginTop: "4px" }}>
                Anos de experiência
              </div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <div className="reveal">
              <span className="text-label" style={{ color: "var(--aa-gold)", display: "block", marginBottom: "16px" }}>
                Sobre a Andreia
              </span>
              <div className="gold-line" style={{ marginBottom: "28px" }} />
            </div>

            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "28px",
              }}
            >
              Paixão pelo detalhe,<br />
              <em style={{ fontStyle: "italic" }}>dedicação a si.</em>
            </h2>

            <p
              className="reveal reveal-delay-2"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 300,
                fontSize: "0.93rem",
                lineHeight: 1.9,
                color: "var(--aa-taupe)",
                marginBottom: "20px",
              }}
            >
              Sou a Andreia Alves, especialista em manicure e pedicure em Sintra. 
              Ao longo de mais de oito anos de carreira, aprendi que a beleza das mãos 
              e dos pés vai muito além da estética — é um ato de autocuidado, 
              de confiança e de bem-estar.
            </p>

            <p
              className="reveal reveal-delay-3"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 300,
                fontSize: "0.93rem",
                lineHeight: 1.9,
                color: "var(--aa-taupe)",
                marginBottom: "36px",
              }}
            >
              Cada cliente é recebida com atenção personalizada, num ambiente 
              confortável e elegante. Trabalho com produtos de alta qualidade, 
              técnicas precisas e um olhar detalhista que garante resultados 
              impecáveis — sempre com os mais rigorosos padrões de higiene.
            </p>

            {/* Values */}
            <div
              className="reveal reveal-delay-4"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "40px",
              }}
            >
              {[
                "Higiene rigorosa",
                "Técnica apurada",
                "Atenção ao detalhe",
                "Atendimento personalizado",
              ].map((value) => (
                <div
                  key={value}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.8rem",
                    color: "var(--aa-dark)",
                  }}
                >
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      backgroundColor: "var(--aa-gold)",
                      flexShrink: 0,
                    }}
                  />
                  {value}
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary reveal reveal-delay-5"
            >
              Marcar Consulta
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
