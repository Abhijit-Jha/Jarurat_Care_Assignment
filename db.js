const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid");
mongoose.connect(process.env.MONGODB_URL).then("Connected to MongoDB").catch("Error while connecting")

const healthSchema = new mongoose.Schema({
    serviceId : { type: String, required: true, unique: true, default: uuidv4 },
    name : String,
    description : String,
    price : Number
})

const healthModel = mongoose.model("Health Service",healthSchema)

module.exports = healthModel