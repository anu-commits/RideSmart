import "./CarModal.css"
export default function CarModal({ car, closeModal }) {
  if (!car) return null
  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          x
        </button>
        <h2>{car.name}</h2>
        <p>Type: {car.type}</p>
        <p>Price: {car.price}/day</p>
      </div>
    </div>
  )
}
