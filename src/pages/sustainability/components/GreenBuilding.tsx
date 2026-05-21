import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const highlights = [
  { icon: 'ri-seedling-line', label: 'Zero-waste site management protocols' },
  { icon: 'ri-recycle-line', label: 'Construction waste recycling & reuse' },
  { icon: 'ri-building-4-line', label: 'Passive design for natural climate control' },
  { icon: 'ri-leaf-line', label: 'IGBC & Green Rating principles alignment' },
  { icon: 'ri-sun-foggy-line', label: 'Reduced heat island effect via green roofs' },
  { icon: 'ri-landscape-line', label: 'Site ecology preservation and landscaping' },
];

export default function GreenBuilding() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — Image */}
          <div ref={leftRef} className={`animate-on-scroll-left ${leftVisible ? 'visible' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden h-[440px] md:h-[560px]">
              <img
                src="https://readdy.ai/api/search-image?query=stunning%20modern%20eco-friendly%20sustainable%20architecture%20India%20lush%20vertical%20garden%20green%20facade%20biophilic%20design%20bamboo%20timber%20natural%20stone%20warm%20terracotta%20earthy%20tones%20golden%20hour%20sunlight%20tropical%20foliage%20cascading%20plants%20award-winning%20green%20building%20premium%20editorial%20photography%20rich%20warm%20natural%20palette%20Hyderabad%20residential&width=900&height=780&seq=greenbuilding7&orientation=portrait"
                alt="Green building design — Casa Associates Hyderabad"
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/92 backdrop-blur-sm rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-neutral-900 rounded-xl flex-shrink-0">
                  <i className="ri-leaf-line text-white text-base"></i>
                </div>
                <div>
                  <div className="text-neutral-900 text-sm font-semibold font-serif">Eco-Certified Approach</div>
                  <div className="text-neutral-500 text-xs mt-0.5 leading-snug">Aligned with IGBC Green Building Standards</div>
                </div>
                <div className="ml-auto text-right flex-shrink-0">
                  <div className="font-serif text-2xl font-semibold text-neutral-900">IGBC</div>
                  <div className="text-neutral-500 text-[10px] tracking-[0.1em] uppercase">Aligned</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div ref={rightRef} className={`animate-on-scroll-right ${rightVisible ? 'visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-neutral-400"></span>
              <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">Green Design</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 leading-[1.08] mb-7 tracking-[-0.01em]">
              Eco-Friendly Buildings<br />
              Built to <em className="not-italic font-semibold">Last Generations</em>
            </h2>
            <p className="text-neutral-600 text-[15px] leading-[1.9] mb-6">
              Green buildings are not just about reduced energy bills — they represent a long-term investment in the health of occupants, the resilience of the structure, and the sustainability of the community.
            </p>
            <p className="text-neutral-500 text-[15px] leading-[1.9] mb-10">
              Our team approaches every project with a lifecycle perspective — designing for durability, thermal performance, and minimal environmental disruption. The result is buildings that are lighter on the planet and stronger in value.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-start gap-3 py-3.5 border-b border-neutral-100 last:border-b-0">
                  <div className="w-8 h-8 flex items-center justify-center bg-neutral-100 rounded-lg flex-shrink-0 mt-0.5">
                    <i className={`${h.icon} text-neutral-600 text-sm`}></i>
                  </div>
                  <span className="text-neutral-600 text-sm leading-snug">{h.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
