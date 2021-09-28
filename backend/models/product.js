const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: String
})

module.exports.Product = mongoose.model('Product', productSchema);