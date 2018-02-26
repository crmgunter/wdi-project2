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
    homeImage: "https://photos.zillowstatic.com/p_c/ISqtvxq9429ljg0000000000.jpg",
    description: "once a popular local show house, it is now a nice, yuppified home."
})

const newton = new Property({
    address: "1416 Newton Ave SE, Atlanta Ga. 30316",
    landlord: "David",
    price: 1800,
    homeImage: "https://photos.zillowstatic.com/p_h/ISu0w9z8x91axn0000000000.jpg",
    description: "A nice house."
})

const hillStLease = new Lease({
    property: [hillSt],
    rentDue: 1200,
    tenants: "Ben, Jeff, Cam",
    rentPaid: 800,
    homeImage: "https://circaoldhouses.com/wp-content/uploads/2017/10/key-hole-house-1.jpg",
    address: "123 Poop St SE"
})

const cameron = new User({
    username: "crmgunter",
    image: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/14962703_10155539168928636_4733508502386582906_n.jpg?oh=c494c3a2a7781b6c72a36c3624803a7b&oe=5B4C363B",
    email: "crmgunter@gmail.com",
    firstName: "Cameron",
    lastName: "Gunter",
    properties: [hillSt],
    leases: [hillStLease],
    phoneNumber: 7707730154
})

const owen = new User({
    username: "owenl",
    image: "https://media-exp2.licdn.com/media/AAMAAQDuAAgAAQAAAAAAABB2AAAAJGQ4NWE2N2QyLWZjMTktNDNlMS04NTAyLWQ4MTRmNWI1NWJhMA.bin",
    email: "owen@email.com",
    firstName: "Owen",
    lastName: "Liversidge",
    properties: [newton],
    leases: [],
    phoneNumber: 6789012345
})

Property.remove(() => {
    return User.remove()
}).then(() => {
    return Lease.remove()
}).then(() => {
    return User.insertMany([cameron, owen])
}).then(() => {

    console.log('Saved Successfully')
    db.close

}).catch((err) => {

    console.log(err)
    db.close()
})