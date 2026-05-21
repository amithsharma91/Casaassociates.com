import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const benefits = [
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Lower Energy Costs',
    description: 'Sustainably designed buildings use significantly less energy for heating, cooling, and lighting. Our clients report 25–35% reductions in monthly utility bills — savings that compound over the building\'s lifetime.',
    stat: '~30%',
    statLabel: 'avg. energy cost reduction',
  },
  {
    icon: 'ri-heart-pulse-line',
    title: 'Healthier Living Spaces',
    description: 'Proper ventilation, non-toxic materials, and natural daylighting create spaces that support wellbeing. Occupants report higher comfort, lower stress, and better sleep quality in green-certified buildings.',
    stat: '2×',
    statLabel: 'better indoor air quality',
  },
  {
    icon: 'ri-increase-decrease-line',
    title: 'Long-Term Property Value',
    description: 'Green buildings command a measurable premium in both resale and rental markets. As energy costs rise and regulations tighten, sustainability credentials become increasingly valuable to buyers and tenants.',
    stat: '15%+',
    statLabel: 'higher resale premium',
  },
  {
    icon: 'ri-recycle-line',
    title: 'Reduced Environmental Impact',
    description: 'Lower carbon emissions during construction and operation, reduced water use, and responsible waste management — every project we deliver leaves a lighter footprint on the environment.',
    stat: '40%',
    statLabel: 'less construction waste',
  },
];

export default function BenefitsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} text-center mb-16 max-w-2xl mx-auto`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-neutral-400"></span>
            <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">Why Go Green</span>
            <span className="w-8 h-px bg-neutral-400"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-5">
            The Benefits of Sustainable Construction
          </h2>
          <p className="text-neutral-500 text-[15px] leading-relaxed">
            Building sustainably is not just the right thing to do — it is the smarter financial and social decision.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${i + 1} group flex gap-6 p-8 rounded-2xl border border-neutral-200 hover:bg-neutral-900 transition-all duration-300 cursor-default`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 rounded-xl group-hover:bg-white/10 transition-all">
                  <i className={`${b.icon} text-xl text-neutral-600 group-hover:text-white transition-all`}></i>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                  <h3 className="font-serif text-xl font-medium text-neutral-900 group-hover:text-white transition-all">{b.title}</h3>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed mb-5 group-hover:text-neutral-400 transition-all">{b.description}</p>
                {/* Stat chip */}
                <div className="inline-flex items-baseline gap-2 bg-neutral-100 group-hover:bg-white/10 rounded-full px-4 py-2 transition-all">
                  <span className="font-serif text-neutral-900 group-hover:text-white text-lg font-semibold transition-all">{b.stat}</span>
                  <span className="text-neutral-500 group-hover:text-neutral-400 text-xs tracking-wide transition-all">{b.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
