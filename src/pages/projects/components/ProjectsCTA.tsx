import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const WA_LINK = 'https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AProject%20Location%3A%20%0AService%20Required%3A%20%0ABudget%20(Optional)%3A%20%0AMessage%3A%20';

export default function ProjectsCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-12 md:py-18 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=dramatic%20luxury%20architecture%20aerial%20view%20India%20modern%20city%20premium%20construction%20project%20overview%20cinematic%20wide%20angle%20monochromatic%20dark%20moody%20editorial&width=1920&height=900&seq=projcta1&orientation=landscape"
          alt="Start your dream project"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/70 to-black/55"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="w-8 h-px bg-white/50"></span>
            <span className="text-white/60 text-xs tracking-[0.22em] uppercase">Start Your Journey</span>
            <span className="w-8 h-px bg-white/50"></span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-6">
            Planning Your<br />
            Dream <em className="not-italic font-semibold">Project?</em>
          </h2>

          <p className="text-white/65 text-[15px] leading-relaxed mb-4 max-w-xl mx-auto">
            Our team brings your vision to life — from initial concept to final handover. Get a quick response on WhatsApp within minutes.
          </p>

          {/* Response badge */}
          <div className="inline-flex items-center gap-2 mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-white/60 text-xs tracking-[0.15em] uppercase">Typically replies within 30 minutes</span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 md:px-8 py-3.5 md:py-4 bg-[#25D366] text-white text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-[#1ebe5d] hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-whatsapp-line text-base"></i>
              </div>
              Get Instant Quote on WhatsApp
            </a>
            <a
              href="tel:+919000975046"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 md:py-4 bg-white/10 border border-white/20 text-white text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-white/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-phone-line text-sm"></i>
              </div>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
