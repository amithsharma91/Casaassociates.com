import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const features = [
  {
    icon: 'ri-sun-line',
    title: 'Energy Efficiency',
    description: 'We design buildings with optimal solar orientation, high-performance glazing, and energy-efficient mechanical systems — reducing operational energy consumption by up to 30%.',
    points: ['Solar-ready rooftop design', 'LED and smart lighting control', 'Energy-rated HVAC systems', 'Building envelope optimisation'],
    stat: '30%',
    statLabel: 'Energy Savings',
  },
  {
    icon: 'ri-drop-line',
    title: 'Water Efficiency',
    description: 'Water management is integral to our designs — from on-site rainwater harvesting and greywater recycling to low-flow sanitary fittings and drought-resistant landscapes.',
    points: ['Rainwater harvesting systems', 'Greywater recycling', 'Low-flow fixture specifications', 'Permeable paving and drainage'],
    stat: '40%',
    statLabel: 'Water Conserved',
  },
  {
    icon: 'ri-earth-line',
    title: 'Local Material Sourcing',
    description: 'We prioritise materials sourced within 500 km of each project site — supporting local industries, reducing transport emissions, and ensuring climatically appropriate finishes.',
    points: ['Regional stone and brick', 'Locally fired clay products', 'Indigenous timber species', 'Reduced supply-chain carbon'],
    stat: '60%',
    statLabel: 'Local Sourced',
  },
  {
    icon: 'ri-lungs-line',
    title: 'Indoor Air Quality',
    description: 'Healthy indoor environments through thoughtful ventilation, low-VOC material selection, and cross-ventilation strategies that reduce mechanical air treatment dependence.',
    points: ['Low-VOC paints and adhesives', 'Cross-ventilation strategies', 'Non-toxic insulation', 'Indoor greenery integration'],
    stat: '2×',
    statLabel: 'Air Quality Index',
  },
];

export default function CoreFeatures() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 md:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} text-center mb-16 max-w-2xl mx-auto`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-neutral-400"></span>
            <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">Core Pillars</span>
            <span className="w-8 h-px bg-neutral-400"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-5 tracking-[-0.01em]">
            Our Sustainability Pillars
          </h2>
          <p className="text-neutral-500 text-[15px] leading-relaxed">
            Four interconnected principles guide every design decision — from site selection to project handover.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${i + 1} bg-white border border-neutral-200 rounded-2xl p-9 md:p-11 group hover:border-neutral-900 transition-all duration-400`}
            >
              <div className="flex items-start justify-between mb-8">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-neutral-100 rounded-2xl group-hover:bg-neutral-900 transition-all duration-400">
                  <i className={`${feat.icon} text-2xl text-neutral-600 group-hover:text-white transition-all`}></i>
                </div>
                {/* Stat chip */}
                <div className="text-right">
                  <div className="font-serif text-3xl font-semibold text-neutral-900">{feat.stat}</div>
                  <div className="text-neutral-500 text-[10px] tracking-[0.15em] uppercase">{feat.statLabel}</div>
                </div>
              </div>

              {/* Title + Desc */}
              <h3 className="font-serif text-2xl font-medium text-neutral-900 mb-3 tracking-[-0.01em]">{feat.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">{feat.description}</p>

              {/* Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                {feat.points.map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <i className="ri-arrow-right-line text-neutral-400 text-xs"></i>
                    </div>
                    <span className="text-neutral-600 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
