# Assistente de Trabalho – Next.js + OpenAI

Projeto full-stack que entrega um assistente de trabalho acessível via web. Backend em Next.js 15 (API Routes) e frontend em React + TypeScript; interface responsiva construída com TailwindCSS.

O sistema consome a OpenAI API e inclui suporte a RAG (recuperação de contexto a partir de arquivos e referências) e orquestração de ferramentas para executar tarefas auxiliares antes ou durante a geração de respostas.


![Demo](./public/hero-readme-dark.svg)

---

## Tecnologias & Skills

- [Next.js 15](https://nextjs.org/) · App Router, API Routes, SSR  
- [TypeScript](https://www.typescriptlang.org/) · tipagem estática  
- [TailwindCSS](https://tailwindcss.com/) · estilização rápida e responsiva  
- [OpenAI API](https://platform.openai.com/docs) · modelo `gpt-4o-mini`  
- [ESLint + Prettier](https://eslint.org/) · qualidade e consistência de código  
- REST API · proxy seguro para chamadas externas  
- Git & GitHub · versionamento e colaboração  
- Deploy no Vercel · CI/CD integrado  

---

## Estrutura do Projeto

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
