"use client";

import { useLanguage } from "@/lib/language-context";

export function TailoredServices() {
  const { t } = useLanguage();
  return (
    <div className="max-w-2xl mx-auto text-center relative z-10">
      {/* Top divider */}
      <div className="w-12 h-px bg-gold/60 mx-auto mb-12" />

      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 tracking-tight">
        {t.tailored.title}
      </h2>

      {/* Emphasis line */}
      <p className="font-body text-lg text-foreground/90 mb-8">
        {t.tailored.line1}
      </p>

      {/* Main description */}
      <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
        {t.tailored.line2}
      </p>

      {/* Subtle closing line */}
      <p className="font-body text-sm text-muted-foreground/70 leading-relaxed italic">
        {t.tailored.line3}
      </p>
    </div>
  );
}
