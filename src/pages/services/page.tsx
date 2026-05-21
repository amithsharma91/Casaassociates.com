import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCanonical } from '../../hooks/useCanonical';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const services = [
  {
    icon: 'ri-building-line',
    title: 'Architects & Engineers',
    description: 'Architectural drawings, structural engineering, 3D elevations, and Vaastu-aligned planning for every project type.',
    tag: 'Design & Engineering',
    path: '/services/architects-engineers',
    isExternal: false,
    highlight: false,
  },
  {
    icon: 'ri-building-2-line',
    title: 'Builders & Developers',
    description: 'Complete construction support under rate contract — residential, commercial, and industrial projects built to perfection.',
    tag: 'Construction',
    path: '/services/builders-developers',
    isExternal: false,
    highlight: false,
  },
  {
    icon: 'ri-government-line',
    title: 'Liaisoning Works',
    description: 'Seamless building approval and coordination with GHMC, HMDA, municipal bodies, and government departments — handled end-to-end.',
    tag: 'Approvals',
    path: 'https://buildingapprovalservices.com',
    isExternal: true,
    highlight: true,
  },
  {
    icon: 'ri-palette-line',
    title: 'Interior Designing & Execution',
    description: 'Turnkey interior solutions — concept development, modular furniture, false ceilings, wall treatments, and more.',
    tag: 'Interiors',
    path: '/services/interior-designing',
    isExternal: false,
    highlight: false,
  },
];

export default function ServicesPage() {
  useCanonical('/services', {
    description:
      'Complete construction and architecture services in Hyderabad — architectural design, structural engineering, building approvals, interior design, and liaisoning. One-stop solution.',
  });

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Construction & Architecture Services Hyderabad | Casa Associates',
      description: 'Complete construction and architecture services in Hyderabad — architectural design, structural engineering, building approvals, interior design, and liaisoning. One-stop solution.',
      url: `${siteUrl}/services`,
      inLanguage: 'en-IN',
      isPartOf: { '@type': 'WebSite', url: siteUrl, name: 'Casa Associates' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
        ],
      },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Architects & Engineers', url: `${siteUrl}/services/architects-engineers` },
          { '@type': 'ListItem', position: 2, name: 'Builders & Developers', url: `${siteUrl}/services/builders-developers` },
          { '@type': 'ListItem', position: 3, name: 'Liaisoning Works', url: 'https://buildingapprovalservices.com' },
          { '@type': 'ListItem', position: 4, name: 'Interior Designing & Execution', url: `${siteUrl}/services/interior-designing` },
        ],
      },
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'services-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Construction & Architecture Services Hyderabad | Casa Associates';
    return () => {
      const el = document.getElementById('services-schema');
      if (el) el.remove();
    };
  }, []);

  const { ref, isVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        {/* Hero — cinematic */}
        <section className="relative bg-neutral-950 overflow-hidden" style={{ minHeight: '540px' }}>
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=breathtaking%20panoramic%20Indian%20construction%20architecture%20services%20overview%20premium%20building%20studio%20team%20architectural%20blueprints%20modern%20office%20aerial%20view%20dramatic%20cinematic%20dusk%20lighting%20premium%20quality%20editorial&width=1920&height=800&seq=serviceshero2&orientation=landscape"
              alt="Our services"
              className="w-full h-full object-cover object-center scale-[1.03]"
              style={{ minHeight: '540px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-32 md:py-44">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-white/35"></span>
              <span className="text-white/50 text-xs tracking-[0.24em] uppercase">What We Offer</span>
            </div>
            <h1
              className="font-serif font-light text-white leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)' }}
            >
              Complete Solutions<br />
              <em className="not-italic font-semibold">Under One Roof</em>
            </h1>
            <p className="text-white/58 text-base md:text-lg max-w-xl leading-relaxed">
              From the first architectural drawing to the final interior touch — and every approval in between.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {['Architecture & Structural', 'Construction & Contracting', 'Liaisoning & NOC', 'Interior Design', 'Building Approvals'].map((pill) => (
                <span
                  key={pill}
                  className="bg-white/10 border border-white/15 text-white/70 text-xs tracking-[0.1em] px-4 py-2 rounded-full"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div ref={ref} className="space-y-4">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${i + 1}`}
                >
                  {service.isExternal ? (
                    <a href={service.path} target="_blank" rel="noopener noreferrer" className="block">
                      <ServiceCard service={service} isExternal highlight={service.highlight} />
                    </a>
                  ) : (
                    <Link to={service.path}>
                      <ServiceCard service={service} highlight={service.highlight} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div ref={processRef} className={`animate-on-scroll ${processVisible ? 'visible' : ''} mb-14`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-neutral-400"></span>
                <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">How We Work</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900">Our Proven Process</h2>
              <p className="text-neutral-500 text-sm mt-2">Every project follows our 5-step framework for seamless delivery.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: '01', label: 'Consultation', icon: 'ri-discuss-line', desc: 'Free site visit & project discussion' },
                { step: '02', label: 'Design & Planning', icon: 'ri-pencil-ruler-line', desc: 'Concepts, drawings & approvals' },
                { step: '03', label: 'Permissions', icon: 'ri-file-check-line', desc: 'Municipal approvals & NOCs' },
                { step: '04', label: 'Execution', icon: 'ri-tools-line', desc: 'Quality-monitored construction' },
                { step: '05', label: 'Handover', icon: 'ri-key-2-line', desc: 'Final inspection & completion' },
              ].map((step, i) => (
                <div
                  key={step.step}
                  className={`animate-on-scroll ${processVisible ? 'visible' : ''} stagger-${i + 1} group bg-white rounded-2xl p-7 border border-neutral-200 hover:border-neutral-300 hover:-translate-y-1 transition-all text-center`}
                >
                  <div className="font-serif text-neutral-200 text-4xl font-semibold mb-4 leading-none select-none group-hover:text-neutral-300 transition-colors">{step.step}</div>
                  <div className="w-11 h-11 flex items-center justify-center bg-neutral-100 group-hover:bg-neutral-900 rounded-xl mx-auto mb-4 transition-all">
                    <i className={`${step.icon} text-neutral-600 group-hover:text-white text-base transition-all`}></i>
                  </div>
                  <div className="font-medium text-neutral-900 text-sm mb-1.5">{step.label}</div>
                  <div className="text-neutral-400 text-xs leading-relaxed">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-3xl font-light text-white">Not Sure Which Service You Need?</h3>
              <p className="text-neutral-400 text-sm mt-1.5">Our team will guide you to the right solution for your project.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919000975046"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-neutral-900 text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-neutral-100 hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-sm"></i>
                </div>
                Free Consultation
              </a>
              <a
                href="https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20service%20with%20Casa%20Associates."
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-[#25D366]/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-sm"></i>
                </div>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

interface ServiceCardProps {
  service: {
    icon: string;
    title: string;
    description: string;
    tag: string;
    path: string;
    isExternal: boolean;
    highlight: boolean;
  };
  isExternal?: boolean;
  highlight?: boolean;
}

function ServiceCard({ service, isExternal, highlight }: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-7 lg:p-8 rounded-2xl border transition-all duration-300 group cursor-pointer hover:-translate-y-0.5 relative overflow-hidden gap-4 sm:gap-0 ${
        highlight
          ? 'bg-neutral-950 border-amber-500/40 hover:border-amber-500/70'
          : 'bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
      }`}
    >
      <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
        {/* Icon */}
        <div
          className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl flex-shrink-0 transition-all duration-300 ${
            highlight
              ? 'bg-amber-500/15 group-hover:bg-amber-500/25'
              : 'bg-neutral-100 group-hover:bg-neutral-900'
          }`}
        >
          <i className={`${service.icon} text-lg md:text-xl transition-all ${highlight ? 'text-amber-400' : 'text-neutral-600 group-hover:text-white'}`}></i>
        </div>

        <div className="flex-1 min-w-0">
          {/* Tag + badge row */}
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <div className={`text-[10px] tracking-[0.18em] uppercase ${highlight ? 'text-amber-500/70' : 'text-neutral-400'}`}>
              {service.tag}
            </div>
            {highlight && (
              <span className="flex items-center gap-1 bg-amber-500/15 border border-amber-500/40 text-amber-400 text-[9px] font-medium tracking-[0.14em] uppercase px-2 py-0.5 rounded-full whitespace-nowrap">
                <i className="ri-external-link-line text-[9px]"></i>
                Dedicated Portal
              </span>
            )}
          </div>
          <h3 className={`font-serif text-lg md:text-xl font-semibold mb-1 md:mb-1.5 tracking-[-0.01em] transition-all ${highlight ? 'text-white' : 'text-neutral-900'}`}>
            {service.title}
          </h3>
          <p className={`text-sm leading-relaxed max-w-2xl transition-all ${highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>
            {service.description}
          </p>
        </div>
      </div>

      {/* Arrow */}
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full border flex-shrink-0 sm:ml-4 self-end sm:self-auto transition-all ${
          highlight
            ? 'border-amber-500/40 text-amber-400 group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-white'
            : isExternal
            ? 'border-white/25 text-white/60 group-hover:bg-white group-hover:text-neutral-900 group-hover:border-white'
            : 'border-neutral-200 text-neutral-400 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white'
        }`}
      >
        <i className={`${isExternal || highlight ? 'ri-external-link-line' : 'ri-arrow-right-line'} text-sm`}></i>
      </div>
    </div>
  );
}
