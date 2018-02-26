const express = require('express');
const router = express.Router();
const User = require('../models/user')

/* GET users listing. */
router.get('/', function (req, res) {
  User.find().then((users) => {
    console.log(users)
    res.render('user/index', {
      users: users
    })
  })
});

// NEW
router.get('/new', (req, res) => {
  res.render('user/new')
})

// POST 
router.post('/', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    image: req.body.image,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    about: req.body.about
  })
  newUser.save().then((savedUser) => {
    res.redirect(`/users/${savedUser._id}`)
  })
})

// SHOW PAGE
router.get('/:id', (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.render('user/show', {
      user: user
    })
  })
})

// edit page
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.render('user/edit', {
      id: req.params.id,
      user: user
    })
  })
})

//update
router.patch('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    username: req.body.username,
    image: req.body.image,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    about: req.body.about
  }, { new: true }).then((updatedUser) => {
    res.redirect(`/users/${updatedUser.id}`)
  })
})

// delete
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id).then(() => {
    res.redirect('/users')
  })
})

module.exports = router;