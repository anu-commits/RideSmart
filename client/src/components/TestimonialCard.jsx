export default function TestimonialCard({name, review, rating}) {
  return (
    <div className="testimonial-card">
      <p className="review">"{review}"</p>
      <div className="footer">
        <h4>{name}</h4>
        <p>{"⭐".repeat(rating)}</p>
      </div>
    </div>
  )
}
