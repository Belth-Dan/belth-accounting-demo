# BELTH AI e-loket — Boekhoudkantoor Demo

Interactieve demo voor boekhoudkantoren. Gebouwd met Next.js 14, Tailwind CSS, Framer Motion en TypeScript.

## Starten

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — je wordt automatisch doorgestuurd naar `/demo-accounting`.

## Pagina's

| Route | Beschrijving |
|-------|-------------|
| `/demo-accounting` | Homepage met hero en voordelen |
| `?page=portal` | Klantportaal (Sophie Peeters) |
| `?page=chat` | AI chatassistent |
| `?page=dashboard` | Boekhouder-dashboard |
| `?page=documents` | AI document intake |
| `?page=dossier` | Klantdossier (Restaurant Lotus) |
| `?page=reminders` | Smart Reminders |
| `?page=knowledge` | AI Kennisbank |
| `?page=settings` | Kantoor instellingen |
| `?page=cta` | Eindscherm / CTA |

## Structuur

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Redirect → /demo-accounting
│   ├── globals.css         # Global stijlen
│   └── demo-accounting/
│       ├── layout.tsx
│       └── page.tsx        # Demo entry point
├── components/
│   ├── demo/
│   │   └── DemoShell.tsx   # Hoofd state container + router
│   ├── layout/
│   │   ├── DemoNav.tsx     # Navigatiebalk
│   │   └── FlowIndicator.tsx
│   ├── sections/           # Pagina-componenten
│   │   ├── HomePage.tsx
│   │   ├── ClientPortalPage.tsx
│   │   ├── ChatPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── DocumentsPage.tsx
│   │   ├── DossierPage.tsx
│   │   ├── RemindersPage.tsx
│   │   ├── KnowledgePage.tsx
│   │   ├── SettingsPage.tsx
│   │   └── CTAPage.tsx
│   └── ui/
│       ├── index.tsx       # Herbruikbare UI-componenten
│       └── Toast.tsx
├── data/
│   ├── clients.ts          # Fake klantdata
│   ├── documents.ts        # Fake documentdata
│   └── index.ts            # Chat, KB, reminders, deadlines
├── lib/
│   └── utils.ts            # Helpers
└── types/
    └── index.ts            # TypeScript types
```

## Aanpassen

### Klantdata wijzigen
Bewerk `src/data/clients.ts` voor andere klanten.

### AI-antwoorden aanpassen
Bewerk `chatAnswers` in `src/data/index.ts`.

### Stijl / branding
- Kleuren: `src/app/globals.css` → `:root` variabelen
- `--cyan: #00b4ff` aanpassen voor andere accentkleur

### Nieuwe pagina toevoegen
1. Maak component in `src/components/sections/`
2. Voeg toe aan `pageMap` in `DemoShell.tsx`
3. Voeg toe aan `tabs` in `DemoNav.tsx`

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animaties)
- **Lucide React** (iconen)
- Geen backend, geen database — alle data is fake/lokaal

## Productie bouwen

```bash
npm run build
npm start
```

---

Gebouwd door [BELTH](https://belth.net) · AI-First Engineering · Made in Belgium 🇧🇪
