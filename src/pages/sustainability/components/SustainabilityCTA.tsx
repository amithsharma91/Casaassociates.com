import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const values = [
  { icon: 'ri-leaf-line', label: 'Eco-Friendly Design' },
  { icon: 'ri-sun-line', label: 'Energy Efficient' },
  { icon: 'ri-drop-line', label: 'Water Conscious' },
  { icon: 'ri-earth-line', label: 'Locally Sourced' },
];

export default function SustainabilityCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=aerial%20view%20sustainable%20green%20urban%20landscape%20India%20modern%20city%20with%20green%20parks%20trees%20rooftop%20gardens%20eco%20friendly%20architecture%20wide%20angle%20dramatic%20sky%20cinematic%20editorial&width=1920&height=900&seq=sustcta1&orientation=landscape"
          alt="Sustainable building for a better tomorrow"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/65 to-black/75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''} text-center max-w-3xl mx-auto`}
        >
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="w-8 h-px bg-white/50"></span>
            <span className="text-white/60 text-xs tracking-[0.25em] uppercase">Let&apos;s Build Together</span>
            <span className="w-8 h-px bg-white/50"></span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-6">
            Build Smart.<br />
            <em className="not-italic font-semibold">Build Sustainable.</em>
          </h2>

          <p className="text-white/65 text-[15px] leading-relaxed mb-12 max-w-xl mx-auto">
            Ready to design a home or workspace that&apos;s kinder to the planet and smarter for your budget? Let&apos;s start the conversation.
          </p>

          {/* Value chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {values.map((v) => (
              <div key={v.label} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs tracking-[0.12em] uppercase px-4 py-2.5 rounded-full">
                <div className="w-3.5 h-3.5 flex items-center justify-center">
                  <i className={`${v.icon} text-xs`}></i>
                </div>
                {v.label}
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919000975046"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-neutral-900 text-sm font-medium tracking-[0.12em] uppercase rounded-full hover:bg-neutral-100 transition-all cursor-pointer whitespace-nowrap"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-phone-line text-sm"></i>
              </div>
              Call Now
            </a>
            <a
              href="https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20sustainable%20building%20project%20with%20Casa%20Associates."
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-green-500 text-white text-sm font-medium tracking-[0.12em] uppercase rounded-full hover:bg-green-400 transition-all cursor-pointer whitespace-nowrap"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-whatsapp-line text-sm"></i>
              </div>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
