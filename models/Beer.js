const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    beerName: {type: String, required: true, unique: true},
    beerType: {type: String, required: true},
    beerColour: {type: String, required: true},
    beerAlcohol: {type: Number, required: true}
});

module.exports = model('Beer', schema);