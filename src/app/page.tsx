"use client";

import { useState, useRef, useEffect } from "react";
import Hamburger from "hamburger-react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Regular Cleaning",
    description:
      "Weekly or biweekly visits to keep your home consistently clean. Dusting, vacuuming, mopping, and bathroom & kitchen sanitizing.",
    icon: "🌸",
  },
  {
    title: "Biweekly & Monthly",
    description:
      "Set a schedule that fits your life. We show up on the same days so you always know your space is cared for.",
    icon: "📅",
  },
  {
    title: "One-Time Cleans",
    description:
      "Single visits for events, after renovations, or whenever you need an extra hand. Flexible scheduling.",
    icon: "✨",
  },
  {
    title: "Deep Cleaning",
    description:
      "Thorough top-to-bottom clean for spring cleaning or when you need a fresh start. Every corner, every surface.",
    icon: "🏠",
  },
  {
    title: "Move-Out Cleans",
    description:
      "Leave your old place spotless for the next tenant or get your new place move-in ready. We handle the details.",
    icon: "🔑",
  },
  {
    title: "Airbnb & Turnovers",
    description:
      "Quick, thorough turnovers between guests. Linens, restock, and a spotless space so your next booking is ready to go.",
    icon: "🛏️",
  },
];

function RoseLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b2942" />
          <stop offset="100%" stopColor="#b76e79" />
        </linearGradient>
      </defs>
      <path
        d="M32 12c-2 4-6 8-12 8-4 0-8 2-10 6 0 2 0 4 2 6 4 6 10 10 18 10 8 0 14-4 18-10 2-2 2-4 2-6-2-4-6-6-10-6-6 0-10-4-12-8z"
        fill="url(#roseGrad)"
      />
      <path
        d="M32 20c2 2 4 4 6 4 2 0 4-1 5-3-1 2-3 3-5 3-2 0-4-1-6-3 1 2 3 3 5 3 2 0 4-1 5-3-1 2-3 3-5 3-2 0-4-2-6-4z"
        fill="#e8b4bc"
        opacity={0.9}
      />
      <path
        d="M30 44v16l4-2 4 2V44c0-1-1-2-2-2h-4c-1 0-2 1-2 2z"
        fill="#5a7d5e"
      />
      <path d="M28 42h8v4h-8z" fill="#5a7d5e" />
      <ellipse cx="32" cy="46" rx="6" ry="2" fill="#4a6b4e" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 40 });
  }, []);

  const sendContactForm = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!formRef.current || !serviceId || !templateId || !publicKey) {
      setFormStatus("error");
      return;
    }
    setFormStatus("sending");
    emailjs
      .sendForm(serviceId, templateId, formRef.current, { publicKey })
      .then(
        () => {
          setFormStatus("success");
          formRef.current?.reset();
        },
        () => setFormStatus("error")
      );
  };

  return (
    <>
      {/* Navigation - compact, mobile-friendly */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-rose-light/30">
        <nav className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between max-w-6xl mx-auto">
          <a href="#" className="flex items-center gap-2 font-display text-base sm:text-lg font-semibold text-rose-deep">
            <RoseLogo className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
            <span>So Many Roses</span>
          </a>
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm text-stone hover:text-rose-deep transition-colors">Services</a>
            <a href="#about" className="text-sm text-stone hover:text-rose-deep transition-colors">About</a>
            <a href="#contact" className="text-sm text-stone hover:text-rose-deep transition-colors">Contact</a>
          </div>
          {/* Mobile menu button - hamburger-react */}
          <div className="md:hidden p-1 -mr-1 [&_button]:p-0" aria-label="Toggle menu">
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={24} color="#5c5346" label="Toggle menu" />
          </div>
        </nav>
        {/* Mobile menu panel - absolute so it doesn't extend navbar */}
        {menuOpen && (
          <div className="md:hidden absolute right-0 top-full pt-0">
            <div className="border border-t-0 border-rose-light/30 rounded-b-lg bg-cream/95 backdrop-blur-sm shadow-lg py-2 min-w-[140px] w-[160px] pr-4 pl-4 flex flex-col gap-0.5 mr-4">
              <a href="#services" className="py-2.5 text-stone hover:text-rose-deep transition-colors text-right text-sm" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#about" className="py-2.5 text-stone hover:text-rose-deep transition-colors text-right text-sm" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" className="py-2.5 text-stone hover:text-rose-deep transition-colors text-right text-sm" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center section-padding pt-20 sm:pt-24 bg-gradient-to-b from-rose-pale to-cream" data-aos="fade">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <RoseLogo className="w-16 h-16 text-rose-deep" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-deep leading-tight mb-6">
            Your home deserves to bloom
          </h1>
          <p className="text-lg sm:text-xl text-stone max-w-2xl mx-auto mb-4 leading-snug">
            <span className="block">So Many Roses Maid Services LLC</span>
            <span className="block mt-1">Professional cleaning in the Denver, Colorado area</span>
          </p>
          <p className="text-stone/90 max-w-xl mx-auto mb-10">
            We bring care, consistency, and spotless results so you can focus on what matters.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#8b2942] text-white px-8 py-4 rounded-full font-medium hover:bg-[#7a2340] hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-lg"
            >
              Get a free quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-2 border-[#8b2942] text-[#8b2942] px-8 py-4 rounded-full font-medium hover:bg-rose-pale hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              View services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-white scroll-mt-20 overflow-visible" data-aos="fade-up">
        <div className="max-w-6xl mx-auto overflow-visible">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-rose-deep text-center mb-4">
            Services we offer
          </h2>
          <p className="text-stone text-center max-w-xl mx-auto mb-8">
            From routine upkeep to move-out cleans and Airbnb turnovers — we do it all. One-time, biweekly, monthly, regular, and deep cleans tailored to you.
          </p>
          <p className="text-stone text-center text-sm mb-12">
            Standard rate: $60/hr — <a href="#contact" className="text-rose-deep font-medium underline hover:no-underline">get a free quote</a> for your space
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
            {services.map((service, index) => (
              <div key={service.title} data-aos="fade-up" data-aos-delay={index * 80}>
                <article
                  className="service-card relative p-8 rounded-2xl bg-rose-pale/50 border border-rose-light/40 hover:border-rose hover:shadow-2xl hover:shadow-rose/25 hover:z-10 origin-center"
                >
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="font-display text-xl font-semibold text-rose-deep mb-3">
                    {service.title}
                  </h3>
                  <p className="text-stone">{service.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding bg-rose-pale/60 scroll-mt-20" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-rose-deep mb-6">
            Why choose So Many Roses?
          </h2>
          <p className="text-stone text-lg leading-relaxed">
            We&apos;re a small team that takes pride in every home we clean. You get
            the same friendly faces, clear communication, and high standards
            every time. We use quality products and pay attention to the details
            that make your space feel truly cared for — like a bouquet of roses
            for your home.
          </p>
        </div>
      </section>

      {/* Contact - explicit dark bg so white text always contrasts */}
      <section
        id="contact"
        className="section-padding text-white scroll-mt-20"
        style={{ backgroundColor: "#8b2942" }}
        data-aos="fade-up"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-white">
            Get in touch
          </h2>
          <p className="text-white/95 mb-8">
            Serving the Denver, Colorado area. Call, email, or send a message below for a free quote.
          </p>
          <div className="grid lg:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
            <div className="space-y-4 bg-white/15 rounded-2xl p-8 border border-white/25 text-white">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+13144798143" className="underline hover:no-underline text-white font-medium">
                  314-479-8143
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:somanyrosesmaidservices@gmail.com"
                  className="underline hover:no-underline text-white font-medium"
                  suppressHydrationWarning
                >
                  somanyrosesmaidservices@gmail.com
                </a>
              </p>
              <p>
                <strong>Area:</strong> Denver, Colorado and surrounding area
              </p>
            </div>
            <form
              ref={formRef}
              onSubmit={sendContactForm}
              className="bg-white/15 rounded-2xl p-8 border border-white/25 flex flex-col gap-4"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone (optional)"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <textarea
                name="message"
                placeholder="Message / request a quote"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-y"
              />
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="mt-2 px-6 py-3 rounded-lg bg-white text-[#8b2942] font-medium hover:bg-white hover:shadow-lg hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
              >
                {formStatus === "sending" ? "Sending…" : "Send message"}
              </button>
              {formStatus === "success" && (
                <p className="text-white/95 text-sm">Thanks! We&apos;ll get back to you soon.</p>
              )}
              {formStatus === "error" && (
                <p className="text-red-200 text-sm">Something went wrong. Please call or email us directly.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-stone text-sm border-t border-rose-light/20 bg-cream">
        <p suppressHydrationWarning>© {new Date().getFullYear()} So Many Roses Maid Services LLC. Denver, Colorado.</p>
      </footer>
    </>
  );
}
