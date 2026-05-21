import { useState, useEffect, useCallback } from 'react';

const WA_MSG = encodeURIComponent(
  'Hello,\n\nI\'m interested in your services.\n\nPlease share details for:\n\nService: [mention service]\nLocation: [mention location]\nBudget: [mention budget]\n\nThank you.'
);

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (dismissed) return;
      if (e.clientY <= 5) {
        setShow(true);
      }
    },
    [dismissed]
  );

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem('exit_popup_seen');
    if (alreadySeen) { setDismissed(true); return; }
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 8000);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem('exit_popup_seen', '1');
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={dismiss}>
      <div
        className="relative bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl animate-fadeInUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image strip */}
        <div className="relative h-[160px] overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=luxury%20modern%20architectural%20interior%20Hyderabad%20India%20warm%20golden%20amber%20light%20premium%20reception%20marble%20minimal%20editorial%20photography&width=800&height=320&seq=popup1&orientation=landscape"
            alt="Casa Associates"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
          <div className="absolute bottom-5 left-6">
            <p className="text-white/70 text-[10px] tracking-[0.22em] uppercase mb-1">Casa Associates \u00b7 Hyderabad</p>
            <h3 className="font-serif text-white text-2xl font-semibold leading-tight">Get a Free Consultation</h3>
          </div>
          <button
            onClick={dismiss}
            className="absolute top-3.5 right-3.5 w-8 h-8 flex items-center justify-center bg-black/40 rounded-full text-white hover:bg-black/70 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <i className="ri-close-line text-sm"></i>
          </button>
        </div>

        {/* Body */}
        <div className="p-7">
          <p className="text-neutral-600 text-sm leading-relaxed mb-2">
            Before you go \u2014 get a <strong className="text-neutral-900">FREE consultation</strong> from our architects in Hyderabad. No obligation, instant response.
          </p>
          <div className="flex items-center gap-2 mb-7">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            <span className="text-green-600 text-[11px] font-medium tracking-wide">Contact us for a free consultation — no obligation</span>
          </div>

          {/* WhatsApp button — primary CTA */}
          <a
            href={`https://wa.me/919000975046?text=${WA_MSG}`}
            target="_blank"
            rel="nofollow noreferrer"
            onClick={dismiss}
            className="w-full py-4 bg-green-500 text-white text-sm font-semibold tracking-[0.1em] uppercase rounded-full hover:bg-green-400 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2.5 shadow-lg shadow-green-100 mb-3"
          >
            <i className="ri-whatsapp-fill text-lg"></i>
            Get Free Consultation on WhatsApp
          </a>

          {/* Call alternative */}
          <a
            href="tel:+919000975046"
            onClick={dismiss}
            className="w-full py-3.5 border border-neutral-200 text-neutral-700 text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-neutral-50 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-phone-fill text-sm"></i>
            </div>
            +91 90009 75046
          </a>
          <a
            href="tel:04049535040"
            onClick={dismiss}
            className="w-full py-3 border border-neutral-100 text-neutral-500 text-xs font-medium tracking-[0.1em] uppercase rounded-full hover:bg-neutral-50 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-phone-line text-xs"></i>
            </div>
            Landline: 040 4953 5046
          </a>

          <button onClick={dismiss} className="mt-4 block w-full text-center text-neutral-400 text-xs hover:text-neutral-600 transition-colors cursor-pointer">
            No thanks, I&apos;ll miss this offer
          </button>
        </div>
      </div>
    </div>
  );
}
