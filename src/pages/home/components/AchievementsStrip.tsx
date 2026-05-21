import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const certifications = [
  { icon: 'ri-award-line', label: 'ISO 9001:2015', sublabel: 'Quality Certified' },
  { icon: 'ri-leaf-line', label: 'IGBC Aligned', sublabel: 'Green Building' },
  { icon: 'ri-home-line', label: 'TSRERA Registered', sublabel: 'Telangana' },
  { icon: 'ri-compass-3-line', label: 'COA Certified', sublabel: 'Council of Architecture' },
  { icon: 'ri-shield-check-line', label: 'IS 456 Compliant', sublabel: 'Structural Standards' },
];

const stats = [
  { value: '120+', label: 'Projects Completed', icon: 'ri-building-4-line' },
  { value: '15+', label: 'Years of Excellence', icon: 'ri-history-line' },
  { value: '200+', label: 'Happy Clients', icon: 'ri-group-2-line' },
  { value: 'Hyd', label: 'Based in Hyderabad', icon: 'ri-map-pin-2-line' },
];

export default function AchievementsStrip() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 md:py-16 bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Stats Row */}
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''} grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16`}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`stagger-${i + 1} flex flex-col items-center text-center`}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 rounded-xl mb-3 md:mb-4">
                <i className={`${s.icon} text-white text-base md:text-lg`}></i>
              </div>
              <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-[-0.02em] leading-none mb-1.5 md:mb-2">{s.value}</div>
              <div className="text-neutral-500 text-[10px] md:text-[11px] tracking-[0.14em] md:tracking-[0.18em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-12"></div>

        {/* Certifications Row */}
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-3`}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-neutral-700"></span>
            <span className="text-neutral-600 text-[10px] tracking-[0.25em] uppercase">Certifications &amp; Standards</span>
            <span className="w-8 h-px bg-neutral-700"></span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="group flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-full px-5 py-3 cursor-default"
              >
                <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                  <i className={`${cert.icon} text-neutral-400 group-hover:text-white text-sm transition-colors`}></i>
                </div>
                <div>
                  <div className="text-white text-xs font-medium leading-none">{cert.label}</div>
                  <div className="text-neutral-600 text-[10px] mt-0.5">{cert.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
