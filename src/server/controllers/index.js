const express = require('express');

const signUp = require('./signUp');

const router = express.Router();
const getAllOrders = require('./getAllOrders');


router.get('/getAllOrders', getAllOrders.getAllOrders);
router.post('/signup', signUp);

module.exports = router;
