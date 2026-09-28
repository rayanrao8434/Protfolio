const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" strokeLinecap="round" d="M7 4h10v2a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z" />
    <path strokeWidth="1.8" strokeLinecap="round" d="M9 20h6m-5-3h4m-2-6v6M17 6h2a2 2 0 0 1-2 2M7 6H5a2 2 0 0 0 2 2" />
  </svg>
)

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" d="M7 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path strokeWidth="1.8" strokeLinecap="round" d="M2 19a5 5 0 0 1 10 0M12 19a5 5 0 0 1 10 0" />
  </svg>
)

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <circle cx="12" cy="8" r="4" strokeWidth="1.8" />
    <path strokeWidth="1.8" strokeLinecap="round" d="M9 12v8l3-2 3 2v-8" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <rect x="3" y="7" width="18" height="12" rx="2" strokeWidth="1.8" />
    <path strokeWidth="1.8" strokeLinecap="round" d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18" />
  </svg>
)

const stats = [
  { icon: <TrophyIcon />, value: "96%", label: "AgroBot Model Accuracy" },
  { icon: <UsersIcon />, value: "90%", label: "Outreach Effort Reduced" },
  { icon: <AwardIcon />, value: "92%", label: "Predictive ML Accuracy" },
  { icon: <BriefcaseIcon />, value: "6+ months", label: "Exp building ML systems" }
]

const coursework = [
  "Generative AI",
  "Machine Learning",
  "Artificial Intelligence",
  "LLM Fundamentals",
  "Agentic Automation",
  "Data Visualization"
]

const certifications = [
  "Data Science X AI Bootcamp — DataCrumbs",
  "AI For Everyone — Coursera",
  "Generative AI — HEC Pak Angels"
]

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <h2 className="section-heading">About Me</h2>
        <span className="squiggle" aria-hidden="true" />
        <p className="section-subheading">
          I build end-to-end data science and AI solutions: high-accuracy predictive ML models,
          agentic workflow automations, and LLM-powered applications. My focus is machine learning, generative AI, and applied data science.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="sketch-card sketch-card-small px-4 py-5 text-center">
              <div className="mb-2 flex justify-center text-blush-700">{stat.icon}</div>
              <p className="font-display text-4xl font-bold text-ink">{stat.value}</p>
              <p className="text-inksoft">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="sketch-card sketch-card-flat mx-auto mt-8 max-w-5xl p-6 md:p-8">
          <p className="sketch-kicker">Education</p>
          <h3 className="mt-1 font-display text-4xl font-bold text-ink">
            MNS University of Agriculture
          </h3>
          <p className="mt-1 font-bold text-blush-700">
            Bachelor of Science in Data Science · MNSUAM, Multan
          </p>
          <p className="mt-1 text-inksoft">Sep 2025 – Present</p>

          <p className="mb-3 mt-6 text-sm font-bold uppercase tracking-widest text-blush-700">
            Relevant coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span key={course} className="sketch-chip">
                {course}
              </span>
            ))}
          </div>

          <p className="mb-3 mt-6 text-sm font-bold uppercase tracking-widest text-blush-700">
            Certifications
          </p>
          <ul className="space-y-2 text-ink">
            {certifications.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="font-bold text-blush-700" aria-hidden="true">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
