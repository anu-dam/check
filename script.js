
var city;

function callApi(city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=75eb6e5eb20db39b88a78417b81c45f6";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $("#city").text("Weather Forcast in " + response.name);
        $("#temp").text("Temprature : " + response.main.temp + "C");
        $("#humid").text("Humidity : " + response.main.humidity);
        $("#wind").text("Wind Speed : " + response.wind.speed);
        $("#pr").text("Pressure : " + response.main.pressure);
        $("#cond").text("Condition : " + response.weather[0].description);

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

function previous(prCity){ 

var previousURL = "http://api.openweathermap.org/data/2.5/forecast?" + City + "&units=metric&appid=75eb6e5eb20db39b88a78417b81c45f6";

$.ajax({
    url: previousURL,
    method: "GET"
}).then(function (responseI) {

    console.log(responseI);

});
}

// https://api.openweathermap.org/data/2.5/forecast?qlondon&mode=xml&appid=75eb6e5eb20db39b88a78417b81c45f6