const services = [
  {
    title: "Regular Cleaning",
    description:
      "Keep your home consistently clean with weekly or bi-weekly visits. Dusting, vacuuming, mopping, and bathroom/kitchen sanitizing.",
    icon: "✨",
  },
  {
    title: "Deep Cleaning",
    description:
      "Thorough top-to-bottom clean for move-in/move-out, spring cleaning, or when you need a fresh start. Every corner, every surface.",
    icon: "🏠",
  },
  {
    title: "One-Time Cleans",
    description:
      "Single visits for events, after renovations, or whenever you need an extra hand. Flexible scheduling to fit your life.",
    icon: "📅",
  },
];

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-stone/10">
        <nav className="section-padding flex items-center justify-between max-w-6xl mx-auto">
          <a href="#" className="font-display text-xl font-semibold text-forest">
            Sparkle & Shine
          </a>
          <div className="flex gap-8">
            <a
              href="#services"
              className="text-stone hover:text-forest transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-stone hover:text-forest transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-stone hover:text-forest transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center section-padding pt-24 bg-gradient-to-b from-sage/10 to-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-tight mb-6">
            Your home deserves to sparkle.
          </h1>
          <p className="text-lg sm:text-xl text-stone max-w-2xl mx-auto mb-10">
            Professional maid services you can trust. We bring care, consistency,
            and spotless results—so you can focus on what matters.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-forest text-cream px-8 py-4 rounded-full font-medium hover:bg-forest/90 transition-colors shadow-lg shadow-forest/20"
            >
              Get a free quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-2 border-forest text-forest px-8 py-4 rounded-full font-medium hover:bg-forest/5 transition-colors"
            >
              View services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest text-center mb-4">
            Services we offer
          </h2>
          <p className="text-stone text-center max-w-xl mx-auto mb-16">
            From routine upkeep to deep cleans, we tailor our work to your needs.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.title}
                className="p-8 rounded-2xl bg-cream border border-stone/10 hover:border-sage/30 transition-colors"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="font-display text-xl font-semibold text-forest mb-3">
                  {service.title}
                </h3>
                <p className="text-stone">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding bg-sage/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest mb-6">
            Why choose us?
          </h2>
          <p className="text-stone text-lg leading-relaxed">
            We&apos;re a small team that takes pride in every home we clean. You get
            the same friendly faces, clear communication, and high standards
            every time. We use quality products and pay attention to the details
            that make your space feel truly cared for.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-forest text-cream">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Get in touch
          </h2>
          <p className="opacity-90 mb-10">
            Ready for a cleaner home? Send us a message and we&apos;ll get back with a
            free quote.
          </p>
          <div className="space-y-4 text-left bg-cream/10 rounded-2xl p-8 border border-cream/20">
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+15551234567" className="underline hover:no-underline">
                (555) 123-4567
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@sparkleandshine.example"
                className="underline hover:no-underline"
              >
                hello@sparkleandshine.example
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-stone text-sm border-t border-rose-light/20 bg-cream">
        <p suppressHydrationWarning>© {new Date().getFullYear()} So Many Roses Maid Services LLC. Denver, Colorado.</p>
        <p className="mt-2 text-stone/70">
          Site by <a href="https://evanprograms.com" target="_blank" rel="noopener noreferrer" className="text-stone/80 hover:text-rose-deep transition-colors">EvanPrograms</a>
        </p>
      </footer>
    </>
  );
}
