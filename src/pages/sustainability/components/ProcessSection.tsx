import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Sustainable Planning',
    icon: 'ri-map-2-line',
    description: 'Every project begins with a site sustainability assessment — sun path analysis, wind studies, soil condition review, and water table evaluation. We identify passive design opportunities before a single line is drawn.',
    details: ['Site sun & wind analysis', 'Green rating target setting', 'Passive design opportunity mapping', 'Regulatory compliance check'],
  },
  {
    number: '02',
    title: 'Material Selection',
    icon: 'ri-stack-line',
    description: 'Our specification team evaluates materials on embodied carbon, durability, recyclability, and local availability. Every material in our standard library has been vetted for environmental performance.',
    details: ['Embodied carbon assessment', 'Local supplier sourcing', 'Lifecycle cost analysis', 'Low-VOC material catalogue'],
  },
  {
    number: '03',
    title: 'Green Execution',
    icon: 'ri-tools-line',
    description: 'On-site, our construction supervisors enforce waste segregation, dust and noise control protocols, and material efficiency targets. We track resource consumption weekly against projected benchmarks.',
    details: ['Zero-waste site protocols', 'Water re-use during construction', 'Weekly resource tracking', 'Certified green contractor teams'],
  },
  {
    number: '04',
    title: 'Post-Completion Monitoring',
    icon: 'ri-bar-chart-box-line',
    description: 'After handover, we support clients with energy and water consumption baselines, smart metering setup, and follow-up assessments to ensure the building performs as designed over time.',
    details: ['Smart meter commissioning', 'Energy performance benchmarking', 'Post-occupancy walkthrough', '12-month performance review'],
  },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} mb-16`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-neutral-400"></span>
            <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">How We Do It</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
              Our Sustainability Process
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              From initial site study to post-occupancy monitoring — sustainability built into every stage.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${i + 1} relative bg-white border border-neutral-200 rounded-2xl p-7 flex flex-col group hover:border-neutral-300 transition-all`}
            >
              {/* Step number */}
              <div className="font-serif text-neutral-200 text-5xl font-semibold leading-none mb-4 group-hover:text-neutral-300 transition-all select-none">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-xl mb-5 group-hover:bg-neutral-900 transition-all duration-300">
                <i className={`${step.icon} text-neutral-600 group-hover:text-white text-base transition-all`}></i>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-medium text-neutral-900 mb-3">{step.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">{step.description}</p>

              {/* Detail list */}
              <div className="mt-auto space-y-2">
                {step.details.map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
                      <i className="ri-arrow-right-line text-neutral-400 text-[10px]"></i>
                    </div>
                    <span className="text-neutral-600 text-xs">{d}</span>
                  </div>
                ))}
              </div>

              {/* Connector line — desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[4.5rem] -right-3 z-10 w-6 h-px bg-neutral-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
