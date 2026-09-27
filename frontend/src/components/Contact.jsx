import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data'
import SectionTitle from './SectionTitle'

const initial = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)

  const update = (e) => setForm((current) => ({ ...current, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', message: '' })
    setSending(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.message || 'Message could not be sent.')

      setForm(initial)
      setStatus({ type: 'success', message: 'Message sent successfully ✓' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Message not sent.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <SectionTitle first="Contact" second="Me" />

      <div className="contact-grid">
        <form className="contact-form" onSubmit={submit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={update} placeholder="Your name" required minLength={2} />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" value={form.message} onChange={update} placeholder="write a message" required minLength={10} rows="5" />
          </label>
          <button className="send-button" disabled={sending}>
            {sending ? 'Sending...' : <>Send Message <Send size={16} /></>}
          </button>
          {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
        </form>

        <div className="contact-details">
          <a href={`mailto:${profile.email}`} className="contact-item">
            <span><Mail size={17} /></span>
            <div><small>Email</small><strong>{profile.email}</strong></div>
          </a>
          <a href={`tel:${profile.phone}`} className="contact-item">
            <span><Phone size={17} /></span>
            <div><small>Phone number</small><strong>{profile.phone}</strong></div>
          </a>
          <div className="contact-item">
            <span><MapPin size={17} /></span>
            <div><small>Location</small><strong>{profile.location}</strong></div>
          </div>
        </div>
      </div>
    </section>
  )
}
