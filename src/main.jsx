import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Database,
  BrainCircuit,
  BarChart3,
  Server,
  X,
} from 'lucide-react';
import './styles.css';

const GITHUB = 'https://github.com/Shubhh23';
const LINKEDIN = 'https://www.linkedin.com/in/shubh-chak-b01a793b0/';
const EMAIL = 'mailto:shubhchak8881@gmail.com';

// IMPORTANT: every public image goes through this helper.
// Your Vite app is running under /shubh-portfolio/, so plain
// "/certificates/..." or "/hero-..." paths can point to the wrong place.
const BASE = import.meta.env.BASE_URL || '/';
const asset = (path) => `${BASE}${String(path).replace(/^\/+/, '')}`;

const roles = [
  ['01', 'Data Analytics', 'Turn raw and messy datasets into clear business insights, dashboards and decisions.'],
  ['02', 'Data Engineering', 'Build clean preprocessing workflows and dependable foundations for analytics.'],
  ['03', 'Data Science', 'Explore patterns, engineer features and build practical predictive models.'],
  ['04', 'AI / ML Engineering', 'Develop useful machine-learning solutions and keep growing toward production-ready AI.'],
];

const skills = [
  'Python',
  'OOP (Object-Oriented Programming) in Python',
  'SQL',
  'MySQL',
  'SQLite',
  'Power BI',
  'Advanced Excel',
  'Pandas',
  'NumPy',
  'Scikit-learn',
  'XGBoost',
  'Matplotlib',
  'Seaborn',
  'Tableau',
  'AWS S3',
  'Boto3',
  'Jupyter',
  'Git & GitHub',
  'DBMS',
  'Machine Learning',
  'Data Visualization',
  'AI-Assisted Analytics & Workflow Automation',
  'AI Tools: ChatGPT, Gemini, Claude, GitHub Copilot, Power BI Copilot, Microsoft Copilot',
];

const projects = [
  {
    n: '01',
    title: 'Chandigarh Smart City Digital Twin',
    type: 'DATA SCIENCE · URBAN ANALYTICS',
    desc: 'A Python and NumPy based urban analytics concept covering traffic, parking, flood-risk, WiFi coverage, EV charging and emergency-response simulations.',
    repo: 'Chandigarh-SmartCity-Digital-Twin',
    tags: ['Python', 'NumPy', 'Simulation'],
    tone: 'violet',
  },
  {
    n: '02',
    title: 'HR Analytics Dashboard',
    type: 'POWER BI · BUSINESS INTELLIGENCE',
    desc: 'Interactive HR analysis covering attrition, workforce demographics, salary trends, job satisfaction and departmental performance, with data retrieved from Amazon S3 using Python and Boto3.',
    repo: 'HR_Analytics_Dashboard_PowerBI',
    tags: ['Power BI', 'DAX', 'AWS S3', 'Boto3'],
    tone: 'blue',
  },
  {
    n: '03',
    title: 'Calories Burnt Prediction',
    type: 'MACHINE LEARNING · AI',
    desc: 'A supervised ML project using XGBoost and Scikit-learn to predict calories burnt from exercise-related data.',
    repo: 'Calories_Burnt_Prediction_ML',
    tags: ['Python', 'XGBoost', 'Scikit-learn'],
    tone: 'orange',
  },
  {
    n: '04',
    title: 'Customer Shopping Behaviour Analysis',
    type: 'DATA ANALYTICS · SQL · POWER BI',
    desc: 'End-to-end customer behaviour analysis combining Python, SQL and Power BI to turn shopping data into business-focused insights.',
    repo: 'Customer_Shopping_Behaviour_Analysis',
    tags: ['Python', 'SQL', 'Power BI'],
    tone: 'green',
  },
  {
    n: '05',
    title: 'E-Commerce Data Cleaning',
    type: 'DATA ENGINEERING · PYTHON',
    desc: 'A preprocessing workflow that transforms raw e-commerce data into a cleaner, more reliable and analysis-ready dataset.',
    repo: 'Task-1-Shubh',
    tags: ['Python', 'Pandas', 'Cleaning'],
    tone: 'cyan',
  },
  {
    n: '06',
    title: 'E-Commerce Exploratory Data Analysis',
    type: 'DATA SCIENCE · EDA',
    desc: 'Explores customer behaviour, purchasing patterns and trends using Python, Pandas and visualization libraries.',
    repo: 'Task-2-Shubh',
    tags: ['Python', 'Pandas', 'EDA'],
    tone: 'pink',
  },
  {
    n: '07',
    title: 'SQL Data Analysis',
    type: 'SQL · DATA ANALYTICS',
    desc: 'SQLite and Jupyter workflow using filtering, aggregation, grouping and business-focused SQL queries.',
    repo: 'Task-3-Shubh',
    tags: ['SQL', 'SQLite', 'Jupyter'],
    tone: 'yellow',
  },
  {
    n: '08',
    title: 'Customer Behaviour Visualization',
    type: 'BI · DATA VISUALIZATION',
    desc: 'Visual analysis of product demand, payment preferences and order patterns with recommendations and insights.',
    repo: 'Task-4-Shubh',
    tags: ['Python', 'Visualization', 'Insights'],
    tone: 'purple',
  },
  {
    n: '09',
    title: 'Responsive E-Commerce Website',
    type: 'WEB · FRONTEND',
    desc: 'Responsive e-commerce interface demonstrating practical frontend development, layout and user-focused design.',
    repo: 'responsive-ecommerce-website',
    tags: ['HTML', 'CSS', 'JavaScript'],
    tone: 'red',
  },
];

const certifications = [
  {
    title: 'Data Analytics Essentials',
    provider: 'Cisco Networking Academy',
    desc: 'Completed the Data Analytics Essentials course, covering data collection, cleaning, analysis, visualization and dashboard creation using Excel, SQL and Tableau.',
    img: asset('certificates/cisco-data-analytics-essentials.jpeg'),
    date: 'Verified certificate',
  },
  {
    title: 'Python (Basic)',
    provider: 'HackerRank',
    desc: 'HackerRank Python (Basic) Certification — demonstrated foundational proficiency in Python programming.',
    img: asset('certificates/python_basic_certificate.png'),
    date: '06 Aug 2026',
  },
  {
    title: 'SQL (Basic)',
    provider: 'HackerRank',
    desc: 'HackerRank SQL (Basic) Skill Certification — SQL programming, database querying and data manipulation.',
    img: asset('certificates/sql_basic_certificate.png'),
    date: '06 Aug 2026',
  },
  {
    title: 'SQL (Intermediate)',
    provider: 'HackerRank',
    desc: 'HackerRank SQL (Intermediate) Skill Certification — stronger SQL querying, database problem solving and data manipulation.',
    img: asset('certificates/sql_intermediate_certificate.png'),
    date: '06 Aug 2026',
  },
  {
    title: 'AI Foundations',
    provider: 'OpenAI Academy',
    desc: 'Completed foundational training in AI and Generative AI through OpenAI Academy.',
    img: asset('certificates/certificatemw4wlxergx.png'),
    date: '31 Aug 2026',
  },
  {
    title: 'Applied AI Foundations',
    provider: 'OpenAI Academy',
    desc: 'Completed training focused on applying AI concepts and practical workflows through OpenAI Academy.',
    img: asset('certificates/certificateacybowgkgk.png'),
    date: '31 Aug 2026',
  },
  {
    title: 'Agents and Workflows',
    provider: 'OpenAI Academy',
    desc: 'Completed training covering AI agents and workflow automation through OpenAI Academy.',
    img: asset('certificates/certificate2ekpacbauu.png'),
    date: '31 Aug 2026',
  },
];

const experiences = [
  {
    date: '19 DEC 2025 — 19 JAN 2026',
    role: 'Def-Space Tech Intern',
    org: 'Bharat Space Education Research Centre (BSERC)',
    place: 'Chandigarh, India · Hybrid',
    desc: 'Selected for the Def-Space Winter Internship Technical Training Programme. The offer letter states the internship ran from 19 December 2025 to 19 January 2026.',
    images: [
      asset('internship/bserc-certificate.jpg'),
      asset('internship/bserc-offer-letter.jpg'),
    ],
  },
  {
    date: '20 MAY 2026 — 20 JUN 2026',
    role: 'Data Analytics Intern',
    org: 'DecodeLabs',
    place: 'Virtual · Data Analytics',
    desc: 'Successfully completed the DecodeLabs Virtual Internship Program in Data Analytics, with hands-on work across real-world projects, collaborative tasks, data problem-solving and analytics workflows.',
    images: [asset('internship/decodelabs-certificate.png')],
  },
];

function Fade({ children, delay = 0, y = 35, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ContactButton({ children = 'Contact Me', href = EMAIL }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="contact-btn"
    >
      {children}
      <ArrowUpRight size={18} />
    </motion.a>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const frameRef = useRef(null);
  const latestRef = useRef({ rx: 0, ry: 0, px: 0, py: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, px: 0, py: 0 });

  const updateTilt = (rx, ry, px, py) => {
    latestRef.current = { rx, ry, px, py };
    if (frameRef.current) return;

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      setTilt(latestRef.current);
    });
  };

  const handleMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;

    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    updateTilt(
      Math.max(-3.2, Math.min(3.2, -ny * 2.8)),
      Math.max(-4.2, Math.min(4.2, nx * 3.8)),
      nx * 5,
      ny * 3,
    );
  };

  const handleLeave = () => updateTilt(0, 0, 0, 0);

  React.useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const { rx, ry, px, py } = tilt;
  const stageTransform = `translate3d(${px}px, ${py}px, 0) rotateX(${rx}deg) rotateY(${ry}deg) scale(1)`;

  return (
    <section
      id="top"
      ref={heroRef}
      className="final-image-hero clean-3d-hero"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="clean-hero-stage" style={{ transform: stageTransform }}>
        <img
          src={asset('hero-shubh-final.png')}
          className="clean-hero-image"
          alt="Shubh Chak — Data & AI"
          draggable="false"
        />

        <a className="final-hero-hotspot final-back-hotspot" href="#top" aria-label="Back to top" />
        <a className="final-hero-hotspot final-about-hotspot" href="#about" aria-label="About" />
        <a className="final-hero-hotspot final-price-hotspot" href="#skills" aria-label="Skills" />
        <a className="final-hero-hotspot final-projects-hotspot" href="#projects" aria-label="Projects" />
        <a className="final-hero-hotspot final-contact-hotspot" href="#contact" aria-label="Contact" />
        <a className="final-hero-hotspot final-cta-hotspot" href={EMAIL} aria-label="Contact me" />
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    'PYTHON',
    'SQL',
    'POWER BI',
    'DATA SCIENCE',
    'DATA ENGINEERING',
    'AI / ML',
    'PANDAS',
    'MACHINE LEARNING',
    'EXCEL',
    'TABLEAU',
  ];

  return (
    <section className="marquee">
      <div className="marquee-row row1">
        {[...words, ...words, ...words].map((x, i) => (
          <span key={i}>
            {x}
            <b>✦</b>
          </span>
        ))}
      </div>
      <div className="marquee-row row2">
        {[...words.slice().reverse(), ...words.slice().reverse(), ...words.slice().reverse()].map((x, i) => (
          <span key={i}>
            {x}
            <b>✦</b>
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="about-shape shape-one">01</div>
      <div className="about-shape shape-two">SQL</div>
      <div className="about-shape shape-three">AI</div>
      <div className="about-shape shape-four">PY</div>

      <Fade>
        <div className="about-left">
          <p className="section-kicker">/ ABOUT ME</p>
          <h2 className="section-title">
            DATA<br />
            <em>WITH</em>
            <br />
            PURPOSE<span>.</span>
          </h2>
        </div>
      </Fade>

      <Fade delay={0.15}>
        <div className="about-copy">
          <p>
            I&apos;m <strong>Shubh Chak</strong>, a final-year Information Technology student at UIET, Panjab University, focused on the intersection of <strong>data, engineering and AI</strong>.
          </p>
          <p>
            I enjoy moving from raw data to clean workflows, analysis, visualization and machine-learning solutions that answer real questions.
          </p>
          <p>
            I&apos;m open to opportunities across <strong>Data Analytics, Data Engineering, Data Science and AI/ML Engineering</strong> — so my portfolio is designed to show the range.
          </p>
          <ContactButton>Let&apos;s Work Together</ContactButton>
        </div>
      </Fade>
    </section>
  );
}

function Services() {
  const icons = [BarChart3, Server, Database, BrainCircuit];

  return (
    <section id="skills" className="services">
      <Fade>
        <p className="section-kicker dark">/ WHAT I DO</p>
        <h2 className="dark-title">
          FOUR WAYS<br />I WORK WITH <span>DATA.</span>
        </h2>
      </Fade>

      <div className="role-list">
        {roles.map(([n, t, d], i) => {
          const Icon = icons[i];
          return (
            <Fade key={t} delay={i * 0.08}>
              <div className="role">
                <div className="role-num">{n}</div>
                <div className="role-main">
                  <div className="role-icon">
                    <Icon size={25} />
                  </div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>

      <Fade>
        <div className="skill-cloud">
          {skills.map((s) => (
            <span key={s} className={s.length > 28 ? 'skill-long' : ''}>
              {s}
            </span>
          ))}
        </div>
      </Fade>
    </section>
  );
}

function ProjectArt({ tone }) {
  return (
    <div className={`project-art art-${tone}`}>
      <div className="art-grid" />
      <div className="art-circle" />
      <div className="art-bar b1" />
      <div className="art-bar b2" />
      <div className="art-label">DATA / AI</div>
    </div>
  );
}

function ProjectCard({ p, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const top = `${index * 26 + 76}px`;
  const repoUrl = `${GITHUB}/${p.repo}`;

  return (
    <div className="project-shell" ref={ref}>
      <motion.article className="project-card" style={{ scale, top }}>
        <div className="project-top">
          <div>
            <div className="project-number">{p.n}</div>
            <p className="project-type">{p.type}</p>
            <h3>{p.title}</h3>
          </div>
          <a href={repoUrl} target="_blank" rel="noreferrer" className="outline-btn">
            GITHUB <ExternalLink size={15} />
          </a>
        </div>

        <div className="project-body">
          <div className="project-copy">
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a className="repo-link" href={repoUrl} target="_blank" rel="noreferrer">
              <Github size={18} /> Shubhh23 / {p.repo}
            </a>
          </div>
          <ProjectArt tone={p.tone} />
        </div>
      </motion.article>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <Fade>
        <p className="section-kicker">/ SELECTED WORK</p>
        <h2 className="section-title">
          PROJECTS<span>.</span>
        </h2>
        <p className="project-intro">
          A broad mix of analytics, data engineering, visualization, machine learning and software projects from my GitHub.
        </p>
      </Fade>

      <div className="project-stack">
        {projects.map((p, i) => (
          <ProjectCard key={p.repo} p={p} index={i} />
        ))}
      </div>

      <Fade>
        <a href={GITHUB} target="_blank" rel="noreferrer" className="all-projects">
          VIEW ALL GITHUB PROJECTS <ArrowUpRight />
        </a>
      </Fade>
    </section>
  );
}

function Experience() {
  const [open, setOpen] = useState(null);

  return (
    <section className="experience">
      <Fade>
        <p className="section-kicker dark">/ EXPERIENCE &amp; LEADERSHIP</p>
        <h2 className="dark-title">
          MORE THAN<br /><span>JUST CODE.</span>
        </h2>
      </Fade>

      <div className="experience-list">
        {experiences.map((e, i) => (
          <Fade key={e.role + e.org} delay={i * 0.1}>
            <article className="experience-card">
              <div className="experience-date">{e.date}</div>
              <div>
                <p className="experience-role">{e.role}</p>
                <h3>{e.org}</h3>
                <p className="experience-place">{e.place}</p>
                <p className="experience-desc">{e.desc}</p>

                {e.images.length > 0 && (
                  <div className="proof-row">
                    {e.images.map((img, j) => {
                      const isOffer = e.org.includes('BSERC') && j === 1;
                      const title = isOffer ? 'Offer Letter' : 'Internship Certificate';
                      return (
                        <button
                          key={img}
                          onClick={() => setOpen({ img, title })}
                          className={`proof-thumb ${img.includes('decodelabs') ? 'certificate-proof' : ''}`}
                        >
                          <img src={img} alt={isOffer ? 'Internship offer letter' : 'Internship certificate'} />
                          <span>{isOffer ? 'View Offer Letter' : 'View Certificate'} ↗</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </article>
          </Fade>
        ))}
      </div>

      <div className="leadership-grid">
        <div>
          <span>2025—26</span>
          <h3>Convenor</h3>
          <p>Alumni Affairs Cell · UIET</p>
        </div>
        <div>
          <span>SANGAM &apos;26</span>
          <h3>Alumni Meet</h3>
          <p>Outreach · Budgeting · Logistics · Execution</p>
        </div>
        <div>
          <span>KARWAAN</span>
          <h3>Farewell Initiative</h3>
          <p>Event planning · Teams · Guest experience</p>
        </div>
      </div>

      {open && (
        <div className="modal" onClick={() => setOpen(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(null)} aria-label="Close">
              <X />
            </button>
            <p>{open.title}</p>
            <img src={open.img} alt={open.title} />
          </div>
        </div>
      )}
    </section>
  );
}

function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="certifications">
      <Fade>
        <p className="section-kicker">/ ASSESSMENTS &amp; CERTIFICATIONS</p>
        <h2 className="section-title">
          CERTS<span>.</span>
        </h2>
        <p className="project-intro">
          Verified learning across analytics, Python, SQL and applied AI — shown with the actual certificate artwork and the details behind each credential.
        </p>
      </Fade>

      <div className="cert-grid">
        {certifications.map((c, i) => (
          <Fade key={c.title + c.provider} delay={(i % 3) * 0.06}>
            <article className="cert-card">
              <div className="cert-image">
                <img src={c.img} alt={`${c.provider} — ${c.title}`} />
              </div>
              <div className="cert-info">
                <div className="cert-provider">{c.provider}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span>{c.date}</span>
                <button onClick={() => setSelected(c)}>VIEW CERTIFICATE ↗</button>
              </div>
            </article>
          </Fade>
        ))}
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-card cert-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">
              <X />
            </button>
            <p>{selected.provider} — {selected.title}</p>
            <img src={selected.img} alt={selected.title} />
          </div>
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <Fade>
          <p className="section-kicker">/ LET&apos;S CONNECT</p>
          <h2 className="contact-title">
            LET&apos;S BUILD<br /><span>SOMETHING.</span>
          </h2>
          <p className="contact-text">
            Open to Data Analyst, Data Engineer, Data Scientist and AI/ML Engineer opportunities.
          </p>
          <a className="email" href={EMAIL}>
            shubhchak8881@gmail.com <ArrowUpRight />
          </a>
        </Fade>

        <div className="socials">
          <a href={GITHUB} target="_blank" rel="noreferrer"><Github /> GitHub</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          <a href={EMAIL}><Mail /> Email</a>
          <a href="#top"><Download /> Resume</a>
        </div>
      </div>

      <footer>
        <span>SHUBH CHAK © 2026</span>
        <span>DATA × AI × ENGINEERING</span>
      </footer>
    </section>
  );
}

function App() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
