const mongoose = require('mongoose')
const propertySchema = require('../db/schemas/propertySchema')

const Property = mongoose.model('property', propertySchema)

module.exports = Property