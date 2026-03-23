/*
 * ANDREIA ALVES — Gallery Section
 * Design: Maison Signature — Luxo Discreto Francês
 * Galeria editorial com layout assimétrico e imagens premium
 */

import { useEffect, useRef } from "react";

const GALLERY_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663464870036/PMC3NywCVz9V3cJDvVrG6h/gallery_nails_01_1d9aa2a5.webp";
const GALLERY_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663464870036/PMC3NywCVz9V3cJDvVrG6h/gallery_nails_02_5ad44956.webp";
const GALLERY_3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663464870036/PMC3NywCVz9V3cJDvVrG6h/gallery_nails_03_cf566a0a.webp";
const GALLERY_4 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663464870036/PMC3NywCVz9V3cJDvVrG6h/gallery_nails_04_9d83e9cd.webp";
const GALLERY_5 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663464870036/PMC3NywCVz9V3cJDvVrG6h/gallery_nails_05_722f6f2b.webp";
const GALLERY_6 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663464870036/PMC3NywCVz9V3cJDvVrG6h/gallery_nails_06_197ab26b.webp";



export default function GallerySection() {
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
    <section id="galeria" className="section-padding section-champagne" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="label">Portfólio</span>
          <h2>
            O trabalho fala<br />
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>por si mesmo.</em>
          </h2>
          <p>
            Cada imagem é um exemplo real do nosso trabalho — 
            acabamentos impecáveis, designs elegantes e cuidado 
            visível em cada detalhe.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "280px 280px",
            gap: "10px",
          }}
          id="gallery-grid"
        >
          {/* Item 1 — tall left */}
          <div
            style={{
              gridRow: "1 / 3",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "var(--aa-champagne)",
            }}
            className="gallery-hover-item"
          >
            <img
              src={GALLERY_1}
              alt="Manicure nude champagne premium"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
            />
            <div className="gallery-label">Manicure</div>
          </div>

          {/* Item 2 — top middle */}
          <div
            style={{
              overflow: "hidden",
              position: "relative",
              backgroundColor: "var(--aa-champagne)",
            }}
            className="gallery-hover-item"
          >
            <img
              src={GALLERY_2}
              alt="Nail art premium"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
            />
            <div className="gallery-label">Nail Art</div>
          </div>

          {/* Item 3 — top right */}
          <div
            style={{
              overflow: "hidden",
              position: "relative",
              backgroundColor: "var(--aa-champagne)",
            }}
            className="gallery-hover-item"
          >
            <img
              src={GALLERY_3}
              alt="Pedicure elegante"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", transition: "transform 0.6s ease" }}
            />
            <div className="gallery-label">Pedicure</div>
          </div>

          {/* Item 4 — bottom middle */}
          <div
            style={{
              overflow: "hidden",
              position: "relative",
              backgroundColor: "var(--aa-champagne)",
            }}
            className="gallery-hover-item"
          >
            <img
              src={GALLERY_4}
              alt="Atendimento personalizado"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", transition: "transform 0.6s ease" }}
            />
            <div className="gallery-label">Atendimento</div>
          </div>

          {/* Item 5 — bottom right */}
          <div
            style={{
              overflow: "hidden",
              position: "relative",
              backgroundColor: "var(--aa-champagne)",
            }}
            className="gallery-hover-item"
          >
            <img
              src={GALLERY_5}
              alt="Verniz gel premium"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center bottom", display: "block", transition: "transform 0.6s ease" }}
            />
            <div className="gallery-label">Verniz Gel</div>
          </div>
        </div>

        {/* Bottom note */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "1rem",
              color: "var(--aa-taupe)",
              marginBottom: "8px",
            }}
          >
            Siga-nos no Instagram para ver mais trabalhos
          </p>
          <a
            href="https://instagram.com/andreiaalves_unhass"
            target="_blank"
            rel="noopener noreferrer"
            className="text-label"
            style={{
              color: "var(--aa-gold)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "opacity 0.3s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            @andreiaalves_unhass
          </a>
        </div>
      </div>

      <style>{`
        .gallery-hover-item:hover img {
          transform: scale(1.04);
        }
        .gallery-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 12px 16px;
          background: linear-gradient(to top, rgba(26,26,26,0.6), transparent);
          font-family: 'Raleway', sans-serif;
          font-weight: 400;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(253, 250, 246, 0.9);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-hover-item:hover .gallery-label {
          opacity: 1;
        }
        @media (max-width: 768px) {
          #gallery-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 200px 200px 200px !important;
          }
          #gallery-grid > div:first-child {
            grid-row: 1 / 2 !important;
          }
        }
        @media (max-width: 480px) {
          #gallery-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: repeat(5, 220px) !important;
          }
          #gallery-grid > div:first-child {
            grid-row: 1 / 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
