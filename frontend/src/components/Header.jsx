import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../data'

const links = [
  ['Home', 'home'],
  ['Works', 'work'],
  ['Services', 'services'],
  ['Skills', 'skills']
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <nav className="nav-container">
        <button className="logo" onClick={() => go('home')}>{profile.logo}</button>

        <div className={`nav-menu ${open ? 'nav-open' : ''}`}>
          <div className="nav-mobile-close">
            <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={22} /></button>
          </div>

          <ul>
            {links.map(([label, id]) => (
              <li key={id}>
                <button className="nav-link" onClick={() => go(id)}>{label}</button>
              </li>
            ))}
            <li>
              <button className="nav-contact" onClick={() => go('contact')}>Contact me</button>
            </li>
          </ul>
        </div>

        <button className="mobile-menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={25} />
        </button>
      </nav>
    </header>
  )
}
