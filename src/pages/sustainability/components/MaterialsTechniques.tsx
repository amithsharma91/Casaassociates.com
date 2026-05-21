import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const categories = [
  {
    label: 'Eco-Friendly Materials',
    icon: 'ri-leaf-line',
    items: [
      { name: 'Fly Ash Bricks', desc: 'Recycled industrial by-product; lighter, stronger, thermally superior to conventional red bricks.' },
      { name: 'Compressed Earth Blocks', desc: 'Unstabilised or lime-stabilised blocks made from on-site soil — minimal processing, near-zero embodied carbon.' },
      { name: 'FSC-Certified Timber', desc: 'Wood sourced from responsibly managed forests with verified chain-of-custody documentation.' },
      { name: 'Recycled Steel Reinforcement', desc: 'High-strength TMT bars produced from 100% scrap steel — significantly lower production emissions.' },
    ],
  },
  {
    label: 'Energy-Saving Technologies',
    icon: 'ri-flashlight-line',
    items: [
      { name: 'Double-Glazed Low-E Windows', desc: 'Reduce solar heat gain and UV transmission while maintaining natural daylighting and views.' },
      { name: 'VRF/VRV Air Conditioning', desc: 'Variable refrigerant flow systems deliver precise zone-level cooling with up to 40% energy savings.' },
      { name: 'Rooftop Solar PV Systems', desc: 'Grid-tied solar arrays designed into every rooftop from the planning stage for seamless integration.' },
      { name: 'Smart Building Controls', desc: 'IoT-enabled lighting, HVAC, and access systems with occupancy sensing and energy dashboards.' },
    ],
  },
  {
    label: 'Smart Design Strategies',
    icon: 'ri-compass-3-line',
    items: [
      { name: 'Passive Solar Orientation', desc: 'Buildings oriented to maximise winter solar gain and minimise summer exposure — cutting HVAC loads significantly.' },
      { name: 'Cross-Ventilation Planning', desc: 'Carefully positioned openings that harness prevailing winds for natural cooling without mechanical intervention.' },
      { name: 'Thermal Mass Design', desc: 'Heavy masonry walls and floors absorb and slowly release heat, stabilising internal temperatures naturally.' },
      { name: 'Green Roof & Wall Systems', desc: 'Living roofs and planted walls reduce runoff, lower ambient temperatures, and enhance biodiversity on site.' },
    ],
  },
];

export default function MaterialsTechniques() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} mb-14`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-neutral-400"></span>
            <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">Our Toolkit</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
              Materials &amp; Techniques
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
              The tools we use to make sustainability tangible — specification by specification, system by system.
            </p>
          </div>
        </div>

        {/* Category Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <div
              key={cat.label}
              className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${ci + 1}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                <div className="w-9 h-9 flex items-center justify-center bg-neutral-900 rounded-lg flex-shrink-0">
                  <i className={`${cat.icon} text-white text-sm`}></i>
                </div>
                <h3 className="font-serif text-lg font-medium text-neutral-900">{cat.label}</h3>
              </div>

              {/* Items */}
              <div className="space-y-5">
                {cat.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex items-start gap-2.5 mb-1.5">
                      <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-arrow-right-line text-neutral-400 text-xs"></i>
                      </div>
                      <span className="text-neutral-900 text-sm font-medium">{item.name}</span>
                    </div>
                    <p className="text-neutral-500 text-xs leading-relaxed pl-6">{item.desc}</p>
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
