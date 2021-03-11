// API Key from Open Weather Map. Key name = Homework
var apiKey = "003a54ddfe39c875d00206109efba335";

//When the submit button element is clicked, we call the getWeather function
$("#submitBtn").click(getWeather);

//Function to call OpenWeatherMap API for specific data on a city
function getWeather() {
  //Pulls the text content of our search bar
  var city = $("#userSearch").val();
  //OpenWeatherMaps "Current Weather Data" API call so we can get Latitude and Longitude to pass forward
  var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  //Calls the API
  fetch(currentWeatherUrl)
    .then((data) => data.json())
    .then(function (weather) {
      //Sets our towns name in the card
      $("#cityName").text(weather.name);
      var lat = weather.coord.lat;
      var lon = weather.coord.lon;

      //Main API, this requires Latitude and Longitude to function. Contains all weather information for an area. Currently displays in MPH, and Fahrenheit
      var onecallAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=${apiKey}`;
      fetch(onecallAPI)
        .then((data) => data.json())
        .then(function (onecallData) {
          printResults(onecallData);
        });
    });
}

//Prints the results of our API call to the page
function printResults(onecallData) {
  console.log(onecallData);
  $("#cityTemp").text("Temperature: " + onecallData.current.temp + "°F");
  $("#humidity").text("Humidity: " + onecallData.current.humidity + "%");
  $("#windSpeed").text("Wind Speed: " + onecallData.current.wind_speed + " MPH");
}
