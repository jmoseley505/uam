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
 else {
    // Stays on challenges page
    res.redirect('challenges-error')
  }
})

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
    res.redirect('challenges-error')
  }
})

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'challenges-redirect'
router.post('/read-more-1-redirect', function (req, res) {

  // Make a variable and give it the value from 'challenges-redirect-1'
  var readMore1Redirect = req.session.data['read-more-1-redirect-1']

  // Check whether the variable matches a condition
  if (readMore1Redirect == "yes"){
    // Send user to register page
    res.redirect('challenges')
  } 
  if (readMore1Redirect == "no"){
    // Send user to other ways you can help page
    res.redirect('other-ways-you-can-help')
  } 
 else {
    // Stays on challenges page
    res.redirect('read-more-1-error')
  }
})

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'challenges-redirect'
router.post('/read-more-2-redirect', function (req, res) {

  // Make a variable and give it the value from 'challenges-redirect-1'
  var readMore1Redirect = req.session.data['read-more-2-redirect-1']

  // Check whether the variable matches a condition
  if (readMore1Redirect == "yes"){
    // Send user to register page
    res.redirect('challenges')
  } 
  if (readMore1Redirect == "no"){
    // Send user to other ways you can help page
    res.redirect('other-ways-you-can-help')
  } 
 else {
    // Stays on challenges page
    res.redirect('read-more-1-error')
  }
})





module.exports = router
