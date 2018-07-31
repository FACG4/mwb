const express = require('express');

const router = express.Router();
const getAllOrders = require('./getAllOrders');


router.get('/getAllOrders', getAllOrders.getAllOrders);


module.exports = router;
