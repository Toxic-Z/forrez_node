const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20
    },
    address:  {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        minlength:10,
        maxlength:14
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 40
    },
    shippingOption: {
        type: String,
        required: true,
        minlength: 13,
        maxlength: 37
    },
    products: {
        type: Array,
        required: true
    }
});
module.exports = orderSchema;
