var mongoose = require("mongoose");

var SaleSchema = mongoose.Schema({
    saleid: {
        type: Number,
        required: true,
        unique: true
    },
    date: {
        type: Date, 
        default: Date.now
    },
    products: [{
            productid: {
                type: Number,
                required: true
            }
        
    }],
    
    name: {
      first: { type: String, required: true, trim: true},
      last: { type: String, required: true, trim: true}
  },
    omzet: {
        type: Number,
        required: true
    }
});

var Sale = mongoose.model('sales', SaleSchema);

module.exports = {

    listAllProducts: function (callback) {
        Sale.find(callback);
    },
    findProduct: function (saleid, callback) {
        Sale.find({saleid: saleid}, callback);
    },
    createProduct: function (sale, callback) {
        Sale.create(sale, callback);
    },
    updateProduct: function (id, newsale, callback) {
        Sale.findOneAndUpdate({saleid: id}, newsale, callback);// newsale is de json met de nieuwe gegevens in
    }
};