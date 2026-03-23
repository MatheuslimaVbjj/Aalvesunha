# ⚡ Quick Start — 3 Passos para Publicar

## Passo 1: Fazer Upload para GitHub

```bash
# Abrir terminal na pasta do projeto
cd andreia-alves-website

# Inicializar Git
git init
git add .
git commit -m "Initial commit"

# Adicionar repositório remoto (substitua seu-usuario)
git remote add origin https://github.com/seu-usuario/andreia-alves-website.git
git branch -M main
git push -u origin main
```

## Passo 2: Publicar com Vercel (Recomendado)

1. Aceda a [vercel.com](https://vercel.com)
2. Clique **"Sign Up"** → **"Continue with GitHub"**
3. Clique **"New Project"** → Selecione o repositório
4. Clique **"Deploy"**
5. Aguarde 2-3 minutos ✅

**Seu site estará em:** `https://andreia-alves-website.vercel.app`

## Passo 3: Usar Domínio Personalizado (Opcional)

No painel Vercel:
1. Vá a **Settings > Domains**
2. Adicione seu domínio (ex: `andreiaalves.pt`)
3. Siga as instruções de DNS

---

**Pronto! 🎉 Seu site está online!**

Para mais detalhes, veja [DEPLOY.md](./DEPLOY.md)
