"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Technology", href: "https://www.belth.net/technology" },
  { label: "Platform", href: "https://www.belth.net/platform" },
  { label: "Engagement", href: "https://www.belth.net/engagement" },
  { label: "OEM", href: "https://www.belth.net/oem-partnership" },
  { label: "AI Solutions", href: "https://ai-solutions-cdesjfdi2-belth.vercel.app/" },
  { label: "About", href: "https://www.belth.net/about" },
  { label: "Contact", href: "https://www.belth.net/contact" },
] as const;

const CONTACT_URL = "https://www.belth.net/contact";

export default function BelthNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="belth-site-nav">
      <div className="belth-site-nav-inner">
        <a href="https://www.belth.net/" className="belth-site-logo" aria-label="BELTH home">
          <span className="belth-site-logo-badge">BELTH</span>
        </a>

        <div className="belth-site-nav-links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="belth-site-nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="belth-site-nav-actions">
          <a href={CONTACT_URL} className="belth-site-nav-cta">
            Boek een demo
          </a>
          <button
            type="button"
            className="belth-site-nav-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
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
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
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
            Boek een demo
          </a>
        </div>
      )}
    </nav>
  );
}
