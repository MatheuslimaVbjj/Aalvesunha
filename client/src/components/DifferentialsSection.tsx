/*
 * ANDREIA ALVES — Differentials Section
 * Design: Maison Signature — Luxo Discreto Francês
 * Diferenciais da marca em layout editorial assimétrico
 */

import { useEffect, useRef } from "react";

const differentials = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Higiene Impecável",
    description: "Protocolos rigorosos de esterilização e materiais descartáveis em cada atendimento. A sua segurança é a nossa prioridade absoluta.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Pontualidade & Respeito",
    description: "O seu tempo é precioso. Cumprimos os horários com rigor e garantimos um atendimento sem pressa, com toda a atenção que merece.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Atendimento Personalizado",
    description: "Cada cliente é única. Ouvimos as suas preferências, analisamos o estado das suas unhas e criamos um tratamento à medida do que precisa.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Produtos Premium",
    description: "Utilizamos exclusivamente marcas de referência internacional, com fórmulas de alta performance que cuidam e protegem as suas unhas.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Ambiente Acolhedor",
    description: "Um espaço pensado para o seu conforto — tranquilo, elegante e cuidado. Onde se pode relaxar e desfrutar de um momento só seu.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: "Resultados Duradouros",
    description: "Técnica apurada e materiais de qualidade para resultados que se mantêm bonitos por mais tempo. Menos manutenção, mais elegância.",
  },
];

export default function DifferentialsSection() {
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
    <section className="section-padding" ref={sectionRef} style={{ backgroundColor: "var(--aa-ivory)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="diff-grid"
        >
          {/* Left — sticky header */}
          <div className="diff-sticky">
            <div className="reveal">
              <span className="text-label" style={{ color: "var(--aa-gold)", display: "block", marginBottom: "16px" }}>
                Porquê escolher-nos
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
                marginBottom: "24px",
              }}
            >
              O que nos torna<br />
              <em style={{ fontStyle: "italic" }}>verdadeiramente diferentes.</em>
            </h2>

            <p
              className="reveal reveal-delay-2"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 300,
                fontSize: "0.9rem",
                lineHeight: 1.9,
                color: "var(--aa-taupe)",
                marginBottom: "40px",
              }}
            >
              Não somos apenas um salão de unhas. 
              Somos um espaço onde cada visita se transforma 
              numa experiência de beleza e bem-estar que vai 
              muito além do resultado visual.
            </p>

            {/* Stats */}
            <div
              className="reveal reveal-delay-3"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "28px",
                borderTop: "1px solid var(--aa-champagne)",
                paddingTop: "32px",
              }}
            >
              {[
                { number: "+500", label: "Clientes satisfeitas" },
                { number: "+8", label: "Anos de experiência" },
                { number: "100%", label: "Materiais premium" },
                { number: "5★", label: "Avaliação média" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.2rem",
                      fontWeight: 300,
                      color: "var(--aa-dark)",
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-label" style={{ color: "var(--aa-taupe)", fontSize: "0.6rem" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — differentials list */}
          <div>
            {differentials.map((item, index) => (
              <div
                key={item.title}
                className={`differential-item reveal reveal-delay-${(index % 3) + 1}`}
              >
                <div className="differential-icon">
                  {item.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                      fontSize: "1.15rem",
                      color: "var(--aa-dark)",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.85rem",
                      lineHeight: 1.8,
                      color: "var(--aa-taupe)",
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .diff-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .diff-sticky {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
