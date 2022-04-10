const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
    title: { type: String, required: true, unique: true },
    abstracts: [{
        id: 0,
        value: { type: String },
        images: [{
            data: Buffer,
            contentType: String
        }]
    }],
    categories: [{ type: String, required: false }],
}, {
    timestamps: true
});

module.exports = model("Post", PostSchema);