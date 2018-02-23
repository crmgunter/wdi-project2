const express = require('express');
const router = express.Router({ mergeParams: true });

const User = require('../models/user')
const Lease = require('../models/lease')

/* GET users listing. */
router.get('/', function (req, res) {
    User.findById(req.params.userId).then((user) => {
        console.log(user)
        const leases = user.leases
        res.render('lease/index', {
            user: user,
            leases: leases
        })
        console.log(leases)
    })
});

// NEW
router.get('/new', (req, res) => {
    res.render('lease/new', {
        userId: req.params.userId
    })
})

// // POST 
// router.post('/', (req, res) => {
//     const userId = req.params.userId
//     const newProperty = req.body

//     User.findById(userId).then((user) => {
//         const newProperty = new Property({
//             address: req.body.address,
//             landlord: req.body.landlord,
//             price: req.body.price,
//             description: req.body.description,
//             homeImage: req.body.homeImage
//         })

//         user.properties.push(newProperty)
//         return user.save()
//     }).then((updatedUser) => {
//         res.redirect(`/users/${req.params.userId}/properties`)
//     })
// })

// // SHOW PAGE
// router.get('/:id', (req, res) => {
//     User.findById(req.params.userId).then((user) => {
//         const property = user.properties.id(req.params.id)

//         res.render('property/show', {
//             userId: req.params.userId,
//             property: property
//         })
//     })
// })

// // edit page
// router.get('/:id/edit', (req, res) => {
//     User.findById(req.params.userId).then((user) => {
//         const property = user.properties.id(req.params.id)
//         res.render('property/edit', {
//             userId: req.params.userId,
//             property: property
//         })
//     })
// })

// //update
// router.patch('/:id', (req, res) => {
//     User.findById(req.params.userId).then((user) => {
//         const property = user.properties.id(req.params.id)
//         property.address = req.body.address
//         property.landlord = req.body.landlord
//         property.price = req.body.price
//         property.description = req.body.description
//         property.homeImage = req.body.homeImage

//         return user.save()
//     }).then((updatedUser) => {
//         res.redirect(`/users/${updatedUser._id}/properties/${req.params.id}`)
//     })
// })

// // delete
// router.delete('/:id', (req, res) => {
//     User.findById(req.params.userId).then((user) => {
//         const property = user.properties.id(req.params.id)
//         property.remove()
//         return user.save()
//     }).then(() => {
//         res.redirect(`/users/${req.params.userId}/properties`)
//     })
// })

module.exports = router;