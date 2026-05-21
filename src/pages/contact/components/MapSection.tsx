import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

export default function MapSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-neutral-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} mb-10`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-neutral-700"></span>
            <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">Find Us</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">
              Our Office
            </h2>
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                <i className="ri-map-pin-line text-xs"></i>
              </div>
              <span>Bhooma Plaza, Banjara Hills, Hyderabad – 500034</span>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-1 relative rounded-2xl overflow-hidden h-[360px] md:h-[480px] border border-neutral-800`}>
          <iframe
            title="Casa Associates Office Location — Banjara Hills, Hyderabad"
            src="https://maps.google.com/maps?q=CCCX%2B85+Hyderabad%2C+Telangana&output=embed&z=18"
            className="w-full h-full border-0"
            style={{ filter: 'invert(1) hue-rotate(180deg) saturate(0.15) brightness(0.85) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* Overlay address card */}
          <div className="absolute bottom-5 left-5 bg-neutral-900 border border-neutral-700 rounded-xl p-4 max-w-[280px]">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg flex-shrink-0">
                <i className="ri-map-pin-2-line text-neutral-900 text-sm"></i>
              </div>
              <div>
                <div className="font-serif text-white text-sm font-medium mb-0.5">Casa Associates</div>
                <div className="text-neutral-400 text-xs leading-relaxed">4th Floor, Bhooma Plaza<br />Road No. 01, Avenue 07, Street 04<br />Near GVK One Mall, Banjara Hills<br />Hyderabad, Telangana 500034</div>
                <a
                  href="https://maps.app.goo.gl/BqQaz6RcqhS91KzZ6"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-300 text-[10px] tracking-wide uppercase mt-2 hover:text-white transition-colors cursor-pointer"
                >
                  Open in Maps <i className="ri-external-link-line text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Get Directions Button */}
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-2 mt-5 flex justify-center`}>
          <a
            href="https://maps.app.goo.gl/BqQaz6RcqhS91KzZ6"
            target="_blank"
            rel="nofollow noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white text-white text-xs font-medium tracking-[0.14em] uppercase rounded-sm hover:bg-white hover:text-neutral-900 transition-all cursor-pointer whitespace-nowrap"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-navigation-line text-sm"></i>
            </div>
            Get Directions on Google Maps
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-external-link-line text-sm"></i>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
