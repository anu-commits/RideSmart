import { useState } from "react"
import CarCard from "./CarCard.jsx"
import CarModal from "./CarModal.jsx"
import fortuner from "../assets/fortuner.jpeg"
import creta from "../assets/creta.jpeg"
import swift from "../assets/swift.jpeg"

export default function CarList() {
  const [selectedCar, setSelectedCar] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const cars = [
    { image: fortuner, name: "Toyota Fortuner", type: "SUV", price: 2500 },
    { image: creta, name: "Hyundai Creta", type: "SUV | Automatic", price: 2000 },
    { image: swift, name: "Maruti Swift", type: "Hatchback", price: 1200 },
  ]

  function openModal(car) {
    setSelectedCar(car)
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
    setSelectedCar(null)
  }

  return (
    <section className="car-list">
      <h2>Popular Rentals</h2>
      <div className="car-grid">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            image={car.image}
            name={car.name}
            type={car.type}
            price={car.price}
            onClick={() => openModal(car)}
          />
        ))}
      </div>

      {isModalOpen && (
        <CarModal car={selectedCar} closeModal={closeModal} />
      )}
    </section>
  )
}
