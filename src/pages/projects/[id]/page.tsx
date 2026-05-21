import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { projects } from '../../../mocks/projects';
import { useCanonical } from '../../../hooks/useCanonical';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const project = projects.find((p) => p.id === Number(id));

  // ── Canonical, robots, description, OG — handled by shared hook ──
  useCanonical(project ? `/projects/${project.id}` : '/projects', {
    description: project
      ? `${project.title} — ${project.category} project by Casa Associates in ${project.location}. View photos and details of this completed project. Call +91 90009 75046.`.slice(0, 160)
      : undefined,
    ogImage: project?.imageUrl,
  });

  useEffect(() => {
    if (!project) return;
    const siteUrl = 'https://casaassociates.com';
    const pageUrl = `${siteUrl}/projects/${project.id}`;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description || `${project.title} — a ${project.category} project by Casa Associates in ${project.location}.`,
      url: pageUrl,
      image: project.imageUrl,
      locationCreated: { '@type': 'Place', name: project.location },
      creator: { '@type': 'Organization', name: 'Casa Associates', url: siteUrl },
      dateCreated: project.year,
      genre: project.category,
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${siteUrl}/projects` },
        { '@type': 'ListItem', position: 3, name: project.title, item: pageUrl },
      ],
    };

    const scriptId = `project-schema-${project.id}`;
    const breadcrumbScriptId = `project-breadcrumb-schema-${project.id}`;

    const addScript = (sid: string, content: object) => {
      if (document.getElementById(sid)) return;
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = sid;
      s.textContent = JSON.stringify(content);
      document.head.appendChild(s);
    };

    addScript(scriptId, schema);
    addScript(breadcrumbScriptId, breadcrumbSchema);
    document.title = `${project.title} | ${project.category} Project Hyderabad | Casa Associates`;

    // OG title
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (!ogTitle) { ogTitle = document.createElement('meta'); ogTitle.setAttribute('property', 'og:title'); document.head.appendChild(ogTitle); }
    ogTitle.content = `${project.title} | ${project.category} Project Hyderabad | Casa Associates`;

    return () => {
      [scriptId, breadcrumbScriptId].forEach((sid) => {
        const el = document.getElementById(sid);
        if (el) el.remove();
      });
    };
  }, [project]);

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl text-neutral-900 mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-neutral-600 hover:text-neutral-900 underline">
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const hasGallery = project.galleryImages && project.galleryImages.length > 0;
  const allImages = hasGallery ? project.galleryImages! : [project.imageUrl];
  const heroImage = allImages[0];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setSelectedImage(allImages[index]);
  };

  const closeLightbox = () => setSelectedImage(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (lightboxIndex - 1 + allImages.length) % allImages.length;
    setLightboxIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (lightboxIndex + 1) % allImages.length;
    setLightboxIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-neutral-500 text-sm hover:text-neutral-900 transition-colors mb-6"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-left-line"></i>
              </div>
              Back to Projects
            </Link>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <span className="inline-block bg-neutral-100 text-neutral-600 text-[10px] font-medium tracking-[0.16em] uppercase px-3 py-1.5 rounded-full mb-4">
                  {project.category}
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-[-0.01em]">
                  {project.title}
                </h1>
              </div>
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span>{project.location}</span>
              </div>
            </div>

            {/* Hero Image — full natural ratio, no crop */}
            <div
              className="relative rounded-2xl overflow-hidden bg-neutral-100 cursor-pointer group w-full"
              onClick={() => openLightbox(0)}
            >
              <img
                src={heroImage}
                alt={project.title}
                className="w-full h-auto object-contain group-hover:opacity-95 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-neutral-800 text-xs font-medium px-3 py-2 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-zoom-in-line"></i>
                </div>
                View Full Size
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 md:py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div>
              {/* Info + Gallery */}
              <div>
                <h2 className="font-serif text-2xl text-neutral-900 mb-6">About the Project</h2>
                {project.description ? (
                  <p className="text-neutral-600 leading-relaxed mb-8">{project.description}</p>
                ) : (
                  <p className="text-neutral-400 italic mb-8">No description available.</p>
                )}

                {/* Gallery — natural aspect ratio, no forced crop */}
                {hasGallery && (
                  <div className="mt-10">
                    <h3 className="font-serif text-xl text-neutral-900 mb-6">
                      Project Gallery
                      <span className="ml-3 text-neutral-400 text-sm font-sans font-normal">
                        {allImages.length} photos
                      </span>
                    </h3>
                    <div className="columns-2 md:columns-3 gap-3 space-y-3">
                      {allImages.map((img, index) => (
                        <div
                          key={index}
                          className="break-inside-avoid relative rounded-xl overflow-hidden bg-neutral-200 cursor-pointer group block"
                          onClick={() => openLightbox(index)}
                        >
                          <img
                            src={img}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100">
                              <i className="ri-zoom-in-line text-neutral-900"></i>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox with prev/next navigation */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white hover:text-neutral-300 transition-colors z-10"
            onClick={closeLightbox}
          >
            <i className="ri-close-line text-2xl"></i>
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {allImages.length}
          </div>

          {/* Prev */}
          {allImages.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:text-neutral-300 transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full"
              onClick={prevImage}
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
          )}

          {/* Image — full natural size, no crop */}
          <img
            src={selectedImage}
            alt="Project view"
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {allImages.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:text-neutral-300 transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full"
              onClick={nextImage}
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          )}
        </div>
      )}
    </>
  );
}
