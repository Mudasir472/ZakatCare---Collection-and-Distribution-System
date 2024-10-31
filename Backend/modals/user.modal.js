const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: {
        type: String,
        required: true,
    },
    username: String,
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
    ,
    image: {
        imgName: String,
        url: {
            type: String,
            default: "https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png"
        }
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);
module.exports = User;