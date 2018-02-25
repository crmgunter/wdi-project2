const express = require('express');
const router = express.Router();
const Property = require('../models/property')


/* GET users listing. */
router.get('/', function (req, res) {
  Property.find().then((properties) => {
    console.log(properties)
    res.render('allProperty/index', {
      properties: properties
    })
  })
});


module.exports = router