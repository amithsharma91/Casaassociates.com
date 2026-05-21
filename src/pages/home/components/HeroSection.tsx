import { Link } from 'react-router-dom';

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[600px] h-[92vh] md:h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/3a6d8f96d7fe4d39df9fd6d3c5fa8b16.jpeg"
          alt="Casa Associates — End-to-End Architecture &amp; Construction Services in Hyderabad"
          className="w-full h-full object-cover object-center scale-[1.04]"
          style={{ transition: 'transform 8s ease' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/45"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-48 sm:pb-40 md:pb-28 md:py-0">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4 md:mb-6 animate-fadeIn">
            <span className="w-8 md:w-10 h-px bg-white/40"></span>
            <span className="text-white/80 text-[10px] md:text-[11px] tracking-[0.22em] md:tracking-[0.32em] uppercase font-medium">
              Casa Associates · Hyderabad
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-serif text-white font-light leading-[1.06] tracking-[-0.02em] mb-5 md:mb-6 animate-fadeInUp text-shadow-hero"
            style={{ fontSize: 'clamp(1.75rem, 5.5vw, 4.5rem)' }}
          >
            End-to-End<br />
            <em className="not-italic font-semibold">Architecture &amp; Construction</em><br />
            Services in Hyderabad
          </h1>

          {/* Subheading */}
          <p
            className="text-white/85 text-sm md:text-[15px] font-light leading-[1.75] mb-7 md:mb-10 max-w-md animate-fadeInUp"
            style={{ animationDelay: '0.15s' }}
          >
            Save time, avoid permit headaches, and get flawless execution — from planning &amp; approvals to design &amp; build, all under one roof.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row flex-wrap items-center gap-3 md:gap-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={scrollToContact}
              className="px-7 md:px-9 py-3 md:py-3.5 bg-white text-neutral-900 text-xs md:text-sm font-medium tracking-[0.16em] uppercase rounded-sm cursor-pointer whitespace-nowrap flex items-center justify-center gap-2.5 hover:bg-white/90 transition-all duration-300"
            >
              Get Free Quote
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line text-sm"></i>
              </div>
            </button>
            <a
              href="https://wa.me/919000975046?text=Hi%2C%20I%27m%20interested%20in%20your%20services.%20Please%20share%20details."
              target="_blank"
              rel="nofollow noreferrer"
              className="px-7 md:px-9 py-3 md:py-3.5 border border-white/60 text-white text-xs md:text-sm font-medium tracking-[0.16em] uppercase rounded-sm cursor-pointer whitespace-nowrap flex items-center justify-center gap-2.5 hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-whatsapp-line text-sm"></i>
              </div>
              WhatsApp Us
            </a>
            <Link
              to="/projects"
              className="hidden md:inline-flex px-7 py-3 md:py-3.5 border border-white/30 text-white/80 text-xs md:text-sm font-medium tracking-[0.16em] uppercase rounded-sm hover:bg-white/10 hover:border-white/60 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-4 gap-px bg-white/10 backdrop-blur-md rounded-t-2xl overflow-hidden border border-white/10 border-b-0">
            {[
              { value: '120+', label: 'Projects' },
              { value: '15+', label: 'Years Exp.' },
              { value: '200+', label: 'Clients' },
              { value: '100%', label: 'On-Time' },
            ].map((stat) => (
              <div key={stat.label} className="px-2 sm:px-4 md:px-6 py-3 md:py-5 bg-black/55 backdrop-blur-sm text-center">
                <div className="text-white font-serif text-base sm:text-xl md:text-3xl font-semibold tracking-tight">{stat.value}</div>
                <div className="text-white/70 text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.14em] md:tracking-[0.2em] uppercase mt-0.5 md:mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
