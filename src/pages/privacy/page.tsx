import { useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCanonical } from '../../hooks/useCanonical';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

interface Bullet {
  label: string;
  text: string;
}

interface PolicySectionData {
  id: string;
  title: string;
  icon: string;
  content: string[];
  bullets?: Bullet[];
  note?: string;
}

const sections: PolicySectionData[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    icon: 'ri-shield-line',
    content: [
      'CASA ASSOCIATES LLP ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website https://casaassociates.com or interact with us through phone calls, WhatsApp, contact forms, and other communication channels.',
      'We are a premium architecture, construction, and interior design company based in Hyderabad, Telangana, India. Our services include residential and commercial construction, architectural design, structural engineering, interior design, and liaisoning works for building approvals.',
      'By accessing or using our website and services, you agree to the practices described in this Privacy Policy. If you do not agree with this policy, please do not use our website or services.',
    ],
  },
  {
    id: 'information-collect',
    title: 'Information We Collect',
    icon: 'ri-folder-user-line',
    content: [
      'We collect information that you voluntarily provide to us when expressing interest in our services, filling out contact forms, requesting quotes, or communicating with us via phone, email, WhatsApp, or in person.',
    ],
    bullets: [
      { label: 'Personal Identification', text: 'Name, email address, phone number, WhatsApp number, and postal address.' },
      { label: 'Project Details', text: 'Property location, project type (residential/commercial), budget range, timeline, and design preferences.' },
      { label: 'Communication Data', text: 'Records of your inquiries, calls, messages, and any feedback you provide.' },
      { label: 'Technical Data', text: 'IP address, browser type, device information, and pages visited on our website.' },
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    icon: 'ri-settings-3-line',
    content: [
      'We use the information we collect for the following purposes:',
    ],
    bullets: [
      { label: 'Service Delivery', text: 'To understand your project requirements and provide tailored architecture, construction, and interior design solutions.' },
      { label: 'Communication', text: 'To respond to your inquiries, send project updates, schedule consultations, and share relevant service information.' },
      { label: 'Marketing', text: 'To share project portfolios, design inspirations, and company updates that may interest you (only with your consent).' },
      { label: 'Improvement', text: 'To analyse website usage, improve our services, and enhance user experience on our digital platforms.' },
      { label: 'Legal Compliance', text: 'To comply with applicable laws, regulations, and building approval requirements in Telangana.' },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies & Tracking Technologies',
    icon: 'ri-eye-line',
    content: [
      'Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyse site traffic, and understand user behaviour.',
      'Cookies are small text files stored on your device that help us recognise you when you return to our website. You can control cookie preferences through your browser settings.',
    ],
    bullets: [
      { label: 'Essential Cookies', text: 'Required for basic website functionality and navigation.' },
      { label: 'Analytics Cookies', text: 'Help us understand how visitors interact with our website and improve performance.' },
      { label: 'Marketing Cookies', text: 'Used to deliver relevant advertisements and measure campaign effectiveness.' },
    ],
  },
  {
    id: 'google-ads',
    title: 'Google Ads & Analytics Usage',
    icon: 'ri-bar-chart-grouped-line',
    content: [
      'We use Google services to understand our audience and improve our marketing efforts. These tools help us reach potential clients who may benefit from our architecture and construction services.',
    ],
    bullets: [
      { label: 'Google Analytics', text: 'Tracks website traffic, user behaviour, and page engagement to help us improve our online presence. Data is processed in aggregate and individual users are not personally identifiable.' },
      { label: 'Google Ads (AdWords)', text: 'We run targeted advertising campaigns to reach homeowners and developers in Hyderabad interested in construction and interior design services. Google may use cookies to personalise ads based on your browsing history.' },
      { label: 'Google Tag Manager', text: 'Manages tracking and analytics tags on our website efficiently without modifying the site code directly.' },
      { label: 'Google Search Console', text: 'Monitors our website\'s search performance and indexing status to ensure visibility for relevant queries.' },
    ],
    note: 'You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on, available at tools.google.com/dlpage/gaoptout.',
  },
  {
    id: 'lead-forms',
    title: 'Lead Form Data Collection',
    icon: 'ri-survey-line',
    content: [
      'When you submit inquiries through our website forms, Google Ads lead forms, Meta/Facebook lead forms, or any other lead generation platform, we collect the information you provide for project consultation purposes only.',
    ],
    bullets: [
      { label: 'Purpose', text: 'All data submitted through lead forms is used exclusively for responding to your inquiry, scheduling consultations, and providing project estimates.' },
      { label: 'Consent', text: 'By submitting a lead form, you consent to being contacted by our team via phone, email, or WhatsApp regarding your project.' },
      { label: 'Retention', text: 'Lead form data is retained for up to 24 months or until your project is completed, whichever is longer. You may request deletion at any time.' },
      { label: 'No Sale', text: 'We do not sell, rent, or trade lead form data to third parties for their marketing purposes.' },
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    icon: 'ri-lock-2-line',
    content: [
      'We take the security of your personal information seriously and implement appropriate technical and organisational measures to protect it from unauthorised access, alteration, disclosure, or destruction.',
    ],
    bullets: [
      { label: 'Encryption', text: 'Sensitive data transmitted through our website is protected using industry-standard SSL/TLS encryption.' },
      { label: 'Access Control', text: 'Only authorised personnel involved in your project have access to your personal information.' },
      { label: 'Regular Audits', text: 'We periodically review our data handling practices and security measures to maintain compliance with best practices.' },
      { label: 'Third-Party Security', text: 'When we use third-party service providers (hosting, analytics, CRM), we ensure they maintain comparable security standards.' },
    ],
    note: 'While we strive to protect your data, no method of transmission over the internet is 100% secure. We encourage you to exercise caution when sharing sensitive information online.',
  },
  {
    id: 'third-party',
    title: 'Third-Party Sharing',
    icon: 'ri-share-forward-line',
    content: [
      'We do not sell, trade, or rent your personal information to third parties. We may share your data only in the following limited circumstances:',
    ],
    bullets: [
      { label: 'Service Providers', text: 'Trusted third parties who assist us in operating our website, conducting business, or servicing you (e.g., hosting providers, analytics platforms, CRM systems).' },
      { label: 'Legal Requirements', text: 'When required by law, court order, or governmental authority to disclose information for legal proceedings or compliance.' },
      { label: 'Business Transfers', text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.' },
      { label: 'With Consent', text: 'When you explicitly consent to sharing your information with specific partners or vendors for your project needs.' },
    ],
  },
  {
    id: 'user-rights',
    title: 'Your Rights',
    icon: 'ri-user-settings-line',
    content: [
      'As a data subject, you have the following rights regarding your personal information:',
    ],
    bullets: [
      { label: 'Access', text: 'Request a copy of the personal data we hold about you.' },
      { label: 'Correction', text: 'Request correction of inaccurate or incomplete personal data.' },
      { label: 'Deletion', text: 'Request deletion of your personal data, subject to legal retention requirements.' },
      { label: 'Restriction', text: 'Request restriction of processing under certain circumstances.' },
      { label: 'Objection', text: 'Object to the processing of your data for direct marketing purposes.' },
      { label: 'Portability', text: 'Request transfer of your data to another controller in a structured, machine-readable format.' },
    ],
    note: 'To exercise any of these rights, please contact us using the details provided in the Contact Information section below. We will respond within 30 days of receiving your request.',
  },
];

function PolicySection({ section, idx }: { section: PolicySectionData; idx: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <article
      id={section.id}
      ref={ref}
      className={`animate-on-scroll ${isVisible ? 'visible' : ''} bg-neutral-50 rounded-2xl p-7 md:p-10 border border-neutral-100`}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-11 h-11 flex items-center justify-center bg-neutral-900 rounded-xl flex-shrink-0">
          <i className={`${section.icon} text-white text-lg`}></i>
        </div>
        <div>
          <span className="text-[10px] tracking-[0.18em] uppercase text-neutral-400 font-medium">
            Section {String(idx + 1).padStart(2, '0')}
          </span>
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mt-0.5">
            {section.title}
          </h2>
        </div>
      </div>

      <div className="space-y-4 pl-0 md:pl-[60px]">
        {section.content.map((paragraph, pIdx) => (
          <p key={pIdx} className="text-[15px] leading-[1.85] text-neutral-600">
            {paragraph}
          </p>
        ))}

        {section.bullets && (
          <ul className="space-y-4 mt-5">
            {section.bullets.map((b, bIdx) => (
              <li key={bIdx} className="flex items-start gap-3.5">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2.5 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-neutral-800 text-[15px]">{b.label}: </span>
                  <span className="text-[15px] leading-[1.75] text-neutral-600">{b.text}</span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {section.note && (
          <div className="mt-6 p-4 bg-white rounded-xl border border-neutral-200">
            <p className="text-[13px] leading-[1.7] text-neutral-500 italic">
              {section.note}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

export default function PrivacyPolicyPage() {
  useCanonical('/privacy-policy', {
    description:
      'Privacy Policy of Casa Associates LLP. Learn how we collect, use, and protect your personal data for architecture, construction, and interior design services in Hyderabad, India.',
  });

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://casaassociates.com';
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Privacy Policy | Casa Associates LLP — Architecture & Construction Hyderabad',
      description: 'Privacy Policy of Casa Associates LLP. Learn how we collect, use, and protect your personal data for architecture, construction, and interior design services in Hyderabad, India.',
      url: `${siteUrl}/privacy-policy`,
      inLanguage: 'en-IN',
      isPartOf: { '@type': 'WebSite', url: siteUrl, name: 'Casa Associates' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${siteUrl}/privacy-policy` },
        ],
      },
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'privacy-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Privacy Policy | Casa Associates LLP — Hyderabad Architecture & Construction';
    return () => {
      const el = document.getElementById('privacy-schema');
      if (el) el.remove();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-neutral-950 overflow-hidden" style={{ minHeight: '380px' }}>
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=minimalist%20luxury%20modern%20architecture%20interior%20abstract%20geometric%20shapes%20soft%20warm%20amber%20golden%20light%20dark%20moody%20elegant%20premium%20corporate%20legal%20document%20aesthetic%20sophisticated%20Hyderabad%20India%20construction%20firm%20brand&width=1920&height=600&seq=privacyhero1&orientation=landscape"
              alt="Privacy Policy — Casa Associates"
              className="w-full h-full object-cover object-center opacity-40"
              style={{ minHeight: '380px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>

          <div
            ref={heroRef}
            className={`animate-on-scroll ${heroVisible ? 'visible' : ''} relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-16 md:pb-20`}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-white/35"></span>
              <span className="text-white/50 text-xs tracking-[0.24em] uppercase">Legal · Privacy</span>
            </div>
            <h1
              className="font-serif font-light text-white leading-[1.02] tracking-[-0.02em] mb-5 max-w-3xl"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
            >
              Privacy <em className="not-italic font-semibold">Policy</em>
            </h1>
            <p className="text-white/55 text-base md:text-lg max-w-2xl leading-relaxed">
              How CASA ASSOCIATES LLP collects, uses, and protects your personal information across our architecture, construction, and interior design services.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

              {/* Sticky Sidebar Navigation */}
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-28">
                  <h3 className="text-[10px] font-medium tracking-[0.22em] uppercase text-neutral-400 mb-5">
                    On This Page
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => scrollToSection(s.id)}
                        className="block w-full text-left text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors py-2 px-3 rounded-md hover:bg-neutral-50 cursor-pointer"
                      >
                        {s.title}
                      </button>
                    ))}
                    <button
                      onClick={() => scrollToSection('contact-info')}
                      className="block w-full text-left text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors py-2 px-3 rounded-md hover:bg-neutral-50 cursor-pointer"
                    >
                      Contact Information
                    </button>
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-9 space-y-14 md:space-y-16">
                {sections.map((section, idx) => (
                  <PolicySection key={section.id} section={section} idx={idx} />
                ))}

                {/* Contact Information Section */}
                <article
                  id="contact-info"
                  className="bg-neutral-900 rounded-2xl p-7 md:p-10 text-white"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-11 h-11 flex items-center justify-center bg-white/10 rounded-xl flex-shrink-0">
                      <i className="ri-mail-send-line text-white text-lg"></i>
                    </div>
                    <div>
                      <span className="text-[10px] tracking-[0.18em] uppercase text-neutral-400 font-medium">
                        Section 10
                      </span>
                      <h2 className="font-serif text-xl md:text-2xl font-semibold text-white mt-0.5">
                        Contact Information
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-0 md:pl-[60px]">
                    <div className="space-y-5">
                      <div>
                        <span className="text-[11px] tracking-[0.15em] uppercase text-neutral-500 block mb-1">Company</span>
                        <p className="text-[15px] text-white/90">CASA ASSOCIATES LLP</p>
                      </div>
                      <div>
                        <span className="text-[11px] tracking-[0.15em] uppercase text-neutral-500 block mb-1">Website</span>
                        <a href="https://casaassociates.com" target="_blank" rel="nofollow noreferrer" className="text-[15px] text-white/90 hover:text-white transition-colors cursor-pointer">
                          https://casaassociates.com
                        </a>
                      </div>
                      <div>
                        <span className="text-[11px] tracking-[0.15em] uppercase text-neutral-500 block mb-1">Email</span>
                        <a href="mailto:casa.approvals@gmail.com" className="text-[15px] text-white/90 hover:text-white transition-colors cursor-pointer">
                          casa.approvals@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <span className="text-[11px] tracking-[0.15em] uppercase text-neutral-500 block mb-1">Phone</span>
                        <a href="tel:+919000975046" className="text-[15px] text-white/90 hover:text-white transition-colors cursor-pointer block">
                          +91 90009 75046
                        </a>
                        <a href="tel:04049535046" className="text-[15px] text-white/90 hover:text-white transition-colors cursor-pointer block mt-1">
                          040 4953 5046 (Landline)
                        </a>
                      </div>
                      <div>
                        <span className="text-[11px] tracking-[0.15em] uppercase text-neutral-500 block mb-1">Location</span>
                        <p className="text-[15px] text-white/90 leading-[1.7]">
                          4th Floor, Bhooma Plaza<br />
                          Road No. 01, Avenue 07, Street 04<br />
                          Near GVK One Mall, Banjara Hills<br />
                          Hyderabad, Telangana 500034, India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 pl-0 md:pl-[60px]">
                    <p className="text-[13px] text-neutral-400 leading-[1.7]">
                      For any privacy-related questions, data access requests, or to exercise your rights under this Privacy Policy, please contact us using any of the channels above. We aim to respond to all inquiries within 30 business days.
                    </p>
                  </div>
                </article>

                {/* Last Updated Note */}
                <div className="flex items-center justify-center gap-3 py-6">
                  <span className="w-12 h-px bg-neutral-300"></span>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 font-medium">
                    Last Updated: May 2026
                  </span>
                  <span className="w-12 h-px bg-neutral-300"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 md:py-20 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-neutral-400"></span>
              <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">Have Questions?</span>
              <span className="w-8 h-px bg-neutral-400"></span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 mb-4">
              We Value Your <strong className="font-semibold">Trust</strong>
            </h2>
            <p className="text-neutral-500 text-[15px] leading-[1.8] max-w-xl mx-auto mb-10">
              Your privacy matters to us. Whether you have questions about our data practices or want to discuss your next project, we are here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-neutral-700 hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap"
              >
                Contact Us
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-sm"></i>
                </div>
              </Link>
              <a
                href="tel:+919000975046"
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-neutral-300 text-neutral-700 text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-neutral-100 hover:border-neutral-400 transition-all cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-sm"></i>
                </div>
                +91 90009 75046
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}