const express = require('express');
const router = express.Router();
const passport = require('passport');
const appointmentsCtrl = require('../controllers/appointments')
const isLoggedIn = require('../config/auth')

router.get('/', function(req, res, next) {
  res.render('index');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/appointments', isLoggedIn, appointmentsCtrl.index)

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
