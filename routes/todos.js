const express = require('express');
const router = express.Router();

const todosCtrl = require('../controllers/todos')
const isLoggedIn = require('../config/auth')


router.post('/appointments/:id/todos', isLoggedIn, todosCtrl.create)
//router.post('/appointments/:id/packing', isLoggedIn, packCtrl.create)

module.exports = router