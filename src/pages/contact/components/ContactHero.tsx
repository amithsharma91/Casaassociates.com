export default function ContactHero() {
  return (
    <section className="relative w-full bg-neutral-950 overflow-hidden flex items-center">
      {/* Background architectural image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://readdy.ai/api/search-image?query=luxury%20modern%20architectural%20office%20building%20interior%20Hyderabad%20India%20warm%20dramatic%20lighting%20reception%20lobby%20marble%20floor%20dark%20moody%20editorial%20cinematic%20premium%20wide%20angle%20professional%20photography%20warm%20amber%20tones%20elegant%20Banjara%20Hills&width=1920&height=800&seq=contacthero3&orientation=landscape"
          alt="Contact Casa Associates — Hyderabad"
          className="w-full h-full object-cover object-center opacity-18"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80"></div>
      </div>

      {/* Decorative lines */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-12">

          {/* Left — Main Heading */}
          <div>
            <div className="flex items-center gap-3 mb-6 animate-fadeIn">
              <span className="w-8 h-px bg-neutral-600"></span>
              <span className="text-neutral-500 text-[10px] md:text-[11px] tracking-[0.24em] md:tracking-[0.28em] uppercase">Casa Associates · Hyderabad</span>
            </div>
            <h1
              className="font-serif text-white font-light leading-[0.95] tracking-[-0.025em] animate-fadeInUp"
              style={{ fontSize: 'clamp(2.4rem, 8vw, 7rem)' }}
            >
              GET<br />
              <em className="not-italic font-semibold">IN TOUCH</em>
            </h1>
          </div>

          {/* Right — Sub info + urgent actions */}
          <div className="lg:pb-3 max-w-md animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
            <p className="text-neutral-400 text-sm md:text-base lg:text-lg font-light leading-relaxed mb-4">
              We&apos;re here to help you build your dream space in Hyderabad. Reach out and let&apos;s start the conversation today.
            </p>

            {/* 30-min WhatsApp urgency */}
            <div className="flex items-center gap-2.5 mb-3 p-3 md:p-3.5 bg-green-500/10 border border-green-500/30 rounded-xl w-fit">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="text-neutral-300 text-xs md:text-sm font-light">Get a response within <strong className="text-white font-semibold">30 minutes</strong> on WhatsApp</span>
            </div>

            {/* Response time badge */}
            <div className="flex items-center gap-2.5 mb-7 md:mb-8 p-3 md:p-3.5 bg-white/5 border border-white/10 rounded-xl w-fit">
              <div className="w-2 h-2 bg-white/40 rounded-full flex-shrink-0"></div>
              <span className="text-neutral-400 text-xs md:text-sm font-light">Phone calls answered within <strong className="text-white font-medium">2 hours</strong></span>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="tel:+919000975046"
                className="inline-flex items-center justify-center gap-2.5 px-6 md:px-7 py-3.5 border border-white text-white text-xs font-medium tracking-[0.14em] uppercase rounded-sm hover:bg-white hover:text-neutral-900 transition-all cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-fill text-sm"></i>
                </div>
                Call Now
              </a>
              <a
                href="tel:04049535040"
                className="inline-flex items-center justify-center gap-2.5 px-6 md:px-7 py-3.5 border border-white/40 text-white/70 text-xs font-medium tracking-[0.14em] uppercase rounded-sm hover:border-white hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-sm"></i>
                </div>
                040 4953 5046
              </a>
              <a
                href="https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20discuss%20my%20project%20with%20Casa%20Associates."
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 md:px-7 py-3.5 border border-white/50 text-white/80 text-xs font-medium tracking-[0.14em] uppercase rounded-sm hover:border-white hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-whatsapp-fill text-sm"></i>
                </div>
                WhatsApp — 30 Min Reply
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
