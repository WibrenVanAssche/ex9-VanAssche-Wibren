var mongoose = require("mongoose");

var ProductSchema = mongoose.Schema({
    productid: {
        type: Number,
        required: true,
        unique: true
    },
    naam: {
        type: String,
        required: true
    },
    prijs: {
        type: Number,
        required: true
    }
});

var Product = mongoose.model('products', ProductSchema);

module.exports = {

    listAllProducts: function (callback) {
        Product.find(callback);
    },
    findProduct: function (naam, callback) {
        Product.find({naam: naam}, callback);
    },
    createProduct: function (product, callback) {
        Product.create(product, callback);
    },
    updateProduct: function (id, newprod, callback) {
        Product.findOneAndUpdate({productid: id}, newprod, callback);// newprod is de json met de nieuwe gegevens in
    }
};