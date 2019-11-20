const express = require('express');
const router  = express.Router();

const ProductController = require('../controllers/product');
const requirelogin = require('../controllers/auth')



router.route('/')
      .get(requirelogin.authRoutes,ProductController.getProducts)
      .post(ProductController.createProduct);

router.route('/search')
      .get(ProductController.searchProduct);


router.route('/:productid')
      .get(ProductController.getProduct)
      .put(ProductController.replaceProduct);


module.exports = router;
