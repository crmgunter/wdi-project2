const mongoose = require('mongoose')
const propertySchema = require('./propertySchema')
const Schema = mongoose.Schema

const leaseSchema = new Schema ({
    property: [propertySchema],
    price: Number,
    tenants: String,
    rent: Number
})

module.exports = leaseSchema