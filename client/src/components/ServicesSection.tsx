/*
 * ANDREIA ALVES — Services Section
 * Design: Maison Signature — Luxo Discreto Francês
 * Apresentação premium dos serviços em cartões elegantes
 */

import { useEffect, useRef } from "react";

const WHATSAPP_URL = "https://wa.me/351927251381?text=Olá%20Andreia!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços.";

const services = [
  {
    category: "I",
    name: "Manicure Clássica",
    description: "Tratamento completo das mãos com limpeza, hidratação, modelação das unhas e aplicação de verniz à escolha. O cuidado essencial para mãos impecáveis.",
    detail: "Inclui esfoliação e massagem",
  },
  {
    category: "II",
    name: "Pedicure Clássica",
    description: "Tratamento profundo dos pés com remoção de calosidades, hidratação intensiva, modelação das unhas e acabamento perfeito com verniz.",
    detail: "Inclui banho de pés relaxante",
  },
  {
    category: "III",
    name: "Verniz Gel",
    description: "Acabamento duradouro com verniz gel de alta qualidade. Resultado brilhante, resistente e elegante que dura até três semanas sem lascar.",
    detail: "Duração até 3 semanas",
  },
  {
    category: "IV",
    name: "Gel & Extensões",
    description: "Construção em gel para unhas mais compridas e resistentes, com acabamento natural ou personalizado. Perfeito para quem deseja unhas de sonho.",
    detail: "Personalização total",
  },
  {
    category: "V",
    name: "Nail Art Premium",
    description: "Designs exclusivos e personalizados para quem quer unhas únicas. Desde o minimalismo elegante até criações mais elaboradas e detalhadas.",
    detail: "Designs exclusivos",
  },
  {
    category: "VI",
    name: "Manutenção & Remoção",
    description: "Manutenção de gel e verniz gel com preenchimento e reparação. Remoção segura e cuidadosa que preserva a saúde natural das suas unhas.",
    detail: "Remoção sem danos",
  },
  {
    category: "VII",
    name: "Cuidados de Mãos",
    description: "Tratamento spa para as mãos com esfoliação, máscara nutritiva, massagem relaxante e hidratação profunda. Uma experiência de bem-estar completa.",
    detail: "Tratamento spa completo",
  },
  {
    category: "VIII",
    name: "Cuidados de Pés",
    description: "Tratamento intensivo para os pés com esfoliação, hidratação profunda e massagem. Ideal para pés secos, cansados ou com calosidades.",
    detail: "Hidratação intensiva",
  },
];

export default function ServicesSection() {
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
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="section-padding section-champagne" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="label">Os Nossos Serviços</span>
          <h2>
            Uma experiência pensada<br />
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>para si.</em>
          </h2>
          <p>
            Cada serviço é executado com técnica apurada, produtos premium 
            e atenção total ao detalhe — porque o seu bem-estar merece o melhor.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            backgroundColor: "var(--aa-champagne)",
          }}
          className="services-grid"
        >
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`service-card reveal reveal-delay-${(index % 4) + 1}`}
              style={{ backgroundColor: "var(--aa-ivory)" }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "var(--aa-gold)",
                  letterSpacing: "0.1em",
                  marginBottom: "16px",
                }}
              >
                {service.category}
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "1.25rem",
                  lineHeight: 1.2,
                  color: "var(--aa-dark)",
                  marginBottom: "14px",
                }}
              >
                {service.name}
              </h3>
              <p
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.82rem",
                  lineHeight: 1.8,
                  color: "var(--aa-taupe)",
                  marginBottom: "20px",
                  flexGrow: 1,
                }}
              >
                {service.description}
              </p>
              <div
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--aa-rose)",
                }}
              >
                {service.detail}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: "center", marginTop: "56px" }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "1.1rem",
              color: "var(--aa-taupe)",
              marginBottom: "28px",
            }}
          >
            Não encontrou o que procura? Fale connosco.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar Disponibilidade
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
