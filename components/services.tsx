"use client";

import { useLanguage } from "@/lib/language-context";

export function Services() {
  const { t } = useLanguage();

  const handleBookClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-28 md:py-36 px-6 bg-surface"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
            {t.services.label}
          </p>
          <h2
            id="services-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance leading-tight mb-6"
          >
            {t.services.heading}
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.services.subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {t.services.items.map((service, i) => (
            <article
              key={i}
              className={`bg-surface p-10 flex flex-col group hover:bg-surface-raised transition-colors duration-500 ${
                i === 0 ? "relative overflow-hidden" : ""
              }`}
            >
              {/* Tag */}
              <div className="mb-8">
                <span
                  className={`font-body text-xs tracking-widest uppercase px-3 py-1.5 ${
                    i === 0
                      ? "bg-gold text-background"
                      : "border border-border text-muted-foreground"
                  }`}
                >
                  {service.tag}
                </span>
              </div>

              <h3 className="font-display text-3xl font-light text-foreground mb-4">
                {service.title}
              </h3>

              {/* Divider */}
              <div
                className={`w-10 h-px mb-6 transition-all duration-500 group-hover:w-16 ${i === 0 ? "bg-gold" : "bg-border"}`}
              />

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {service.description}
              </p>

              <p className="font-body text-xs text-muted-foreground/80 mb-4">
                {t.services.customLine}
              </p>

              {service.exclusiveLine && (
                <p className="font-body text-xs text-gold mb-6">
                  {service.exclusiveLine}
                </p>
              )}

              {/* Features */}
              <ul className="space-y-2 mb-10" role="list">
                {service.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-3 font-body text-sm text-muted-foreground"
                  >
                    <span
                      className="w-4 h-px bg-gold flex-shrink-0"
                      aria-hidden="true"
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={handleBookClick}
                className={`font-body text-xs tracking-widest uppercase py-3 transition-all duration-300 cursor-pointer ${
                  i === 0
                    ? "bg-gold text-background hover:bg-gold-light"
                    : "border border-border text-muted-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {i === 0 ? t.services.bookNow : t.services.enquire}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
