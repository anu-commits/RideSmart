const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const bookingRoutes = require("./routes/bookingRoutes.js")
const app = express()
app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb connected")
  })
  .catch((error) => {
    console.error("MongoDb connection error:", error)
  })

app.use("/api/bookings", bookingRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})
