const Community = require("../modals/community.modal");
const CommReview = require("../modals/communityReview.modal.js");
const wrapAsync = require("../utils/wrapAsync")


module.exports.community = async (req, res) => {
    const comunity = await Community.find({}).populate("owner").populate("commreview");
    const user = req.user;
    res.status(200).json({ comunity, user });
}

module.exports.reviews = async (req, res) => {
    const { id } = req.params;
    const { comment, username, email } = req.body;

    if (!comment || !username) {
        return res.status(400).json({ msg: "Comment and username is required" });
    }
    try {
        const comunity = await Community.findById(id);
        // Check if the comunity exists
        if (!comunity) {
            return res.status(404).json({ msg: "comunity not found" });
        }
        // Create a new review
        const newReview = new CommReview({ comment, username, email });
        // Save the new review and add it to the comunity
        await newReview.save();
        comunity.commreview.push(newReview);
        await comunity.save();
        res.status(200).json({ msg: "Review added successfully" });
    } catch (error) {
        console.error("Error adding review:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
}