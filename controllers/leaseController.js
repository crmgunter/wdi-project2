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

// POST 
router.post('/', (req, res) => {
    const userId = req.params.userId
    const newLease = req.body

    User.findById(userId).then((user) => {
        const newLease = new Lease({
            property: req.body.property,
            tenants: req.body.tenants,
            rentDue: req.body.rentDue,
            rentPaid: req.body.rentPaid
        })

        user.leases.push(newLease)
        return user.save()
    }).then((updatedUser) => {
        res.redirect(`/users/${req.params.userId}/leases`)
    })
})

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