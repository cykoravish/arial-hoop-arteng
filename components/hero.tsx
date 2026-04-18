"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function Hero() {
  const { t } = useLanguage()

  const handleBookClick = () => {
    const el = document.querySelector("#contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Aerial hoop performer suspended gracefully in the air"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/60" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-foreground" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-foreground" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-foreground" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Tagline */}
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8 animate-fade-in">
          {t.hero.tagline}
        </p>

        {/* Heading */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-none text-balance text-foreground mb-8">
          {t.hero.heading}
        </h1>

        {/* Subheading */}
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          {t.hero.subheading}
        </p>

        {/* CTA */}
        <button
          onClick={handleBookClick}
          className="font-body text-sm tracking-widest uppercase bg-gold text-background px-10 py-4 hover:bg-gold-light transition-all duration-300 cursor-pointer"
          aria-label="Book a performance"
        >
          {t.hero.cta}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">{t.hero.scroll}</span>
        <div className="w-px h-12 bg-gold/40 animate-pulse" />
      </div>
    </section>
  )
}
