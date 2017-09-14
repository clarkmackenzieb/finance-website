angular.module("budgetApp").service("budgetService", function($http){

  var promise;
  var stateTax;

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


 

});


// return $http({
//   method: 'POST',
//   url: 'https://stylinandy-taxee.p.mashape.com/v1/calculate/' + year,
//   body: data
// }).then(function(response) {
//   console.log(response);
//   return response
// })