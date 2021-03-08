// var apiKey = "003a54ddfe39c875d00206109efba335";
// var city = $("#sampleText").val();
// console.log(city)
var submitBtn = $("#sampleBtn")

// function getWeather(city) {
//     var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//     fetch(currentWeatherUrl)
//     .then((data) => data.json())
//     .then(function (weather) {
//         console.log(weather);
//         var lat = weather.coord.lat;
//         var lon = weather.coord.lon;
    
//         var onecallAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`
//         fetch(onecallAPI)
//         .then((data) => data.json())
//         .then(function (onecallData) {
//             console.log(onecallData);
//         });
//     });
// }

submitBtn.on("click", console.log("i am working"))