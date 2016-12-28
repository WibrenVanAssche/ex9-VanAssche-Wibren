module.exports = {
    checkvalues: function (list) {
        var errors = 0;

        if (list["saleid"] <= 0) {
            console.log("'saleid' moet groter dan 0 zijn.");
            errors++;
        }
        if (typeof list["saleid"] !== "number") {
            console.log("'saleid' moet type Number zijn.");
            errors++;
        }
//********************************************************************

        if (typeof list["date"] !== "string") {
            console.log("'date' moet type String zijn.");
            errors++;
        }
        if (typeof list["date"] == "") {
            console.log("Vul een waarde in voor 'date'.");
            errors++;
        }
       
//****************************************************************************
        if (list["producten"] == "") {
            console.log("Vul een waarde in voor 'producten'.");
            errors++;
        }     
       
//****************************************************************************     
        if (typeof list["omzet"] !== "number") {
            console.log("'omzet' moet type Number zijn.");
            errors++;
        }
        
        return errors;
    }
};

