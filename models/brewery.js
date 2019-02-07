const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrewerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: [0, 'Rating must be a number between 0 and 10 inclusive'],
        max: [10, 'Rating must be a number between 0 and 10 inclusive'],
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Brewery', BrewerySchema);