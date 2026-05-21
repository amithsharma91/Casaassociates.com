import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const stats = [
  { value: '30%', label: 'Average Energy Savings' },
  { value: '40%', label: 'Water Conservation' },
  { value: '60%', label: 'Locally Sourced Materials' },
  { value: '100%', label: 'Projects with Green Planning' },
];

export default function SustainabilityIntro() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — Text */}
          <div ref={ref} className={`animate-on-scroll-left ${isVisible ? 'visible' : ''}`}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-neutral-400"></span>
              <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">Why It Matters</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 leading-[1.1] mb-7">
              Sustainability is Not a Feature —<br />
              <em className="not-italic font-semibold">It&apos;s Our Foundation</em>
            </h2>
            <p className="text-neutral-600 text-[15px] leading-[1.85] mb-6">
              At Casa Associates, we believe that every building we construct carries a long-term responsibility — to the families and businesses that inhabit it, to the communities around it in Hyderabad, and to the environment we all share.
            </p>
            <p className="text-neutral-500 text-[15px] leading-[1.85]">
              Our commitment to eco-friendly construction is woven into every phase of our process — from early site analysis and passive design strategies, through material specification and on-site execution, to post-occupancy energy monitoring. We don&apos;t retrofit sustainability; we design for it from day one.
            </p>
          </div>

          {/* Right — Stats */}
          <div className={`animate-on-scroll-right ${isVisible ? 'visible' : ''} grid grid-cols-2 gap-4`}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`stagger-${i + 1} bg-neutral-50 border border-neutral-200 rounded-2xl p-7 flex flex-col justify-between min-h-[140px]`}
              >
                <span className="font-serif text-neutral-900 text-4xl font-semibold">{s.value}</span>
                <span className="text-neutral-500 text-xs tracking-[0.12em] uppercase leading-tight mt-3">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
