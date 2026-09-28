// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Machine Learning & Data Science",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "Logistic Regression",
      "Predictive Modeling",
      "Pandas & NumPy",
      "Data Visualization"
    ]
  },
  {
    title: "Deep Learning & Medical Vision",
    skills: [
      "CNNs",
      "Histopathology Analysis",
      "Sequential Models",
      "Medical Imaging",
      "Out-Of-Distribution Filtering"
    ]
  },
  {
    title: "Generative AI & LLMs",
    skills: [
      "Agentic Automation",
      "n8n Workflows",
      "RAG Pipelines",
      "Prompt Engineering",
      "LLM Systems",
      "Multilingual Speech"
    ]
  },
  {
    title: "Languages",
    skills: ["Python", "C#", "C++", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Frameworks & Tools",
    skills: [
      "FastAPI",
      "Streamlit",
      "Git & GitHub",
      "Tailwind CSS",
      "REST APIs",
      "VS Code"
    ]
  },
  {
    title: "Professional",
    skills: ['Technical Documentation', 'Project Leadership', 'Community Operations', 'Workflow Optimization']
  }
]

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Technical Skills</h2>
          <span className="squiggle" aria-hidden="true" />
          <p className="section-subheading">
            Machine learning, Data Visualization, LLMs, and the tools behind them
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="sketch-card sketch-card-small p-6"
            >
              <h3 className="font-display text-3xl font-bold text-ink">{category.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="sketch-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
