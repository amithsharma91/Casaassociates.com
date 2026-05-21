import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-14 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 items-center">

          {/* Text Column */}
          <div
            ref={textRef}
            className={`animate-on-scroll-left ${textVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <span className="w-8 h-px bg-neutral-400"></span>
              <span className="text-neutral-500 text-xs tracking-[0.24em] uppercase">Our Story</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-light text-neutral-900 leading-[1.08] tracking-[-0.01em] mb-7 md:mb-9">
              Built on Trust,<br />
              <strong className="font-semibold">Delivered</strong> with<br />
              Precision
            </h2>

            <p className="text-neutral-600 leading-[1.9] mb-4 md:mb-5 text-sm md:text-[15px]">
              Casa Associates is a Hyderabad-based construction, architectural, and interior solutions company with over 15 years of experience. We specialize in delivering end-to-end solutions — from planning and approvals to design and execution.
            </p>
            <p className="text-neutral-600 leading-[1.9] mb-4 md:mb-5 text-sm md:text-[15px]">
              Our mission is to transform ideas into functional, beautiful, and long-lasting spaces. As a <strong>one-stop, turnkey service provider</strong>, we eliminate the complexity of managing multiple contractors.
            </p>
            <p className="text-neutral-600 leading-[1.9] mb-8 md:mb-10 text-sm md:text-[15px]">
              Over <strong>120+ projects completed</strong> and trusted by <strong>200+ happy clients</strong> — we remain Hyderabad&apos;s preferred construction and architecture partner.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 md:gap-10 mb-8 md:mb-11 py-7 md:py-9 border-t border-b border-neutral-100">
              {[
                { value: '120+', label: 'Projects Completed' },
                { value: '15+', label: 'Years of Excellence' },
                { value: '200+', label: 'Happy Clients' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-[-0.02em]">{stat.value}</div>
                  <div className="text-neutral-500 text-[10px] tracking-[0.18em] uppercase mt-1 md:mt-1.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="btn-primary inline-flex items-center gap-3 px-7 md:px-8 py-3.5 md:py-4 border border-neutral-900 text-neutral-900 text-xs md:text-sm font-medium tracking-[0.12em] uppercase rounded-full hover:bg-neutral-900 hover:text-white transition-all cursor-pointer whitespace-nowrap"
            >
              Learn Our Story
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line text-sm"></i>
              </div>
            </Link>
          </div>

          {/* Image Column */}
          <div
            ref={imgRef}
            className={`animate-on-scroll-right ${imgVisible ? 'visible' : ''} relative mt-8 lg:mt-0`}
          >
            <div className="img-zoom relative rounded-2xl overflow-hidden h-[380px] sm:h-[460px] lg:h-[600px] w-full">
              <img
                src="https://readdy.ai/api/search-image?query=Indian%20architects%20engineers%20working%20together%20modern%20architecture%20studio%20office%20interior%20minimal%20white%20walls%20drawing%20table%20blueprints%20professional%20team%20design%20process%20premium%20workspace%20Hyderabad&width=800&height=900&seq=about1v2&orientation=portrait"
                alt="Casa Associates team working on architectural designs in Hyderabad"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
            {/* Floating Badge — bottom left */}
            <div className="absolute -bottom-4 left-4 md:left-8 bg-white rounded-xl p-4 md:p-5 border border-neutral-100 max-w-[220px] md:max-w-none" style={{ boxShadow: '0 8px 32px -4px rgba(0,0,0,0.12)' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center bg-neutral-900 rounded-full flex-shrink-0">
                  <i className="ri-map-pin-2-line text-white text-sm md:text-base"></i>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 text-xs md:text-sm tracking-tight">Based in Hyderabad</div>
                  <div className="text-neutral-500 text-[10px] md:text-xs mt-0.5">Banjara Hills · All of Hyderabad</div>
                </div>
              </div>
            </div>
            {/* Second badge — top right */}
            <div className="absolute top-5 right-3 md:right-4 bg-neutral-900 rounded-xl px-3 md:px-4 py-2.5 md:py-3" style={{ boxShadow: '0 8px 32px -4px rgba(0,0,0,0.3)' }}>
              <div className="text-white font-serif text-lg md:text-xl font-semibold leading-none">15+</div>
              <div className="text-neutral-400 text-[9px] md:text-[10px] tracking-[0.15em] uppercase mt-1">Years</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
