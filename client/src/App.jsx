import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import CarList from "./components/CarList"
import Testimonials from "./components/Testimonials"
import Footer from "./components/footer"
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarList />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
