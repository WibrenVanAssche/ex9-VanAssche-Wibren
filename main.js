var express = require("express");
var parser = require("body-parser");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/EX9DB");

var dalLocations = require("./LocationStorage.js");
var dalAanwezigheden = require("./AanwezighedenStorage.js");
var dalSales = require("./SalesStorage.js");
var dalProducts = require("./ProductStorage.js");

var validator = require("./Validate.js");

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
    
});



app.listen(8000);
console.log("Server started");