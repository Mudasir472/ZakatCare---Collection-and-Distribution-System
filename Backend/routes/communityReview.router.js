const express = require("express");
const router = express.Router({ mergeParams: true });
const commController = require('../controllers/community.controller')

router.post("/commreview/:id", commController.reviews);

module.exports = router;