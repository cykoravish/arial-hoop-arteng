"use client"

import { useLanguage } from "@/lib/language-context"

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-28 md:py-36 px-6 bg-background overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">{t.testimonials.label}</p>
          <h2
            id="testimonials-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance leading-tight"
          >
            {t.testimonials.heading}
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, i) => (
            <blockquote
              key={i}
              className="relative border border-border p-10 group hover:border-gold/40 transition-all duration-500 flex flex-col"
            >
              {/* Large decorative quote mark */}
              <span
                className="absolute -top-6 left-8 font-display text-8xl text-gold/20 leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label="5 stars">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-8">
                &ldquo;{item.quote}&rdquo;
              </p>

              <footer>
                <p className="font-display text-lg text-foreground">{item.author}</p>
                <p className="font-body text-xs tracking-wide text-gold mt-1">{item.event}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
