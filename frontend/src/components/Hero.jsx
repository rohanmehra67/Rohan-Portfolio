import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../data'
import { useReveal } from '../hooks/useReveal'

const circleText = 'EXPLORE • MORE • LET’S • '

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [ref, visible] = useReveal()

  useEffect(() => {
    const word = profile.heroRoles[roleIndex]
    const speed = deleting ? 55 : 95

    const timer = setTimeout(() => {
      if (!deleting && display === word) {
        setTimeout(() => setDeleting(true), 900)
        return
      }

      if (deleting && display === '') {
        setDeleting(false)
        setRoleIndex((i) => (i + 1) % profile.heroRoles.length)
        return
      }

      setDisplay(word.slice(0, display.length + (deleting ? -1 : 1)))
    }, speed)

    return () => clearTimeout(timer)
  }, [display, deleting, roleIndex])

  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero section" ref={ref}>
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="hero-copy"
        >
          <p className="eyebrow">{profile.intro}</p>
          <h1>
            {profile.heroPrefix}<br />
            <span>{display}<span className="typing-cursor">|</span></span>
          </h1>
          <p className="hero-description">{profile.heroDescription}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .88, rotate: -5 }}
          animate={visible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: .9, delay: .12 }}
          className="hero-visual"
        >
          <div className="portrait-frame">
            <img src="/images/profile.webp" alt={`${profile.name} portrait`} />
          </div>

          <button className="circle-explore" onClick={scrollToAbout} aria-label="Explore portfolio">
            <div className="circle-text">
              {circleText.split('').map((char, i) => (
                <span key={`${char}-${i}`} style={{ transform: `rotate(${i * (360 / circleText.length)}deg)` }}>
                  {char}
                </span>
              ))}
            </div>
            <ArrowDown size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
