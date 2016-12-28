var express = require("express");
var parser = require("body-parser");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/EX9DB");

//storage files
var dalLocations = require("./LocationStorage.js");
var dalAanwezigheden = require("./AanwezighedenStorage.js");
var dalSales = require("./SalesStorage.js");
var dalProducts = require("./ProductStorage.js");

//validatie files
var validateLocations = require("./validators/validateLocations.js");
var validateProducts = require("./validators/validateProducts.js");

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

var Location = function (locatieid, naam, stad, capaciteit) {
    this.locatieid = locatieid;
    this.naam = naam;
    this.stad = stad;
    this.capaciteit = capaciteit;
};

app.post("/Locations", function (request, response) {
    var Locatie = new Location(request.body.locatieid, request.body.naam, request.body.stad, request.body.capaciteit);

    var errors = validateLocations.checkvalues(Locatie, "locatieid", "naam", "stad", "capaciteit");
    if (errors > 0) {
        return;
    }

    dalLocations.createLocation(Locatie, function (err, locatie) {
        if (err) {
            console.log(err);
        }
        response.send(locatie);
        console.log("Location" + "\n" + JSON.stringify(locatie) + "\n" + "added \n\n");
    });
});  //validatie in orde, code geeft fouten door en voegt ook geen foute velden toe.
// Ook weergeven toegevoegde json toegevoegd


app.put("/Locations/:locatieid", function (request, response) {
    var Locatie = new Location(request.body.locatieid, request.body.naam, request.body.stad, request.body.capaciteit);
    var errors = validateLocations.checkvalues(Locatie, "locatieid", "naam", "stad", "capaciteit");
    if (errors > 0) {
        return;
    }
    dalLocations.updateLocation(request.params.locatieid, Locatie, function (err, locatie) {
        if (err) {
            console.log(err);
        }
        response.send(locatie);
        
        console.log("\n" + "Locatieid: " + + JSON.stringify(request.body.locatieid) + "\n" + "updated \n\n");

    });
});//werkt volledig, validatie is ook in orde gebracht plus mededeling na succesvolle update

//**********************************************************************************************************************************
//**********************************************************************************************************************************
//PRODUCTS

app.get("/Products", function (request, response) {
    dalProducts.listAllProducts(function (err, Products) {
        if (err) {
            throw err;
        }
        response.send(Products);
    });
});//getest en werkend

app.get("/Products/:naam", function (request, response) {
    dalProducts.findProduct(request.params.naam, function (err, product) {
        if (err) {
            throw err;
        }
        response.send(product);
    });

});//getest en werkend

var Product = function (productid, naam, prijs){
  this.productid = productid;
  this.naam = naam;
  this.prijs = prijs;
};

app.post("/Products", function (request, response) {
    var product = new Product(request.body.productid, request.body.naam, request.body.prijs);

    var errors = validateProducts.checkvalues(product, "productid", "naam", "prijs");
    if (errors > 0) {
        return;
    }

    dalProducts.createProduct(product, function (err, productje) {
        if (err) {
            console.log(err);
        }
        response.send(productje);
        console.log("Product" + "\n" + JSON.stringify(productje) + "\n" + "added \n\n");
    });
});//getest en werkend

app.put("/Products/:productid", function (request, response) {
    var product = new Product(request.body.productid, request.body.naam, request.body.prijs);
    var errors = validateProducts.checkvalues(product, "productid", "naam", "prijs");
    if (errors > 0) {
        return;
    }
    dalProducts.updateProduct(request.params.productid, product, function (err, productje) {
        if (err) {
            console.log(err);
        }
        response.send(productje);
        
        console.log("\n" + "Productid: " + + JSON.stringify(request.body.productid) + "\n" + "updated \n\n");

    });
});//getest en werkend 


//****************************************************************************************************************
//****************************************************************************************************************

//SALES




app.listen(8000);
console.log("Server started");

