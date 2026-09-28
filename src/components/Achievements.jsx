// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" strokeLinecap="round" d="M7 4h10v2a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z" />
    <path strokeWidth="1.8" strokeLinecap="round" d="M9 20h6m-5-3h4m-2-6v6M17 6h2a2 2 0 0 1-2 2M7 6H5a2 2 0 0 0 2 2" />
  </svg>
)

const MedalIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" strokeLinejoin="round" d="M8 3h3l1 3 1-3h3l-3 6h-2z" />
    <circle cx="12" cy="15" r="5" strokeWidth="1.8" />
  </svg>
)

const FlagIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" strokeLinecap="round" d="M6 21V4m0 0h11l-2 4 2 4H6" />
  </svg>
)

const achievements = [
  {
    icon: <TrophyIcon />,
    title: "Agentic Automation Milestone",
    description: "85% Effort Reduction",
    detail: "Built an n8n cold email automation agent achieving a sub-2% bounce rate and boosting outreach delivery efficiency by 85%."
  },

  {
    icon: <FlagIcon />,
    title: "Community Leadership",
    description: "Volunteer Operations & Hackathons",
    detail: "Led student volunteer teams for welfare operations while actively building open-source AI models and competing in hackathons."
  }
]

function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Achievements</h2>
          <span className="squiggle" aria-hidden="true" />
          <p className="section-subheading">
            Professional certifications, model accuracy benchmarks, and project outcomes
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="sketch-card sketch-card-small p-6 text-center"
            >
              <div className="mb-3 flex justify-center text-blush-700">{achievement.icon}</div>
              <h3 className="font-display text-4xl font-bold leading-none text-ink">
                {achievement.title}
              </h3>
              <p className="mt-2 font-bold text-blush-700">{achievement.description}</p>
              <p className="mt-2 leading-relaxed text-inksoft">{achievement.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
