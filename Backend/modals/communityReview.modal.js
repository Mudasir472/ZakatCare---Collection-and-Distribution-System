const mongoose = require("mongoose");
const { Schema } = mongoose;
const reviewSchema = new Schema({
    comment: String,
    username:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    // author: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    // }
})
const CommReview = mongoose.model("CommReview", reviewSchema);
module.exports = CommReview;