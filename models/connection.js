const mongoose = require("mongoose")
const connectionString = "mongodb+srv://lucas-viola:$$newlester$$93@cluster0.5eclhag.mongodb.net/tickethack"
mongoose.set("strictQuery", true)

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Successfully connected to the Database 🥳 !"))
  .catch((errorMessage) => console.error(errorMessage))