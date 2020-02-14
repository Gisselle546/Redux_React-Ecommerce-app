const express = require('express');
const router  = express.Router();

const PaymentController = require('../controllers/payment');

router.route('/')
      .post(PaymentController.postPayment);


module.exports = router;
