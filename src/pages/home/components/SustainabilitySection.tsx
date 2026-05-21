import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const pillars = [
  {
    icon: 'ri-drop-line',
    title: 'Water Efficiency',
    description: 'Rainwater harvesting, low-flow fixtures, and greywater recycling systems integrated into every project.',
  },
  {
    icon: 'ri-sun-line',
    title: 'Energy Efficiency',
    description: 'Solar-ready designs, optimal building orientation, and energy-efficient material specifications.',
  },
  {
    icon: 'ri-earth-line',
    title: 'Local Material Sourcing',
    description: 'Prioritising regionally sourced materials to reduce carbon footprint and support local craftsmen.',
  },
  {
    icon: 'ri-lungs-line',
    title: 'Indoor Air Quality',
    description: 'Low-VOC finishes, adequate ventilation design, and non-toxic material selection for healthier spaces.',
  },
];

export default function SustainabilitySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sustainability" className="py-14 md:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} text-center mb-16 max-w-2xl mx-auto`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-neutral-400"></span>
            <span className="text-neutral-500 text-xs tracking-[0.24em] uppercase">Our Commitment</span>
            <span className="w-8 h-px bg-neutral-400"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-[-0.01em] mb-5">
            Building Responsibly
          </h2>
          <p className="text-neutral-500 text-[15px] leading-[1.8]">
            We design and build sustainable spaces with a focus on energy efficiency, water conservation, and eco-friendly materials — because responsible construction is at the heart of everything we do.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${i + 1} card-hover bg-white rounded-2xl p-9 border border-neutral-200 group`}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-neutral-100 rounded-xl mb-6 group-hover:bg-neutral-900 transition-all duration-300">
                <i className={`${pillar.icon} text-2xl text-neutral-600 group-hover:text-white transition-all`}></i>
              </div>
              <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-3 tracking-[-0.01em]">{pillar.title}</h3>
              <p className="text-neutral-500 text-sm leading-[1.8]">{pillar.description}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
