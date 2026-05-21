import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const WA_CONTACT_MSG = encodeURIComponent(
  'Hello,\n\nI want to get in touch regarding your services.\n\nPlease share details for:\n\nService: [mention service]\nLocation: [mention location]\nBudget: [mention budget]\n\nThank you.'
);

const contactDetails = [
  {
    icon: 'ri-phone-fill',
    label: 'Phone',
    value: '+91 90009 75046\n040 4953 5046 (Landline)',
    href: 'tel:+919000975046',
    actionLabel: 'Call Mobile',
  },
  {
    icon: 'ri-mail-line',
    label: 'Email',
    value: 'contact@casaassociates.com',
    href: 'mailto:contact@casaassociates.com',
    actionLabel: 'Send Email',
  },
  {
    icon: 'ri-map-pin-2-line',
    label: 'Office Address',
    value: '4th Floor, Bhooma Plaza\nRoad No. 01, Avenue 07, Street 04\nNear GVK One Mall, Banjara Hills\nHyderabad, Telangana 500034',
    href: 'https://maps.app.goo.gl/HPp1BuSvPdA9nXQf6',
    actionLabel: 'Get Directions',
  },
  {
    icon: 'ri-time-line',
    label: 'Office Hours',
    value: 'Mon \u2013 Sat: 9:00 AM \u2013 7:00 PM\nSunday: Closed',
    href: null,
    actionLabel: null,
  },
];

export default function ContactFormSection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 lg:gap-16 items-start">

          {/* Left \u2014 WhatsApp CTA */}
          <div ref={leftRef} className={`animate-on-scroll-left ${leftVisible ? 'visible' : ''}`}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-neutral-400"></span>
              <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">Start a Conversation</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-4 tracking-[-0.01em]">
              Let&apos;s Talk on<br />
              <em className="not-italic font-semibold">WhatsApp</em>
            </h2>
            <p className="text-neutral-500 text-[15px] leading-relaxed mb-10 max-w-lg">
              Skip the forms — message us directly on WhatsApp and get a response within 30 minutes. Tell us your service, location, and budget and we&apos;ll take it from there.
            </p>

            {/* Response time badge */}
            <div className="flex items-center gap-2.5 mb-8 p-3.5 bg-green-50 border border-green-100 rounded-xl w-fit">
              <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
              <span className="text-green-700 text-sm font-medium">We're here to help — typically replies within 30 minutes</span>
            </div>

            {/* Primary WhatsApp button */}
            <a
              href={`https://wa.me/919000975046?text=${WA_CONTACT_MSG}`}
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-neutral-900 text-white text-sm font-semibold tracking-[0.12em] uppercase rounded-sm border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-500 transition-all cursor-pointer whitespace-nowrap group"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-whatsapp-fill text-lg"></i>
              </div>
              Send Details on WhatsApp
              <div className="w-5 h-5 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <i className="ri-arrow-right-line text-sm"></i>
              </div>
            </a>

            <p className="mt-5 text-neutral-400 text-xs flex items-center gap-2">
              <i className="ri-information-line text-xs"></i>
              Typically replies within 30 minutes during business hours (Mon\u2013Sat, 9 AM\u20137 PM)
            </p>

            {/* Step guide */}
            <div className="mt-14 pt-12 border-t border-neutral-100">
              <p className="text-neutral-400 text-[10px] tracking-[0.22em] uppercase mb-6">How It Works</p>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Click the WhatsApp button', desc: 'Opens a pre-filled message — just add your details.' },
                  { step: '02', title: 'Tell us your requirements', desc: 'Service needed, location in Hyderabad, and your budget.' },
                  { step: '03', title: 'Get a free consultation', desc: 'Our architect will respond within 30 minutes.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex items-start gap-5">
                    <div className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-full flex-shrink-0">
                      <span className="text-neutral-600 text-xs font-semibold">{step}</span>
                    </div>
                    <div>
                      <p className="text-neutral-900 text-sm font-medium mb-0.5">{title}</p>
                      <p className="text-neutral-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alternate channel */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="tel:+919000975046"
                className="inline-flex items-center gap-2 text-neutral-600 text-sm hover:text-neutral-900 transition-colors cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-fill text-sm"></i>
                </div>
                Prefer a call? +91 90009 75046
              </a>
            </div>
          </div>

          {/* Right \u2014 Contact Details (unchanged) */}
          <div ref={rightRef} className={`animate-on-scroll-right ${rightVisible ? 'visible' : ''} lg:sticky lg:top-28`}>
            <div className="bg-neutral-950 rounded-2xl overflow-hidden">
              {/* WhatsApp highlighted CTA at top */}
              <a
                href={`https://wa.me/919000975046?text=${WA_CONTACT_MSG}`}
                target="_blank"
                rel="nofollow noreferrer"
                className="flex items-center gap-4 p-6 bg-green-500 hover:bg-green-400 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl flex-shrink-0">
                  <i className="ri-whatsapp-fill text-white text-xl"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-[10px] tracking-[0.15em] uppercase font-medium mb-0.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    Fastest Response \u2014 30 Minutes
                  </div>
                  <div className="text-white font-semibold text-sm">WhatsApp Us Now</div>
                  <div className="text-white/75 text-xs">+91 90009 75046 \u00b7 Typically replies in minutes</div>
                </div>
                <div className="w-8 h-8 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <i className="ri-arrow-right-line text-white text-base"></i>
                </div>
              </a>

              {/* Contact details */}
              <div className="p-8 md:p-9">
                <h3 className="font-serif text-white text-xl font-light mb-7">Contact Details</h3>
                <div className="space-y-5 mb-9">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start gap-4 pb-5 border-b border-neutral-800 last:border-b-0 last:pb-0">
                      <div className="w-9 h-9 flex items-center justify-center bg-neutral-800 rounded-lg flex-shrink-0 mt-0.5">
                        <i className={`${detail.icon} text-neutral-400 text-sm`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-neutral-500 text-[10px] tracking-[0.18em] uppercase mb-1">{detail.label}</div>
                        <div className="text-white text-sm leading-relaxed whitespace-pre-line font-light">{detail.value}</div>
                        {detail.href && detail.actionLabel && (
                          <a
                            href={detail.href}
                            target={detail.href.startsWith('http') ? '_blank' : undefined}
                            rel={detail.href.startsWith('http') ? 'nofollow noreferrer' : undefined}
                            className="inline-flex items-center gap-1 text-neutral-400 text-xs mt-2 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                          >
                            {detail.actionLabel}
                            <i className="ri-arrow-right-line text-xs"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:+919000975046"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 border border-white text-white text-xs font-medium tracking-[0.14em] uppercase rounded-sm hover:bg-white hover:text-neutral-900 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-phone-fill text-sm"></i>
                    </div>
                    Call +91 90009 75046
                  </a>
                  <a
                    href="tel:04049535040"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 border border-neutral-700 text-neutral-400 text-xs font-medium tracking-[0.14em] uppercase rounded-sm hover:border-neutral-500 hover:text-white transition-all cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-phone-line text-sm"></i>
                    </div>
                    Landline: 040 4953 5046
                  </a>
                  <a
                    href="https://maps.app.goo.gl/HPp1BuSvPdA9nXQf6"
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 border border-neutral-700 text-neutral-400 text-xs font-medium tracking-[0.14em] uppercase rounded-sm hover:border-neutral-500 hover:text-white transition-all cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-navigation-line text-sm"></i>
                    </div>
                    Get Directions — Banjara Hills
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
