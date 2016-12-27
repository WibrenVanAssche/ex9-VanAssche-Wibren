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
  
  listAllLocations : function(callback){
    Locatie.find(callback);
  },
  findLocation : function(stad, callback){
        Locatie.find({stad:stad}, callback);
    },
  createLocation : function(locatie, callback){
      Locatie.create(locatie, callback);
  }
};

