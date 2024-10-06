const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema({
    name: String,
    imgLink: String,
    speciality: String,
    desc: String,
    links: { type: [String], required: true }
})

const Team = mongoose.model("Team", teamSchema)

module.exports = Team;