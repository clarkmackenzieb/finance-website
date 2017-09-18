angular.module("budgetApp").service("budgetService", function($http, $firebaseArray){


this.addData = function(chart, label, color, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.backgroundColor.push(color);
  });
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
  });
  chart.update();
}


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



this.getdispInc = function(){
  return this.disInc;
}



  this.getData = function(data){
    

    return this.dallasInfo;








        // var ref = firebase.database().ref()
        // var arr = $firebaseArray(ref)
    
        // return arr.$loaded().then(function(response){

        //     var results = response[0].find(function(cur){
        //       return cur.city.toLowerCase().trim().includes(data.toLowerCase().trim())
        //     })
            
        //     return $http({
        //       method: "PUT",
        //       url: 'http://dogcompanydtx.com',
        //       data: "data",
        //       headers: {
        //         "content-type": "application/json",
        //         "base_url": "https://www.numbeo.com/api/city_prices?api_key=jy1ndvkcvv0n0g&query=Dallas"
        //       }
        //     }).then(function(rentresponse){
        //       console.log(rentrespone)
        //     })
            
            
            // return $http.put('http://dogcompanydtx.com', {
            //   base_url: "https://www.numbeo.com/api/city_prices?api_key=jy1ndvkcvv0n0g&query=Dallas"}).then(function(rentresponse){

            //   console.log(rentresponse)
            //   return rentresponse;
            // })


        // });

      
        
    }




    this.dallasInfo = {
      "name": "Dallas, TX, United States",
      "currency": "USD",
      "monthLastUpdate": 9,
      "contributors": 278,
      "yearLastUpdate": 2017,
      "prices": [
          {
              "item_id": 1,
              "lowest_price": 8.5,
              "average_price": 12,
              "highest_price": 15,
              "item_name": "Meal, Inexpensive Restaurant, Restaurants"
          },
          {
              "item_id": 2,
              "lowest_price": 26,
              "average_price": 45,
              "highest_price": 65,
              "item_name": "Meal for 2 People, Mid-range Restaurant, Three-course, Restaurants"
          },
          {
              "item_id": 3,
              "lowest_price": 5.5,
              "average_price": 7,
              "highest_price": 8,
              "item_name": "McMeal at McDonalds (or Equivalent Combo Meal), Restaurants"
          },
          {
              "item_id": 4,
              "lowest_price": 3,
              "average_price": 4,
              "highest_price": 5,
              "item_name": "Domestic Beer (0.5 liter draught), Restaurants"
          },
          {
              "item_id": 5,
              "lowest_price": 4,
              "average_price": 6,
              "highest_price": 7,
              "item_name": "Imported Beer (0.33 liter bottle), Restaurants"
          },
          {
              "item_id": 6,
              "lowest_price": 1.25,
              "average_price": 1.7913636363636363,
              "highest_price": 2.15,
              "item_name": "Coke/Pepsi (0.33 liter bottle), Restaurants"
          },
          {
              "item_id": 7,
              "lowest_price": 0.99,
              "average_price": 1.28,
              "highest_price": 2,
              "item_name": "Water (0.33 liter bottle) , Restaurants"
          },
          {
              "item_id": 8,
              "lowest_price": 0.4966434589581163,
              "average_price": 0.6811865071575988,
              "highest_price": 0.8691260531767036,
              "item_name": "Milk (regular), (1 liter), Markets"
          },
          {
              "item_id": 9,
              "lowest_price": 1.1023113109243878,
              "average_price": 2.0506613037104384,
              "highest_price": 3.29591081966392,
              "item_name": "Loaf of Fresh White Bread (500g), Markets"
          },
          {
              "item_id": 11,
              "lowest_price": 1.5,
              "average_price": 1.8675,
              "highest_price": 2.5,
              "item_name": "Eggs (regular) (12), Markets"
          },
          {
              "item_id": 12,
              "lowest_price": 7.716179176470715,
              "average_price": 10.68394039819022,
              "highest_price": 15.43235835294143,
              "item_name": "Local Cheese (1kg), Markets"
          },
          {
              "item_id": 13,
              "lowest_price": 1.2,
              "average_price": 1.830909090909091,
              "highest_price": 3,
              "item_name": "Water (1.5 liter bottle), Markets"
          },
          {
              "item_id": 14,
              "lowest_price": 9,
              "average_price": 12,
              "highest_price": 15,
              "item_name": "Bottle of Wine (Mid-Range), Markets"
          },
          {
              "item_id": 15,
              "lowest_price": 1,
              "average_price": 1.9318181818181819,
              "highest_price": 3,
              "item_name": "Domestic Beer (0.5 liter bottle), Markets"
          },
          {
              "item_id": 16,
              "lowest_price": 1.05,
              "average_price": 2.075,
              "highest_price": 3.5,
              "item_name": "Imported Beer (0.33 liter bottle), Markets"
          },
          {
              "item_id": 17,
              "lowest_price": 5.65,
              "average_price": 6.5,
              "highest_price": 8,
              "item_name": "Pack of Cigarettes (Marlboro), Markets"
          },
          {
              "item_id": 18,
              "lowest_price": 2,
              "average_price": 2.5,
              "highest_price": 5,
              "item_name": "One-way Ticket (Local Transport), Transportation"
          },
          {
              "item_id": 19,
              "lowest_price": 4.387199017479063,
              "average_price": 6.308370159375855,
              "highest_price": 17.636980974790205,
              "item_name": "Chicken Breasts (Boneless, Skinless), (1kg), Markets"
          },
          {
              "item_id": 20,
              "lowest_price": 80,
              "average_price": 80,
              "highest_price": 80,
              "item_name": "Monthly Pass (Regular Price), Transportation"
          },
          {
              "item_id": 24,
              "lowest_price": 0.5257023847482188,
              "average_price": 0.5591425886251928,
              "highest_price": 0.6049540005394076,
              "item_name": "Gasoline (1 liter), Transportation"
          },
          {
              "item_id": 25,
              "lowest_price": 18619,
              "average_price": 20500,
              "highest_price": 23165,
              "item_name": "Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car), Transportation"
          },
          {
              "item_id": 26,
              "lowest_price": 880,
              "average_price": 1271.2285714285715,
              "highest_price": 1597,
              "item_name": "Apartment (1 bedroom) in City Centre, Rent Per Month"
          },
          {
              "item_id": 27,
              "lowest_price": 700,
              "average_price": 912.35,
              "highest_price": 1170,
              "item_name": "Apartment (1 bedroom) Outside of Centre, Rent Per Month"
          },
          {
              "item_id": 28,
              "lowest_price": 1400,
              "average_price": 2009.2099999999998,
              "highest_price": 3000,
              "item_name": "Apartment (3 bedrooms) in City Centre, Rent Per Month"
          },
          {
              "item_id": 29,
              "lowest_price": 1100,
              "average_price": 1497.592,
              "highest_price": 2000,
              "item_name": "Apartment (3 bedrooms) Outside of Centre, Rent Per Month"
          },
          {
              "item_id": 30,
              "lowest_price": 70.83333333333333,
              "average_price": 139.69115450437636,
              "highest_price": 209,
              "item_name": "Basic (Electricity, Heating, Water, Garbage) for 85m2 Apartment, Utilities (Monthly)"
          },
          {
              "item_id": 32,
              "lowest_price": 0.1,
              "average_price": 0.1053846153846154,
              "highest_price": 0.2,
              "item_name": "1 min. of Prepaid Mobile Tariff Local (No Discounts or Plans), Utilities (Monthly)"
          },
          {
              "item_id": 33,
              "lowest_price": 35,
              "average_price": 52.15948717948718,
              "highest_price": 75,
              "item_name": "Internet (60 Mbps or More, Unlimited Data, Cable/ADSL), Utilities (Monthly)"
          },
          {
              "item_id": 40,
              "lowest_price": 20,
              "average_price": 32.3448275862069,
              "highest_price": 50,
              "item_name": "Fitness Club, Monthly Fee for 1 Adult, Sports And Leisure"
          },
          {
              "item_id": 42,
              "lowest_price": 5,
              "average_price": 13.5,
              "highest_price": 20,
              "item_name": "Tennis Court Rent (1 Hour on Weekend), Sports And Leisure"
          },
          {
              "item_id": 44,
              "lowest_price": 9,
              "average_price": 10,
              "highest_price": 12,
              "item_name": "Cinema, International Release, 1 Seat, Sports And Leisure"
          },
          {
              "item_id": 60,
              "lowest_price": 25,
              "average_price": 41.11538461538461,
              "highest_price": 56,
              "item_name": "1 Pair of Jeans (Levis 501 Or Similar), Clothing And Shoes"
          },
          {
              "item_id": 62,
              "lowest_price": 25,
              "average_price": 37.374375,
              "highest_price": 65,
              "item_name": "1 Summer Dress in a Chain Store (Zara, H&M, ...), Clothing And Shoes"
          },
          {
              "item_id": 64,
              "lowest_price": 50,
              "average_price": 70.29966666666665,
              "highest_price": 90,
              "item_name": "1 Pair of Nike Running Shoes (Mid-Range), Clothing And Shoes"
          },
          {
              "item_id": 66,
              "lowest_price": 60,
              "average_price": 88.77272727272727,
              "highest_price": 120,
              "item_name": "1 Pair of Men Leather Business Shoes, Clothing And Shoes"
          },
          {
              "item_id": 206,
              "lowest_price": 14000,
              "average_price": 17624.70588235294,
              "highest_price": 20200,
              "item_name": "Toyota Corolla 1.6l 97kW Comfort (Or Equivalent New Car), Transportation"
          },
          {
              "item_id": 224,
              "lowest_price": 400,
              "average_price": 704.9333333333333,
              "highest_price": 1000,
              "item_name": "Preschool (or Kindergarten), Private, Monthly for 1 Child, Childcare"
          },
          {
              "item_id": 100,
              "lowest_price": 1345.4888020887151,
              "average_price": 2259.4395286995673,
              "highest_price": 2690.9776041774303,
              "item_name": "Price per Square Meter to Buy Apartment in City Centre, Buy Apartment Price"
          },
          {
              "item_id": 228,
              "lowest_price": 8000,
              "average_price": 17333.333333333332,
              "highest_price": 18000,
              "item_name": "International Primary School, Yearly for 1 Child, Childcare"
          },
          {
              "item_id": 101,
              "lowest_price": 772.3098249999999,
              "average_price": 1180.0320112542627,
              "highest_price": 1614.5865625064582,
              "item_name": "Price per Square Meter to Buy Apartment Outside of Centre, Buy Apartment Price"
          },
          {
              "item_id": 105,
              "lowest_price": 2800,
              "average_price": 4454.358376068376,
              "highest_price": 6000,
              "item_name": "Average Monthly Net Salary (After Tax), Salaries And Financing"
          },
          {
              "item_id": 106,
              "lowest_price": 3.5,
              "average_price": 3.9365217391304346,
              "highest_price": 4.5,
              "item_name": "Mortgage Interest Rate in Percentages (%), Yearly, Salaries And Financing"
          },
          {
              "item_id": 107,
              "lowest_price": 2.25,
              "average_price": 2.45,
              "highest_price": 3.5,
              "item_name": "Taxi Start (Normal Tariff), Transportation"
          },
          {
              "item_id": 108,
              "lowest_price": 1.118468146027201,
              "average_price": 1.242742384474668,
              "highest_price": 1.8019764574882684,
              "item_name": "Taxi 1km (Normal Tariff), Transportation"
          },
          {
              "item_id": 109,
              "lowest_price": 18,
              "average_price": 22.199999955600003,
              "highest_price": 30,
              "item_name": "Taxi 1hour Waiting (Normal Tariff), Transportation"
          },
          {
              "item_id": 110,
              "lowest_price": 2.1605301694118,
              "average_price": 3.0970197237039154,
              "highest_price": 4.409245243697551,
              "item_name": "Apples (1kg), Markets"
          },
          {
              "item_id": 111,
              "lowest_price": 2.1825763956302877,
              "average_price": 2.8708935453934714,
              "highest_price": 6.613867865546327,
              "item_name": "Oranges (1kg), Markets"
          },
          {
              "item_id": 112,
              "lowest_price": 1,
              "average_price": 1.7336350617265375,
              "highest_price": 2.2046226218487757,
              "item_name": "Potato (1kg), Markets"
          },
          {
              "item_id": 113,
              "lowest_price": 1,
              "average_price": 1.3354545454545454,
              "highest_price": 2,
              "item_name": "Lettuce (1 head), Markets"
          },
          {
              "item_id": 114,
              "lowest_price": 3,
              "average_price": 4.0685714285714285,
              "highest_price": 5,
              "item_name": "Cappuccino (regular), Restaurants"
          },
          {
              "item_id": 115,
              "lowest_price": 1.9400679072269227,
              "average_price": 3.4657346418768022,
              "highest_price": 6.613867865546327,
              "item_name": "Rice (white), (1kg), Markets"
          },
          {
              "item_id": 116,
              "lowest_price": 2.1825763956302877,
              "average_price": 2.6968300601298436,
              "highest_price": 4.960400899159746,
              "item_name": "Tomato (1kg), Markets"
          },
          {
              "item_id": 118,
              "lowest_price": 0.9259415011764858,
              "average_price": 1.2125424420168265,
              "highest_price": 1.9047939452773421,
              "item_name": "Banana (1kg), Markets"
          },
          {
              "item_id": 119,
              "lowest_price": 1.2345886682353144,
              "average_price": 2.220656240916767,
              "highest_price": 2.843963182184921,
              "item_name": "Onion (1kg), Markets"
          },
          {
              "item_id": 121,
              "lowest_price": 6.371359377142962,
              "average_price": 10.875088447491176,
              "highest_price": 17.636980974790205,
              "item_name": "Beef Round (1kg) (or Equivalent Back Leg Red Meat), Markets"
          }
      ],
      "city_id": 3411
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