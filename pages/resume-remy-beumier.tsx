import Head from 'next/head';
import {
  MdLaptop,
  MdOutlineSettings,
  MdOutlineArticle,
  MdWorkOutline,
} from 'react-icons/md';

type ResumeProps = {
  title: string;
  description: string;
  url: string;
};

export default function Resume({ title, description, url }: ResumeProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />

        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:url" content={url} key="og:url" />

        <meta property="twitter:title" content={title} key="twitter:title" />
        <meta property="twitter:description" content={description} key="twitter:description" />
        <meta property="twitter:url" content={url} key="twitter:url" />
      </Head>

      <article className="resume">
        {/* Name & Title */}
        <section className="resume__name">
          <h1>Omkar Gavali</h1>
          <p className="subtitle">Machine Learning Engineer</p>
        </section>

        {/* Contact */}
        <section className="resume__contact">
          <p>
            <a href="mailto:" target="_blank" rel="noreferrer">
              your-email@example.com
            </a>
          </p>
          <p>
            <a href="" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/your-profile
            </a>
          </p>
          <p>
            <a href="" target="_blank" rel="noopener noreferrer">
              github.com/Omkar-Gavali
            </a>
          </p>
        </section>

        {/* Experience */}
        <section className="resume__experience">
          <h2>
            Experience
            <span className="emoji">
              <MdWorkOutline title="Experience" aria-labelledby="Experience" />
            </span>
          </h2>

          <div className="item">
            <h3>AI in Controlling Intern @ KWS Group</h3>
            <p className="detail">Dec 2024 – May 2025 // Berlin, Germany</p>
            <p className="intro">
              Implemented AI and automation solutions across GTC-Controlling to enhance process efficiency.
              Automated quality-check scripts and invoice generation workflows.
            </p>
          </div>

          <div className="item">
            <h3>ML Research Assistant @ Fraunhofer FOKUS</h3>
            <p className="detail">Apr 2024 – Oct 2024 // Berlin, Germany</p>
            <p className="intro">
              Built a Retrieval-Augmented Generation (RAG) system with LlamaIndex over 200+ 3GPP documents.
              Deployed a chatbot on the intranet to automate document searches using open-source LLMs.
            </p>
          </div>

          <div className="item">
            <h3>Artificial Intelligence Research Intern @ Brose Fahrzeugteile</h3>
            <p className="detail">Sept 2023 – Mar 2024 // Bamberg, Germany</p>
            <p className="intro">
              POC for Azure Intelligent Document Processing and integrated Splunk AI with AWS CloudWatch for anomaly detection.
              Researched GenAI tools like vanna.ai and GitHub Copilot.
            </p>
          </div>

          <div className="item">
            <h3>Data Analyst (Werkstudent) @ HPS Home Power Solutions AG</h3>
            <p className="detail">Nov 2022 – Apr 2023 // Berlin, Germany</p>
            <p className="intro">
              Designed Power BI dashboards for solar plant performance and automated report generation with Power Automate and Power Apps.
            </p>
          </div>

          <div className="item">
            <h3>Customer Support Officer @ Mphasis</h3>
            <p className="detail">May 2021 – Nov 2021 // Pune, India</p>
            <p className="intro">
              Managed German customer queries and prevented backlogs through meticulous tracking and cross-border negotiation support.
            </p>
          </div>

          <div className="item">
            <h3>Operations Executive @ Infosys</h3>
            <p className="detail">Jun 2019 – Sept 2019 // Mysore, India</p>
            <p className="intro">
              Leveraged SQL and Python scripts to automate data retrieval and server tasks, boosting analysis efficiency.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="resume__education">
          <h2>
            Education
            <span className="emoji">
              <MdOutlineArticle title="Education" aria-labelledby="Education" />
            </span>
          </h2>

          <div className="item">
            <h3>M.Sc. IT Business & Digitalization — HTW Berlin</h3>
            <p className="detail">Oct 2022 – Dec 2024 // Berlin, Germany</p>
            <p className="intro">
              Thesis: “Information Retrieval from Large Collections of Local Documents Using LLMs: RAG Approach” (Grade: 1.4)
            </p>
          </div>

          <div className="item">
            <h3>B.Sc. Physics — Savitribai Phule Pune University</h3>
            <p className="detail">Jul 2016 – Jun 2019 // Pune, India</p>
            <p className="intro">
              Focus: Physics & Mathematics
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="resume__projects">
          <h2>
            Projects
            <span className="emoji">
              <MdOutlineSettings title="Projects" aria-labelledby="Projects" />
            </span>
          </h2>

          <div className="item">
            <h3>NutriBot AI Chatbot Demo</h3>
            <p className="detail">Apr 2025</p>
            <p className="intro">
              Scalable conversational AI chatbot for nutritional info using Groq LLM API, FastAPI backend, Node.js frontend, and Docker.
              RAG pipeline with HuggingFace embeddings and Chroma vector store.
            </p>
            <p>
              <a href="https://github.com/Omkar-Gavali/ai-chatbot" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </p>
          </div>

          <div className="item">
            <h3>CI/CD Flask App with GitHub Actions & Docker</h3>
            <p className="detail">Mar 2025</p>
            <p className="intro">
              Automated CI/CD pipeline with GitHub Actions, Pytest, and Docker for a Flask application to ensure consistent deployments.
            </p>
          </div>

          <div className="item">
            <h3>Automate ML on Germany’s Pollution</h3>
            <p className="detail">Apr 2023 – Sept 2023</p>
            <p className="intro">
              PM10 air quality prediction using ML and AutoML techniques: data processing, feature engineering, model training, and evaluation.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="resume__skills">
          <h2>
            Skills
            <span className="emoji">
              <MdLaptop title="Skills" aria-labelledby="Skills" />
            </span>
          </h2>

          <h4>Programming & Scripting</h4>
          <ul>
            <li>Python, R, SQL, Bash</li>
          </ul>

          <h4>Data Science & Machine Learning</h4>
          <ul>
            <li>Machine Learning, NLP, Time Series Analysis, RAG</li>
            <li>NumPy, Pandas, PyTorch, MLflow</li>
          </ul>

          <h4>Frameworks & Tools</h4>
          <ul>
            <li>FastAPI, Flask, LlamaIndex, LangChain</li>
            <li>Docker, Git, GitHub Actions</li>
          </ul>

          <h4>Cloud & DevOps</h4>
          <ul>
            <li>AWS, Azure, GCP</li>
            <li>CI/CD, Kubernetes, Prometheus, Grafana</li>
          </ul>

          <h4>Visualization & Productivity</h4>
          <ul>
            <li>Power BI, Power Apps, Matplotlib</li>
          </ul>

          <h4>Languages</h4>
          <ul>
            <li>English (Fluent), German (Intermediate B1)</li>
          </ul>
        </section>
      </article>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Resume | Omkar Gavali',
      description: "Omkar Gavali's resume as a Machine Learning Engineer",
      url: 'https://omkar-gavali.github.io/resume-remy-beumier',
    },
  };
}
