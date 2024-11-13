const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')

// Forgot Password Route

router.post('/forgot-password', authController.forgetPassword );

// Reset Password Route
router.post('/reset-password/:token', authController.resetPassword);

module.exports = router;
