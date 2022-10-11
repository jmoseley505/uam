const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'challenges-redirect'
router.post('/challenges-redirect', function (req, res) {

  // Make a variable and give it the value from 'challenges-redirect-1'
  var challengesRedirect = req.session.data['challenges-redirect-1']

  // Check whether the variable matches a condition
  if (challengesRedirect == "yes"){
    // Send user to register page
    res.redirect('register')
  } 
  if (challengesRedirect == "no"){
    // Send user to other ways you can help page
    res.redirect('other-ways-you-can-help')
  } 
  if (challengesRedirect == "not-sure"){
    // Send user to not sure page
    res.redirect('read-more')
  } 
 else {
    // Stays on challenges page
    res.redirect('challenges-error')
  }
})

module.exports = router
