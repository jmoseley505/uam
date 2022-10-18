const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'challenges-redirect'
router.post('/suitability-redirect', function (req, res) {

  // Make a variable and give it the value from 'challenges-redirect-1'
  var suitabilityRedirect = req.session.data['suitability-redirect-1']

  // Check whether the variable matches a condition
  if (suitabilityRedirect == "yes"){
    // Send user to register page
    res.redirect('challenges')
  } 
  if (suitabilityRedirect == "no"){
    // Send user to other ways you can help page
    res.redirect('other-ways-you-can-help')
  } 
 else {
    // Stays on challenges page
    res.redirect('is-your-property-suitable-error')
  }
})

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'challenges-redirect'
router.post('/challenges-redirect', function (req, res) {

  // Make a variable and give it the value from 'challenges-redirect-1'
  var challengesRedirect = req.session.data['challenges-redirect-1']

  // Check whether the variable matches a condition
  if (challengesRedirect == "yes"){
    // Send user to register page
    res.redirect('hosting-length')
  } 
  if (challengesRedirect == "no"){
    // Send user to other ways you can help page
    res.redirect('other-ways-you-can-help')
  } 
 else {
    // Stays on challenges page
    res.redirect('challenges-error')
  }
})

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'challenges-redirect'
router.post('/commitment-redirect', function (req, res) {

  // Make a variable and give it the value from 'challenges-redirect-1'
  var commitmentRedirect = req.session.data['commitment-redirect-1']

  // Check whether the variable matches a condition
  if (commitmentRedirect == "yes"){
    // Send user to register page
    res.redirect('register')
  } 
  else {
    // Stays on challenges page
    res.redirect('other-ways-you-can-help')
  }
})

module.exports = router
