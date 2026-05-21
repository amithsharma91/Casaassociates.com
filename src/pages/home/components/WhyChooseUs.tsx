import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const trustPoints = [
  {
    icon: 'ri-history-line',
    title: '15+ Years Experience',
    description: 'Over 15 years of delivering exceptional construction and design solutions in Hyderabad and beyond — building trust one project at a time.',
  },
  {
    icon: 'ri-layout-grid-line',
    title: '120+ Projects Completed',
    description: 'From premium residences to commercial spaces, we have successfully delivered over 120 projects with quality and precision.',
  },
  {
    icon: 'ri-stack-line',
    title: 'End-to-End Solutions',
    description: 'Architecture, construction, interiors, and liaisoning — all under one roof. No fragmented coordination, no stress.',
  },
  {
    icon: 'ri-group-2-line',
    title: 'Trusted by 200+ Clients',
    description: 'Over 200 happy clients who trust us with their most important investments — homes, offices, and commercial properties.',
  },
  {
    icon: 'ri-map-2-line',
    title: 'Local Expertise in Hyderabad',
    description: 'Deep knowledge of Hyderabad\'s regulations, terrain, municipal workflows, and local aesthetics gives our clients a real advantage.',
  },
  {
    icon: 'ri-eye-line',
    title: 'Transparent Process',
    description: 'Honest timelines, clear pricing, and regular updates — we keep you informed at every stage of your project.',
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} mb-16`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-neutral-400"></span>
                <span className="text-neutral-500 text-xs tracking-[0.24em] uppercase">Why Us</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-[-0.01em]">
                Why Choose<br />
                <strong className="font-semibold">Casa Associates</strong>
              </h2>
            </div>
            <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
              Six strong reasons our clients keep coming back and recommending us to family and friends in Hyderabad.
            </p>
          </div>
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustPoints.map((point, i) => (
            <div
              key={point.title}
              className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${i + 1} group p-9 rounded-2xl border border-neutral-200 hover:bg-neutral-900 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-neutral-100 rounded-xl mb-6 group-hover:bg-white/10 transition-all">
                <i className={`${point.icon} text-2xl text-neutral-600 group-hover:text-white transition-all`}></i>
              </div>
              <h3 className="font-serif text-xl font-semibold text-neutral-900 group-hover:text-white mb-3 transition-all tracking-[-0.01em]">{point.title}</h3>
              <p className="text-neutral-500 text-sm leading-[1.8] group-hover:text-neutral-400 transition-all">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
