import "./CarCard.css"
export default function CarCard({ image, name, type, price, onClick }) {
  return (
    <div className="car-card" onClick={onClick}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{type}</p>
      <p className="price">{price}/day</p>
      <button className="rent-btn">Rent Now</button>
    </div>
  )
}
