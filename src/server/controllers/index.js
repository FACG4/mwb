const express = require('express');
const signUp = require('./signUp');
const getAllOrders = require('./getAllOrders');
const getAllItems = require('./getAllItems');
const changeOrderStatus = require('./changeOrderStatus');
const updateDeliveryTime = require('./updateDeliveryTime');
const updateSeenValue = require('./updateSeenValue');
const tracker = require('./tracker');
const checkAuth = require('./checkAuth');
const signIn = require('./signIn');

const router = express.Router();


router.use(checkAuth);
router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/getAllOrders', getAllOrders.getAllOrders);
router.get('/getAllItems', getAllItems.getAllItems);
router.post('/updateSeenValue', updateSeenValue.updateSeenValue);
router.post('/changeOrderData', changeOrderStatus.changeOrderStatus);
router.post('/updateDeliveryTime', updateDeliveryTime.updateDeliveryTime);
router.post('/tracker', tracker.tracker);

module.exports = router;
