"use client"

import { useLanguage } from "@/lib/language-context"

const icons = [
  // Star / award
  <svg key="star" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  // Sparkles
  <svg key="sparkles" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M19 3l.8 2.2L22 6l-2.2.8L19 9l-.8-2.2L16 6l2.2-.8z"/><path d="M5 17l.8 2.2L8 20l-2.2.8L5 23l-.8-2.2L2 20l2.2-.8z"/></svg>,
  // Settings / flexibility
  <svg key="flex" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M21 12h-3M6 12H3M12 21v-3M12 6V3"/></svg>,
  // Map pin / location
  <svg key="pin" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>,
  // Shield
  <svg key="shield" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  // Music note / choreography
  <svg key="music" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
]

export function WhyChooseMe() {
  const { t } = useLanguage()

  return (
    <section id="why" className="py-28 md:py-36 px-6 bg-surface" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">{t.why.label}</p>
          <h2
            id="why-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance leading-tight"
          >
            {t.why.heading}
          </h2>
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {t.why.items.map((item, i) => (
            <article key={i} className="bg-surface p-10 group hover:bg-surface-raised transition-colors duration-500">
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {icons[i]}
              </div>
              <h3 className="font-display text-2xl font-light text-foreground mb-4">{item.title}</h3>
              <div className="w-8 h-px bg-gold/50 mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
