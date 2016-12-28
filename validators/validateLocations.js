

module.exports = {
    checkvalues: function(list)  {
        
        if(list["locatieid"] <= 0){
          console.log("'locatieid' moet groter dan 0 zijn.");  
        }       
        if(typeof list["locatieid"] !== "number"){
          console.log("'locatieid' moet type Number zijn.");  
        }
        
        
        if(typeof list["stad"] !== "string"){
          console.log("'stad' moet type String zijn.");  
        }
         if(typeof list["stad"] == ""){
          console.log("Vul een waarde in voor 'stad'.");  
        }
        //lege veld detectie is eig overbodig want mongoose geeft hier zelf een error voor.
        
         if(typeof list["naam"] !== "string"){
          console.log("'naam' moet type String zijn.");  
        }
         if(typeof list["naam"] == ""){
          console.log("Vul een waarde in voor 'naam'.");  
        }
        
        if(list["capaciteit"] <= 0){
          console.log("'capaciteit' moet groter dan 0 zijn.");  
        }
        if(typeof list["capaciteit"] !== "number"){
          console.log("'capaciteit' moet type Number zijn.");  
        };
    }
};