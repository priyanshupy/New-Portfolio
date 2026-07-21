import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';

// ─── Personal Info ────────────────────────────────────────────────────────────
const personal = {
  name: "Priyanshu Pareta",
  title: "Senior Software Engineer",
  location: "London, UK",
  email: "priyanshupareta@gmail.com",
  phone: "",
  linkedin: "linkedin.com/in/priyanshu-pareta",
  summary:
    "Senior Software Engineer with 5+ years of experience delivering production software at B2B SaaS and fintech companies. Skilled at building backend systems, APIs, and cloud infrastructure that power real products — and connecting those products to the external tools and platforms businesses depend on. Known for taking full ownership of work, from early design through live deployment and ongoing support, and for translating business requirements into reliable, well-engineered solutions in close collaboration with non-technical stakeholders. MSc in Artificial Intelligence and Computer Science with Distinction (Northeastern University London).",
};

// ─── Work Experience ──────────────────────────────────────────────────────────
const experience = [
  {
    title: "Senior Software Engineer",
    company: "Equali",
    location: "London, UK",
    period: "Jan 2026 – Present",
    achievements: [
      "Joined as the first backend engineer; built and ran the company's software platform end-to-end, working directly with the CEO to turn business goals into shipped product.",
      "Connected the platform to multiple external services — including e-commerce, payments, and accounting tools — managing everything from initial design through testing, launch, and live support.",
      "Grew the platform's cloud infrastructure to handle 10× customer growth (from 2 to 20+ business clients) within six months, with no downtime or performance issues.",
      "Built a fully automated sign-up and onboarding flow so new customers could get started and set up payments without any manual involvement from the team.",
      "Built background data-processing systems to reliably import and handle large volumes of customer data (JSON and CSV files), cutting processing time and reducing manual effort significantly.",
      "Set up automated deployment pipelines and internal developer tooling that allowed the team to ship new features faster and with fewer errors.",
      "Covered on-call and production support for the live platform, responding quickly to incidents and keeping the system stable and reliable for customers.",
    ],
  },
  {
    title: "Software Engineer II",
    company: "SmartQ (Compass Group)",
    location: "Bengaluru, India",
    period: "Jan 2022 – Jan 2025",
    achievements: [
      "Led a team of backend engineers across multiple product workstreams on a large enterprise SaaS platform, coordinating delivery with product managers, designers, and QA.",
      "Designed and built a new cloud-based menu management system from scratch that allowed 100+ restaurant locations to manage all their menus in one place, with real-time updates and support for over 10,000 menu items.",
      "Built and maintained the core APIs used by hundreds of enterprise restaurant clients to run their day-to-day operations through a single platform.",
      "Delivered a seasonal menu planning feature — developed in close collaboration with business stakeholders — that allowed teams to plan and publish menus directly to restaurants, significantly reducing manual effort.",
      "Integrated the platform with enterprise business systems and covered on-call support, keeping the live product stable through monitoring and fast incident resolution.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Netenrich",
    location: "Bengaluru, India",
    period: "Apr 2021 – Oct 2021",
    achievements: [
      "Built backend services and APIs that supported internal operations and business workflows.",
      "Created automated reporting dashboards that gave business teams real-time visibility into key performance metrics, removing the need for manual data pulls.",
      "Built data pipelines that improved data accuracy and cut the time it took to generate reports.",
      "Delivered automation tools that removed repetitive manual tasks for multiple teams across the business.",
    ],
  },
  {
    title: "System Engineer",
    company: "Infosys",
    location: "Bengaluru, India",
    period: "Oct 2020 – Apr 2021",
    achievements: [
      "Built and maintained backend APIs for a tax compliance application that connected securely to government systems.",
      "Automated tax processing workflows by implementing validation rules and data-processing logic, reducing manual errors and improving reliability.",
      "Worked with cross-functional teams to fix live issues, improve performance, and deliver features on schedule in an Agile environment.",
    ],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
const skills = [
  // Programming
  "Python", "TypeScript", "JavaScript", "C",
  // Frameworks
  "Django", "FastAPI", "Flask", "React",
  // Backend
  "REST API Design", "Microservices", "Event-Driven Architecture",
  "Celery", "RabbitMQ", "Kafka", "OAuth 2.0", "Webhooks", "System Design",
  // Cloud & DevOps
  "AWS", "GCP", "Azure", "Docker", "Linux", "CI/CD", "GitHub Actions",
  // Data & Storage
  "SQL", "NoSQL", "BigQuery", "Firestore", "S3", "Data Modelling",
  // AI & Analytics
  "LLM Applications", "RAG Pipelines", "Vector Databases", "Pandas", "NumPy",
];

// ─── Education ────────────────────────────────────────────────────────────────
const education = [
  {
    degree: "MSc, Artificial Intelligence and Computer Science",
    institution: "Northeastern University London",
    location: "London, UK",
    period: "Jan 2025 – Dec 2025",
    details: "Distinction",
  },
  {
    degree: "B.E., Computer Science",
    institution: "Dr. Ambedkar Institute of Technology",
    location: "Bengaluru, India",
    period: "2016 – 2020",
    details: "CGPA: 8.2/10",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "AI-Powered Code Repair Assistant",
    subtitle: "MSc Dissertation — AIDSAA",
    year: "2025",
    description: [
      "Designed and developed an AI-powered automated code repair assistant using Python, LangChain, ChromaDB and RAG to analyse, repair and explain Data Structures and Algorithms submissions.",
      "Implemented semantic retrieval using embeddings and contextual prompting to retrieve relevant solutions and generate minimal, explainable code fixes while preserving the student's original implementation.",
      "Engineered a multi-stage repair pipeline with AST-based validation, achieving over 80% identifier retention compared to a 50%+ baseline, significantly reducing unnecessary code modifications.",
      "Awarded Distinction as part of the MSc in AI and Computer Science; currently co-authoring a research paper on automated AI-assisted code repair.",
    ],
    github: "https://github.com/priyanshupy/AIDSAA",
    tags: ["Python", "LangChain", "ChromaDB", "RAG", "LLM", "AST", "NLP"],
  },
  {
    title: "AI Search Assistant",
    subtitle: "Perplexity-Clone",
    year: "2025",
    description: [
      "Built a Perplexity-inspired AI search assistant using Python, Streamlit, LangChain, ChromaDB and Ollama to answer natural language questions using up-to-date information retrieved from the web.",
      "Designed an end-to-end RAG pipeline that queried DuckDuckGo Search, parsed and chunked search results, generated embeddings, indexed documents in ChromaDB, and retrieved relevant context before LLM inference.",
      "Integrated a locally hosted Ollama language model to generate grounded responses using retrieved context, reducing hallucinations while enabling fully local inference without external LLM APIs.",
      "Containerised the complete application using Docker and collaborated with a small team to design the architecture and integrate backend services with the Streamlit interface.",
    ],
    github: "https://github.com/priyanshupy/Recurser",
    tags: ["Python", "Streamlit", "LangChain", "ChromaDB", "Ollama", "Docker", "RAG"],
  },
];

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="App">
      <Hero personal={personal} />
      <About personal={personal} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Education education={education} />
      <Contact personal={personal} />
      <Footer />
    </div>
  );
}

export default App;
