const mongoose = require('mongoose')
const propertySchema = require('./propertySchema')
const leaseSchema = require('./leaseSchema')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    username: String,
    image: String,
    email: String,
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    properties: [propertySchema],
    leases: [leaseSchema]
})

module.exports = userSchema