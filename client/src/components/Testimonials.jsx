import TestimonialCard from "./TestimonialCard"
import "./Testimonials.css"

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Ourt Customers Say</h2>
      <div className="testimonial-grid">
        <TestimonialCard
          name="Anurag Chauhan"
          review="RideSmart is the Best App i ever used It's Perfect"
          rating={5}
        />
        <TestimonialCard
          name="Neha Sharma"
          review="Great experience, car was clean and well-maintained."
          rating={4}
        />
        <TestimonialCard
          name="Ravi Patel"
          review="Easy booking and good service. Will use again."
          rating={4}
        />
      </div>
    </section>
  )
}
