const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propertySchema = new Schema ({
    address: String,
    landlord: String,
    price: Number,
    description: String
})

module.exports = propertySchema