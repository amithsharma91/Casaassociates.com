import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useCanonical } from '../../../hooks/useCanonical';

export interface ServicePageData {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  heroImage: string;
  benefits: { icon: string; title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  benefitsBg?: string;
  isExternal?: boolean;
  externalUrl?: string;
  externalLabel?: string;
}

interface Props {
  data: ServicePageData;
  midBanner?: React.ReactNode;
}

const WA_LINK =
  'https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AProject%20Location%3A%20%0AService%20Required%3A%20%0ABudget%20(Optional)%3A%20%0AMessage%3A%20';

export default function ServicePageTemplate({ data, midBanner }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── Canonical, robots, description, OG URL — handled by shared hook ──
  useCanonical(`/services/${data.slug}`, {
    description: `${data.heroSubtitle} — Casa Associates, Hyderabad. Expert ${data.heroTitle} services in Telangana. 15+ years, 120+ projects. Call +91 90009 75046.`.slice(0, 160),
    ogImage: data.heroImage,
  });

  useEffect(() => {
    const siteUrl = 'https://casaassociates.com';
    const pageUrl = `${siteUrl}/services/${data.slug}`;

    // OG title (not handled by useCanonical)
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (!ogTitle) { ogTitle = document.createElement('meta'); ogTitle.setAttribute('property', 'og:title'); document.head.appendChild(ogTitle); }
    ogTitle.content = `${data.heroTitle} Hyderabad | Casa Associates`;

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.heroTitle,
      description: data.heroSubtitle,
      url: pageUrl,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Casa Associates',
        url: siteUrl,
        telephone: '+91-90009-75046',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Banjara Hills, Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500034',
          addressCountry: 'IN',
        },
      },
      areaServed: { '@type': 'State', name: 'Telangana' },
    };

    const faqSchema = data.faqs.length > 0 ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    } : null;

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
        { '@type': 'ListItem', position: 3, name: data.heroTitle, item: pageUrl },
      ],
    };

    const scriptId = `service-schema-${data.slug}`;
    const faqScriptId = `service-faq-schema-${data.slug}`;
    const breadcrumbScriptId = `service-breadcrumb-schema-${data.slug}`;

    const addScript = (id: string, content: object) => {
      if (document.getElementById(id)) return;
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = id;
      s.textContent = JSON.stringify(content);
      document.head.appendChild(s);
    };

    addScript(scriptId, serviceSchema);
    if (faqSchema) addScript(faqScriptId, faqSchema);
    addScript(breadcrumbScriptId, breadcrumbSchema);

    document.title = `${data.heroTitle} Hyderabad | Casa Associates — Construction & Architecture`;

    return () => {
      [scriptId, faqScriptId, breadcrumbScriptId].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, [data.slug, data.heroTitle, data.heroSubtitle, data.faqs]);

  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        {/* Hero — cinematic, full-bleed */}
        <section className="relative bg-neutral-950 overflow-hidden" style={{ minHeight: '540px' }}>
          <div className="absolute inset-0">
            <img
              src={data.heroImage}
              alt={data.heroTitle}
              className="w-full h-full object-cover object-center scale-[1.03]"
              style={{ minHeight: '540px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/55"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-32 md:py-40">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2.5 mb-8">
              <Link
                to="/services"
                className="text-white/45 text-xs tracking-[0.2em] uppercase hover:text-white/80 transition-colors cursor-pointer whitespace-nowrap"
              >
                Services
              </Link>
              <i className="ri-arrow-right-s-line text-white/25 text-xs"></i>
              <span className="text-white/60 text-xs tracking-[0.2em] uppercase">{data.heroTitle}</span>
            </div>

            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-white/35"></span>
              <span className="text-white/80 text-xs tracking-[0.24em] uppercase">Our Service</span>
            </div>

            {/* Main headline */}
            <h1
              className="font-serif font-light text-white leading-[1.02] tracking-[-0.02em] mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)' }}
            >
              {data.heroTitle}
            </h1>

            <p className="text-white/85 text-base md:text-lg mt-1 max-w-xl leading-relaxed">
              {data.heroSubtitle}
            </p>

            {/* Action strip */}
            <div className="flex flex-wrap gap-3 mt-10">
              {data.isExternal ? (
                <a
                  href={data.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-neutral-900 text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-neutral-100 hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap"
                >
                  {data.externalLabel ?? 'Visit Partner Website'}
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-external-link-line text-sm"></i>
                  </div>
                </a>
              ) : (
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#25D366] text-white text-sm font-semibold tracking-[0.1em] uppercase rounded-full hover:bg-[#1ebe5d] hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-whatsapp-fill text-sm"></i>
                  </div>
                  Enquire on WhatsApp
                </a>
              )}
              <a
                href="tel:+919000975046"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/30 text-white text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-sm"></i>
                </div>
                Call Now
              </a>
              <a
                href="tel:04049535040"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/30 text-white text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-sm"></i>
                </div>
                Landline: 040 4953 5046
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-px bg-white/8"></div>
        </section>

        {/* Trust Strip */}
        <section className="bg-neutral-900 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-between py-5 gap-4">
              {[
                { icon: 'ri-timer-flash-line', text: 'Response within 30 Minutes on WhatsApp' },
                { icon: 'ri-shield-check-line', text: 'ISO-Aligned Quality Standards' },
                { icon: 'ri-map-2-line', text: 'Serving Hyderabad & All of Telangana' },
                { icon: 'ri-award-line', text: '120+ Projects Completed' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 flex items-center justify-center">
                    <i className={`${item.icon} text-white/50 text-sm`}></i>
                  </div>
                  <span className="text-white/55 text-xs tracking-[0.1em]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div ref={introRef} className={`animate-on-scroll ${introVisible ? 'visible' : ''} max-w-3xl`}>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-neutral-400"></span>
                <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">Overview</span>
              </div>
              <p className="text-neutral-700 text-lg leading-[1.9] font-light">{data.intro}</p>
            </div>
          </div>
        </section>

        {/* Mid Banner Slot */}
        {midBanner && midBanner}

        {/* Benefits */}
        <section className={`py-12 md:py-16 relative overflow-hidden ${!data.benefitsBg ? 'bg-neutral-50' : ''}`}>
          {data.benefitsBg && (
            <>
              <div className="absolute inset-0">
                <img
                  src={data.benefitsBg}
                  alt="Key Benefits Background"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-neutral-900/60"></div>
              </div>
            </>
          )}
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
            <div ref={benefitsRef} className={`animate-on-scroll ${benefitsVisible ? 'visible' : ''} mb-14`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-8 h-px ${data.benefitsBg ? 'bg-white/40' : 'bg-neutral-400'}`}></span>
                <span className={`text-xs tracking-[0.22em] uppercase ${data.benefitsBg ? 'text-white/90' : 'text-neutral-500'}`}>What You Get</span>
              </div>
              <h2 className={`font-serif text-4xl md:text-5xl font-light ${data.benefitsBg ? 'text-white' : 'text-neutral-900'}`}>Key Benefits</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.benefits.map((b, i) => (
                <div
                  key={b.title}
                  className={`animate-on-scroll ${benefitsVisible ? 'visible' : ''} stagger-${Math.min(i + 1, 6)} group rounded-2xl p-8 border transition-all duration-300 ${
                    data.benefitsBg
                      ? 'bg-neutral-900/70 border-white/20 hover:bg-neutral-900/80 hover:border-white/30 hover:-translate-y-1'
                      : 'bg-white border-neutral-200 hover:border-neutral-300 hover:-translate-y-1'
                  }`}
                >
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 ${
                    data.benefitsBg
                      ? 'bg-white/20 group-hover:bg-white/30'
                      : 'bg-neutral-100 group-hover:bg-neutral-900'
                  }`}>
                    <i className={`${b.icon} text-xl transition-all ${
                      data.benefitsBg
                        ? 'text-white group-hover:text-white'
                        : 'text-neutral-600 group-hover:text-white'
                    }`}></i>
                  </div>
                  <h3 className={`font-serif text-lg font-semibold mb-2.5 tracking-[-0.01em] ${data.benefitsBg ? 'text-white' : 'text-neutral-900'}`}>{b.title}</h3>
                  <p className={`text-sm leading-relaxed ${data.benefitsBg ? 'text-white/80' : 'text-neutral-500'}`}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div ref={processRef} className={`animate-on-scroll ${processVisible ? 'visible' : ''} mb-14`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-neutral-400"></span>
                <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">How We Work</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900">Our Process</h2>
              <p className="text-neutral-500 text-sm mt-2">Step-by-step, from first contact to final delivery</p>
            </div>
            <div className="space-y-4">
              {data.process.map((step, i) => (
                <div
                  key={step.step}
                  className={`animate-on-scroll ${processVisible ? 'visible' : ''} stagger-${Math.min(i + 1, 6)} flex gap-6 p-7 md:p-8 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 transition-all group`}
                >
                  <div className="font-serif text-4xl font-semibold flex-shrink-0 w-12 select-none" style={{ color: '#e8e8e8' }}>
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-1.5 tracking-[-0.01em]">{step.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 md:py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div ref={faqRef} className={`animate-on-scroll ${faqVisible ? 'visible' : ''} mb-14`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-neutral-400"></span>
                <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">FAQ</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl space-y-3">
              {data.faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`animate-on-scroll ${faqVisible ? 'visible' : ''} stagger-${Math.min(i + 1, 6)} bg-white rounded-2xl border border-neutral-200 overflow-hidden`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-neutral-50 transition-colors"
                  >
                    <span className="font-medium text-neutral-900 text-[15px] pr-4">{faq.q}</span>
                    <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 border border-neutral-200 rounded-full">
                      <i className={`text-neutral-500 text-xs transition-transform duration-300 ${openFaq === i ? 'ri-subtract-line' : 'ri-add-line'}`}></i>
                    </div>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <div className="h-px bg-neutral-100 mb-5"></div>
                      <p className="text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp CTA Section */}
        <section id="enquire" className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20premium%20architecture%20construction%20office%20interior%20India%20dramatic%20lighting%20dark%20concrete%20marble%20minimalist%20luxury%20professional%20ambiance%20editorial%20cinematic&width=1920&height=800&seq=svcctabg1&orientation=landscape"
              alt="Contact us"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/70"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
            <div ref={ctaRef} className={`animate-on-scroll ${ctaVisible ? 'visible' : ''} flex flex-col items-start`}>

              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-white/40"></span>
                <span className="text-white/80 text-xs tracking-[0.22em] uppercase">Let&apos;s Begin</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-[1.1] mb-4">
                Ready to Get<br />
                <em className="not-italic font-semibold">Started?</em>
              </h2>

              <p className="text-white/80 text-[15px] leading-relaxed mb-8 max-w-md">
                Get a quick response on WhatsApp within minutes. Share your {data.heroTitle} requirements and our team will get back to you right away.
              </p>

              {/* Response badge */}
              <div className="flex items-center gap-2.5 mb-8 px-4 py-2.5 bg-green-500/15 border border-green-500/30 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></span>
                <span className="text-green-300 text-sm font-medium">Typically replies within 30 minutes</span>
              </div>

              {/* Primary WhatsApp button */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#25D366] text-white text-sm font-semibold tracking-[0.12em] uppercase rounded-full hover:bg-[#1ebe5d] hover:scale-[1.03] transition-all cursor-pointer whitespace-nowrap shadow-xl shadow-green-900/40 group mb-4 md:mb-5"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-whatsapp-fill text-lg"></i>
                </div>
                Get Instant Quote on WhatsApp
                <div className="w-4 h-4 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <i className="ri-arrow-right-line text-sm"></i>
                </div>
              </a>

              {/* Secondary actions */}
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
                <a
                  href="tel:+919000975046"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/25 text-white/75 text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:border-white/50 hover:text-white transition-all cursor-pointer whitespace-nowrap"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-phone-line text-sm"></i>
                  </div>
                  Call +91 90009 75046
                </a>
                <a
                  href="tel:04049535040"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/60 text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:border-white/45 hover:text-white/80 transition-all cursor-pointer whitespace-nowrap"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-phone-line text-sm"></i>
                  </div>
                  Landline: 040 4953 5046
                </a>
                {data.isExternal && (
                  <a
                    href={data.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/25 text-white/75 text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:border-white/50 hover:text-white transition-all cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-external-link-line text-sm"></i>
                    </div>
                    {data.externalLabel ?? 'Visit Partner'}
                  </a>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
