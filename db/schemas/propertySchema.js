const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propertySchema = new Schema ({
    address: String,
    landlord: String,
    price: Number,
    homeImage: String,
    description: String
})

module.exports = propertySchema