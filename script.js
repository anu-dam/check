
$("#searchBtn").on("click", function(){


 

    var search = $("#select-city").val();
    
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" +search+ "appid=75eb6e5eb20db39b88a78417b81c45f6";
    
    
    // var APIKey = "75eb6e5eb20db39b88a78417b81c45f6";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    
      // Printing the entire object to console
      console.log(response);
    
    
    });
    
    
    
    
    
    });