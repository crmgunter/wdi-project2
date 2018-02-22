const express = require('express');
const router = express.Router();
const User = require('../models/user')

/* GET users listing. */
router.get('/', function (req, res) {
  User.find().then((users) => {
    res.render('user/index', {
      users: users
    })
  })
});

router.get('/new', (req, res) => {
  res.render('user/new')
})


router.post('/', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    image: req.body.image,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber
  })
  newUser.save().then((savedUser) => {
    res.redirect(`/users/${savedUser._id}`)
  })
})

router.get(':/id', (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.render('user/show', {
      user: user
    })
  })
})

module.exports = router;
