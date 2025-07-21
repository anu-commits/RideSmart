import { useState } from "react"
import carImage from "../assets/car.png"
import "./hero.css"
export default function Hero() {
  const [pickupLocation, setpickupLocation] = useState("")
  const [dropLocation, setdropLocation] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pickupLocation,
        dropLocation,
        date,
        time,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data)
      })
      .catch((err) => {
        console.error("Error:",err)
      })
    setpickupLocation("")
    setdropLocation("")
    setDate("")
    setTime("")
  }
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Smart, Affordable Car Rentals. Anytime, Anywhere.</h1>
        <p>Choose from a wide range of cars with flexible pricing.</p>
        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="PickUp Location"
            onChange={(e) => setpickupLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Drop Location"
            onChange={(e) => setdropLocation(e.target.value)}
          />
          <input type="date" onChange={(e) => setDate(e.target.value)} />
          <input type="time" onChange={(e) => setTime(e.target.value)} />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
      <div className="hero-right">
        <img src={carImage} alt="Rental car" />
      </div>
    </div>
  )
}
