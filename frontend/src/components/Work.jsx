import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../data'
import SectionTitle from './SectionTitle'

export default function Work() {
  return (
    <section id="work" className="section work-section">
      <SectionTitle first="View My" second="Work" />
      <div className="work-track">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            target='_blank'
            key={project.number}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .15 }}
            transition={{ delay: index * .07, duration: .55 }}
          >
            <div className="project-image-wrap">
              <img src={project.image} alt={project.title} />
              <span className="project-arrow"><ArrowUpRight size={17} /></span>
            </div>
            <div className="project-number">{project.number}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </motion.a>
        ))}
      </div>
      <div className="work-dots" aria-hidden="true">
        {projects.map((project) => <span key={project.number} />)}
      </div>
    </section>
  )
}
