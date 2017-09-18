angular.module("budgetApp").service("budgetService", function($http, $firebaseArray){

  var promise;
  var stateTax;
  this.disInc = 0;

  this.incomeTaxMe = function(taxInfo){

    promise = $http({
      method: "POST",
      url: "https://stylinandy-taxee.p.mashape.com/v1/calculate/" + "2017",
      data: taxInfo,
      headers: {
        "content-type": "application/json",
        "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjU5Yjk0OTMzMTE1MWFhNzQzZWNhN2ZkNiIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTUwNTMxNTEyM30.kXAq6QoztJaOXYVNmrRaOxtwcKzDSmHPavhPPQxCQAc",
        "x-mashape-key": "siUhfG7l6Cmshp5zpz1znHyZTqlIp1n1EpFjsnBDPl9hA438Rf"
      }
    })
   

    return promise;
//filing_status
//state
//pay_rate

  }


this.weirdFunc = function(){
  return $http.get("https://www.numbeo.com/api/city_prices?api_key=jy1ndvkcvv0n0g&query=Dallas").then(function(rentresponse){
                  console.log(rentresponse)
                  return rentresponse;
                })
}



  this.getData = function(data){
    
        var ref = firebase.database().ref()
        var arr = $firebaseArray(ref)
    
        return arr.$loaded().then(function(response){

            var results = response[0].find(function(cur){
              return cur.city.toLowerCase().trim().includes(data.toLowerCase().trim())
            })
            
            
            
            
            return $http.get("https://www.numbeo.com/api/city_prices?api_key=jy1ndvkcvv0n0g&query=Dallas").then(function(rentresponse){

              
              return rentresponse;
            })


        });


        
        
    }
    
    })

// disInc = incomeCtrl.expInc;





// return $http({
//   method: 'POST',
//   url: 'https://stylinandy-taxee.p.mashape.com/v1/calculate/' + year,
//   body: data
// }).then(function(response) {
//   console.log(response);
//   return response
// })