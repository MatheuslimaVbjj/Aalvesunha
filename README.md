# Andreia Alves — Manicure & Pedicure Premium em Sintra

Website premium para a marca **Andreia Alves**, especialista em manicure e pedicure em Sintra. Design sofisticado inspirado em Dior Beauty e Chanel, com 11 secções completas e integração WhatsApp.

## 🎨 Características

- **Design Premium**: Maison Signature — Luxo Discreto Francês
- **Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- **Galeria Editorial**: 6 fotos de alta qualidade do trabalho real
- **Integração WhatsApp**: Botões de agendamento em múltiplas secções
- **Instagram Link**: Conexão direta ao perfil @andreiaalves_unhass
- **Animações Suaves**: Scroll reveal e transições elegantes
- **SEO Otimizado**: Meta tags e estrutura semântica

## 📋 Secções do Site

1. **Hero** — Apresentação premium com CTA
2. **Sobre a Andreia** — Biografia e diferenciais
3. **Serviços** — 8 serviços detalhados
4. **Diferenciais** — O que nos torna únicos
5. **Galeria** — Portfolio com fotos reais
6. **Experiência** — Processo de atendimento em 4 passos
7. **Testemunhos** — Carrossel com feedback de clientes
8. **Agendamento** — Guia passo a passo
9. **FAQ** — Dúvidas frequentes com accordion
10. **CTA Final** — Chamada à ação impactante
11. **Footer** — Links e contactos

## 🚀 Como Usar

### Pré-requisitos

- Node.js 18+ ou superior
- npm ou pnpm

### Instalação Local

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/andreia-alves-website.git
cd andreia-alves-website

# 2. Instalar dependências
npm install
# ou
pnpm install

# 3. Iniciar servidor de desenvolvimento
npm run dev
# ou
pnpm dev

# 4. Abrir no navegador
# http://localhost:5173
```

### Build para Produção

```bash
# Compilar para produção
npm run build
# ou
pnpm build

# Testar build localmente
npm run preview
# ou
pnpm preview
```

## 📱 Contactos Integrados

- **WhatsApp**: +351 927 251 381
- **Instagram**: @andreiaalves_unhass
- **Localização**: Sintra, Portugal

## 🌐 Deploy

### Opção 1: Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Fazer deploy
vercel

# 3. Seguir as instruções no terminal
```

### Opção 2: Netlify

```bash
# 1. Instalar Netlify CLI
npm i -g netlify-cli

# 2. Fazer deploy
netlify deploy --prod --dir=dist

# 3. Ou conectar GitHub no painel Netlify
```

### Opção 3: GitHub Pages

1. Ir a `Settings > Pages`
2. Selecionar `Deploy from a branch`
3. Escolher branch `main` e pasta `dist`
4. Site será publicado em `https://seu-usuario.github.io/andreia-alves-website`

## 📁 Estrutura do Projeto

```
andreia-alves-website/
├── client/
│   ├── public/              # Ficheiros estáticos
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── BookingSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppFloat.tsx
│   │   ├── pages/           # Páginas
│   │   ├── contexts/        # React Contexts
│   │   ├── hooks/           # Custom Hooks
│   │   ├── lib/             # Utilidades
│   │   ├── index.css        # Estilos globais
│   │   ├── App.tsx          # Componente raiz
│   │   └── main.tsx         # Entry point
│   └── index.html           # HTML template
├── server/                  # Backend (placeholder)
├── shared/                  # Tipos compartilhados
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Personalização

### Alterar Número de WhatsApp

Procure por `351927251381` em todos os ficheiros `.tsx` e substitua pelo seu número.

### Atualizar Fotos da Galeria

As URLs das imagens estão em `client/src/components/GallerySection.tsx`. Substitua pelos URLs das suas imagens.

### Mudar Cores

As cores estão definidas em `client/src/index.css` com variáveis CSS:
- `--aa-champagne` (fundo principal)
- `--aa-gold` (acentos)
- `--aa-taupe` (texto secundário)

### Adicionar Mais Testemunhos

Edite `client/src/components/TestimonialsSection.tsx` e adicione novos objetos ao array `testimonials`.

## 🔧 Tecnologias

- **React 19** — Framework UI
- **TypeScript** — Tipagem estática
- **Vite** — Build tool rápido
- **Tailwind CSS 4** — Estilos utilitários
- **shadcn/ui** — Componentes acessíveis
- **Framer Motion** — Animações
- **Wouter** — Routing leve

## 📝 Licença

Este projeto é propriedade de Andreia Alves. Uso pessoal e comercial restrito.

## 📞 Suporte

Para questões sobre o site, contacte através do WhatsApp integrado no site.

---

**Desenvolvido com ❤️ para Andreia Alves**


## Publicar no GitHub Pages

1. Faça push deste projeto para um repositório no GitHub.
2. No GitHub, abra **Settings > Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions**.
4. O workflow em `.github/workflows/deploy.yml` fará o build automaticamente a cada push para `main`.

### Comandos úteis

```bash
npm install
npm run dev
npm run build:static
```

O site estático gerado para o GitHub Pages fica em `dist/`.
O build completo com servidor Node continua disponível em `npm run build`.
