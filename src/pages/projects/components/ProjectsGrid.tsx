import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { projects } from '../../../mocks/projects';
import type { Project } from '../../../mocks/projects';

interface ProjectCardProps {
  project: Project;
  delay: number;
  isVisible: boolean;
}

function ProjectCard({ project, delay, isVisible }: ProjectCardProps) {
  // Use first gallery image if available (auto-syncs from project detail data)
  const thumbnailUrl =
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages[0]
      : project.imageUrl;

  return (
    <Link
      to={`/projects/${project.id}`}
      className={`animate-on-scroll ${isVisible ? 'visible' : ''} group block`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden h-[260px] sm:h-[280px] bg-neutral-100">
        <img
          src={thumbnailUrl}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* Category tag */}
        <span className="absolute top-4 left-4 bg-white/92 backdrop-blur-sm text-neutral-800 text-[10px] font-medium tracking-[0.16em] uppercase px-3 py-1.5 rounded-full">
          {project.category}
        </span>
        {/* Hover overlay action */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
            <i className="ri-arrow-right-up-line text-neutral-900 text-base"></i>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="pt-5 pb-2">
        <h3 className="font-serif text-neutral-900 text-xl font-medium leading-snug mb-2 group-hover:text-neutral-600 transition-colors tracking-[-0.01em]">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 text-neutral-500 text-xs mb-3">
          <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
            <i className="ri-map-pin-line"></i>
          </div>
          <span>{project.location}</span>
          <span className="text-neutral-300">·</span>
          <span>{project.year}</span>
          <span className="text-neutral-300">·</span>
          <span>{project.area}</span>
        </div>
        <p className="text-neutral-500 text-sm leading-[1.75] line-clamp-2 mb-4">
          {project.description || 'View project details'}
        </p>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-neutral-900 text-xs font-medium tracking-[0.12em] uppercase border-b border-neutral-300 pb-0.5 group-hover:border-neutral-900 transition-colors whitespace-nowrap">
            View Details
            <div className="w-3.5 h-3.5 flex items-center justify-center">
              <i className="ri-arrow-right-line text-xs group-hover:translate-x-0.5 transition-transform"></i>
            </div>
          </span>
          <span className="inline-flex items-center gap-1 bg-neutral-100 text-neutral-600 text-[10px] font-medium tracking-[0.1em] uppercase px-2.5 py-1.5 rounded-full">
            <i className="ri-checkbox-circle-line text-xs"></i>
            {project.status}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsGrid() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} mb-12`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-neutral-400"></span>
            <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">Our Portfolio</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 leading-tight tracking-[-0.01em]">
              All Projects
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
              Completed works across residential, commercial, and interior design — each crafted to last.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i * 80}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
