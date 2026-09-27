import { ChevronDown, Code2, Database, Gauge, Layers3 } from 'lucide-react'
import { useState } from 'react'
import { services } from '../data'
import SectionTitle from './SectionTitle'

const icons = [Code2, Database, Layers3, Gauge]

export default function Services() {
  const [open, setOpen] = useState(0)

  return (
    <section id="services" className="section services-section">
      <SectionTitle first="My" second="Services" />

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = icons[index]
          const active = open === index
          return (
            <button
              key={service.title}
              className={`service-card ${active ? 'service-open' : ''}`}
              onClick={() => setOpen(active ? -1 : index)}
            >
              <div className="service-heading">
                <span className="service-icon"><Icon size={18} /></span>
                <span className="service-name">{service.title}</span>
                <ChevronDown className="service-chevron" size={19} />
              </div>
              <div className="service-content">
                <p>{service.description}</p>
                <div className="service-items">
                  {service.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
