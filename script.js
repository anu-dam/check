

$("#searchBtn").on("click", function(){

var search = $("#select-city").val();
    
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=b6907d289e10d714a6e88b30761fae22";
    

    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    
      // Printing the entire object to console
      console.log(response);
    
    
    });
    
    
    
    
    
    });