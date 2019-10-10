const express = require('express');
const router  = express.Router();
const {validate,schemas} = require('../config/validator');

const authController = require('../controllers/auth');

router.route('/signup')
      .post(validate(schemas.authSchema),authController.signup);

router.route('/login')
      .post(authController.authRoutes,authController.login);

router.route('/forgotpassword')
      .post(authController.forgotpassword);

router.route('/resetpassword:token')
      .patch(authController.resetPassword);
module.exports = router;
