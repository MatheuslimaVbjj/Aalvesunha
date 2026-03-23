/*
 * ANDREIA ALVES — Navbar Component
 * Design: Maison Signature — Luxo Discreto Francês
 * Fixed top navigation with logo centrado, links elegantes e CTA WhatsApp
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Contacto", href: "#agendamento" },
];

const WHATSAPP_URL = "https://wa.me/351927251381?text=Olá%20Andreia!%20Gostaria%20de%20marcar%20um%20serviço.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: "all 0.4s ease",
          backgroundColor: scrolled ? "rgba(253, 250, 246, 0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(230, 213, 184, 0.5)" : "1px solid transparent",
          padding: scrolled ? "14px 0" : "22px 0",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Left nav links — desktop */}
          <nav style={{ display: "flex", gap: "32px", flex: 1 }} className="hidden-mobile">
            {navLinks.slice(0, 2).map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="nav-link"
                style={{ background: "none", border: "none", padding: 0 }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Logo — centered */}
          <div style={{ textAlign: "center", flex: "0 0 auto" }}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "1.4rem", letterSpacing: "0.15em", color: "var(--aa-dark)", lineHeight: 1 }}>
                ANDREIA ALVES
              </div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.55rem", letterSpacing: "0.35em", color: "var(--aa-gold)", textTransform: "uppercase", marginTop: "3px" }}>
                Manicure · Pedicure · Sintra
              </div>
            </button>
          </div>

          {/* Right nav links + CTA — desktop */}
          <nav style={{ display: "flex", gap: "32px", alignItems: "center", flex: 1, justifyContent: "flex-end" }} className="hidden-mobile">
            {navLinks.slice(2, 4).map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="nav-link"
                style={{ background: "none", border: "none", padding: 0 }}
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "10px 22px", fontSize: "0.6rem" }}
            >
              Agendar
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", color: "var(--aa-dark)", display: "none" }}
            className="show-mobile"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "var(--aa-ivory)",
          zIndex: 800,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "36px",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "1.4rem", letterSpacing: "0.15em", color: "var(--aa-dark)", marginBottom: "16px" }}>
          ANDREIA ALVES
        </div>
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            style={{
              background: "none",
              border: "none",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              color: "var(--aa-dark)",
              cursor: "pointer",
            }}
          >
            {link.label}
          </button>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          onClick={() => setMenuOpen(false)}
          style={{ marginTop: "16px" }}
        >
          Agendar pelo WhatsApp
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
