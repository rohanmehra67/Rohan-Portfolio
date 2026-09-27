import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const [ref, visible] = useReveal()

  const contact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="about" className="section about-section" ref={ref}>
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 35 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .7 }}
      >
        <div>
          <p className="about-title">
            {profile.aboutTitle.split(' ').map((word, i) => (
              <span key={i} className={['web', 'development'].includes(word.toLowerCase()) ? 'green-word' : ''}>
                {word}{' '}
              </span>
            ))}
          </p>
        </div>
        <div className="about-side">
          <p>{profile.aboutText}</p>
          <button className="green-button" onClick={contact}>
            Contact me <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </section>
  )
}
