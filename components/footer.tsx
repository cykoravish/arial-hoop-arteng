"use client"

import { useLanguage } from "@/lib/language-context"
import type { Locale } from "@/lib/translations"

const locales: Locale[] = ["en", "fr", "de"]

export function Footer() {
  const { t, locale, setLocale } = useLanguage()
  const year = new Date().getFullYear()

  const socialLinks = [
    {
      name: t.footer.social.instagram,
      href: "https://instagram.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      name: t.footer.social.facebook,
      href: "https://facebook.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      name: t.footer.social.tiktok,
      href: "https://tiktok.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.19a8.16 8.16 0 0 0 4.78 1.52V6.27a4.85 4.85 0 0 1-1.01-.42v.84z"/>
        </svg>
      ),
    },
    {
      name: t.footer.social.youtube,
      href: "https://youtube.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
        </svg>
      ),
    },
  ]

  const footerLinks = [
    { label: t.footer.links.about, href: "#about" },
    { label: t.footer.links.services, href: "#services" },
    { label: t.footer.links.gallery, href: "#gallery" },
    { label: t.footer.links.contact, href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-surface border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-12 border-b border-border">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl tracking-widest uppercase text-foreground mb-2">
              <span className="text-gold">Aerial</span> Lyra
            </p>
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">{t.footer.tagline}</p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors duration-300"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          {/* Copyright + location */}
          <div className="flex items-center gap-6">
            <p className="font-body text-xs text-muted-foreground">
              &copy; {year} Aerial Lyra Luxembourg. {t.footer.copyright}
            </p>
            <span className="hidden sm:flex items-center gap-2 font-body text-xs text-muted-foreground">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold" aria-hidden="true">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {t.footer.location}
            </span>
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-2" role="group" aria-label="Language switcher">
            {locales.map((l, i) => (
              <span key={l} className="flex items-center gap-2">
                <button
                  onClick={() => setLocale(l)}
                  className={`font-body text-xs tracking-widest uppercase transition-colors duration-300 ${
                    locale === l ? "text-gold" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={locale === l}
                  aria-label={`Switch to ${l.toUpperCase()}`}
                >
                  {l.toUpperCase()}
                </button>
                {i < locales.length - 1 && <span className="text-border text-xs" aria-hidden="true">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
