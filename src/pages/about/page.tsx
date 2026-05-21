import { useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCanonical } from '../../hooks/useCanonical';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

const values = [
  { icon: 'ri-heart-line', title: 'Client-First Approach', desc: 'Every decision we make is guided by what is best for your project and your vision.' },
  { icon: 'ri-shield-check-line', title: 'Integrity & Transparency', desc: 'Honest timelines, transparent pricing, and clear communication — no surprises.' },
  { icon: 'ri-lightbulb-line', title: 'Innovation in Design', desc: 'Blending timeless aesthetics with contemporary functionality for spaces that endure.' },
  { icon: 'ri-leaf-line', title: 'Sustainability First', desc: 'Green building principles woven into the fabric of everything we design and build.' },
];

const team = [
  {
    name: 'Shiv Patalay',
    role: 'Founder & Principal',
    exp: '15+ Years',
    note: 'Led by industry experience and a passion for quality construction and design.',
    img: 'https://readdy.ai/api/search-image?query=Indian%20male%20architect%20founder%20professional%20confident%20corporate%20portrait%20modern%20architecture%20studio%20interior%20neutral%20light%20background%20dark%20formal%20suit%20premium%20headshot%20editorial%20warm%20tones%20leadership&width=400&height=500&seq=team1shiv&orientation=portrait',
  },
  {
    name: 'Priya Reddy',
    role: 'Lead Interior Designer',
    exp: '12 Years',
    note: 'NIFT Graduate, specializing in luxury residential interiors across Hyderabad.',
    img: 'https://readdy.ai/api/search-image?query=Indian%20female%20interior%20designer%20professional%20warm%20portrait%20corporate%20modern%20design%20studio%20office%20background%20elegant%20minimal%20neutral%20tones%20premium%20editorial%20headshot%20Hyderabad&width=400&height=500&seq=team2priya&orientation=portrait',
  },
  {
    name: 'Ravi Chandra',
    role: 'Head — Liaisoning',
    exp: '14 Years',
    note: 'Expert in GHMC and HMDA approvals, documentation, and regulatory compliance.',
    img: 'https://readdy.ai/api/search-image?query=Indian%20male%20professional%20liaison%20government%20specialist%20confident%20portrait%20modern%20office%20neutral%20background%20formal%20suit%20subtle%20background%20corporate%20editorial%20premium%20Hyderabad&width=400&height=500&seq=team3ravi&orientation=portrait',
  },
  {
    name: 'Anjali Sharma',
    role: 'Structural Engineer',
    exp: '10 Years',
    note: 'M.Tech Structures, expert in residential and commercial structural design.',
    img: 'https://readdy.ai/api/search-image?query=Indian%20female%20structural%20engineer%20professional%20portrait%20modern%20corporate%20office%20background%20white%20minimal%20confident%20formal%20attire%20editorial%20premium%20headshot%20warm%20tones%20Hyderabad&width=400&height=500&seq=team4anjali&orientation=portrait',
  },
];

export default function AboutPage() {
  useCanonical('/about', {
    description:
      'About Casa Associates — founded in 2010 in Banjara Hills, Hyderabad. 15+ years of architecture, construction, interior design, and liaisoning expertise. 120+ projects, 200+ happy clients.',
  });

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();


  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'About Casa Associates — Hyderabad Architecture & Construction Firm',
      description: 'Learn about Casa Associates — founded in 2010 in Banjara Hills, Hyderabad. 15+ years of architecture, construction, interior design, and liaisoning expertise. 120+ projects, 200+ happy clients.',
      url: `${siteUrl}/about`,
      inLanguage: 'en-IN',
      isPartOf: { '@type': 'WebSite', url: siteUrl, name: 'Casa Associates' },
      about: {
        '@type': 'Organization',
        name: 'Casa Associates',
        foundingDate: '2010',
        foundingLocation: 'Banjara Hills, Hyderabad, Telangana, India',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 20 },
        knowsAbout: ['Architecture', 'Construction', 'Interior Design', 'Liaisoning Works', 'Building Approvals'],
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'About', item: `${siteUrl}/about` },
        ],
      },
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'about-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'About Casa Associates | Architecture & Construction Firm Hyderabad Since 2010';
    return () => {
      const el = document.getElementById('about-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        {/* Page Hero — cinematic */}
        <section className="relative bg-neutral-950 overflow-hidden" style={{ minHeight: '540px' }}>
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=ultra%20premium%20luxury%20modern%20architecture%20Hyderabad%20India%20dramatic%20warm%20golden%20amber%20sunset%20sky%20grand%20imposing%20residential%20commercial%20tower%20glass%20concrete%20long%20shadows%20cinematic%20wide%20angle%20award-winning%20professional%20photography%20deep%20warm%20amber%20orange%20tones%20masterpiece%20editorial%20quality&width=1920&height=800&seq=abouthero5&orientation=landscape"
              alt="Casa Associates — About Us — Hyderabad"
              className="w-full h-full object-cover object-center scale-[1.03]"
              style={{ minHeight: '540px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          <div
            ref={heroRef}
            className={`animate-on-scroll ${heroVisible ? 'visible' : ''} relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-32 md:py-44`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-white/35"></span>
              <span className="text-white/50 text-xs tracking-[0.24em] uppercase">About Us · Casa Associates</span>
            </div>
            <h1
              className="font-serif font-light text-white leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)' }}
            >
              The People Behind<br />
              <em className="not-italic font-semibold">Every Great Space</em>
            </h1>
            <p className="text-white/55 text-base md:text-lg max-w-xl leading-relaxed">
              Hyderabad&apos;s trusted construction and architecture firm — building with precision and a passion for quality.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-white/10">
              {[
                { val: '2010', label: 'Founded' },
                { val: '120+', label: 'Projects' },
                { val: '200+', label: 'Clients' },
                { val: '15+', label: 'Years' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-[-0.02em]">{s.val}</div>
                  <div className="text-white/40 text-[10px] tracking-[0.18em] uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Image */}
              <div ref={storyRef} className={`animate-on-scroll-right ${storyVisible ? 'visible' : ''} relative`}>
                <div className="rounded-2xl overflow-hidden h-[520px] w-full">
                  <img
                    src="https://readdy.ai/api/search-image?query=Indian%20architects%20engineers%20design%20team%20meeting%20table%20blueprints%20architectural%20plans%20modern%20office%20interior%20white%20walls%20natural%20daylight%20professional%20premium%20collaboration%20creative%20studio%20Hyderabad&width=800&height=900&seq=aboutstory3&orientation=portrait"
                    alt="Casa Associates design team at work in Hyderabad"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Floating Founded badge */}
                <div className="absolute -bottom-5 right-6 bg-neutral-900 text-white rounded-xl px-6 py-4" style={{ boxShadow: '0 12px 40px -8px rgba(0,0,0,0.4)' }}>
                  <div className="font-serif text-3xl font-semibold leading-none">2010</div>
                  <div className="text-neutral-400 text-[10px] tracking-[0.18em] uppercase mt-1.5">Year Founded</div>
                </div>
              </div>

              {/* Text */}
              <div className={`animate-on-scroll-left ${storyVisible ? 'visible' : ''}`}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-neutral-400"></span>
                  <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">Our Story</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-8">
                  Born in Hyderabad,<br /><strong className="font-semibold">Built for Hyderabad</strong>
                </h2>
                <p className="text-neutral-600 leading-[1.9] text-[15px] mb-5">
                  Casa Associates was founded with a powerful idea — to give property owners and developers in Hyderabad one trusted partner for every aspect of the built environment. We began as a small architectural studio in Banjara Hills and grew steadily, adding structural engineering, interior design, and liaisoning capabilities.
                </p>
                <p className="text-neutral-600 leading-[1.9] text-[15px] mb-5">
                  Today, we operate across Hyderabad and Telangana with a dedicated team delivering projects ranging from premium private residences to large commercial complexes. Our <strong>turnkey, one-stop approach</strong> remains our core differentiator.
                </p>
                <p className="text-neutral-600 leading-[1.9] text-[15px] mb-11">
                  We are proud to be a locally rooted business that understands Hyderabad&apos;s construction regulations, GHMC and HMDA processes, regional aesthetics, and municipal workflows — giving our clients a distinct advantage in project execution.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-neutral-700 hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap"
                >
                  Explore Our Services
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-arrow-right-line text-sm"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 md:py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div ref={valuesRef} className={`animate-on-scroll ${valuesVisible ? 'visible' : ''} mb-14`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-neutral-400"></span>
                <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">What We Stand For</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`animate-on-scroll ${valuesVisible ? 'visible' : ''} stagger-${i + 1} bg-white rounded-2xl p-8 border border-neutral-200 hover:border-neutral-300 hover:-translate-y-1 hover:bg-neutral-900 transition-all duration-300 group cursor-default`}
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-neutral-100 group-hover:bg-white/10 rounded-xl mb-6 transition-all">
                    <i className={`${v.icon} text-xl text-neutral-600 group-hover:text-white transition-all`}></i>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-neutral-900 group-hover:text-white mb-3 transition-all">{v.title}</h3>
                  <p className="text-neutral-500 group-hover:text-neutral-400 text-sm leading-relaxed transition-all">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Strip */}
        <section className="py-10 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div>
                <div className="text-neutral-400 text-[10px] tracking-[0.2em] uppercase mb-1">Certified & Recognised</div>
                <h3 className="font-serif text-2xl font-light text-neutral-900">Quality You Can Trust</h3>
              </div>
              <div className="flex flex-wrap gap-5">
                {[
                  { icon: 'ri-award-line', label: 'ISO 9001:2015', note: 'Quality Certified' },
                  { icon: 'ri-leaf-line', label: 'IGBC Aligned', note: 'Green Building' },
                  { icon: 'ri-building-2-line', label: 'TSRERA Registered', note: 'Telangana' },
                  { icon: 'ri-group-2-line', label: 'Council of Architecture', note: 'Member Firm' },
                ].map((cert) => (
                  <div key={cert.label} className="flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-5 py-3.5">
                    <div className="w-8 h-8 flex items-center justify-center bg-neutral-900 rounded-lg flex-shrink-0">
                      <i className={`${cert.icon} text-white text-sm`}></i>
                    </div>
                    <div>
                      <div className="text-neutral-900 text-sm font-semibold">{cert.label}</div>
                      <div className="text-neutral-400 text-xs">{cert.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-12 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-3xl font-light text-white">Ready to Build Something Exceptional?</h3>
              <p className="text-neutral-400 text-sm mt-1">Let&apos;s discuss your project and bring your vision to life.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919000975046"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-neutral-900 text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-neutral-100 hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-sm"></i>
                </div>
                Call +91 90009 75046
              </a>
              <a
                href="tel:04049535040"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-sm"></i>
                </div>
                040 4953 5046
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
