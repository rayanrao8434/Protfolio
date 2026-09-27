// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import hatImage from "../../hat.svg"

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56v-2.16c-3.2.69-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.17 1.17a10.9 10.9 0 0 1 5.77 0c2.2-1.48 3.17-1.17 3.17-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.83 1.18 3.08 0 4.41-2.68 5.39-5.24 5.67.41.35.78 1.03.78 2.09v3.1c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M6.94 8.5v11H3.28v-11h3.66Zm.24-3.4a2.12 2.12 0 1 1-4.24 0 2.12 2.12 0 0 1 4.24 0ZM20.72 13.2v6.3h-3.65v-5.88c0-1.48-.53-2.5-1.85-2.5-1.01 0-1.61.68-1.88 1.34-.1.24-.12.57-.12.9v6.14H9.56s.05-9.97 0-11h3.66v1.56c.49-.76 1.36-1.84 3.31-1.84 2.42 0 4.2 1.58 4.2 4.98Z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.8" />
    <path strokeWidth="1.8" strokeLinecap="round" d="m4 7 8 6 8-6" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" strokeLinecap="round" d="M6.5 3h3l1.3 4-1.8 1.8a14 14 0 0 0 6 6l1.8-1.8 4 1.3v3A1.7 1.7 0 0 1 19.1 19 16.1 16.1 0 0 1 5 4.9 1.7 1.7 0 0 1 6.5 3Z" />
  </svg>
)

function Hero() {
  return (
    <section id="top" className="section-shell hero-shell relative">
      <p className="end-hint">note at the end</p>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-card sketch-card sketch-card-flat taped mx-auto max-w-4xl px-6 py-10 text-center md:px-10"
        >
          <div className="hat-decoration" role="img" aria-label="Floating hat with a Hire Me tag">
            <img src={hatImage} alt="" />
            <span className="hat-string" />
            <span className="hat-tag">Hire Me</span>
          </div>
          <p className="sketch-kicker mb-2">
            Second Year B.S. Data Science · MNSUAM
          </p>
          <h1 className="font-display text-7xl font-bold leading-none text-ink md:text-8xl">
            <button
              type="button"
              className="name-doodle"
              onClick={(event) => {
                window.dispatchEvent(new CustomEvent("sketch-burst", {
                  detail: { x: event.clientX, y: event.clientY }
                }))
              }}
            >
              Muhammad Rayan Rao
            </button>
          </h1>
          <span className="squiggle" aria-hidden="true" />
          <p className="mt-1 font-display text-2xl text-blush-600">tap the name</p>

          <p className="mb-2 mt-5 font-display text-3xl text-blush-700 md:text-4xl">
             Machine Learning · Gen AI · Agentic Automation
          </p>
          <p className="mb-6 text-inksoft">Muzaffargarh, Pakistan</p>

          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-ink md:text-lg">
            B.S. Data Science student specializing in Machine Learning, Agentic Automation, and LLM applications. Focused on building real-world intelligent systems that drive data-backed decisions and automate complex workflows
          </p>

          <div className="mx-auto mb-8 grid max-w-3xl grid-cols-1 gap-3 text-sm sm:grid-cols-3">
           <div className="sketch-card sketch-card-flat px-4 py-3 flex flex-col items-center justify-center text-center gap-y-1">
             <span className="font-semibold">Generative AI</span>
             <span className="text-sm text-gray-700">Certified (HEC Pak Angels)</span>
           </div>
            <div className="sketch-card sketch-card-flat px-4 py-3 flex flex-col items-center justify-center text-center gap-y-1">
              <span className="font-semibold">AgroBot AI System</span>
              <span className="text-sm text-gray-700">30% Crop Loss Risk Reduction</span>
           </div>
            <div className="sketch-card sketch-card-flat px-4 py-3 flex flex-col items-center justify-center text-center gap-y-1">
                 <span className="font-semibold">Data Science & AI</span>
                 <span className="text-sm text-gray-700">Bootcamp Certified (DataCrumbs)</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/rayanrao8434"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub profile"
              className="sketch-icon-btn"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-rayanrao/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn profile"
              className="sketch-icon-btn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:rayanrao8434@gmail.com"
              title="Email"
              aria-label="Send email"
              className="sketch-icon-btn sketch-btn-fill"
            >
              <MailIcon />
            </a>
            <a
              href="tel:+923098434911"
              title="Phone"
              aria-label="Call phone number"
              className="sketch-icon-btn"
            >
              <PhoneIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
