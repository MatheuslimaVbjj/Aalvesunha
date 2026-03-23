/*
 * ANDREIA ALVES — Footer Component
 * Design: Maison Signature — Luxo Discreto Francês
 * Rodapé elegante e minimalista com informações de contacto
 */

const WHATSAPP_URL = "https://wa.me/351927251381?text=Olá%20Andreia!%20Gostaria%20de%20marcar%20um%20serviço.";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "FAQ", href: "#faq" },
  { label: "Agendar", href: "#agendamento" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: "#111111", color: "var(--aa-ivory)" }}>
      {/* Main footer */}
      <div className="container" style={{ paddingTop: "72px", paddingBottom: "48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "1.5rem",
                letterSpacing: "0.12em",
                color: "var(--aa-ivory)",
                marginBottom: "6px",
              }}
            >
              ANDREIA ALVES
            </div>
            <div
              className="text-label"
              style={{ color: "var(--aa-gold)", fontSize: "0.55rem", marginBottom: "24px" }}
            >
              Manicure · Pedicure · Sintra
            </div>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 300,
                fontSize: "0.82rem",
                lineHeight: 1.85,
                color: "rgba(253, 250, 246, 0.5)",
                marginBottom: "28px",
                maxWidth: "260px",
              }}
            >
              Especialista em manicure e pedicure premium em Sintra. 
              Cuidado, técnica e elegância em cada detalhe.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: "16px" }}>
              <a
                href="https://instagram.com/andreiaalves_unhass"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(253, 250, 246, 0.6)",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--aa-gold)";
                  e.currentTarget.style.color = "var(--aa-gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "rgba(253, 250, 246, 0.6)";
                }}
                aria-label="Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(253, 250, 246, 0.6)",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--aa-gold)";
                  e.currentTarget.style.color = "var(--aa-gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "rgba(253, 250, 246, 0.6)";
                }}
                aria-label="WhatsApp"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="text-label"
              style={{ color: "var(--aa-gold)", marginBottom: "24px", display: "block" }}
            >
              Navegação
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.82rem",
                    color: "rgba(253, 250, 246, 0.55)",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    padding: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--aa-ivory)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253, 250, 246, 0.55)")}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <div
              className="text-label"
              style={{ color: "var(--aa-gold)", marginBottom: "24px", display: "block" }}
            >
              Serviços
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Manicure Clássica", "Pedicure Clássica", "Verniz Gel", "Gel & Extensões", "Nail Art", "Manutenção"].map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.82rem",
                    color: "rgba(253, 250, 246, 0.55)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-label"
              style={{ color: "var(--aa-gold)", marginBottom: "24px", display: "block" }}
            >
              Contacto
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <div className="text-label" style={{ color: "rgba(253,250,246,0.35)", fontSize: "0.55rem", marginBottom: "4px" }}>
                  Localização
                </div>
                <span style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: "rgba(253, 250, 246, 0.6)" }}>
                  Sintra, Portugal
                </span>
              </div>
              <div>
                <div className="text-label" style={{ color: "rgba(253,250,246,0.35)", fontSize: "0.55rem", marginBottom: "4px" }}>
                  WhatsApp
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.82rem",
                    color: "rgba(253, 250, 246, 0.6)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--aa-ivory)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253, 250, 246, 0.6)")}
                >
                  +351 927 251 381
                </a>
              </div>
              <div>
                <div className="text-label" style={{ color: "rgba(253,250,246,0.35)", fontSize: "0.55rem", marginBottom: "4px" }}>
                  Instagram
                </div>
                <a
                  href="https://instagram.com/andreiaalves_unhass"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.82rem",
                    color: "rgba(253, 250, 246, 0.6)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--aa-ivory)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253, 250, 246, 0.6)")}
                >
                  @andreiaalves_unhass
                </a>
              </div>
              <div>
                <div className="text-label" style={{ color: "rgba(253,250,246,0.35)", fontSize: "0.55rem", marginBottom: "4px" }}>
                  Horário
                </div>
                <span style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: "rgba(253, 250, 246, 0.6)" }}>
                  Seg–Sáb · Por marcação
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, rgba(184, 150, 90, 0.3), transparent)",
            margin: "48px 0 32px",
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 300,
              fontSize: "0.72rem",
              color: "rgba(253, 250, 246, 0.3)",
            }}
          >
            © {new Date().getFullYear()} Andreia Alves. Todos os direitos reservados.
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "0.82rem",
              color: "rgba(253, 250, 246, 0.25)",
            }}
          >
            Manicure & Pedicure Premium · Sintra
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
