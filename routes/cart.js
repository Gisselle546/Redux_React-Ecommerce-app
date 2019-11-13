const express = require('express');
const router  = express.Router();
const requirelogin = require('../controllers/auth')

const CartController = require('../controllers/cart');


router.route('/')
      .post(CartController.postItem);



      module.exports = router;
