# Manifesto — Condomínio Dona Miraí (Next.js App Router)

Landing page simples, leve e responsiva (mobile-first) para apresentar um **Manifesto por uma Gestão Transparente, Organizada e Participativa** — **sem caráter eleitoral** e sem coleta obrigatória de dados.

## Rodar localmente

Requisitos:
- Node.js 18+ (recomendado 20+)

Instalação:

```bash
npm install
```

Desenvolvimento:

```bash
npm run dev
```

Abra `http://localhost:3000`.

Build/produção:

```bash
npm run build
npm run start
```

## Estrutura

- **`app/page.tsx`**: página única (single-page) com as seções do manifesto.
- **`components/SupportCTA.tsx`**: botão de CTA com mensagem de agradecimento.
  - Não coleta dados pessoais.
  - Registra opcionalmente um “apoio à visão” apenas no dispositivo (via `localStorage`), para evitar múltiplos cliques acidentais.

## Personalizações rápidas

- **Textos**: edite diretamente em `app/page.tsx`.
- **Cores/visual**: ajuste `tailwind.config.ts` (paleta) e classes Tailwind nos componentes.


