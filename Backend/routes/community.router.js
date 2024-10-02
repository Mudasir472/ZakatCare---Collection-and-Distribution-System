const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync")
const Community = require("../modals/community.modal");

router.get("/zakatcare/community", async (req, res) => {
    const comunity = await Community.find({}).populate("owner").populate("commreview");
    const user = req.user;
    res.status(200).json({ comunity, user });
})

module.exports = router