const express = require("express");
const router = express.Router({ mergeParams: true });
const donationController = require('../controllers/donations.controller');
const { isAuthenticated } = require("../Middlewares");

router.post('/zakatcare/donations', donationController.donationPost)

router.get('/zakatcare/donations', donationController.donationGet);

module.exports = router;
