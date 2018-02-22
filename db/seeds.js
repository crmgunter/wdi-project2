require('dotenv').config()

const mongoose = require('mongoose')

const User = require('../models/user')
const Property = require('../models/property')
const Lease = require('../models/lease')

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('open', () => {
    console.log('You have connected to mongoDB!')
})
db.on('error', (err) => {
    console.log(err)
})

const hillSt = new Property({
    address: "1281 Hill St SE, Atlanta Ga. 30315",
    landlord: "dumb guy",
    price: 1200,
    description: "once a popular local show house, it is now a nice, yuppified home."
})

const newton = new Property({
    address: "1416 Newton Ave SE, Atlanta Ga. 30316",
    landlord: "David",
    price: 1800,
    description: "A nice house."
})

const cameron = new User({
    username: "crmgunter",
    email: "crmgunter@gmail.com",
    firstName: "Cameron",
    lastName: "Gunter",
    properties: [hillSt],
    phoneNumber: 7707730154
})

const owen = new User({
    username: "owenl",
    email: "owen@email.com",
    firstName: "Owen",
    lastName: "Liversidge",
    properties: [newton],
    phoneNumber: 6789012345
})

Property.remove(() => {

    return User.remove()

}).then(() => {

    return User.insertMany([cameron, owen])

}).then(() => {

    console.log('Saved Successfully')
    db.close

}).catch((err) => {

    console.log(err)
    db.close()
})