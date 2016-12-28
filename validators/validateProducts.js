module.exports = {
    checkvalues: function (list) {
        var errors = 0;

        if (list["productid"] <= 0) {
            console.log("'productid' moet groter dan 0 zijn.");
            errors++;
        }
        if (typeof list["productid"] !== "number") {
            console.log("'locatieid' moet type Number zijn.");
            errors++;
        }
//********************************************************************

        if (typeof list["naam"] !== "string") {
            console.log("'naam' moet type String zijn.");
            errors++;
        }
        if (typeof list["naam"] == "") {
            console.log("Vul een waarde in voor 'naam'.");
            errors++;
        }
        //lege veld detectie is eig overbodig want mongoose geeft hier zelf een error voor.

//****************************************************************************
        if (list["prijs"] <= 0) {
            console.log("'prijs' moet groter dan 0 zijn.");
            errors++;
        }
        if (typeof list["prijs"] !== "number") {
            console.log("'prijs' moet type Number zijn.");
            errors++;
        }
        
        return errors;
    }
}; //

