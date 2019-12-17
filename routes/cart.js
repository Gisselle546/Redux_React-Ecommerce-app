const express = require('express');
const router  = express.Router();
const requirelogin = require('../controllers/auth')

const CartController = require('../controllers/cart');


router.route('/')
      .post(CartController.postItem)
      .get(CartController.getCart);

router.route('/:id')
      .delete(CartController.deleteCartItem);

      module.exports = router;
