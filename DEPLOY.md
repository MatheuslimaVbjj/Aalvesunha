
# Guia de Deploy no GitHub Pages

Este projeto já está preparado para GitHub Pages sem alterar o visual do site.

## Passos

1. Envie os ficheiros para um repositório GitHub.
2. Abra **Settings > Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions**.
4. Faça push para a branch `main`.
5. O workflow `.github/workflows/deploy.yml` fará a publicação automaticamente.

## Comandos locais

```bash
npm install
npm run dev
npm run build:static
```

O build estático é gerado em `dist/`.
O comando `npm run build` continua disponível para o modo com servidor Node.
