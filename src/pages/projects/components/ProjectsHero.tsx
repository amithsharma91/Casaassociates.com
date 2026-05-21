import { Link } from 'react-router-dom';

export default function ProjectsHero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/3a6d8f96d7fe4d39df9fd6d3c5fa8b16.jpeg"
          alt="Our Projects — Casa Associates Hyderabad"
          className="w-full h-full object-cover object-center scale-[1.03]"
        />
        {/* Strong layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/45"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pb-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-7 md:mb-9 animate-fadeIn">
            <span className="w-8 h-px bg-white/40"></span>
            <span className="text-white/80 text-[11px] tracking-[0.28em] uppercase font-medium">Casa Associates · Our Work</span>
          </div>
          <h1
            className="font-serif text-white font-light leading-[1.0] tracking-[-0.025em] mb-6 animate-fadeInUp text-shadow-hero"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          >
            Spaces We&apos;ve<br />
            <em className="not-italic font-semibold">Built &amp; Designed</em>
          </h1>
          <p className="text-white/85 text-[15px] md:text-lg font-light leading-relaxed mb-10 md:mb-12 max-w-xl animate-fadeInUp" style={{ animationDelay: '0.12s' }}>
            120+ completed projects spanning luxury residences, commercial spaces, and bespoke interior transformations across Hyderabad.
          </p>
          <div className="flex flex-wrap items-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.24s' }}>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2 px-7 md:px-8 py-3.5 md:py-4 bg-white text-neutral-900 text-sm font-medium tracking-[0.14em] uppercase rounded-full hover:bg-neutral-100 transition-all cursor-pointer whitespace-nowrap"
            >
              Start Your Project
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-right-line text-sm"></i>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-5 ml-2">
              {['120+ Projects', '15+ Years', 'Hyderabad'].map((chip) => (
                <span key={chip} className="text-white/70 text-[11px] tracking-[0.15em] uppercase flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-7 bg-white/50 animate-pulse"></div>
      </div>
    </section>
  );
}
