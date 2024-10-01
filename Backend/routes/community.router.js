const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync")
const Community = require("../modals/community.modal");

router.get("/zakatcare/community",async(req,res)=>{
    const comunity = await Community.find({});
    res.status(200).json({comunity});
})

module.exports = router