"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

const galleryItems = [
  { src: "/images/gallery-1.jpg", alt: "Aerial hoop performer in elegant evening dress", type: "image", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Lyra artist performing at a private event", type: "image", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-3.jpg", alt: "Aerial hoop performance at a bachelorette party", type: "image", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-4.jpg", alt: "Lyra performer at a corporate gala dinner", type: "image", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-5.jpg", alt: "Aerial artist in stunning costume", type: "image", span: "col-span-1 row-span-2" },
  { src: "/images/hero-bg.jpg", alt: "Aerial hoop performer silhouette", type: "image", span: "col-span-1 row-span-1" },
]

export function Gallery() {
  const { t } = useLanguage()
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-28 md:py-36 px-6 bg-background" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">{t.gallery.label}</p>
            <h2
              id="gallery-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance leading-tight"
            >
              {t.gallery.heading}
            </h2>
          </div>
          <p className="font-body text-sm text-muted-foreground max-w-sm leading-relaxed text-pretty">
            {t.gallery.subheading}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px] md:auto-rows-[260px]">
          {galleryItems.map((item, i) => (
            <button
              key={i}
              className={`${item.span} relative overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold`}
              onClick={() => setActiveIdx(i)}
              aria-label={`View: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500" />
              {/* Hover icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 border border-gold flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold" aria-hidden="true">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {activeIdx !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActiveIdx(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              className="absolute top-6 right-6 text-muted-foreground hover:text-gold transition-colors p-2 cursor-pointer"
              onClick={() => setActiveIdx(null)}
              aria-label="Close lightbox"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="relative max-w-4xl max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={galleryItems[activeIdx].src}
                alt={galleryItems[activeIdx].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            {/* Navigation */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gold transition-colors p-2 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setActiveIdx((activeIdx - 1 + galleryItems.length) % galleryItems.length) }}
              aria-label="Previous image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gold transition-colors p-2 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setActiveIdx((activeIdx + 1) % galleryItems.length) }}
              aria-label="Next image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
