/*
 * ANDREIA ALVES — Experience Section
 * Design: Maison Signature — Luxo Discreto Francês
 * Experiência da cliente com fundo escuro e copy premium
 */

import { useEffect, useRef } from "react";

const WHATSAPP_URL = "https://wa.me/351927251381?text=Olá%20Andreia!%20Gostaria%20de%20marcar%20um%20serviço.";

const experienceSteps = [
  {
    number: "01",
    title: "Marcação Simples",
    description: "Entre em contacto pelo WhatsApp, escolha o serviço e o horário que mais lhe convém. Confirmamos em minutos.",
  },
  {
    number: "02",
    title: "Recepção Cuidada",
    description: "É recebida num ambiente tranquilo e elegante. Conversamos sobre as suas preferências e o resultado que deseja.",
  },
  {
    number: "03",
    title: "Execução Detalhada",
    description: "Cada serviço é executado com técnica precisa, produtos premium e atenção total ao detalhe — sem pressa.",
  },
  {
    number: "04",
    title: "Resultado Impecável",
    description: "Sai com unhas perfeitas e um sorriso. Porque cuidar de si é um prazer que merece ser repetido.",
  },
];

export default function ExperienceSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding section-dark" ref={sectionRef} id="experiencia">
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="label" style={{ color: "var(--aa-gold)" }}>
            A Experiência
          </span>
          <h2 style={{ color: "var(--aa-ivory)" }}>
            Mais do que unhas bonitas —<br />
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>um momento só seu.</em>
          </h2>
          <p style={{ color: "rgba(253, 250, 246, 0.65)" }}>
            Cada visita é pensada para ser uma pausa de qualidade 
            na sua rotina. Um momento de cuidado, beleza e bem-estar 
            que começa muito antes do resultado final.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.08)",
            marginBottom: "64px",
          }}
          className="experience-grid"
        >
          {experienceSteps.map((step, index) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${index + 1}`}
              style={{
                padding: "44px 32px",
                backgroundColor: "var(--aa-dark)",
                borderTop: "1px solid rgba(184, 150, 90, 0.3)",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "4rem",
                  fontWeight: 300,
                  color: "rgba(230, 213, 184, 0.15)",
                  lineHeight: 1,
                  marginBottom: "20px",
                  display: "block",
                }}
              >
                {step.number}
              </div>
              <div
                style={{
                  width: "24px",
                  height: "1px",
                  backgroundColor: "var(--aa-gold)",
                  marginBottom: "16px",
                }}
              />
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  color: "var(--aa-ivory)",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.82rem",
                  lineHeight: 1.8,
                  color: "rgba(253, 250, 246, 0.6)",
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto 48px",
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "3rem",
              color: "rgba(230, 213, 184, 0.3)",
              lineHeight: 0.8,
              marginBottom: "8px",
            }}
          >
            "
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "1.5rem",
              lineHeight: 1.5,
              color: "var(--aa-ivory)",
              marginBottom: "20px",
            }}
          >
            Beleza é atenção ao detalhe. 
            É o cuidado que se sente antes mesmo de ver o resultado.
          </p>
          <div className="text-label" style={{ color: "var(--aa-gold)" }}>
            — Andreia Alves
          </div>
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: "center" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-outline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Viver a Experiência
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .experience-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
