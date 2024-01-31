const mongoose = require("mongoose")

const trajetSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number
})

const Trajet = mongoose.model("trips", trajetSchema)

module.exports = Trajet