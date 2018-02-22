const express = require('express');
const router = express.Router({ mergeParams: true });

const User = require('../models/user')
const Property = require('../models/property')

/* GET users listing. */
router.get('/', function (req, res) {
    User.findById(req.params.userId).then((user) => {
        console.log(user)
        const properties = user.properties
        res.render('property/index', {
            user: user,
            properties: properties
        })
    })
});

// NEW
router.get('/new', (req, res) => {
    res.render('property/new', {
        userId: req.params.userId
    })
})

// POST 
router.post('/', (req, res) => {
    const userId = req.params.userId
    const newProperty = req.body

    User.findById(userId).then((user) => {
        const newProperty = new Property({
            address: req.body.address,
            landlord: req.body.landlord,
            price: req.body.price,
            description: req.body.description,
            homeImage: req.body.homeImage
        })
        
        user.properties.push(newProperty)
        return user.save()
    }).then((updatedUser) => {
        res.redirect(`/users/${req.params.userId}/properties`)
    })
})

// SHOW PAGE
router.get('/:id', (req, res) => {
  User.findById(req.params.userId).then((user) => {
    const property = user.properties.id(req.params.id)

    res.render('property/show', {
      userId: req.params.userId,
      property: property
    })
  })
})

// edit page
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.userId).then((user) => {
      const property = user.properties.id(req.params.id)
    res.render('property/edit', {
      userId: req.params.userId,
      property: property
    })
  })
})

// //update
// router.patch('/:id', (req, res) => {
//   User.findByIdAndUpdate(req.params.id, {
//     username: req.body.username,
//     image: req.body.image,
//     email: req.body.email,
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     phoneNumber: req.body.phoneNumber
//   }, {new: true}).then((updatedUser) => {
//     res.redirect(`/users/${updatedUser.id}`)
//   })
// })

// // delete
// router.delete('/:id', (req, res) => {
//   User.findByIdAndRemove(req.params.id).then(() => {
//     res.redirect('/users')
//   })
// })

module.exports = router;