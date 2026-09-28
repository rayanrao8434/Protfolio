const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56v-2.16c-3.2.69-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.17 1.17a10.9 10.9 0 0 1 5.77 0c2.2-1.48 3.17-1.17 3.17-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.83 1.18 3.08 0 4.41-2.68 5.39-5.24 5.67.41.35.78 1.03.78 2.09v3.1c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="2" strokeLinecap="round" d="M14 3h7v7m0-7L10 14" />
    <path strokeWidth="2" strokeLinecap="round" d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
  </svg>
)

const VideoIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <rect x="3" y="6" width="13" height="12" rx="2" strokeWidth="2" />
    <path d="M16 10l5-3v10l-5-3z" strokeWidth="2" strokeLinejoin="round" />
  </svg>
)

const projects = [
  {
    title: "AgroBot",
    tag: "AI-POWERED SMART AGRICULTURE SYSTEM",
    tech: "Python, XGBoost, Generative AI, RAG, Multilingual Speech",
    github: "https://github.com/rayanrao8434/AgroBot",
   // live: "web link",
  //  demo: "gdrive link",
    description:
      "AI agronomist providing crop disease prediction (96% accuracy), soil suitability modeling (92% accuracy), and weather forecasting. Built with a multilingual voice assistant, reducing crop loss risk by 30%."
  },
  {
    title: "OncoVision",
    tag: "AI HISTOPATHOLOGY DIAGNOSTIC DASHBOARD",
    tech: "Deep Learning, Sequential CNN, FastAPI, Tailwind CSS",
    github: "https://github.com/rayanrao8434/OncoVision",
    description:
      "Automated diagnostic dashboard detecting Invasive Ductal Carcinoma from breast histopathology slides. Features an Out-Of-Distribution filter in FastAPI to reject invalid inputs and a dark glassmorphic UI."
  },
  {
    title: "AI Outreach Agent",
    tag: "PERSONALIZED COLD EMAIL AUTOMATION",
    tech: "n8n, LLMs, Lead Enrichment, Google Sheets API",
    //github: "https://github.com/rayanrao8434",
    description:
      "Automated outreach system generating personalized cold emails at scale. Reduced manual effort by 90%, increased campaign delivery efficiency by 85%, and maintained a sub-2% email bounce rate."
  },
  {
    title: "Heart Disease Predictor",
    tag: "PREVENTIVE HEALTHCARE ML MODEL",
    tech: "Python, Scikit-learn, Logistic Regression, Pandas",
    // github: "",
    // live: "",
    // demo: "",
    description:
      "Machine learning classifier predicting heart disease likelihood from clinical patient metrics. Achieved 92% prediction accuracy and improved early disease risk detection speed by 28%."
  }
]

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-container">
        <h2 className="section-heading">Featured Projects</h2>
        <span className="squiggle" aria-hidden="true" />
        <p className="section-subheading mb-12">
          Production ML models, automated AI agents, and diagnostic systems
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="sketch-card sketch-card-small p-6">
              <h3 className="font-display text-4xl font-bold leading-none text-ink">
                {project.title}
              </h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-blush-700">
                {project.tag}
              </p>
              <p className="mt-2 text-inksoft">{project.tech}</p>
              <p className="mt-4 leading-relaxed text-ink">{project.description}</p>

              <div className="mt-6 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub repository"
                    aria-label={`${project.title} GitHub repository`}
                    className="sketch-icon-btn"
                  >
                    <GitHubIcon />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live deployed link"
                    aria-label={`${project.title} live deployed link`}
                    className="sketch-icon-btn sketch-btn-fill"
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Demo video"
                    aria-label={`${project.title} demo video`}
                    className="sketch-icon-btn"
                  >
                    <VideoIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
