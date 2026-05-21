import ServicePageTemplate, { ServicePageData } from '../components/ServicePageTemplate';

const data: ServicePageData = {
  slug: 'builders-developers',
  heroTitle: 'Builders & Developers',
  heroSubtitle: 'Complete construction support for residential and commercial projects, delivered on schedule and built to the highest quality standards.',
  heroImage: 'https://readdy.ai/api/search-image?query=Indian%20construction%20site%20professional%20workers%20building%20concrete%20structure%20modern%20residential%20complex%20quality%20construction%20India%20premium%20developer&width=1920&height=700&seq=buildsvc1&orientation=landscape',
  intro: 'Our construction team provides comprehensive building services under a transparent rate contract model. Whether you are a landowner, developer, or institution, we manage your entire construction project from mobilisation to handover — ensuring quality workmanship, schedule adherence, and cost efficiency. We combine modern construction methods with traditional craftsmanship for results that endure decades.',
  benefits: [
    { icon: 'ri-contract-line', title: 'Rate Contract Model', desc: 'Transparent rate contracts with pre-agreed rates per item — giving you cost certainty and full financial control.' },
    { icon: 'ri-home-2-line', title: 'Residential Construction', desc: 'Bungalows, row houses, apartment buildings, villas — constructed with care and superior quality finishes.' },
    { icon: 'ri-building-3-line', title: 'Commercial Construction', desc: 'Offices, showrooms, warehouses, mixed-use developments — built to commercial standards and timelines.' },
    { icon: 'ri-tools-line', title: 'Complete Site Management', desc: 'Dedicated site engineer, foremen, skilled workforce, and material procurement managed for you.' },
    { icon: 'ri-shield-check-line', title: 'Quality Assurance', desc: 'Stage-wise quality inspections, material testing, and strict adherence to IS codes throughout construction.' },
    { icon: 'ri-timer-line', title: 'On-Time Delivery', desc: 'Structured milestone planning and proactive site management ensure your project is delivered as scheduled.' },
  ],
  process: [
    { step: '01', title: 'Site Assessment & Planning', desc: 'Detailed site visit, soil testing coordination, and comprehensive project planning with a milestone schedule.' },
    { step: '02', title: 'Rate Contract Agreement', desc: 'Transparent rate schedule covering all items of work — no hidden charges, clear scope definition.' },
    { step: '03', title: 'Mobilisation', desc: 'Site setup, workforce deployment, material sourcing, and equipment mobilisation for a fast start.' },
    { step: '04', title: 'Structural Construction', desc: 'Foundation, columns, slabs, beams — built with tested materials and rigorous quality checks at every stage.' },
    { step: '05', title: 'Finishing Works', desc: 'Plastering, tiling, woodwork, plumbing, electrical — all finishing trades coordinated and supervised by us.' },
    { step: '06', title: 'Handover & Snag Resolution', desc: 'Final inspection, punch list resolution, utility connections, and formal handover with completion certificates.' },
  ],
  faqs: [
    { q: 'What is a rate contract and how does it benefit me?', a: 'A rate contract defines agreed rates per unit for each construction activity. This gives you full transparency — you pay only for what is actually executed, verified by measurements.' },
    { q: 'Do you also arrange architects and structural engineers?', a: 'Yes. If you do not already have an architect, we can arrange our in-house architecture team to handle all design and drawing requirements before construction begins.' },
    { q: 'What is the minimum project size you undertake?', a: 'We typically work on projects of 1,500 sq ft and above. For smaller renovation works, please contact us to assess feasibility.' },
    { q: 'How do you ensure quality on site?', a: 'We deploy a dedicated site engineer and supervisor, conduct material testing for concrete and steel, and carry out stage-wise quality inspections with photographic records shared with the client.' },
  ],
};

export default function BuildersDevelopersPage() {
  return <ServicePageTemplate data={data} />;
}
