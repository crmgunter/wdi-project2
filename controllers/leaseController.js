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

// SHOW PAGE
router.get('/:id', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const lease = user.leases.id(req.params.id)

        res.render('lease/show', {
            userId: req.params.userId,
            lease: lease
        })
    })
})

// edit page
router.get('/:id/edit', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const lease = user.leases.id(req.params.id)
        res.render('lease/edit', {
            userId: req.params.userId,
            lease: lease
        })
    })
})

//update
router.patch('/:id', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const lease = user.leases.id(req.params.id)
        lease.property = req.body.property
        lease.tenants = req.body.tenants
        lease.rentDue = req.body.rentDue
        lease.rentPaid = req.body.rentPaid

        return user.save()
    }).then((updatedUser) => {
        res.redirect(`/users/${updatedUser._id}/leases/${req.params.id}`)
    })
})

// delete
router.delete('/:id', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const lease = user.leases.id(req.params.id)
        lease.remove()
        return user.save()
    }).then(() => {
        res.redirect(`/users/${req.params.userId}/leases`)
    })
})

module.exports = router;