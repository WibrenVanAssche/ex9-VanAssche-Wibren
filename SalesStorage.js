var mongoose = require("mongoose");

var SaleSchema = mongoose.Schema({
    saleid: {
        type: Number,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true  //format moet eigenlijk niet string zijn maar vond de documentatie rond de formaten notgal verwarrend dus heb besloten om deze zo te laten. ligt niet echt binnen de scope
    },
    producten: [{
            productid: {
                type: Number,
                required: true
            }
        }],
    
    omzet: {
        type: Number,
        required: true
    }
});

var Sale = mongoose.model('sales', SaleSchema);

module.exports = {

    listAllSales: function (callback) {
        Sale.find(callback);
    },
    findSale: function (saleid, callback) {
        Sale.find({saleid: saleid}, callback);
    },
    createSale: function (sale, callback) {
        Sale.create(sale, callback);
    },
    updateSale: function (id, newsale, callback) {
        Sale.findOneAndUpdate({saleid: id}, newsale, callback);// newsale is de json met de nieuwe gegevens in
    }
};