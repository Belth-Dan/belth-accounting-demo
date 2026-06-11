import type { Metadata } from "next";
import Link from "next/link";
import BelthNavbar from "./BelthNavbar";
import "./accounting-ai.css";

const CONTACT_URL = "https://www.belth.net/contact";

export const metadata: Metadata = {
  title: "AI e-loket voor boekhoudkantoren | BELTH",
  description:
    "BELTH helpt boekhoudkantoren om klantdocumenten, vragen, reminders en dossieropvolging te automatiseren met AI.",
};

/* ─────────────────────────────────────────
   Inline SVG icons (no extra dependency)
───────────────────────────────────────── */
const IconFolder = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);
const IconMessage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);
const IconAlertTriangle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const IconBot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M12 2v4M8 11V7a4 4 0 018 0v4" />
    <circle cx="9" cy="16" r="1" fill="currentColor" />
    <circle cx="15" cy="16" r="1" fill="currentColor" />
  </svg>
);
const IconScan = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);
const IconLayout = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);
const IconBell = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);
const IconCheckCircle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const IconArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, display: "inline", marginLeft: 6 }}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const problems = [
  {
    icon: <IconClock />,
    title: "Documenten die te laat binnenkomen",
    body: "Klanten wachten tot de deadline of leveren onvolledige dossiers aan. Uw team verliest uren aan herinneringen en opvolging.",
  },
  {
    icon: <IconMessage />,
    title: "Herhalende vragen van klanten",
    body: "Dezelfde vragen over btw-aangiftes, deadlines en benodigde documenten bezetten uw inbox dag na dag.",
  },
  {
    icon: <IconUsers />,
    title: "Dossierbeheerders onder druk",
    body: "Repetitief administratief werk laat weinig ruimte voor inhoudelijk advies en hoogwaardige service.",
  },
  {
    icon: <IconAlertTriangle />,
    title: "Btw-deadlines en ontbrekende stukken",
    body: "Opvolging van wettelijke deadlines en ontbrekende documenten is foutgevoelig zonder gestructureerde automatisering.",
  },
];

const features = [
  {
    icon: <IconUsers />,
    title: "Klantportaal",
    body: "Een beveiligde online omgeving waar klanten documenten uploaden, de status van hun dossier volgen en berichten sturen.",
  },
  {
    icon: <IconBot />,
    title: "AI Chat",
    body: "Een getrainde boekhoudassistent beantwoordt klantvragen 24/7 op basis van uw eigen kennisbank en dossiergegevens.",
  },
  {
    icon: <IconScan />,
    title: "Documentherkenning",
    body: "Automatische classificatie van facturen, rekeninguittreksels en andere stukken bij het uploaden.",
  },
  {
    icon: <IconLayout />,
    title: "Boekhouder-dashboard",
    body: "Overzicht van alle dossiers, openstaande documenten en klantstatus op één scherm.",
  },
  {
    icon: <IconBell />,
    title: "Automatische reminders",
    body: "Gepersonaliseerde herinneringen per e-mail voor btw-kwartalen, jaarrekeningen en ontbrekende documenten.",
  },
  {
    icon: <IconFolder />,
    title: "Dossieropvolging",
    body: "Statusindicatoren per dossier tonen welke stukken ontbreken, wat klaar is voor verwerking en wat in behandeling is.",
  },
];

const demoSteps = [
  { step: "01", label: "Klant uploadt documenten", detail: "Via het portaal zonder e-mail of papier" },
  { step: "02", label: "AI beantwoordt vragen", detail: "Directe antwoorden op btw- en deadlinevragen" },
  { step: "03", label: "Dashboard voor de boekhouder", detail: "Realtime overzicht van alle dossiers" },
  { step: "04", label: "Automatische opvolging", detail: "Reminders voor ontbrekende documenten" },
];

/* ─────────────────────────────────────────
   Page component
───────────────────────────────────────── */
export default function AccountingAIPage() {
  return (
    <div className="accounting-ai-page">
      <BelthNavbar />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <span className="label-tag">AI e-loket · Boekhoudkantoren</span>
          <h1>
            Minder opvolging.<br />
            Meer advieswerk.
          </h1>
          <p className="hero-subtitle">
            Laat klanten documenten uploaden, vragen stellen en deadlines opvolgen zonder extra druk op uw team. BELTH automatiseert de administratieve stroom zodat uw boekhouders zich focussen op wat telt.
          </p>
          <div className="btn-group">
            <Link href="/demo-accounting" className="btn-primary">
              Bekijk live demo <IconArrowRight />
            </Link>
            <a href={CONTACT_URL} className="btn-ghost">
              Boek demo
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="label-tag">Het probleem</span>
            <h2>Administratie die uw team vertraagt</h2>
            <div className="divider divider-center" />
            <p>Vier terugkerende knelpunten in elk boekhoudkantoor die tijd en energie kosten.</p>
          </div>
          <div className="problem-grid">
            {problems.map((p) => (
              <div className="problem-card" key={p.title}>
                <div className="problem-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="solution-section">
        <div className="container">
          <div className="solution-grid">
            <div className="solution-copy">
              <span className="label-tag">De oplossing</span>
              <h2>BELTH AI e-loket</h2>
              <div className="divider" />
              <p>
                Een volledig geïntegreerd platform dat uw klantcommunicatie, documentstroom en deadlineopvolging automatiseert. Gebouwd voor de dagelijkse werking van een Belgisch boekhoudkantoor.
              </p>
              <p>
                Klanten werken via een beveiligd portaal. Uw team werkt via een overzichtelijk dashboard. De AI-assistent zorgt voor de rest.
              </p>
            </div>
            <div className="solution-pillars">
              {[
                { icon: <IconUsers />, label: "Klantportaal", sub: "Documenten uploaden, status opvolgen, berichten sturen" },
                { icon: <IconBot />, label: "AI boekhoudassistent", sub: "24/7 antwoorden op klantvragen" },
                { icon: <IconScan />, label: "Document intake", sub: "Automatische classificatie bij upload" },
                { icon: <IconLayout />, label: "Boekhouder dashboard", sub: "Realtime overzicht van alle dossiers" },
                { icon: <IconBell />, label: "Automatische reminders", sub: "Gepersonaliseerde herinneringen per deadline" },
                { icon: <IconFolder />, label: "Dossieropvolging", sub: "Statusindicatoren per klant en periode" },
              ].map((item) => (
                <div className="solution-pillar" key={item.label}>
                  <div className="pillar-icon">{item.icon}</div>
                  <div>
                    <div className="pillar-label">{item.label}</div>
                    <div className="pillar-sub">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="label-tag">Functionaliteiten</span>
            <h2>Alles wat uw kantoor nodig heeft</h2>
            <div className="divider divider-center" />
            <p>Zes geïntegreerde modules, één platform.</p>
          </div>
          <div className="feature-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO PREVIEW */}
      <section className="demo-section">
        <div className="container">
          <div className="demo-inner">
            <div>
              <span className="label-tag">Live demo</span>
              <h2>Zie hoe het platform werkt</h2>
              <div className="divider" />
              <p style={{ marginBottom: "1.75rem", lineHeight: 1.7 }}>
                De interactieve demo toont het volledige klanttraject: van documentupload tot AI-antwoord en boekhouderopvolging. Geen registratie vereist.
              </p>
              <div className="demo-steps">
                {demoSteps.map((s) => (
                  <div className="demo-step" key={s.step}>
                    <span className="step-num">{s.step}</span>
                    <div>
                      <div className="step-label">{s.label}</div>
                      <div className="step-detail">{s.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/demo-accounting" className="btn-primary">
                  Bekijk live demo <IconArrowRight />
                </Link>
              </div>
            </div>
            {/* Faux browser mockup */}
            <div className="demo-screen">
              <div className="demo-bar">
                <div className="demo-dot" />
                <div className="demo-dot" />
                <div className="demo-dot" />
                <span className="demo-url">belth.net/demo-accounting</span>
              </div>
              <div className="demo-body">
                <div className="mock-badge">
                  <div className="mock-dot" />
                  AI-assistent actief
                </div>
                <div className="mock-row short" />
                <div className="mock-row full" />
                <div className="mock-row med" />
                <div style={{ height: "1rem" }} />
                <div className="mock-row short" />
                <div className="mock-row full" />
                <div className="mock-row full" />
                <div className="mock-row med" />
                <div style={{ height: "0.5rem" }} />
                <div className="mock-row short" />
                <div className="mock-row med" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <span className="label-tag">Aan de slag</span>
          <h2>Minder repetitief werk.<br />Betere opvolging.<br />Snellere klantcommunicatie.</h2>
          <div className="divider divider-center" />
          <p>Ontdek in de live demo hoe BELTH past in de dagelijkse werking van uw kantoor.</p>
          <div className="btn-group">
            <Link href="/demo-accounting" className="btn-primary">
              Bekijk live demo <IconArrowRight />
            </Link>
            <a href={CONTACT_URL} className="btn-ghost">
              Boek demo
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            <a href="https://belth.net">BELTH BV</a> · Zottegem, België ·{" "}
            <a href="mailto:info@belth.net">info@belth.net</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
