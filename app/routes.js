const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/challenges-redirect', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['challenges-redirect-1']

  // Check whether the variable matches a condition
  if (howManyBalls == "yes"){
    // Send user to next page
    res.redirect('register')
  } else {
    // Send user to ineligible page
    res.redirect('other-ways-you-can-help')
  }

})
module.exports = router
