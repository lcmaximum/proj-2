const express = require('express');
const router = express.Router();
const attendeesCtrl = require('../controllers/attendees');
const isLoggedIn = require('../config/auth')


router.post('/appointments/:id/attendees', isLoggedIn, attendeesCtrl.create);


module.exports = router;