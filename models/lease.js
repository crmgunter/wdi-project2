const mongoose = require('mongoose')
const leaseSchema = require('../db/schemas/leaseSchema')

const Lease = mongoose.model('lease', leaseSchema)

module.exports = Lease