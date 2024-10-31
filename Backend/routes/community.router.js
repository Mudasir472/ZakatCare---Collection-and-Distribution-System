const express = require("express");
const router = express.Router({ mergeParams: true });
const commController = require('../controllers/community.controller')


router.get("/zakatcare/community", commController.community)

module.exports = router