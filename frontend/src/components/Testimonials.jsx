import { Star } from "lucide-react";
import { testimonials } from "../data";
import SectionTitle from "./SectionTitle";

function Card({ item }) {
  return (
    <article className="testimonial-card">
      <div className="stars">
        <span>{item.rating}</span>
        {[1, 2, 3, 4, 5].map((n) => (
          <Star key={n} size={11} fill="currentColor" />
        ))}
      </div>
      <p>“{item.text}”</p>
      <div className="testimonial-person">
        <img src={item.image} alt={item.name} className="avatar-dot" />
        <strong>{item.name}</strong>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="section testimonials-section">
      <SectionTitle first="What" second="They Say" />
      <div className="testimonial-window">
        <div className="testimonial-track">
          {duplicated.map((item, index) => (
            <Card key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
