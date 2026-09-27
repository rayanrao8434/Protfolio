// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blush-700/30 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="sketch-card sketch-card-flat max-w-2xl p-8"
      >
        <h2 className="font-display text-4xl font-bold text-ink">{project.title}</h2>
        <p className="mt-4 whitespace-pre-line leading-relaxed text-inksoft">
          {project.description}
        </p>
        <button type="button" onClick={onClose} className="sketch-btn sketch-btn-fill mt-6">
          Close
        </button>
      </motion.div>
    </div>
  )
}

export default ProjectModal