import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleHashNav = (path: string) => {
    setMenuOpen(false);
    if (path.includes('#')) {
      const hash = path.split('#')[1];
      if (location.pathname !== '/') {
        window.location.href = `/#${hash}`;
        return;
      }
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Contact Bar — desktop only */}
      <div className="hidden lg:block bg-neutral-900 text-neutral-400 text-xs py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+919000975046" className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-phone-line text-xs"></i>
              <span>+91 90009 75046</span>
            </a>
            <a href="tel:04049535040" className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-phone-line text-xs"></i>
              <span>040 4953 5046</span>
            </a>
            <a href="https://wa.me/919000975046" target="_blank" rel="nofollow noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-whatsapp-line text-xs"></i>
              <span>WhatsApp Us</span>
            </a>
            <a href="mailto:contact@casaassociates.com" className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-mail-line text-xs"></i>
              <span>contact@casaassociates.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <i className="ri-map-pin-line text-xs"></i>
            <span>Banjara Hills, Hyderabad · Mon – Sat: 9:00 AM – 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white border-b border-neutral-200' : 'bg-white/95 backdrop-blur-sm border-b border-neutral-100'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-[64px] md:h-[72px] flex items-center justify-between">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center cursor-pointer flex-shrink-0">
            <img
              src="https://storage.readdy-site.link/project_files/ffc4f7b6-7f29-4f49-86dc-95a7e6007e80/b9b3212d-1533-4b62-ab8e-92c587cf87b0_IMG_20260330_003824-removebg-preview.png?v=e61cc37f9e03ca219be905683a3b564d"
              alt="Casa Associates Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              item.path.includes('#') ? (
                <button
                  key={item.label}
                  onClick={() => handleHashNav(item.path)}
                  className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors cursor-pointer relative group whitespace-nowrap ${location.pathname === item.path ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-neutral-900 transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              )
            ))}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2.5 bg-neutral-900 text-white text-xs font-medium tracking-[0.12em] uppercase rounded-full hover:bg-neutral-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Free Quote
            </Link>
          </nav>

          {/* Mobile Hamburger — always on top */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[1.5px] bg-neutral-900 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px] bg-white' : ''}`}></span>
            <span className={`w-6 h-[1.5px] bg-neutral-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[1.5px] bg-neutral-900 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px] bg-white' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-neutral-950 transition-all duration-500 md:hidden flex flex-col ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {/* Logo in mobile menu */}
        <div className="flex items-center justify-center pt-8 pb-2">
          <img
            src="https://storage.readdy-site.link/project_files/ffc4f7b6-7f29-4f49-86dc-95a7e6007e80/b9b3212d-1533-4b62-ab8e-92c587cf87b0_IMG_20260330_003824-removebg-preview.png?v=e61cc37f9e03ca219be905683a3b564d"
            alt="Casa Associates Logo"
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </div>
        {/* Nav links — centered */}
        <div className="flex flex-col items-center justify-center flex-1 gap-6 px-6 pt-4">
          {navItems.map((item, i) => (
            item.path.includes('#') ? (
              <button
                key={item.label}
                onClick={() => handleHashNav(item.path)}
                className="text-white text-2xl font-serif tracking-widest uppercase transition-opacity hover:opacity-60 cursor-pointer py-1"
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className="text-white text-2xl font-serif tracking-widest uppercase transition-opacity hover:opacity-60 cursor-pointer py-1"
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        {/* Bottom action buttons */}
        <div className="px-6 pb-10 flex flex-col gap-3">
          <a
            href="tel:+919000975046"
            className="flex items-center justify-center gap-2.5 py-4 border border-white/20 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill text-base"></i>
            +91 90009 75046
          </a>
          <a
            href="tel:04049535040"
            className="flex items-center justify-center gap-2.5 py-3.5 border border-white/15 text-white/80 text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-line text-base"></i>
            040 4953 5046
          </a>
          <a
            href="https://wa.me/919000975046?text=Hi%2C%20I%27m%20interested%20in%20your%20services.%20Please%20share%20details."
            target="_blank"
            rel="nofollow noreferrer"
            className="flex items-center justify-center gap-2.5 py-4 bg-green-500 text-white text-sm tracking-widest uppercase rounded-full hover:bg-green-400 transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-whatsapp-fill text-base"></i>
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
