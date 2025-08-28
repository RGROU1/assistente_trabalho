# 🤖 My Assistant – Next.js + OpenAI

Um **assistente de IA minimalista** construído com **Next.js 15**, **TypeScript** e **TailwindCSS**, que consome a **OpenAI API** para responder mensagens em tempo real.

![Demo](./public/hero-readme.svg) <!-- Banner Dark, troque para o Light se preferir -->

---

## 🚀 Tecnologias & Skills

- [Next.js 15](https://nextjs.org/) · **App Router**, API Routes, SSR
- [TypeScript](https://www.typescriptlang.org/) · tipagem estática
- [TailwindCSS](https://tailwindcss.com/) · estilização rápida e responsiva
- [OpenAI API](https://platform.openai.com/docs) · modelo `gpt-4o-mini`
- [ESLint + Prettier](https://eslint.org/) · qualidade e consistência de código
- **REST API** · proxy seguro para chamadas externas
- **Git & GitHub** · versionamento e colaboração
- **Deploy no Vercel** · CI/CD integrado

---

## 📦 Estrutura do Projeto

```bash
my-assistant/
├── public/                # assets estáticos (ícones, banners, etc.)
├── src/
│   ├── app/
│   │   ├── api/assistant/ # rota API → integra com OpenAI
│   │   ├── page.tsx       # interface do chat
│   │   └── layout.tsx     # layout base
│   └── styles/            # estilos globais
├── .env.local             # chave OPENAI_API_KEY
├── tailwind.config.ts     # config Tailwind
└── tsconfig.json          # config TypeScript


## ⚙️ Como rodar localmente
# (seu conteúdo atual aqui)

---

## 🌐 Deploy
Este projeto foi pensado para rodar facilmente no **Vercel**:

- 🚀 Deploy automático com `git push`  
- 🔑 Variáveis de ambiente seguras (`.env`)  
- ⚡ Edge-ready com suporte a rotas serverless  

---

## 🎯 Objetivo do Projeto
Este projeto foi criado para:

- 🚀 **Aprender e aplicar** conceitos modernos do **App Router no Next.js 15**
- 🤝 **Mostrar integração prática** com a **OpenAI API**
- 📂 Servir como **case de portfólio** para:
  - Desenvolvimento web com React/Next.js
  - Integração de IA em aplicações reais
  - Boas práticas de frontend + backend no mesmo repo

---
