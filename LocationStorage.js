var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/EX9DB';

module.exports =  {
  Locations : {},
  
  connect: function (err, result) {
		MongoClient.connect(url, function (error, db) {
			if (error)
				throw new Error(error);
			console.log("Connected successfully to server");
			result(db);
		});
	},
  
  saveLocation : function(Location, callback){
      this.connect(null, function(db){
          db.collection('Locations').insert(Location, function(err, result) {
              db.close();
              callback();//callback voert anonieme functie uit die in de main wordt meegegeven.
          });
      });
  },
  
  listAllLocations : function(callback){
    this.connect(null,function (db) {
        db.collection('Locations').find({}).toArray(function(err,result){
            db.close();
            callback(result);
        }); //wordt opgeroepen in main, haalt alle locations op en stuurt deze terug via callback
        //  // (callback voert de functie uit die in de main wordt meegegeven met het result argument van hier)
    });
  }
};

