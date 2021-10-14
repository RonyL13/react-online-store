const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Missing field: Product name'],
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'Missing field: Product price']
    },
    sizes: {
        type: Array,
        required: [true, 'Missing field: Product Sizes']
    },
    src: {
        type: String,
        required: [true, 'Missing field: Product source'],
        unique: true
    }
})

module.exports.Product = mongoose.model('Product', productSchema);