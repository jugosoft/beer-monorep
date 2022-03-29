const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    photo: { type: String, required: false },
    email: { type: String, required: true },
    categories: { type: Array, required: false },
}, {
    timestamps: true
});

module.exports = model("Post", PostSchema);