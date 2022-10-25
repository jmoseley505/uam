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
    res.redirect('important-things-to-consider')
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
    res.redirect('hosting-commitment')
  } 
  if (challengesRedirect == "no"){
    // Send user to other ways you can help page
    res.redirect('other-ways-you-can-help')
  } 
 else {
    // Stays on challenges page
    res.redirect('important-things-to-consider-error')
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
    res.redirect('now-we-need-your-information')
  } 
  else {
    // Stays on challenges page
    res.redirect('other-ways-you-can-help')
  }
})

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'challenges-redirect'
router.post('/different-address-redirect', function (req, res) {

  // Make a variable and give it the value from 'challenges-redirect-1'
  var differentAddressRedirect = req.session.data['different-address-redirect-1']

  // Check whether the variable matches a condition
  if (differentAddressRedirect == "yes"){
    // Send user to register page
    res.redirect('enter-their-full-address')
  } 
  else {
    // Stays on challenges page
    res.redirect('hosting-start-date')
  }
})

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'challenges-redirect'
router.post('/any-more-redirect', function (req, res) {

  // Make a variable and give it the value from 'challenges-redirect-1'
  var anyMoreRedirect = req.session.data['any-more-redirect-1']

  // Check whether the variable matches a condition
  if (anyMoreRedirect == "yes"){
    // Send user to register page
    res.redirect('share-information')
  } 
  else {
    // Stays on challenges page
    res.redirect('hosting-start-date')
  }
})

module.exports = router
