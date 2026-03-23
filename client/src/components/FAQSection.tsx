/*
 * ANDREIA ALVES — FAQ Section
 * Design: Maison Signature — Luxo Discreto Francês
 * Perguntas frequentes com accordion elegante
 */

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Como faço a marcação?",
    answer: "A marcação é feita exclusivamente pelo WhatsApp. Basta enviar uma mensagem com o serviço desejado e a data preferida, e confirmamos a disponibilidade em breve. É simples, rápido e sem complicações.",
  },
  {
    question: "Que serviços estão disponíveis?",
    answer: "Oferecemos manicure clássica, pedicure clássica, verniz gel, construção em gel, nail art premium, manutenção e remoção segura, e tratamentos spa para mãos e pés. Cada serviço é executado com produtos premium e técnica apurada.",
  },
  {
    question: "Posso enviar uma inspiração para o design das unhas?",
    answer: "Claro! Adoramos receber inspirações. Pode enviar imagens pelo WhatsApp antes da marcação ou trazer no dia do serviço. Analisamos juntas o que é possível criar com base na saúde das suas unhas e no serviço escolhido.",
  },
  {
    question: "Qual o serviço mais indicado para mim?",
    answer: "Depende das suas necessidades e preferências. Se quer durabilidade, o verniz gel é ideal. Para unhas mais compridas, o gel é a melhor opção. Para um cuidado completo, a manicure ou pedicure clássica são excelentes escolhas. Podemos aconselhar durante a marcação.",
  },
  {
    question: "Quanto tempo dura a manutenção do verniz gel?",
    answer: "O verniz gel dura em média 2 a 3 semanas sem lascar, dependendo do crescimento das suas unhas e dos cuidados diários. Recomendamos manutenção a cada 3 semanas para manter o resultado impecável.",
  },
  {
    question: "Como funciona a remoção do gel?",
    answer: "A remoção é feita de forma segura e cuidadosa, respeitando a saúde natural das suas unhas. Utilizamos técnicas e produtos específicos que minimizam qualquer dano. Nunca forçamos nem arrancamos — a saúde das suas unhas é a nossa prioridade.",
  },
  {
    question: "Onde fica o espaço em Sintra?",
    answer: "O nosso espaço está localizado em Sintra. Após a marcação, enviamos a morada completa e indicações de acesso pelo WhatsApp. Temos estacionamento nas proximidades.",
  },
  {
    question: "O atendimento é exclusivamente por marcação?",
    answer: "Sim, trabalhamos exclusivamente por marcação prévia. Isto permite-nos garantir o tempo e a atenção que cada cliente merece, sem esperas e com um atendimento verdadeiramente personalizado.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding" ref={sectionRef} style={{ backgroundColor: "var(--aa-ivory)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="faq-layout"
        >
          {/* Left — header */}
          <div>
            <div className="reveal">
              <span className="text-label" style={{ color: "var(--aa-gold)", display: "block", marginBottom: "16px" }}>
                Dúvidas Frequentes
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
              Temos as respostas<br />
              <em style={{ fontStyle: "italic" }}>que procura.</em>
            </h2>

            <p
              className="reveal reveal-delay-2"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 300,
                fontSize: "0.9rem",
                lineHeight: 1.9,
                color: "var(--aa-taupe)",
                marginBottom: "36px",
              }}
            >
              Reunimos as questões mais comuns para que possa 
              esclarecer todas as suas dúvidas antes de marcar. 
              Se não encontrar o que procura, fale connosco.
            </p>

            <a
              href="https://wa.me/351927251381?text=Olá%20Andreia!%20Tenho%20uma%20questão."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline reveal reveal-delay-3"
            >
              Fazer uma Pergunta
            </a>
          </div>

          {/* Right — FAQ accordion */}
          <div className="reveal reveal-delay-2">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <Plus
                    className={`faq-icon ${openIndex === index ? "open" : ""}`}
                    size={18}
                  />
                </button>
                <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-layout {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
