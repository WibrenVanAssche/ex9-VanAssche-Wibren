var mongoose = require("mongoose");

var SaleSchema = mongoose.Schema({
    saleid: {
        type: Number,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true  //format moet eigenlijk niet string zijn maar vond de documentatie rond de formaten notgal verwarrend 
                        //dus heb besloten om deze zo te laten. ligt niet echt binnen de scope
    },
    producten: [{
            productid: {
                type: Number,
                required: true
            }
        }], //deze zou eigenlijk moeten verwijzen naar de productid in het product schema. 
            //Heb dit opgezocht maar uiteindelijk besloten om het niet te doen. Dit zou vooral veel tijd in beslag nemen
    
    
    omzet: {
        type: Number,
        required: true
    },
    
    locatieid: {
        type: Number,
        required: true
    }//was ik eerst vergeten toe te voegen maar is natuurlijk nodig om te weten op welke locatie de sale gebeurde.
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