"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function About() {
  const { t } = useLanguage()

  const stats = [
    { value: t.about.stat1Value, label: t.about.stat1Label },
    { value: t.about.stat2Value, label: t.about.stat2Label },
    { value: t.about.stat3Value, label: t.about.stat3Label },
  ]

  return (
    <section id="about" className="pt-12 pb-20 md:py-36 px-6 bg-background" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Aerial hoop performer in an elegant pose"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gold frame accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 pointer-events-none" />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-8 left-0 right-8 md:right-0 md:left-8 bg-surface-raised border border-border p-6 flex justify-between">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl font-light text-gold">{stat.value}</p>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content side */}
          <div className="mt-16 md:mt-0">
            {/* Section label */}
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">{t.about.label}</p>

            <h2
              id="about-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance leading-tight mb-8"
            >
              {t.about.heading}
            </h2>

            {/* Divider */}
            <div className="w-16 h-px bg-gold mb-8" />

            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              {t.about.p1}
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-10">
              {t.about.p2}
            </p>

            {/* Bachelor party highlight */}
            <div className="border-l-2 border-gold pl-6 py-1">
              <p className="font-body text-sm text-foreground leading-relaxed">
                <span className="text-gold font-medium">{t.about.specialityLabel}</span>{" "}
                {t.about.specialityText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
