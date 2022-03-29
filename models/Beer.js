const { Schema, model } = require('mongoose');

const schema = new Schema({
    beerName: { type: String, required: true, unique: true },
    beerType: { type: String, required: true },
    beerColour: { type: String, required: true },
    beerAlcohol: { type: Number, required: true }
}, {
    timestamps: true
});

module.exports = model('Beer', schema);