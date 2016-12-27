var express = require("express");
var parser = require("body-parser");

var dalLocations = require("./LocationStorage.js");
var dalAanwezigheden = require("./AanwezighedenStorage.js");
var dalSales = require("./SalesStorage.js");
var dalProducts = require("./ProductStorage.js");

var validator = require("./Validate.js");

var app = express();
app.use(parser.json());

//LOCATIONS
app.get("/Locations", function (request, response) {
    dalLocations.listAllLocations(function(result){
        response.send(result);
    });
}); // getest en werkend

var Location = function(id,name,stad, capaciteit){
    this.id = id;
    this._id = id;
    this.name = name;
    this.stad = stad;
    this.capaciteit = capaciteit;
};

app.post("/Locations", function (request, response) {
    "use strict";
    var Locatie = request.body; 

    var errors = validator.fieldsNotEmpty(Locatie, "id", "Naam", "Stad", "Capaciteit");
    if (errors) {
        response.status(400).send({msg: "Following field(s) are mandatory:" + errors.concat()});
        return;
    }

    var locatie = new Location(request.body.id,request.body.name,request.body.stad,request.body.capaciteit);
    
    dalLocations.saveLocation(locatie, function(){
        response.status(201).send();
    });
    
});
/*
//PRODUCTS
app.get("/Products", function (request, response) {
    "use strict";
    response.send(dalProducts.listAllProducts());
});

app.get("/Products/:id", function (request, response) {
    "use strict";
    var Product = dalProducts.findProduct(request.params.id);
    if (Product) {
        response.send(Product);
    } else {
        response.status(404).send();
    }
});

app.post("/Products", function (request, response) {
    "use strict";
    var Product = request.body;

    var errors = validator.fieldsNotEmpty(Product, "productid", "Productname", "price");
    if (errors) {
        response.status(400).send({msg: "Following field(s) are mandatory:" + errors.concat()});
        return;
    }

    var existingProduct = dalProducts.findProduct(Product.productid);
    if (existingProduct) {
        response.status(409).send({msg: "Productid moet uniek zijn, deze bestaat al", link: "../Products/" + existingProduct.id});
        return;
    }
    Product.id = Product.productid;
    dalProducts.saveProduct(Product);
    response.status(201).location("../Products/" + Product.id).send();
});

//SALES
app.get("/Sales", function (request, response) {
    "use strict";
    response.send(dalSales.listAllSales());
});

app.get("/Sales/:id", function (request, response) {
    "use strict";
    var Sale = dalSales.findLocation(request.params.id);
    if (Sale) {
        response.send(Sale);
    } else {
        response.status(404).send();
    }
});

app.post("/Sales", function (request, response) {
    "use strict";
    var Sale = request.body;

    var errors = validator.fieldsNotEmpty(Sale, "Date", "[Productid]", "revenue", "Saleid");
    if (errors) {
        response.status(400).send({msg: "Following field(s) are mandatory:" + errors.concat()});
        return;
    }

    var existingSale = dalSales.findSale(Sale.saleid);
    if (existingSale) {
        response.status(409).send({msg: "id moet uniek zijn, deze bestaat al", link: "../Sales/" + existingSale.id});
        return;
    }
    Sale.id = Sale.Saleid;
    dalSales.saveSale(Sale);
    response.status(201).location("../Sales/" + Sale.id).send();
});

//AANWEZIGHEDEN
app.get("/Aanwezigheden", function (request, response) {
    "use strict";
    response.send(dalAanwezigheden.listAllAanwezigheden());
});

app.get("/Aanwezigheden/:id", function (request, response) {
    "use strict";
    var Aanwezigheid = dalAanwezigheden.findAanwezigheid(request.params.id);
    if (Aanwezigheid) {
        response.send(Aanwezigheid);
    } else {
        response.status(404).send();
    }
});

app.post("/Aanwezigheden", function (request, response) {
    "use strict";
    var Aanwezigheid = request.body;

    /*var errors = validator.fieldsNotEmpty(Aanwezigheid, "Date", "unique count", "number  of sales", "ratio");
    if (errors) {
        response.status(400).send({msg: "Following field(s) are mandatory:" + errors.concat()});
        return;
    }*/

   /* var existingAanwezigheid = dalAanwezigheden.findAanwezigheid(Aanwezigheid.Date);
    if (existingAanwezigheid) {
        response.status(409).send({msg: "De Datum moet uniek zijn, deze bestaat al", link: "../Aanwezigheden/" + existingAanwezigheid.id});
        return;
    }
    Aanwezigheid.id = Aanwezigheid.Date;
    dalAanwezigheden.saveAanwezigheid(Aanwezigheid);
    response.status(201).location("../Aanwezigheden/" + Aanwezigheid.id).send();
}); */



app.listen(8000);
console.log("Server started");