var mongoose = require("mongoose");

var LocationSchema = mongoose.Schema({
    locatieid: {
        type: Number,
        required: true,
        unique: true        
    },
    naam: {
        type: String,
        required: true  
    },
    stad: {
        type: String,
        required: true
    },
    capaciteit: {
        type: Number,
        required: true
    }
});

var Locatie = mongoose.model('locations', LocationSchema);

module.exports =  {
  
  saveLocation : function(Location, callback){
     Locatie.find(callback);
  },
  
  listAllLocations : function(callback){
    Locatie.find(callback);
  },
  findLocation : function(stad, callback){
        Locatie.find({stad:stad}, callback);
    },
};

