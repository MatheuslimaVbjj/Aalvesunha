/*
 * ANDREIA ALVES — Testimonials Section
 * Design: Maison Signature — Luxo Discreto Francês
 * Depoimentos de clientes com layout editorial sofisticado
 */

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Sofia M.",
    location: "Sintra",
    rating: 5,
    text: "A Andreia tem um talento extraordinário. As minhas unhas nunca estiveram tão bonitas — o acabamento é impecável e a atenção ao detalhe é de outro nível. Já não consigo ir a outro sítio.",
    service: "Manicure com Verniz Gel",
  },
  {
    name: "Catarina R.",
    location: "Cascais",
    rating: 5,
    text: "Fui pela primeira vez e fiquei completamente rendida. O espaço é elegante, o atendimento é personalizado e o resultado superou todas as expectativas. Voltarei sempre.",
    service: "Pedicure Premium",
  },
  {
    name: "Inês F.",
    location: "Lisboa",
    rating: 5,
    text: "Procurava uma profissional de confiança para gel e encontrei muito mais do que isso. A Andreia é detalhista, cuidadosa e os resultados duram semanas sem perder a perfeição.",
    service: "Gel & Nail Art",
  },
  {
    name: "Margarida L.",
    location: "Sintra",
    rating: 5,
    text: "Uma experiência verdadeiramente premium. Desde o momento em que entrei até sair, tudo foi pensado para o meu conforto. As unhas ficaram exatamente como eu sonhava.",
    service: "Manicure Clássica",
  },
  {
    name: "Ana P.",
    location: "Queluz",
    rating: 5,
    text: "Recomendo de olhos fechados. A higiene é impecável, os produtos são de qualidade e a Andreia tem uma paciência e atenção que raramente se encontra. Simplesmente perfeita.",
    service: "Pedicure & Verniz Gel",
  },
  {
    name: "Beatriz S.",
    location: "Sintra",
    rating: 5,
    text: "Nunca pensei que uma manicure pudesse ser uma experiência tão relaxante e sofisticada. O espaço, o atendimento, o resultado — tudo é de excelência. A minha escolha definitiva.",
    service: "Nail Art Premium",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const visibleTestimonials = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
    testimonials[(activeIndex + 2) % testimonials.length],
  ];

  return (
    <section id="testemunhos" className="section-padding" ref={sectionRef} style={{ backgroundColor: "var(--aa-section-alt)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="label">Testemunhos</span>
          <h2>
            O que dizem<br />
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>as nossas clientes.</em>
          </h2>
          <p>
            A melhor prova do nosso trabalho são as palavras 
            das clientes que nos confiam o seu cuidado.
          </p>
        </div>

        {/* Testimonials grid */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginBottom: "48px",
          }}
          id="testimonials-grid"
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${activeIndex}-${index}`}
              className="testimonial-card"
              style={{
                opacity: 1,
                transition: "opacity 0.4s ease",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "20px" }}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--aa-gold)" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              {/* Quote mark */}
              <span className="quote-mark">"</span>

              {/* Text */}
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "1.1rem",
                  lineHeight: 1.65,
                  color: "var(--aa-dark)",
                  marginBottom: "28px",
                }}
              >
                {testimonial.text}
              </p>

              {/* Author */}
              <div style={{ borderTop: "1px solid var(--aa-champagne)", paddingTop: "20px" }}>
                <div
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.82rem",
                    color: "var(--aa-dark)",
                    marginBottom: "4px",
                  }}
                >
                  {testimonial.name}
                </div>
                <div className="text-label" style={{ color: "var(--aa-taupe)", fontSize: "0.6rem" }}>
                  {testimonial.location} · {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              style={{
                width: index === activeIndex ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: index === activeIndex ? "var(--aa-gold)" : "var(--aa-champagne)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
              aria-label={`Testemunho ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #testimonials-grid {
            grid-template-columns: 1fr !important;
          }
          #testimonials-grid > div:nth-child(2),
          #testimonials-grid > div:nth-child(3) {
            display: none;
          }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          #testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #testimonials-grid > div:nth-child(3) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
