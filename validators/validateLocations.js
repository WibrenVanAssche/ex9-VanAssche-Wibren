

module.exports = {
    checkvalues: function(list)  {
        
        if(list["locatieid"] <= 0){
          console.log("'locatieid' moet groter dan 0 zijn.");  
        }
        
        else if(typeof list["locatieid"] !== Number){
          console.log("'locatieid' moet type Number zijn.");  
        }
        
        
         else if(typeof list["naam"] !== String){
          console.log("'naam' moet type String zijn.");  
        }
        
        
        else if(typeof list["stad"] !== String){
          console.log("'stad' moet type String zijn.");  
        }
        
        
        else if(list["capaciteit"] <= 0){
          console.log("'capaciteit' moet groter dan 0 zijn.");  
        }
        
        else if(typeof list["capaciteit"] !== Number){
          console.log("'capaciteit' moet type Number zijn.");  
        };
    }
};
