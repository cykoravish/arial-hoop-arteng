"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import type { Locale } from "@/lib/translations";

const locales: Locale[] = ["en", "fr", "de"];

export function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.testimonials, href: "#testimonials" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = [
      "about",
      "services",
      "gallery",
      "testimonials",
      "contact",
    ];

    const handleScroll = () => {
      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex flex-col leading-tight group"
        >
          <span className="text-gold text-xs tracking-[0.4em] uppercase">
            Aerial Artist
          </span>
          <span className="font-display text-lg tracking-widest uppercase text-foreground group-hover:text-gold transition-colors duration-300">
            Caroline
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`group relative font-body text-sm font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer
                  ${
                    activeSection === link.href.replace("#", "")
                      ? "text-gold"
                      : "text-white/70 hover:text-white"
                  }`}
              >
                <span className="relative">
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] bg-gold transition-all duration-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language switcher */}
          <div
            className="flex items-center gap-1"
            role="group"
            aria-label="Language switcher"
          >
            {locales.map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                <button
                  onClick={() => setLocale(l)}
                  className={`font-body text-xs tracking-widest uppercase transition-colors duration-300 ${
                    locale === l
                      ? "text-gold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={`Switch to ${l.toUpperCase()}`}
                  aria-pressed={locale === l}
                >
                  {l.toUpperCase()}
                </button>
                {i < locales.length - 1 && (
                  <span className="text-border text-xs">·</span>
                )}
              </span>
            ))}
          </div>

          <button
            onClick={() => handleNavClick("#contact")}
            className="font-body text-xs tracking-widest uppercase border border-gold text-gold px-5 py-2.5 hover:bg-gold hover:text-background transition-all duration-300 cursor-pointer"
          >
            {t.nav.bookNow}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-background/98 backdrop-blur-md border-t border-border`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300 text-left cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-3 pt-2">
            {locales.map((l, i) => (
              <span key={l} className="flex items-center gap-3">
                <button
                  onClick={() => setLocale(l)}
                  className={`font-body text-xs tracking-widest uppercase ${locale === l ? "text-gold" : "text-muted-foreground"}`}
                  aria-pressed={locale === l}
                >
                  {l.toUpperCase()}
                </button>
                {i < locales.length - 1 && (
                  <span className="text-border">·</span>
                )}
              </span>
            ))}
          </div>
          <button
            onClick={() => handleNavClick("#contact")}
            className="font-body text-xs tracking-widest uppercase border border-gold text-gold px-5 py-3 hover:bg-gold hover:text-background transition-all duration-300 text-center cursor-pointer w-full"
          >
            {t.nav.bookNow}
          </button>
        </div>
      </div>
    </header>
  );
}
