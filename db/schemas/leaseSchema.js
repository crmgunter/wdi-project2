const mongoose = require('mongoose')
const propertySchema = require('./propertySchema')
const Schema = mongoose.Schema

const leaseSchema = new Schema ({
    property: [propertySchema],
    rentDue: Number,
    tenants: String,
    rentPaid: Number
})

module.exports = leaseSchema