"use client";

import Link from "next/link";
import BelthNavbar from "./BelthNavbar";
import { useLanguage } from "./LanguageProvider";
import {
  IconAlertTriangle,
  IconArrowRight,
  IconBell,
  IconBot,
  IconClock,
  IconFolder,
  IconLayout,
  IconMessage,
  IconScan,
  IconUsers,
} from "./icons";

const CONTACT_URL = "https://www.belth.net/contact";

const problemIcons = {
  "late-docs": <IconClock />,
  "repeat-questions": <IconMessage />,
  "staff-pressure": <IconUsers />,
  "vat-deadlines": <IconAlertTriangle />,
} as const;

const featureIcons = {
  portal: <IconUsers />,
  chat: <IconBot />,
  ocr: <IconScan />,
  dashboard: <IconLayout />,
  reminders: <IconBell />,
  tracking: <IconFolder />,
} as const;

const pillarIcons = {
  portal: <IconUsers />,
  ai: <IconBot />,
  intake: <IconScan />,
  dashboard: <IconLayout />,
  reminders: <IconBell />,
  tracking: <IconFolder />,
} as const;

export default function AccountingAIContent() {
  const { t } = useLanguage();

  return (
    <div className="accounting-ai-page">
      <BelthNavbar />

      <section className="hero">
        <div className="container">
          <span className="label-tag">{t.hero.badge}</span>
          <h1>
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
          </h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="btn-group">
            <Link href="/demo-accounting" className="btn-primary">
              {t.hero.viewLiveDemo} <IconArrowRight />
            </Link>
            <a href={CONTACT_URL} className="btn-ghost">
              {t.hero.bookDemo}
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header">
            <span className="label-tag">{t.problem.badge}</span>
            <h2>{t.problem.title}</h2>
            <div className="divider divider-center" />
            <p>{t.problem.subtitle}</p>
          </div>
          <div className="problem-grid">
            {t.problem.items.map((item) => (
              <div className="problem-card" key={item.id}>
                <div className="problem-icon">{problemIcons[item.id as keyof typeof problemIcons]}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-section">
        <div className="container">
          <div className="solution-grid">
            <div className="solution-copy">
              <span className="label-tag">{t.solution.badge}</span>
              <h2>{t.solution.title}</h2>
              <div className="divider" />
              <p>{t.solution.paragraph1}</p>
              <p>{t.solution.paragraph2}</p>
            </div>
            <div className="solution-pillars">
              {t.solution.pillars.map((item) => (
                <div className="solution-pillar" key={item.id}>
                  <div className="pillar-icon">{pillarIcons[item.id as keyof typeof pillarIcons]}</div>
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

      <section>
        <div className="container">
          <div className="section-header">
            <span className="label-tag">{t.features.badge}</span>
            <h2>{t.features.title}</h2>
            <div className="divider divider-center" />
            <p>{t.features.subtitle}</p>
          </div>
          <div className="feature-grid">
            {t.features.items.map((item) => (
              <div className="feature-card" key={item.id}>
                <div className="feature-icon">{featureIcons[item.id as keyof typeof featureIcons]}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="demo-section">
        <div className="container">
          <div className="demo-inner">
            <div>
              <span className="label-tag">{t.demo.badge}</span>
              <h2>{t.demo.title}</h2>
              <div className="divider" />
              <p style={{ marginBottom: "1.75rem", lineHeight: 1.7 }}>{t.demo.description}</p>
              <div className="demo-steps">
                {t.demo.steps.map((step) => (
                  <div className="demo-step" key={step.step}>
                    <span className="step-num">{step.step}</span>
                    <div>
                      <div className="step-label">{step.label}</div>
                      <div className="step-detail">{step.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/demo-accounting" className="btn-primary">
                  {t.demo.viewLiveDemo} <IconArrowRight />
                </Link>
              </div>
            </div>
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
                  {t.demo.aiAssistantActive}
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

      <section className="cta-section">
        <div className="container">
          <span className="label-tag">{t.cta.badge}</span>
          <h2>
            {t.cta.titleLine1}
            <br />
            {t.cta.titleLine2}
            <br />
            {t.cta.titleLine3}
          </h2>
          <div className="divider divider-center" />
          <p>{t.cta.subtitle}</p>
          <div className="btn-group">
            <Link href="/demo-accounting" className="btn-primary">
              {t.cta.viewLiveDemo} <IconArrowRight />
            </Link>
            <a href={CONTACT_URL} className="btn-ghost">
              {t.cta.bookDemo}
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            <a href="https://www.belth.net/">BELTH BV</a> · {t.footer.location} ·{" "}
            <a href="mailto:info@belth.net">info@belth.net</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
