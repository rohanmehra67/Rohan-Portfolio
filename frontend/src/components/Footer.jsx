import { Github, Instagram, Linkedin } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>COLLABORATE WITH {profile.name.toUpperCase()} AND START YOUR JOURNEY IN WEB DEVELOPMENT TODAY.</h2>
        <div className="footer-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
        </div>
        <div className="socials">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
          <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}
