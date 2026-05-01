import { LanguageProvider } from "@/lib/language-context";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { WhyChooseMe } from "@/components/why-choose-me";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { TailoredServices } from "@/components/tailored-services";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />

        <About />

        <Services />
        <TailoredServices />

        <Gallery />

        <WhyChooseMe />

        <Testimonials />

        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
