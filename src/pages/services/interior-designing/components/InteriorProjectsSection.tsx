import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { projects } from '@/mocks/projects';

const interiorProjects = [
  {
    id: projects[1].id,
    title: projects[1].title,
    location: projects[1].location,
    category: 'Residential Interior',
    area: '3BHK — 2,200 sq ft',
    year: projects[1].year,
    imageUrl: projects[1].imageUrl,
  },
  {
    id: projects[2].id,
    title: projects[2].title,
    location: projects[2].location,
    category: 'Residential Interior',
    area: '4BHK — 3,100 sq ft',
    year: projects[2].year,
    imageUrl: projects[2].imageUrl,
  },
  {
    id: projects[3].id,
    title: projects[3].title,
    location: projects[3].location,
    category: 'Villa Interior',
    area: 'Duplex Villa — 4,500 sq ft',
    year: projects[3].year,
    imageUrl: projects[3].imageUrl,
  },
  {
    id: projects[4].id,
    title: projects[4].title,
    location: projects[4].location,
    category: 'Residential Interior',
    area: '3BHK — 1,850 sq ft',
    year: projects[4].year,
    imageUrl: projects[4].imageUrl,
  },
  {
    id: projects[0].id,
    title: projects[0].title,
    location: projects[0].location,
    category: 'Commercial Interior',
    area: 'Office — 1,600 sq ft',
    year: projects[0].year,
    imageUrl: projects[0].imageUrl,
  },
];

export default function InteriorProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} mb-14`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-neutral-400"></span>
                <span className="text-neutral-500 text-xs tracking-[0.24em] uppercase">Our Work</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-[-0.01em]">
                Interior Projects
              </h2>
              <p className="text-neutral-500 text-sm mt-3 leading-relaxed max-w-md">
                A curated selection of our completed interior design and execution projects across Hyderabad.
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-4">
                <span className="flex items-center gap-1.5 text-neutral-600 text-sm font-medium">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-home-heart-line text-xs text-neutral-500"></i>
                  </div>
                  50+ Interiors Delivered
                </span>
                <span className="flex items-center gap-1.5 text-neutral-600 text-sm font-medium">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-emotion-happy-line text-xs text-neutral-500"></i>
                  </div>
                  100% Turnkey Execution
                </span>
              </div>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 text-neutral-700 text-xs font-medium tracking-[0.14em] uppercase rounded-full hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 cursor-pointer whitespace-nowrap self-start md:self-auto"
            >
              View All Projects
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line text-xs"></i>
              </div>
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Large Featured Card */}
          <Link
            to={`/projects/${interiorProjects[0].id}`}
            className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-1 lg:col-span-2 group cursor-pointer block`}
          >
            <div className="relative rounded-2xl overflow-hidden h-[360px] md:h-[440px]">
              <img
                src={interiorProjects[0].imageUrl}
                alt={interiorProjects[0].title}
                className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10"></div>
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                  {interiorProjects[0].category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-white text-2xl md:text-3xl font-medium mb-2 tracking-[-0.01em]">
                  {interiorProjects[0].title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-white/85 text-xs">
                    <i className="ri-map-pin-line text-xs"></i>
                    {interiorProjects[0].location}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/85 text-xs">
                    <i className="ri-ruler-line text-xs"></i>
                    {interiorProjects[0].area}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/85 text-xs">
                    <i className="ri-calendar-line text-xs"></i>
                    {interiorProjects[0].year}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-white text-neutral-900 text-[11px] font-medium px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                  View Project
                  <i className="ri-arrow-right-line text-xs"></i>
                </span>
              </div>
            </div>
          </Link>

          {/* Stack of 2 smaller cards */}
          <div className="flex flex-col gap-5">
            {interiorProjects.slice(1, 3).map((project, i) => (
              <Link
                to={`/projects/${project.id}`}
                key={project.id}
                className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${i + 2} group cursor-pointer flex-1 block`}
              >
                <div className="relative rounded-2xl overflow-hidden h-[200px]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/5"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[9px] font-medium tracking-[0.18em] uppercase px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-white text-lg font-medium tracking-[-0.005em] mb-1">{project.title}</h3>
                    <div className="flex items-center gap-3">
                      <p className="text-white/85 text-xs flex items-center gap-1">
                        <i className="ri-map-pin-line text-xs"></i>
                        {project.location}
                      </p>
                      <p className="text-white/85 text-xs flex items-center gap-1">
                        <i className="ri-ruler-line text-xs"></i>
                        {project.area}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom row — 2 more cards */}
          {interiorProjects.slice(3, 5).map((project, i) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${i + 4} group cursor-pointer block`}
            >
              <div className="relative rounded-2xl overflow-hidden h-[280px]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/5"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[9px] font-medium tracking-[0.18em] uppercase px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-white text-lg font-medium tracking-[-0.005em] mb-1.5">{project.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <p className="text-white/85 text-xs flex items-center gap-1">
                      <i className="ri-map-pin-line text-xs"></i>
                      {project.location}
                    </p>
                    <p className="text-white/85 text-xs flex items-center gap-1">
                      <i className="ri-ruler-line text-xs"></i>
                      {project.area}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-white text-neutral-900 text-[10px] font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                    View Project
                    <i className="ri-arrow-right-line text-[10px]"></i>
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* View all card */}
          <Link
            to="/projects"
            className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-6 block rounded-2xl overflow-hidden h-[280px] bg-neutral-950 cursor-pointer group`}
          >
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center border border-white/20 rounded-full group-hover:bg-white/10 transition-all">
                <i className="ri-arrow-right-line text-white text-xl"></i>
              </div>
              <div>
                <div className="text-white font-serif text-xl mb-1.5">View All Projects</div>
                <div className="text-neutral-500 text-xs tracking-[0.15em] uppercase">50+ Interior Works in Hyderabad</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom CTA strip */}
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-6 mt-10 p-6 md:p-8 bg-neutral-950 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-5`}>
          <div>
            <p className="text-white font-serif text-lg font-medium mb-1">Love what you see?</p>
            <p className="text-neutral-400 text-sm">Let&apos;s design your dream interior — get a free consultation today.</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href="tel:+919000975046"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white text-xs font-medium tracking-[0.1em] uppercase rounded-full hover:bg-white/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line text-sm"></i>
              Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 text-xs font-medium tracking-[0.1em] uppercase rounded-full hover:bg-neutral-100 transition-all cursor-pointer whitespace-nowrap"
            >
              Get Free Quote
              <i className="ri-arrow-right-line text-xs"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
