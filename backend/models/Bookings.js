const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
  pickupLocation: String,
  dropLocation: String,
  date: String,
  time: String,
})

module.exports = mongoose.model("Bookings", bookingSchema)
