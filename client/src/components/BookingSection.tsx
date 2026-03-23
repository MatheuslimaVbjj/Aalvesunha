/*
 * ANDREIA ALVES — Booking Section
 * Design: Maison Signature — Luxo Discreto Francês
 * Processo de agendamento simples e elegante com destaque WhatsApp
 */

import { useEffect, useRef } from "react";

const WHATSAPP_URL = "https://wa.me/351927251381?text=Olá%20Andreia!%20Gostaria%20de%20marcar%20um%20serviço.";

const steps = [
  {
    number: "1",
    title: "Contacte-nos",
    description: "Envie uma mensagem pelo WhatsApp com o serviço que deseja e a data preferida.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    number: "2",
    title: "Escolha o Serviço",
    description: "Juntas definimos o serviço ideal para si, com base nas suas preferências e necessidades.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    number: "3",
    title: "Confirmação",
    description: "Confirmamos a sua marcação com data, hora e todos os detalhes do serviço escolhido.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    number: "4",
    title: "Atendimento Premium",
    description: "Chegue e deixe-se cuidar. Nós tratamos de tudo com a atenção e qualidade que merece.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
];

export default function BookingSection() {
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
    <section id="agendamento" className="section-padding section-champagne" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="label">Como Agendar</span>
          <h2>
            Simples, rápido<br />
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>e sem complicações.</em>
          </h2>
          <p>
            Marcar o seu serviço é tão fácil quanto enviar uma mensagem. 
            Em poucos minutos, tem tudo confirmado.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            position: "relative",
            marginBottom: "64px",
          }}
          className="booking-steps"
        >
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              top: "32px",
              left: "12.5%",
              right: "12.5%",
              height: "1px",
              backgroundColor: "var(--aa-champagne)",
              zIndex: 0,
            }}
            className="booking-line"
          />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${index + 1}`}
              style={{
                textAlign: "center",
                padding: "0 20px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "var(--aa-ivory)",
                  border: "1px solid var(--aa-champagne)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  color: "var(--aa-gold)",
                  position: "relative",
                  zIndex: 2,
                  transition: "all 0.3s ease",
                }}
                className="booking-icon"
              >
                {step.icon}
              </div>

              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.75rem",
                  fontWeight: 300,
                  color: "var(--aa-gold)",
                  letterSpacing: "0.1em",
                  marginBottom: "10px",
                }}
              >
                Passo {step.number}
              </div>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "1.15rem",
                  color: "var(--aa-dark)",
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
                  color: "var(--aa-taupe)",
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA Block */}
        <div
          className="reveal"
          style={{
            backgroundColor: "var(--aa-dark)",
            padding: "56px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                color: "var(--aa-ivory)",
                marginBottom: "10px",
                lineHeight: 1.2,
              }}
            >
              Pronta para marcar?
            </h3>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 300,
                fontSize: "0.88rem",
                color: "rgba(253, 250, 246, 0.65)",
                margin: 0,
              }}
            >
              Estamos disponíveis para responder às suas questões e confirmar a sua marcação.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ flexShrink: 0 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .booking-steps {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
          .booking-line {
            display: none !important;
          }
        }
        @media (max-width: 500px) {
          .booking-steps {
            grid-template-columns: 1fr !important;
          }
        }
        .booking-icon:hover {
          background-color: var(--aa-dark) !important;
          border-color: var(--aa-dark) !important;
          color: var(--aa-ivory) !important;
        }
      `}</style>
    </section>
  );
}
