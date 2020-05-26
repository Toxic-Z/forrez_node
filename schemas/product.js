const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 20,
        maxlength: 35
    },
    description:  {
        type: String,
        required: true,
        minlength: 80,
        maxlength: 140
    },
    price: {
        type: Number,
        required: true,
        min: 5,
        max: 100
    }
});
module.exports = productSchema;
