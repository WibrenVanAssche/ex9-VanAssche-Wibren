var express = require("express");
var parser = require("body-parser");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/EX9DB");

var dalLocations = require("./LocationStorage.js");
var dalAanwezigheden = require("./AanwezighedenStorage.js");
var dalSales = require("./SalesStorage.js");
var dalProducts = require("./ProductStorage.js");

var validateLocations = require("./validators/validateLocations.js");

var app = express();
app.use(parser.json());

//LOCATIONS


app.get("/Locations", function (request, response) {
    dalLocations.listAllLocations(function (err, Locations) {
        if (err) {
            throw err;
        }
        response.send(Locations);
    });
}); // getest en werkend


app.get("/Locations/:stad", function (request, response) {
    dalLocations.findLocation(request.params.stad, function (err, location) {
        if (err) {
            throw err;
        }
        response.send(location);
    });
    
}); //uiteindelijk werkend na realisatie dat het Locations/Mechelen moet zijn en niet Locations/:Mechelen

var Location = function(locatieid,naam,stad,capaciteit){
    this.locatieid = locatieid;
    this.naam = naam;
    this.stad = stad;
    this.capaciteit = capaciteit;
};

app.post("/Locations", function(request, response){
    var Locatie = new Location(request.body.locatieid, request.body.naam, request.body.stad, request.body.capaciteit);
    
    var errors = validateLocations.checkvalues(Locatie, "locatieid", "naam", "stad", "capaciteit")
    
    dalLocations.createLocation(Locatie, function (err, locatie){
       if (err) {
            console.log(err);
        }
       response.send(locatie);
    });
}); //werkt, getest met brussel (1,Refter,Brussel,200)
    //nog validatie nodig. Veel hiervan wordt eigenlijk wel al gedaan door mongoose zelf. 
    //hoewel het dan niet steeds duidelijk is wat het probleem net is.

app.put("/Locations/:locatieid", function(request, response){
    var Locatie = new Location(request.body.locatieid, request.body.naam, request.body.stad, request.body.capaciteit);
    dalLocations.updateLocation(request.params.locatieid, Locatie, function(err, locatie){
        if (err) {
            console.log(err);
        }
       response.send(locatie);
        
    });
});// werkt, getest door brussel om te vormen naar pauzelokaal
   //validatie nodig

app.listen(8000);
console.log("Server started");

