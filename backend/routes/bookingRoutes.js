const express = require("express")
const router = express.Router()
const Booking = require("../models/Bookings")

router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body)
    await newBooking.save()
    res.status(201).json({ message: "Booking Saved Successfully!" })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Server Error!" })
  }
})

module.exports = router
