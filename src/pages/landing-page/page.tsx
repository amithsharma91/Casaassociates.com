import { useEffect, useRef, useState, type FormEvent } from 'react';
import './landing.css';

const PHONE_DISPLAY = '+91 90009 75046';
const PHONE_TEL = '+919000975046';
const PHONE_ALT = '040 4953 5046';
const EMAIL = 'contact@casaassociates.com';
const WA_NUMBER = '919000975046';
const WA_DEFAULT = `https://wa.me/${WA_NUMBER}?text=Hello%20Casa%20Associates,%20I%20would%20like%20to%20discuss%20my%20project.`;
const WA_QUOTE = `https://wa.me/${WA_NUMBER}?text=Hello%20Casa%20Associates,%20I%20would%20like%20a%20free%20quote%20for%20my%20project.`;

const LOGO =
  'https://storage.readdy-site.link/project_files/ffc4f7b6-7f29-4f49-86dc-95a7e6007e80/b9b3212d-1533-4b62-ab8e-92c587cf87b0_IMG_20260330_003824-removebg-preview.png?v=e61cc37f9e03ca219be905683a3b564d';

const services = [
  { icon: '⌂', title: 'Architects & Engineers', text: 'Professional architectural planning, structural design, and 3D elevations aligned with Vaastu principles — delivered with precision and care.' },
  { icon: '▦', title: 'Builders & Developers', text: 'Complete construction solutions for residential and commercial projects with high-quality execution and on-time delivery.' },
  { icon: '✓', title: 'Liaisoning Works', text: 'End-to-end building approval support, coordination with GHMC, HMDA, and government authorities — so you never have to chase permits.' },
  { icon: '◫', title: 'Interior Designing & Execution', text: 'Turnkey interior solutions including concept design, modular furniture, false ceilings, lighting, and final styling — delivered to perfection.' },
];

const whyCards = [
  { icon: '◷', title: '15+ Years Experience', text: 'Delivering exceptional construction and design solutions in Hyderabad and beyond.' },
  { icon: '▦', title: '120+ Projects Completed', text: 'From premium residences to commercial spaces, delivered with quality and precision.' },
  { icon: '⌂', title: 'End-to-End Solutions', text: 'Architecture, construction, interiors, and liaisoning — all under one roof.' },
  { icon: '✓', title: 'Trusted by 200+ Clients', text: 'Clients trust us with homes, offices, and commercial properties.' },
  { icon: '◫', title: 'Local Expertise', text: 'Deep knowledge of Hyderabad regulations, terrain, and municipal workflows.' },
  { icon: '@', title: 'Transparent Process', text: 'Honest timelines, clear pricing, and regular updates throughout your project.' },
];

const processSteps = [
  { n: '01', title: 'Understand', text: 'We understand your service requirement, location, project scope and expectations.' },
  { n: '02', title: 'Plan', text: 'Our team develops the appropriate design, planning, approval and execution approach.' },
  { n: '03', title: 'Execute', text: 'Construction, interiors or related services are coordinated through the project.' },
  { n: '04', title: 'Deliver', text: 'The project moves toward completion with attention to quality and agreed requirements.' },
];

const projects = [
  { img: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/a7620d3f42b0a1f1fd126020d10f0a9f.jpeg', alt: 'Commercial RVKS CA Office', tag: 'Commercial', name: 'RVKS - CA Office', loc: 'Hyderabad, Telangana' },
  { img: 'https://storage.readdy-site.link/project_files/ffc4f7b6-7f29-4f49-86dc-95a7e6007e80/6c9f1c4c-2693-4b0a-997b-85930d6dc1b4_Photo_20-1.jpg?v=5e25c9e52f379930f9f7374556de2916', alt: 'My Home Mangala', tag: 'Residential', name: 'My Home Mangala', loc: 'Hyderabad, Telangana' },
  { img: 'https://storage.readdy-site.link/project_files/ffc4f7b6-7f29-4f49-86dc-95a7e6007e80/a71b75f9-a7e7-484d-931b-2cf5c0963aef_Google-Photos-1_16-2.jpg?v=9a0d424852c6b22f775e32a9f3fb1ad6', alt: 'Aparna Silver Oaks', tag: 'Residential', name: 'Aparna Silver Oaks', loc: 'Hyderabad, Telangana' },
  { img: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/485091ea8f3a3464bc113c6b51237bbd.jpeg', alt: 'My Home Villa', tag: 'Residential', name: 'My Home Villa', loc: 'Hyderabad, Telangana' },
  { img: 'https://storage.readdy-site.link/project_files/ffc4f7b6-7f29-4f49-86dc-95a7e6007e80/31cff0a6-f813-4aae-bd37-7d848acff056_IMG_20260404_224420.jpg?v=e9b90b09d3c9d39909d6a9c90bebae96', alt: 'Sri Aditya Athena', tag: 'Residential', name: 'Sri Aditya Athena', loc: 'Hyderabad, Telangana' },
  { img: 'https://public.readdy.ai/ai/img_res/3721b0b646dbcb0d2dd328bb1014ce16.jpg', alt: 'Casa Associates Projects', tag: 'Architecture & Interiors', name: '120+ Completed Works', loc: 'Hyderabad & Surrounding Areas' },
];

const sustain = [
  { icon: '♧', title: 'Water Efficiency', text: 'Rainwater harvesting, low-flow fixtures and greywater recycling systems where applicable.' },
  { icon: '☀', title: 'Energy Efficiency', text: 'Solar-ready designs, optimal building orientation and energy-efficient material specifications.' },
  { icon: '◇', title: 'Local Material Sourcing', text: 'Regionally sourced materials to reduce transportation impact and support local craftsmen.' },
  { icon: '⌁', title: 'Indoor Air Quality', text: 'Low-VOC finishes, ventilation design and non-toxic material selection.' },
];

const testimonials = [
  { text: 'Exceptional quality and professionalism. The team maintained attention to project requirements and delivered with a strong focus on execution.', name: 'Rajesh Mehta', role: 'Property Developer · Residential Project' },
  { text: 'The interior team transformed our home with thoughtful planning across false ceilings, modular furniture, lighting and final styling.', name: 'Priya Nair', role: 'Homeowner · Interior Design Client' },
  { text: 'Their liaisoning support helped coordinate the municipal approval process and made the overall experience easier to manage.', name: 'Sanjay Kulkarni', role: 'Commercial Developer · Liaisoning Client' },
  { text: 'We engaged Casa Associates for our office transformation. The result brought together design and execution requirements into one coordinated project.', name: 'Vikram Agarwal', role: 'Managing Director · Hyderabad IT Firm' },
  { text: 'As first-time homeowners, we appreciated the guidance throughout the interior process, from design discussions to final styling.', name: 'Sneha Reddy', role: 'Homeowner · 3BHK Apartment' },
  { text: 'The project approach was structured and transparent, helping us coordinate construction requirements and project execution.', name: 'Suresh Patil', role: 'Builder & Developer · Construction Client' },
];

const featureBlocks = [
  {
    cream: false,
    imageFirst: true,
    img: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/3a6d8f96d7fe4d39df9fd6d3c5fa8b16.jpeg',
    alt: 'Architectural Planning',
    label: 'Architecture & Engineering',
    title: 'Thoughtful Planning Before Construction Begins',
    desc: 'Professional architectural planning, structural design and 3D elevations developed around your site, requirements and design direction.',
    items: [
      ['Architectural Planning', 'Planning solutions developed around your site and requirements.'],
      ['Structural Design', 'Structural planning integrated with the overall project design.'],
      ['3D Elevations', 'Visual representation to help understand the proposed design.'],
      ['Vaastu-Aligned Planning', 'Design considerations aligned with Vaastu requirements where requested.'],
    ],
  },
  {
    cream: true,
    imageFirst: false,
    img: 'https://public.readdy.ai/ai/img_res/2b71fbfc3d3271e192d007630dd73276.jpg',
    alt: 'Construction Services',
    label: 'Builders & Developers',
    title: 'Construction Focused on Quality and Execution',
    desc: 'Complete construction solutions for residential and commercial projects with coordinated execution and an on-time focus.',
    items: [
      ['Residential Construction', 'Construction solutions for individual homes and residential developments.'],
      ['Commercial Construction', 'Project execution for offices and commercial spaces.'],
      ['Project Coordination', 'Coordinated execution to reduce fragmented contractor management.'],
      ['On-Time Focus', 'Planning and execution structured around agreed project timelines.'],
    ],
  },
  {
    cream: false,
    imageFirst: true,
    img: 'https://storage.readdy-site.link/project_files/ffc4f7b6-7f29-4f49-86dc-95a7e6007e80/756cc212-4f62-4999-9ed9-69cfe0abfb04_Photo_16-1.jpg?v=9593245bc02a96aba132c9d9227c3da8',
    alt: 'Interior Design',
    label: 'Interior Designing & Execution',
    title: 'Interiors Designed for the Way You Live and Work',
    desc: 'Turnkey interior solutions including concept design, modular furniture, false ceilings, lighting and final styling.',
    items: [
      ['Concept Design', 'Design direction developed around your space and preferences.'],
      ['Modular Furniture', 'Functional storage and furniture solutions for modern interiors.'],
      ['False Ceilings & Lighting', 'Integrated ceiling and lighting solutions for a coordinated interior.'],
      ['Final Styling', 'Finishing details that bring the complete interior concept together.'],
    ],
  },
];

type ToastKind = 'success' | 'error';
const TOAST_EVENT = 'lp-toast';

function showToast(kind: ToastKind, title: string, message: string) {
  window.dispatchEvent(new CustomEvent(TOAST_EVENT, { detail: { kind, title, message } }));
}

function Toast() {
  const [t, setT] = useState<{ kind: ToastKind; title: string; message: string } | null>(null);
  const [show, setShow] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onToast = (e: Event) => {
      setT((e as CustomEvent).detail);
      setShow(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setShow(false), 5000);
    };
    window.addEventListener(TOAST_EVENT, onToast);
    return () => {
      window.removeEventListener(TOAST_EVENT, onToast);
      window.clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className={`toast${t?.kind === 'error' ? ' error' : ''}${show ? ' show' : ''}`} role="status" aria-live="polite">
      <div className="toast-icon">{t?.kind === 'error' ? '!' : '✓'}</div>
      <div>
        <strong>{t?.title}</strong>
        <span className="toast-msg">{t?.message}</span>
      </div>
      <button type="button" className="toast-close" aria-label="Close" onClick={() => setShow(false)}>×</button>
    </div>
  );
}

async function handleLeadForm(e: FormEvent<HTMLFormElement>, source: string, onDone?: () => void) {
  e.preventDefault();
  const f = e.currentTarget;
  const data = new FormData(f);
  const name = String(data.get('name') ?? '').trim();
  const phone = String(data.get('phone') ?? '').trim();
  const service = String(data.get('service') ?? '');
  const message = String(data.get('message') ?? '').trim();

  const btn = f.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (btn) btn.disabled = true;
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `New Lead Consultation Request: ${service || 'General Inquiry'} - ${name}`,
        _template: 'table',
        _captcha: 'false',
        Source: `Landing Page (${source})`,
        Name: name,
        Phone: phone,
        Service: service,
        'Project Details': message || '-',
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    f.reset();
    onDone?.();
    showToast('success', 'Request received!', 'Thank you! Our team will call you back within a few hours.');
  } catch {
    showToast('error', 'Something went wrong', `Please call ${PHONE_DISPLAY} or email ${EMAIL}.`);
  } finally {
    if (btn) btn.disabled = false;
  }
}

function ServiceOptions() {
  return (
    <>
      <option value="" disabled>Select Service</option>
      <option>Architecture &amp; Planning</option>
      <option>Construction</option>
      <option>Liaisoning</option>
      <option>Interior Designing</option>
    </>
  );
}

export default function LandingPage() {
  const [popupOpen, setPopupOpen] = useState(false);
  const popupShown = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Casa Associates | Architecture, Construction & Interiors Hyderabad';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  // Popup at 60% scroll
  useEffect(() => {
    const onScroll = () => {
      if (popupShown.current) return;
      const scrolled = window.scrollY + window.innerHeight;
      if (scrolled / document.documentElement.scrollHeight >= 0.6) {
        popupShown.current = true;
        setPopupOpen(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const moveTestimonial = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector<HTMLElement>('.testimonial-slide');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 20;
    const step = slide ? slide.getBoundingClientRect().width + gap : track.clientWidth;
    const maxScroll = track.scrollWidth - track.clientWidth;
    let target = track.scrollLeft + dir * step;
    if (target < 4) target = maxScroll;
    else if (target > maxScroll - 4) target = 0;
    track.scrollTo({ left: target, behavior: 'smooth' });
  };

  // Testimonial autoplay (paused on hover)
  const moveRef = useRef(moveTestimonial);
  moveRef.current = moveTestimonial;
  useEffect(() => {
    const id = setInterval(() => {
      if (!hoverRef.current) moveRef.current(1);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="lp">
      <Toast />
      <div className="topbar">
        <div className="container">
          <div>{PHONE_DISPLAY} &nbsp; | &nbsp; {PHONE_ALT}</div>
          <div>{EMAIL} &nbsp; | &nbsp; Banjara Hills, Hyderabad · Mon–Sat 9 AM–7 PM</div>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="logo">
            <img src={LOGO} alt="Casa Associates" className="logo-image" />
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#why">Why Us</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn btn-primary">{PHONE_DISPLAY}</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="label">Architecture · Construction · Interiors</span>
              <h1>Your Dream Space, <span>Built Right</span> — Start to Finish in Hyderabad</h1>
              <p>One trusted team for design, approvals, construction and interiors — so your project moves forward without the stress of juggling contractors.</p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">Get Free Quote →</a>
                <a href={WA_DEFAULT} target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp Us</a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat"><strong>120+</strong><span>Projects Completed</span></div>
                <div className="hero-stat"><strong>15+</strong><span>Years Experience</span></div>
                <div className="hero-stat"><strong>200+</strong><span>Happy Clients</span></div>
                <div className="hero-stat"><strong>100%</strong><span>On-Time Focus</span></div>
              </div>
            </div>
            <div className="hero-form-card" id="hero-form-card">
              <h3>Get a Free Consultation</h3>
              <p>Share your details — our team will call you back within a few hours.</p>
              <form className="lead-form" onSubmit={(e) => handleLeadForm(e, 'Hero Form')}>
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="tel" name="phone" placeholder="Phone Number" required pattern="[0-9]{10}" />
                <select name="service" required defaultValue=""><ServiceOptions /></select>
                <textarea name="message" placeholder="Tell us about your project (optional)"></textarea>
                <button type="submit" className="btn btn-primary">Request Free Quote →</button>
                <span className="lead-form-note">No spam. We respect your privacy.</span>
              </form>
            </div>
          </div>
          <div className="hero-certs">
            <div className="hero-cert"><strong>ISO 9001:2015</strong><span>Quality Certified</span></div>
            <div className="hero-cert"><strong>IGBC Aligned</strong><span>Green Building</span></div>
            <div className="hero-cert"><strong>TSRERA Registered</strong><span>Telangana</span></div>
            <div className="hero-cert"><strong>COA Certified</strong><span>Council of Architecture</span></div>
            <div className="hero-cert"><strong>IS 456</strong><span>Compliant</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container about-grid">
          <div className="about-image">
            <img src="https://public.readdy.ai/ai/img_res/e9440554887101f142a15a91482c0638.jpg" alt="Casa Associates" />
            <div className="badge"><strong>15+</strong><span>Years of Excellence</span></div>
          </div>
          <div className="about-content">
            <span className="label">Our Story</span>
            <h2 className="title">Built on Trust, Delivered with Precision</h2>
            <p>Casa Associates is a Hyderabad-based construction, architectural, and interior solutions company with over 15 years of experience. We specialize in delivering end-to-end solutions — from planning and approvals to design and execution.</p>
            <p>Our mission is to transform ideas into functional, beautiful, and long-lasting spaces. As a one-stop, turnkey service provider, we eliminate the complexity of managing multiple contractors.</p>
            <p>Over 120+ projects completed and trusted by 200+ happy clients, we continue to provide complete construction and architecture solutions across Hyderabad.</p>
            <div className="about-points">
              <div className="about-point"><strong>120+ Projects Completed</strong><span>Successfully delivered projects</span></div>
              <div className="about-point"><strong>15+ Years of Excellence</strong><span>Industry experience</span></div>
              <div className="about-point"><strong>200+ Happy Clients</strong><span>Homes, offices and commercial spaces</span></div>
              <div className="about-point"><strong>Based in Hyderabad</strong><span>Banjara Hills · All of Hyderabad</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="heading-row">
            <div>
              <span className="label">Our Services</span>
              <h2 className="title">Complete Solutions Under One Roof</h2>
              <p className="desc">End-to-end solutions for every stage of your construction and design journey in Hyderabad.</p>
            </div>
            <a href="#contact" className="btn btn-primary">Discuss Your Project →</a>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="card" key={s.title}>
                <div className="number">{String(i + 1).padStart(2, '0')}</div>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why" id="why">
        <div className="container why-grid">
          <div>
            <span className="label">Why Choose Casa Associates</span>
            <h2 className="title">Experience That Simplifies Your Project</h2>
            <p className="desc">Six strong reasons our clients keep coming back and recommending us to family and friends in Hyderabad.</p>
          </div>
          <div className="why-cards">
            {whyCards.map((c) => (
              <div className="why-card" key={c.title}>
                <div className="why-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {featureBlocks.map((b) => {
        const image = (
          <div className="feature-image"><img src={b.img} alt={b.alt} /></div>
        );
        const content = (
          <div className="feature-content">
            <span className="label">{b.label}</span>
            <h2 className="title">{b.title}</h2>
            <p className="desc">{b.desc}</p>
            <div className="feature-list">
              {b.items.map(([t, s]) => (
                <div className="feature-item" key={t}>
                  <div className="check">✓</div>
                  <div><strong>{t}</strong><span>{s}</span></div>
                </div>
              ))}
            </div>
          </div>
        );
        return (
          <section className={`section${b.cream ? ' cream' : ''}`} key={b.title}>
            <div className="container feature-grid">
              {b.imageFirst ? <>{image}{content}</> : <>{content}{image}</>}
            </div>
          </section>
        );
      })}

      <section className="section liaison">
        <div className="container">
          <div className="liaison-box">
            <div>
              <span className="label">Liaisoning Works</span>
              <h2 className="title">Simplifying Building Approvals</h2>
              <p>End-to-end building approval support and coordination with GHMC, HMDA and government authorities.</p>
              <br />
              <a href="#contact" className="btn btn-primary">Discuss Approval Requirements →</a>
            </div>
            <div className="liaison-points">
              <div className="liaison-point"><strong>GHMC Coordination</strong><span>Support with applicable municipal processes.</span></div>
              <div className="liaison-point"><strong>HMDA Coordination</strong><span>Assistance with relevant planning requirements.</span></div>
              <div className="liaison-point"><strong>Documentation</strong><span>Coordination around required project documents.</span></div>
              <div className="liaison-point"><strong>Approval Support</strong><span>End-to-end support through the approval process.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="container">
          <span className="label">Our Process</span>
          <h2 className="title">From First Conversation to Final Execution</h2>
          <p className="desc">A structured approach helps keep your project coordinated, transparent and easier to manage.</p>
          <div className="process-grid">
            {processSteps.map((p) => (
              <div className="process-card" key={p.n}>
                <div className="number">{p.n}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="container">
          <div className="heading-row">
            <div>
              <span className="label">Selected Works</span>
              <h2 className="title">Projects Across Hyderabad</h2>
              <p className="desc">Delivering modern residential and commercial spaces across Hyderabad with precision and craftsmanship.</p>
            </div>
            <a href="#contact" className="btn btn-primary">Start Your Project →</a>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <div className="project" key={p.name}>
                <img src={p.img} alt={p.alt} loading="lazy" />
                <div className="project-content">
                  <small>{p.tag}</small>
                  <h3>{p.name}</h3>
                  <span>{p.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <span className="label">Our Commitment</span>
          <h2 className="title">Building Responsibly</h2>
          <p className="desc">We design and build sustainable spaces with a focus on energy efficiency, water conservation and eco-friendly materials.</p>
          <div className="sustain-grid">
            {sustain.map((s) => (
              <div className="sustain" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container center">
          <span className="label">Testimonials</span>
          <h2 className="title">What Our Clients Say About Us</h2>
          <p className="desc">Real experiences from homeowners, developers and business owners who trusted Casa Associates with their vision.</p>
          <div className="rating">★ 4.9/5 across 200+ clients</div>
          <div
            className="testimonial-carousel"
            onMouseEnter={() => { hoverRef.current = true; }}
            onMouseLeave={() => { hoverRef.current = false; }}
          >
            <div className="testimonial-track" ref={trackRef}>
              {testimonials.map((t) => (
                <div className="testimonial-slide" key={t.name}>
                  <div className="testimonial">
                    <div className="quote">“</div>
                    <p>{t.text}</p>
                    <div className="client"><strong>{t.name}</strong><span>{t.role}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-controls">
            <button className="carousel-arrow" onClick={() => moveTestimonial(-1)} aria-label="Previous">←</button>
            <button className="carousel-arrow" onClick={() => moveTestimonial(1)} aria-label="Next">→</button>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta-grid">
          <div>
            <span className="label">Start Your Project</span>
            <h2 className="title">Ready to Get Started?</h2>
            <p>Get a quick response on WhatsApp. Tell us your service, location and budget — our architects will take it from there.</p>
            <div className="cta-buttons">
              <a href={WA_QUOTE} target="_blank" rel="noreferrer" className="btn btn-primary">Get Instant Quote on WhatsApp</a>
              <a href={`tel:${PHONE_TEL}`} className="btn btn-outline">Call {PHONE_DISPLAY}</a>
            </div>
          </div>
          <div className="cta-info">
            <h3>Quick Contact</h3>
            <div className="cta-row"><b>☎</b><span>{PHONE_DISPLAY}</span></div>
            <div className="cta-row"><b>☎</b><span>{PHONE_ALT}</span></div>
            <div className="cta-row"><b>@</b><span>{EMAIL}</span></div>
            <div className="cta-row"><b>◷</b><span>Mon – Sat · 9:00 AM – 7:00 PM</span></div>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-card">
            <span className="label">Contact Casa Associates</span>
            <h2 className="title">Let's Discuss Your Project</h2>

            <div className="contact-item">
              <b>⌖</b>
              <div>
                <strong>Office Address</strong>
                <span>
                  4th Floor, Bhooma Plaza<br />
                  Road No. 01, Avenue 07, Street 04<br />
                  Near GVK One Mall, Banjara Hills<br />
                  Hyderabad, Telangana 500034
                </span>
              </div>
            </div>
            <div className="contact-item">
              <b>☎</b>
              <div>
                <strong>Phone</strong>
                <span>{PHONE_DISPLAY}<br />{PHONE_ALT}</span>
              </div>
            </div>
            <div className="contact-item">
              <b>@</b>
              <div>
                <strong>Email</strong>
                <span>{EMAIL}</span>
              </div>
            </div>
            <div className="contact-item">
              <b>◷</b>
              <div>
                <strong>Working Hours</strong>
                <span>Mon – Sat · 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          <div className="map">
            <iframe
              title="Casa Associates location"
              src="https://www.google.com/maps?q=Casa%20Associates%20Hyderabad&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <a href="#home" aria-label="Casa Associates">
                  <img src={LOGO} alt="Casa Associates" className="footer-logo-image" />
                </a>
              </div>
              <p className="footer-about">
                Hyderabad-based architecture, construction and interior solutions company providing complete project support from planning and approvals to design and execution.
              </p>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#why">Why Choose Us</a></li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Architects &amp; Engineers</a></li>
                <li><a href="#services">Builders &amp; Developers</a></li>
                <li><a href="#services">Liaisoning Works</a></li>
                <li><a href="#services">Interior Designing</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
                <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li>Banjara Hills, Hyderabad</li>
                <li>Mon – Sat · 9 AM – 7 PM</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Casa Associates. All Rights Reserved.</span>
            <span>Hyderabad, India</span>
          </div>
        </div>
      </footer>

      <a className="whatsapp" href={WA_DEFAULT} target="_blank" rel="noreferrer" aria-label="WhatsApp">☎</a>

      <div className="mobile-bar">
        <a href={`tel:${PHONE_TEL}`}>Call</a>
        <a href={`mailto:${EMAIL}`}>Email</a>
        <a href={`https://wa.me/${WA_NUMBER}?text=Hello%20Casa%20Associates,%20I%20would%20like%20a%20free%20quote.`} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>

      <div
        className={`popup-overlay${popupOpen ? ' active' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setPopupOpen(false); }}
      >
        <div className="popup-box">
          <button className="popup-close" onClick={() => setPopupOpen(false)} aria-label="Close">&times;</button>
          <span className="label">Limited Consultation Slots</span>
          <h3>Let's Plan Your Project</h3>
          <p>Get a free, no-obligation consultation with our design &amp; construction experts.</p>
          <form className="lead-form" onSubmit={(e) => handleLeadForm(e, 'Popup Form', () => setPopupOpen(false))}>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="tel" name="phone" placeholder="Phone Number" required pattern="[0-9]{10}" />
            <select name="service" required defaultValue=""><ServiceOptions /></select>
            <button type="submit" className="btn btn-primary">Request Free Quote →</button>
            <span className="lead-form-note">No spam. We respect your privacy.</span>
          </form>
        </div>
      </div>
    </div>
  );
}
