const express = require('express');
const signUp = require('./signUp');
const router = express.Router();
const getAllOrders = require('./getAllOrders');
const getAllItems = require('./getAllItems');
const changeOrderStatus = require('./changeOrderStatus');
const updateDeliveryTime = require('./updateDeliveryTime');
const tracker = require('./tracker');

router.post('/signup', signUp);
router.get('/getAllOrders', getAllOrders.getAllOrders);
router.get('/getAllItems', getAllItems.getAllItems);
router.post('/changeOrderStatus', changeOrderStatus.changeOrderStatus);
router.post('/updateDeliveryTime', updateDeliveryTime.updateDeliveryTime);
router.post('/tracker', tracker.tracker);

module.exports = router;
