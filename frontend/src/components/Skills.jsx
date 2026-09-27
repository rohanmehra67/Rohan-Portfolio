import { motion } from 'framer-motion'
import { skills } from '../data'
import SectionTitle from './SectionTitle'

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <SectionTitle first="My" second="Skills" />
      <p className="section-intro">
        My skills are those I've learned and developed over the years by studying,
        building projects and staying consistent with what I love most.
      </p>

      <div className="skills-grid">
        {skills.map((group, index) => (
          <motion.article
            key={group.title}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * .1 }}
          >
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
