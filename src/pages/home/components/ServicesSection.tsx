import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const services = [
  {
    icon: 'ri-building-line',
    title: 'Architects & Engineers',
    description: 'Professional architectural planning, structural design, and 3D elevations aligned with Vaastu principles — delivered with precision and care.',
    path: '/services/architects-engineers',
    isExternal: false,
    highlight: false,
  },
  {
    icon: 'ri-building-2-line',
    title: 'Builders & Developers',
    description: 'Complete construction solutions for residential and commercial projects with high-quality execution and on-time delivery.',
    path: '/services/builders-developers',
    isExternal: false,
    highlight: false,
  },
  {
    icon: 'ri-government-line',
    title: 'Liaisoning Works',
    description: 'End-to-end building approval support, coordination with GHMC, HMDA, and government authorities — so you never have to chase permits.',
    path: 'https://buildingapprovalservices.com',
    isExternal: true,
    highlight: true,
  },
  {
    icon: 'ri-palette-line',
    title: 'Interior Designing & Execution',
    description: 'Turnkey interior solutions including concept design, modular furniture, false ceilings, lighting, and final styling — delivered to perfection.',
    path: '/services/interior-designing',
    isExternal: false,
    highlight: false,
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-14 md:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} mb-16`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-neutral-400"></span>
                <span className="text-neutral-500 text-xs tracking-[0.24em] uppercase">What We Do</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-[-0.01em]">
                Our Services
              </h2>
            </div>
            <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
              End-to-end solutions for every stage of your construction and design journey in Hyderabad.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${i + 1} card-hover rounded-2xl p-6 md:p-9 border group cursor-pointer relative overflow-hidden transition-all duration-300 ${
                service.highlight
                  ? 'bg-neutral-950 border-neutral-700 hover:border-amber-500/60'
                  : 'bg-white border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <div className="flex items-start justify-between mb-4 md:mb-7">
                <div className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl transition-all duration-300 ${
                  service.highlight
                    ? 'bg-amber-500/15 group-hover:bg-amber-500/25'
                    : 'bg-neutral-100 group-hover:bg-neutral-900'
                }`}>
                  <i className={`${service.icon} text-xl md:text-2xl transition-all ${
                    service.highlight ? 'text-amber-400' : 'text-neutral-600 group-hover:text-white'
                  }`}></i>
                </div>
                <div className="flex items-center gap-2">
                  {service.highlight && (
                    <span className="flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/40 text-amber-400 text-[9px] md:text-[10px] font-medium tracking-[0.14em] uppercase px-2.5 md:px-3 py-1 rounded-full whitespace-nowrap">
                      <i className="ri-external-link-line text-[9px]"></i>
                      <span className="hidden sm:inline">Dedicated Portal</span>
                      <span className="sm:hidden">Portal</span>
                    </span>
                  )}
                  {service.isExternal ? (
                    <a
                      href={service.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center border border-amber-500/40 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-amber-500 hover:border-amber-500 text-amber-400 hover:text-white flex-shrink-0"
                    >
                      <i className="ri-external-link-line text-sm"></i>
                    </a>
                  ) : (
                    <a
                      href={service.path}
                      className="w-9 h-9 flex items-center justify-center border border-neutral-200 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-neutral-900 hover:border-neutral-900 hover:text-white flex-shrink-0"
                    >
                      <i className="ri-arrow-right-up-line text-sm"></i>
                    </a>
                  )}
                </div>
              </div>
              <h3 className={`font-serif text-lg md:text-xl font-semibold mb-2.5 md:mb-3 tracking-[-0.01em] ${service.highlight ? 'text-white' : 'text-neutral-900'}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-[1.8] mb-5 md:mb-7 ${service.highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {service.description}
              </p>
              {service.isExternal ? (
                <a
                  href={service.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-400 text-xs font-medium tracking-[0.12em] uppercase group/link cursor-pointer"
                >
                  Visit Portal
                  <span className="w-0 group-hover/link:w-6 h-px bg-amber-400 transition-all inline-block"></span>
                  <i className="ri-external-link-line text-xs"></i>
                </a>
              ) : (
                <a
                  href={service.path}
                  className="inline-flex items-center gap-2 text-neutral-900 text-xs font-medium tracking-[0.12em] uppercase group/link cursor-pointer"
                >
                  Explore Service
                  <span className="w-0 group-hover/link:w-6 h-px bg-neutral-900 transition-all inline-block"></span>
                  <i className="ri-arrow-right-line text-xs"></i>
                </a>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
