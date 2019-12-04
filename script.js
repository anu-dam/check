
var city;
var response;

function callApi(city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=75eb6e5eb20db39b88a78417b81c45f6";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $("#city").text("Weather Forcast in " + response.name);
        $("#temp").text("Temprature " + response.main.temp + "F");
        $("#humid").text("Humidity " + response.main.humidity);
        $("#wind").text("Wind Speed " + response.wind.speed);
        $("#pr").text("Pressure " + response.main.pressure);
        $("#cond").text("Condition " + response.weather[0].description);


        console.log(response);

        var icon = response.weather[0].icon;

        var img = '<img src="https://openweathermap.org/img/wn/' + icon + '.png">';

        $('#icon').empty();
        $('#icon').append(img);

        
    });
}


$("#searchBtn").on("click", function () {

    var city = $("#select-city").val();

    callApi(city);

});

$(".selection").on("click", function(){

var city = event.target.id;
callApi(city);


});