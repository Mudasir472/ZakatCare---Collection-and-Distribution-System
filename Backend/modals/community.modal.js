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
    commreview:
        [
            {
                type: Schema.Types.ObjectId,
                ref: "CommReview"
            }
        ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});
// delete middleware => when listing delete , all reviews should be deleted

communitySchema.post("findOneAndDelete", async (community) => {
    if (community) {
        await CommReview.deleteMany({ _id: { $in: community.commreview } })
    }
})
const Community = mongoose.model("Community", communitySchema);
module.exports = Community;