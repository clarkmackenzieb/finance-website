angular.module("budgetApp").service("budgetService", function($http){


  this.getFederalTax = function(year){
    
    return $http({
      method: "GET",
      url: "taxee.io/api/v2/federal/"+year,
    });
  

  }


  this.fedTaxBracket = function(filing, inc){
    var fedTax = 0;
    if(filing === "1"){
    if(inc < 0){
      return null;
    }
    else if(inc <= 9325){
      fedTax = inc*.10;
    }
    else if(inc > 9325 && inc <= 37950){
      fedTax = 932.5 + ((inc-9325)*.15);
    }
    else if(inc > 37950 && inc <= 91900){
      fedTax = 5226.25 + ((inc-37950)*.25);
    }
    else if(inc > 91900 && inc <= 191650){
      fedTax = 18713.75 + ((inc-91900)*.28);
    }
    else if(inc > 191650 && inc <= 416700){
      fedTax = 46643.75  + ((inc-191650)*.33);
    }
    else if(inc > 416700 && inc <= 418400){
      fedTax = 120910.25 + ((inc-416700)*.35);
    }
    else if(inc > 418400){
      fedTax = 121505.25 + ((inc-418400)*.369);
    }
  }
  else if(filling === "2"){
    if(inc < 0){
      return null;
    }
    else if(inc < 18650){
      fedTax = inc*.10;
    }
    else if(inc >= 18651 && inc <= 75900){
      fedTax = 1865 + ((inc-18650)*.15);
    }
    else if(inc > 75900 && inc <= 153100){
      fedTax = 10452.5 + ((inc-75900)*.25);
    }
    else if(inc > 153100 && inc <= 233350){
      fedTax = 29752.5 + ((inc-153100)*.28);
    }
    else if(inc > 233350 && inc <= 416700){
      fedTax = 52222.5 + ((inc-233350)*.33);
    }
    else if(inc > 416700 && inc <= 470700){
      fedTax = 112728 + ((inc-416700)*.35);
    }
    else if(inc > 470700){
      fedTax = 131628 + ((inc-470700)*.396);
    }
  }
  else if(filing === "3"){
    if(inc < 0){
      return null;
    }
    else if(inc <= 9325){
      fedTax = inc*.10;
    }
    else if(inc > 9325 && inc <= 37950){
      fedTax = 932.5 + ((inc-9325)*.15);
    }
    else if(inc > 37950 && inc <= 76550){
      fedTax = 5226.25 + ((inc-37950)*.25);
    }
    else if(inc > 76550 && inc <= 116675){
      fedTax = 14876.25 + ((inc-76550)*.28);
    }
    else if(inc > 116675 && inc <= 208350){
      fedTax = 26111.25 + ((inc-116675)*.33);
    }
    else if(inc > 208350 && inc <= 235350){
      fedTax = 56364 + ((inc-208350)*.35);
    }
    else if(inc > 235350){
      fedTax = 65814 + ((inc-235350)*.396);
    }
  }
  else if(filing === "4"){
    if(inc < 0){
      return null;
    }
    else if(inc <= 13350){
      fedTax = inc*.10;
    }
    else if(inc > 13350 && inc <= 50800){
      fedTax = 1335 + ((inc-13350)*.15);
    }
    else if(inc > 50800 && inc <= 131200){
      fedTax = 6952.5 + ((inc-13350)*.25);
    }
    else if(inc > 131200 && inc <= 212500){
      fedTax = 27052.5 + ((inc-13350)*.28);
    }
    else if(inc > 212500 && inc <= 416700){
      fedTax = 49816.5 + ((inc-13350)*.33);
    }
    else if(inc > 416700 && inc <= 444550){
      fedTax = 117202.5 + ((inc-13350)*.35);
    }
    else if(inc > 444550){
      fedTax = 126950 + ((inc-13350)*.396);
    }
  }
}

})