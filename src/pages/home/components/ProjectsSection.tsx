import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { projects } from '../../../mocks/projects';

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} mb-14`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-neutral-400"></span>
                <span className="text-neutral-500 text-xs tracking-[0.24em] uppercase">Selected Works</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-[-0.01em]">
                Our Projects
              </h2>
              <p className="text-neutral-500 text-sm mt-3 leading-relaxed max-w-md">
                Delivering modern residential and commercial spaces across Hyderabad with precision and craftsmanship.
              </p>
              {/* Mini stats */}
              <div className="flex items-center gap-5 mt-4">
                <span className="flex items-center gap-1.5 text-neutral-600 text-sm font-medium">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-building-line text-xs text-neutral-500"></i>
                  </div>
                  120+ Projects Completed
                </span>
                <span className="flex items-center gap-1.5 text-neutral-600 text-sm font-medium">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-emotion-happy-line text-xs text-neutral-500"></i>
                  </div>
                  200+ Happy Clients
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
          <Link to="/projects" className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-1 lg:col-span-2 img-zoom group cursor-pointer block`}>
            <div className="relative rounded-2xl overflow-hidden h-[360px] md:h-[440px]">
              <img
                src={projects[0].imageUrl}
                alt={projects[0].title}
                className="w-full h-full object-cover object-top scale-105 blur-[1.5px] group-hover:blur-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10"></div>
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                  {projects[0].category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-white text-2xl md:text-3xl font-medium mb-2 tracking-[-0.01em]">{projects[0].title}</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4 max-w-sm line-clamp-2">{projects[0].description}</p>
                {/* Project metadata */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-white/85 text-xs">
                    <i className="ri-map-pin-line text-xs"></i>
                    {projects[0].location}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/85 text-xs">
                    <i className="ri-ruler-line text-xs"></i>
                    {projects[0].area}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/85 text-xs">
                    <i className="ri-time-line text-xs"></i>
                    {projects[0].timeline}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-white/20 border border-white/35 text-white text-[11px] px-3 py-1.5 rounded-full">
                    <i className="ri-money-rupee-circle-line text-xs"></i>
                    {projects[0].budget}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white text-neutral-900 text-[11px] font-medium px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                    View Details
                    <i className="ri-arrow-right-line text-xs"></i>
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Stack of 2 smaller cards */}
          <div className="flex flex-col gap-5">
            {projects.slice(1, 3).map((project, i) => (
              <Link to="/projects" key={project.id} className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${i + 2} img-zoom group cursor-pointer flex-1 block`}>
                <div className="relative rounded-2xl overflow-hidden h-[200px]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top scale-105 blur-[1.5px] group-hover:blur-0 transition-all duration-500"
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
                        <i className="ri-time-line text-xs"></i>
                        {project.timeline}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom row — 2 more cards */}
          {projects.slice(3, 5).map((project, i) => (
            <Link to="/projects" key={project.id} className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${i + 4} img-zoom group cursor-pointer block`}>
              <div className="relative rounded-2xl overflow-hidden h-[280px]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-top scale-105 blur-[1.5px] group-hover:blur-0 transition-all duration-500"
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
                  <div className="flex items-center justify-between">
                    <span className="text-white/85 text-xs flex items-center gap-1">
                      <i className="ri-money-rupee-circle-line text-xs"></i>
                      {project.budget}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white text-neutral-900 text-[10px] font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                      View Details
                      <i className="ri-arrow-right-line text-[10px]"></i>
                    </span>
                  </div>
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
                <div className="text-neutral-500 text-xs tracking-[0.15em] uppercase">120+ Completed Works in Hyderabad</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom CTA strip */}
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-6 mt-10 p-6 md:p-8 bg-neutral-950 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5`}>
          <div>
            <p className="text-white font-serif text-lg font-medium mb-1">Have a project in mind?</p>
            <p className="text-neutral-400 text-sm">Our architects in Hyderabad are ready — get a free consultation today.</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0 w-full sm:w-auto">
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
