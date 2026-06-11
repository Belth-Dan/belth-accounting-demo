"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { LANG_OPTIONS, type Lang } from "./translations";

const NAV_HREFS = {
  technology: "https://www.belth.net/technology",
  platform: "https://www.belth.net/platform",
  engagement: "https://www.belth.net/engagement",
  oem: "https://www.belth.net/oem-partnership",
  aiSolutions: "https://ai-solutions-cdesjfdi2-belth.vercel.app/",
  about: "https://www.belth.net/about",
  contact: "https://www.belth.net/contact",
} as const;

const CONTACT_URL = "https://www.belth.net/contact";

export default function BelthNavbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { key: "technology", label: t.nav.technology, href: NAV_HREFS.technology },
    { key: "platform", label: t.nav.platform, href: NAV_HREFS.platform },
    { key: "engagement", label: t.nav.engagement, href: NAV_HREFS.engagement },
    { key: "oem", label: t.nav.oem, href: NAV_HREFS.oem },
    { key: "aiSolutions", label: t.nav.aiSolutions, href: NAV_HREFS.aiSolutions },
    { key: "about", label: t.nav.about, href: NAV_HREFS.about },
    { key: "contact", label: t.nav.contact, href: NAV_HREFS.contact },
  ] as const;

  const handleLangChange = (next: Lang) => {
    setLang(next);
  };

  return (
    <nav className="belth-site-nav">
      <div className="belth-site-nav-inner">
        <a href="https://www.belth.net/" className="belth-site-logo" aria-label="BELTH home">
          <span className="belth-site-logo-badge">BELTH</span>
        </a>

        <div className="belth-site-nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.key} href={link.href} className="belth-site-nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="belth-site-nav-actions">
          <div className="belth-lang-switcher" role="group" aria-label="Language">
            {LANG_OPTIONS.map((option, index) => (
              <span key={option.code} className="belth-lang-switcher-item">
                {index > 0 && <span className="belth-lang-switcher-sep" aria-hidden="true">|</span>}
                <button
                  type="button"
                  className={`belth-lang-switcher-btn${lang === option.code ? " is-active" : ""}`}
                  onClick={() => handleLangChange(option.code)}
                  aria-pressed={lang === option.code}
                >
                  {option.label}
                </button>
              </span>
            ))}
          </div>

          <a href={CONTACT_URL} className="belth-site-nav-cta">
            {t.nav.bookDemo}
          </a>

          <button
            type="button"
            className="belth-site-nav-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="belth-site-nav-mobile">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="belth-site-nav-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT_URL}
            className="belth-site-nav-mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.bookDemo}
          </a>
        </div>
      )}
    </nav>
  );
}
