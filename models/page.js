const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const pageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    header: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Page", pageSchema)