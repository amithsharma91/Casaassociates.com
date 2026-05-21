import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { label: 'Architects & Engineers', path: '/services/architects-engineers', isExternal: false },
  { label: 'Builders & Developers', path: '/services/builders-developers', isExternal: false },
  { label: 'Liaisoning Works', path: 'https://buildingapprovalservices.com', isExternal: true },
  { label: 'Interior Designing', path: '/services/interior-designing', isExternal: false },
];

const socialLinks = [
  { icon: 'ri-instagram-line', href: '#', label: 'Instagram' },
  { icon: 'ri-linkedin-box-line', href: '#', label: 'LinkedIn' },
  { icon: 'ri-facebook-box-line', href: '#', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      {/* Top gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-20 pb-10 md:pt-24 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-14 mb-16 md:mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="cursor-pointer inline-block mb-6">
              <img
                src="https://storage.readdy-site.link/project_files/ffc4f7b6-7f29-4f49-86dc-95a7e6007e80/b9b3212d-1533-4b62-ab8e-92c587cf87b0_IMG_20260330_003824-removebg-preview.png?v=e61cc37f9e03ca219be905683a3b564d"
                alt="Casa Associates Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-[1.8] mb-7 text-neutral-500 max-w-[230px]">
              Transforming spaces across Hyderabad with precision craftsmanship and a relentless commitment to quality.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center border border-neutral-800 rounded-full text-neutral-600 hover:text-white hover:border-neutral-500 transition-all cursor-pointer"
                >
                  <i className={`${s.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[10px] font-medium tracking-[0.22em] uppercase mb-7">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-[13px] text-neutral-500 hover:text-white transition-colors cursor-pointer flex items-center gap-2.5 group"
                  >
                    <span className="w-3.5 h-px bg-neutral-700 group-hover:bg-neutral-400 group-hover:w-5 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-[10px] font-medium tracking-[0.22em] uppercase mb-7">
              Services
            </h4>
            <ul className="space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  {link.isExternal ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-neutral-500 hover:text-white transition-colors cursor-pointer flex items-center gap-2.5 group"
                    >
                      <span className="w-3.5 h-px bg-neutral-700 group-hover:bg-neutral-400 group-hover:w-5 transition-all"></span>
                      {link.label}
                      <i className="ri-external-link-line text-[10px] text-neutral-700 group-hover:text-neutral-400 transition-colors"></i>
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-[13px] text-neutral-500 hover:text-white transition-colors cursor-pointer flex items-center gap-2.5 group"
                    >
                      <span className="w-3.5 h-px bg-neutral-700 group-hover:bg-neutral-400 group-hover:w-5 transition-all"></span>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-[10px] font-medium tracking-[0.22em] uppercase mb-7">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-map-pin-line text-xs text-neutral-600"></i>
                </div>
                <span className="text-[13px] leading-[1.75] text-neutral-500">
                  4th Floor, Bhooma Plaza<br />
                  Road No. 01, Avenue 07, Street 04<br />
                  Near GVK One Mall, Banjara Hills<br />
                  Hyderabad, Telangana 500034
                </span>
              </li>
              <li>
                <a href="tel:+919000975046" className="flex items-center gap-3 text-[13px] text-neutral-500 hover:text-white transition-colors cursor-pointer group">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-xs text-neutral-600 group-hover:text-white transition-colors"></i>
                  </div>
                  +91 90009 75046
                </a>
              </li>
              <li>
                <a href="tel:04049535040" className="flex items-center gap-3 text-[13px] text-neutral-500 hover:text-white transition-colors cursor-pointer group">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-xs text-neutral-600 group-hover:text-white transition-colors"></i>
                  </div>
                  040 4953 5046 (Landline)
                </a>
              </li>
              <li>
                <a href="https://wa.me/919000975046" target="_blank" rel="nofollow noreferrer" className="flex items-center gap-3 text-[13px] text-neutral-500 hover:text-white transition-colors cursor-pointer group">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <i className="ri-whatsapp-line text-xs text-neutral-600 group-hover:text-white transition-colors"></i>
                  </div>
                  WhatsApp: +91 90009 75046
                </a>
              </li>
              <li>
                <a href="mailto:contact@casaassociates.com" className="flex items-center gap-3 text-[13px] text-neutral-500 hover:text-white transition-colors cursor-pointer group">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-xs text-neutral-600 group-hover:text-white transition-colors"></i>
                  </div>
                  contact@casaassociates.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-xs text-neutral-600"></i>
                </div>
                <span className="text-[13px] text-neutral-500">Mon – Sat &nbsp;9:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8"></div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.18em] text-neutral-700 uppercase">
            &copy; 2026 Casa Associates. All Rights Reserved. Hyderabad, India.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="text-[11px] text-neutral-600 hover:text-white transition-colors cursor-pointer tracking-wide">
              Privacy Policy
            </Link>
            <span className="text-neutral-800">·</span>
            <span className="text-[11px] text-neutral-700 tracking-wide">Transform. Build. Deliver.</span>
          </div>
          </div>
        </div>
      </div>
      {/* Mobile spacer removed — StickyMobileCTA no longer exists */}
    </footer>
  );
}
