// API Key from 
var apiKey = "003a54ddfe39c875d00206109efba335";

$("#submitBtn").click(function () {
  var city = $("#userSearch").val();
  var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(currentWeatherUrl)
    .then((data) => data.json())
    .then(function (weather) {
      var lat = weather.coord.lat;
      var lon = weather.coord.lon;

      var onecallAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`;
      fetch(onecallAPI)
        .then((data) => data.json())
        .then(function (onecallData) {
          console.log(onecallData);
        });
    });
});
