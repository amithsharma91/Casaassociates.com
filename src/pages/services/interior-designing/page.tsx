import ServicePageTemplate, { ServicePageData } from '../components/ServicePageTemplate';
import InteriorProjectsSection from './components/InteriorProjectsSection';

const data: ServicePageData = {
  slug: 'interior-designing',
  heroTitle: 'Interior Designing & Execution',
  heroSubtitle: 'Turnkey interior solutions that transform spaces into extraordinary living and working environments.',
  heroImage: 'https://readdy.ai/api/search-image?query=luxury%20modern%20Indian%20interior%20design%20living%20room%20premium%20white%20neutral%20tones%20custom%20furniture%20elegant%20minimal%20lighting%20marble%20floor%20high%20end%20residential%20design%20India&width=1920&height=700&seq=interiorsvc1&orientation=landscape',
  intro: 'Our interior design team delivers complete turnkey solutions — from first concept to final styling. We approach every project as a unique canvas, blending client aspirations with functional excellence, material mastery, and meticulous project management. With in-house execution capabilities, we eliminate the gap between design and delivery, ensuring your space looks exactly as envisioned.',
  benefits: [
    { icon: 'ri-lightbulb-flash-line', title: 'Concept Development', desc: 'Tailored mood boards, material palettes, and design concepts developed around your lifestyle and preferences.' },
    { icon: 'ri-layout-4-line', title: 'Space Planning', desc: 'Optimised space utilisation and furniture layouts designed for flow, function, and aesthetic harmony.' },
    { icon: 'ri-door-open-line', title: 'Modular Furniture', desc: 'Custom modular kitchen, wardrobe, storage units, and furniture designed and executed by our workshop.' },
    { icon: 'ri-home-gear-line', title: 'False Ceilings', desc: 'Designer gypsum, POP, and wooden false ceilings with integrated lighting and electrical planning.' },
    { icon: 'ri-flashlight-line', title: 'Electrical & Lighting', desc: 'Comprehensive electrical planning — points, circuiting, and lighting design including accent and mood lighting.' },
    { icon: 'ri-paint-brush-line', title: 'Wall Treatments', desc: 'Feature walls, textured finishes, wallpapers, PU paints, and custom panelling for every room.' },
    { icon: 'ri-tools-fill', title: 'Project Management', desc: 'Single-point accountability for all trades — carpentry, civil, electrical, plumbing — coordinated seamlessly.' },
    { icon: 'ri-flower-line', title: 'Styling & Accessorising', desc: 'Final styling with curated accessories, art, plants, and soft furnishings for a magazine-ready finish.' },
    { icon: 'ri-checkbox-circle-line', title: 'Quality Assurance', desc: 'Stage-wise inspection and a comprehensive snag list process before final handover.' },
  ],
  process: [
    { step: '01', title: 'Lifestyle Consultation', desc: 'In-depth discussion of your lifestyle, preferences, budget, and timeline. Site measurement and existing condition survey.' },
    { step: '02', title: 'Concept Presentation', desc: 'Mood boards, 3D renders, material samples, and design concept presented for your review and approval.' },
    { step: '03', title: 'Design Finalisation', desc: 'Detailed working drawings — furniture layout, elevation drawings, electrical layout, and material specifications finalised.' },
    { step: '04', title: 'BOQ & Contract', desc: 'Detailed Bill of Quantities with transparent pricing. Contract signed with agreed scope, timeline, and milestones.' },
    { step: '05', title: 'Execution', desc: 'Civil works, false ceiling, electrical, plumbing, carpentry — all trades executed and coordinated by our site team.' },
    { step: '06', title: 'Styling & Handover', desc: 'Final styling, snag resolution, cleaning, and handover of your beautifully completed space.' },
  ],
  benefitsBg: 'https://storage.readdy-site.link/project_files/ffc4f7b6-7f29-4f49-86dc-95a7e6007e80/3433edb2-0f71-4013-969a-7df8b57b30d2_43b6f946-c2cf-4f7d-b86a-e9e09b4d5258.jpeg?v=1dc949e60d594a95edaeb128a3349fb2',
  faqs: [
    { q: 'How long does a complete interior project take?', a: 'A 3BHK apartment typically takes 45–75 days after design finalisation. Larger homes and commercial projects may take longer. We provide project-specific timelines upfront.' },
    { q: 'Do you offer interior design only, or also execution?', a: 'We offer both. Most of our clients prefer our turnkey model where we handle both design and complete execution — this ensures seamless quality and a single point of accountability.' },
    { q: 'Can I use my own materials or vendor preferences?', a: 'Absolutely. We are flexible about incorporating your preferred brands, materials, or existing furniture into the design. We can also source specific items on your behalf.' },
    { q: 'Do you undertake commercial interior projects as well?', a: 'Yes. We execute office interiors, retail stores, showrooms, restaurants, and hospitality interiors in addition to residential projects.' },
    { q: 'What is included in turnkey delivery?', a: 'Turnkey means we deliver a fully finished, ready-to-move-in space — including all civil work, carpentry, electrical, plumbing, false ceiling, painting, flooring, and final styling.' },
  ],
};

export default function InteriorDesigningPage() {
  return <ServicePageTemplate data={data} midBanner={<InteriorProjectsSection />} />;
}
