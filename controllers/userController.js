const express = require('express');
const router = express.Router();
const User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res) {
  User.find().then((users) => {
    res.send(users);
  })
  
});

module.exports = router;
