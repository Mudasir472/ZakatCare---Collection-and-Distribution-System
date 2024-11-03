const mongoose = require("mongoose")
const ExpressError = require("./utils/customErrorHandle")
// const Listing = require("./modals/data.modal");

module.exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    // res.status(401).json({ message: "Unauthorized Access" });
    throw new ExpressError(401,"Access Denied",false);
    // next({ status: 401, message: "Not Authorized" })
};

// module.exports.isOwner = async (req, res, next) => {
//     let { id } = req.params;
//     let listing = await Listing.findById(id);
//     const userId = new mongoose.Types.ObjectId(req.user._id);
//     if (!userId.equals(listing.owner._id)) {
//         return res.status(402).json({ msg: "Not an Owner" })
//     }
//     next();
// }