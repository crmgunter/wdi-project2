const mongoose = require('mongoose')
const propertySchema = require('./propertySchema')
const Schema = mongoose.Schema

const leaseSchema = new Schema({
    property: [propertySchema],
    homeImage: String,
    address: String,
    rentDue: Number,
    tenants: String,
    rentPaid: Number
})

module.exports = leaseSchema