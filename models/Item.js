const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Crate schema
const ItemSchema = new Schema({
    image: { type: String },
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);

