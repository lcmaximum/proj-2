var express = require('express');
var router = express.Router();
const isLoggedIn = require('../config/auth')
const appointmentsCtrl = require("../controllers/appointments")


/* GET home page. */
router.get('/', isLoggedIn, appointmentsCtrl.index);
router.get('/new',isLoggedIn, appointmentsCtrl.new);
router.get('/:id', appointmentsCtrl.show);
router.post('/', isLoggedIn, appointmentsCtrl.create);
router.delete('/:id', isLoggedIn, appointmentsCtrl.delete);

module.exports = router;
