"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    eventType: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    setSubmitted(true);

    // reset form
    setFormState({
      name: "",
      eventType: "",
      date: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Failed to submit form");
  } finally {
    setLoading(false);
  }
};

  const WHATSAPP_NUMBER = "352000000000"; // Replace with real number
  const TELEGRAM_USERNAME = "smoofysmoo"; // Replace with real username

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in booking a performance.`;
  const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}`;

  return (
    <section
      id="contact"
      className="py-28 md:py-36 px-6 bg-surface"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: info */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
              {t.contact.label}
            </p>
            <h2
              id="contact-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance leading-tight mb-6"
            >
              {t.contact.heading}
            </h2>
            <div className="w-16 h-px bg-gold mb-8" />
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-12">
              {t.contact.subheading}
            </p>

            {/* Direct contact */}
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              {t.contact.directContact}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-border px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300 group"
                aria-label="Message on WhatsApp"
              >
                {/* WhatsApp icon */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gold flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-body text-sm tracking-wide text-foreground group-hover:text-gold transition-colors duration-300">
                  {t.contact.whatsapp}
                </span>
              </a>

              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-border px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300 group"
                aria-label="Message on Telegram"
              >
                {/* Telegram icon */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gold flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span className="font-body text-sm tracking-wide text-foreground group-hover:text-gold transition-colors duration-300">
                  {t.contact.telegram}
                </span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 text-center py-16">
                <div className="w-16 h-16 border border-gold flex items-center justify-center mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-gold"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-display text-2xl text-foreground mb-3">
                  {t.contact.form.successHeading}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {t.contact.form.success}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
                noValidate
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-body text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder={t.contact.form.namePlaceholder}
                    className="bg-transparent border border-border px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>

                {/* Event type */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="eventType"
                    className="font-body text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    {t.contact.form.eventType}
                  </label>
                  <input
                    id="eventType"
                    name="eventType"
                    type="text"
                    value={formState.eventType}
                    onChange={handleChange}
                    placeholder={t.contact.form.eventTypePlaceholder}
                    className="bg-transparent border border-border px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>

                {/* Date */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="date"
                    className="font-body text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    {t.contact.form.date}
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formState.date}
                    onChange={handleChange}
                    className="bg-transparent border border-border px-5 py-4 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors duration-300 [color-scheme:dark]"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-body text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="bg-transparent border border-border px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="font-body text-xs tracking-widest uppercase bg-gold text-background px-10 py-4 hover:bg-gold-light transition-all duration-300 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
                >
                  {loading ? t.contact.form.sending : t.contact.form.submit}
                </button>
                <p className="mt-3 text-xs text-muted-foreground/70 text-center">
                  {t.contact.form.customNote}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
