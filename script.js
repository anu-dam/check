
var city;

var today = moment().format('LL'); 

function callApi(city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=75eb6e5eb20db39b88a78417b81c45f6";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        

        $("#city").text("Current Weather in " + response.name);
        $("#date").text(today);
        
        
        $("#temp").text("Temprature : " + response.main.temp + "C");
        $("#humid").text("Humidity : " + response.main.humidity);
        $("#wind").text("Wind Speed : " + response.wind.speed);
        $("#pr").text("Pressure : " + response.main.pressure);
        $("#cond").text("Condition : " + response.weather[0].description);

        var icon = response.weather[0].icon;

        var img = '<img src="https://openweathermap.org/img/w/' + icon + '.png">';

        $('#icon').empty();
        $('#icon').append(img);
        
    });
}

$("#searchBtn").on("click", function () {

    var city = $("#select-city").val();

    callApi(city); 
    previous(city);

});

$(".selection").on("click", function(){

var city = event.target.id;
callApi(city);
previous(city);



});

function previous(city){ 

var previousURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=75eb6e5eb20db39b88a78417b81c45f6";

$.ajax({
    url: previousURL,
    method: "GET"
}).then(function (response) {

    console.log(response);

    var myArr = []

    for(var i = 0; i < response.list.length; i++ ){

        var arr = response.list[i].dt_txt.split(" ");

        if( arr[1] === "12:00:00"){
            
            myArr.push(response.list[i]);

            myDate   = myArr[0].dt_txt.split(" ");

            // console.log (myArr[1]);
            
            
            var icon1 = myArr[0].weather[0].icon;

            

            var img1 = '<img src="https://openweathermap.org/img/w/' + icon1 + '.png">';

            $('#icon1').empty();
            $('#icon1').append(img1);
            
            
            // myDate2 = myArr[2].dt_txt.split(" ");
           
            
            $("#dateOne").text(myDate[0]);
            // $("#dateTwo").text(myDate1[0]);
            $("#temp1").text("Temp : " + myArr[0].main.temp + "C");
            $("#humid1").text("Humid : " + myArr[0].main.humidity);


            // $("#temp2").text("Temprature :" + myArr[1].main.temp);
            // $("#humid2").text("Humidity :" + myArr[1].main.humidity);


            
            
        }

        


        
        
    }

    console.log(myArr[1].dt_txt);
    console.log(myArr[2].dt_txt);

   

});
}

// https://api.openweathermap.org/data/2.5/forecast?qlondon&mode=xml&appid=75eb6e5eb20db39b88a78417b81c45f6


