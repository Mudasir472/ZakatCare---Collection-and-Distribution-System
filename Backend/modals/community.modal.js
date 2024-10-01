const mongoose = require("mongoose");
const { Schema } = mongoose;

const communitySchema = new Schema({
    heading: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    imgLink: {
        type: String,
        set: (v) =>
            v === "" ? "https://example.com/health-schoolchildren.jpghttps://res.cloudinary.com/dh7fvtv7e/image/upload/v1727768847/jordan-rowland-a2-VGRQi0v8-unsplash_qaucpl.jpg" :
                v,
    }
    ,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});
// // delete middleware => when listing delete , all reviews should be deleted

// listingSchema.post("findOneAndDelete", async (listing) => {
//     if (listing) {
//         await Review.deleteMany({ _id: { $in: listing.review } })
//     }
// })
const Community = mongoose.model("Community", communitySchema);
module.exports = Community;