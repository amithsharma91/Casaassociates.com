import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const reasons = [
  {
    icon: 'ri-flashlight-line',
    title: 'Fast Response',
    description: 'We respond to every enquiry within 24 business hours. For urgent queries, our team is available on call and WhatsApp during business hours.',
    stat: '&lt; 24hrs',
    statLabel: 'response time',
  },
  {
    icon: 'ri-user-star-line',
    title: 'Expert Consultation',
    description: 'Your first consultation is completely free. Our senior architects and engineers will review your requirements and provide professional guidance without any obligation.',
    stat: 'Free',
    statLabel: 'first consultation',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Transparent Pricing',
    description: 'No hidden charges, no vague quotes. We provide detailed cost breakdowns at every stage — from feasibility to final tender — so you always know exactly where your investment is going.',
    stat: '100%',
    statLabel: 'cost transparency',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'End-to-End Support',
    description: 'From the first call to final handover and post-occupancy follow-up, our dedicated project team remains your single point of contact throughout the entire journey.',
    stat: '120+',
    statLabel: 'projects supported',
  },
];

export default function WhyContactUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} text-center mb-16 max-w-2xl mx-auto`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-neutral-400"></span>
            <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">Why Reach Out</span>
            <span className="w-8 h-px bg-neutral-400"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-5">
            Why Contact Us?
          </h2>
          <p className="text-neutral-500 text-[15px] leading-relaxed">
            Every great project begins with a conversation. Here&apos;s what you can expect when you reach out to our team.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${i + 1} group flex flex-col p-8 rounded-2xl border border-neutral-200 hover:bg-neutral-900 transition-all duration-300 cursor-default`}
            >
              {/* Icon */}
              <div className="w-11 h-11 flex items-center justify-center bg-neutral-100 rounded-xl mb-5 group-hover:bg-white/10 transition-all">
                <i className={`${r.icon} text-lg text-neutral-600 group-hover:text-white transition-all`}></i>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-medium text-neutral-900 group-hover:text-white mb-3 transition-all">{r.title}</h3>

              {/* Description */}
              <p className="text-neutral-500 text-sm leading-relaxed mb-6 group-hover:text-neutral-400 transition-all flex-1">{r.description}</p>

              {/* Stat */}
              <div className="mt-auto inline-flex items-baseline gap-2 bg-neutral-100 group-hover:bg-white/10 rounded-full px-4 py-2 transition-all w-fit">
                <span
                  className="font-serif text-neutral-900 group-hover:text-white text-lg font-semibold transition-all"
                  dangerouslySetInnerHTML={{ __html: r.stat }}
                ></span>
                <span className="text-neutral-500 group-hover:text-neutral-400 text-xs tracking-wide transition-all">{r.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
