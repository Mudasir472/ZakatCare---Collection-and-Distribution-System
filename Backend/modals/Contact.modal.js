const mongoose = require("mongoose");
const { Schema } = mongoose;
const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },

})
const Conatct = mongoose.model("Conatct", contactSchema);
module.exports = Conatct;