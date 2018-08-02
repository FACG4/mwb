const express = require('express');

const signUp = require('./signUp');

const router = express.Router();
const getAllOrders = require('./getAllOrders');
const changeOrderStatus = require('./changeOrderStatus');
const updateDeliveryTime = require('./updateDeliveryTime');


router.post('/signup', signUp);
router.get('/getAllOrders', getAllOrders.getAllOrders);
router.post('/changeOrderStatus', changeOrderStatus.changeOrderStatus);
router.post('/updateDeliveryTime', updateDeliveryTime.updateDeliveryTime);


module.exports = router;
