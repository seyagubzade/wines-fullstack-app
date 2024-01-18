const mongoose = require("mongoose");

const WineModel = mongoose.model("WineModel", new mongoose.Schema({
    name: String,
    year: Number,
    price: Number,
    country: String,
    type: String,
    desc: String,
    image: String
}))


module.exports = {WineModel};