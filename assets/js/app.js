// API Key from Open Weather Map. Key name = Homework
var apiKey = "003a54ddfe39c875d00206109efba335";
//Uses moment.js to get out current date. Format is numerical Day/Month/Year. ex 03/11/2021
var currentDate = moment().format("L");

//When the submit button element is clicked, we call the getWeather function
$("#submitBtn").on("click", getWeather);

//Function to call OpenWeatherMap API for specific data on a city
function getWeather() {
  //Pulls the text content of our search bar
  var city = $("#city-search").val().trim();
  // Clears out our search bar after
  $("#city-search").val("");

  if (city === "") {
    alert("Please input a city");
    return;
  }
  //OpenWeatherMaps "Current Weather Data" API call so we can get Latitude and Longitude to pass forward
  var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  //Calls the API
  fetch(currentWeatherUrl)
    .then((data) => data.json())
    .then(function (weather) {
      if (weather.cod === "404") {
        alert("City not found");
        return;
      }
      //Sets our towns name + date in the current day section
      $("#current-city").text(weather.name + " | " + currentDate);
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
  var current = onecallData.current;

  //Current Day Section
  // Populates our current day section with the relevant info.
  $("#current-temp").text("Temperature: " + current.temp + "°F");
  $("#current-humidity").text("Humidity: " + current.humidity + "%");
  $("#current-wind-speed").text("Wind Speed: " + current.wind_speed + " MPH");
  $("#current-uvi").text(current.uvi);

  //Converts the onecallapi's data from a string to a number so we can compare it
  var uvicomp = parseInt(current.uvi);
  //rounds UVI Comp so it matches it's closes class
  uvicomp = Math.round(uvicomp);
  //Sets our UVI elements background to reflect the severity of the current UV strength
  //if UV index is less than or equal to 2, adds green background.
  if (uvicomp <= 2) {
    $("#current-uvi").addClass("bg-success");
  }
  //if UV Index is between 3 and 5, adds yellow background
  else if (uvicomp >= 3 && uvicomp <= 5) {
    $("#current-uvi").addClass("bg-warning");
  }
  //else adds a red background.
  else {
    $("#current-uvi").addClass("bg-danger");
  }

  //Forecast Section

  {
    /* <div class="col-2">
  <div class="card bg-primary text-light">
  <div class="card-body">
  <h5 class="card-title">3/12/2021</h5>
  <img src="https://placekitten.com/40/40">
  <p class="card-text"> Temp: 50.51F</p>
  <p class="card-text"> Humidity: 50%</p>
  </div>
  </div>
</div> */
  }

  for (let i = 1; i < 6; i++) {
    var forecast = onecallData.daily[i];
    var forecastDate = parseInt(forecast.dt)

    var forecastAppend = $("#forecast-append");

    var col2 = $("<div>").appendTo(forecastAppend);
    col2.addClass("col-2");

    var card = $("<div>").appendTo(col2);
    card.addClass("card bg-primary text-light");

    var cardBody = $("<div>").appendTo(card);
    cardBody.addClass("card-body");

    var forecastDate = $("<h5>").appendTo(cardBody);
    forecastDate.addClass("card-title");
    console.log(forecast)
    forecastDate.text(moment.unix(forecast.dt).format("L"));

    var forecastIMG = $("<img>").appendTo(forecastDate);
    forecastIMG.attr(
      "src",
      "https://openweathermap.org/img/wn/" +
        forecast.weather[0].icon +
        "@2x.png"
    );
    forecastIMG.attr("alt", "Forecast Icon");

    var forecastTemp = $("<p>").appendTo(cardBody);
    forecastTemp.addClass("card-text");
    forecastTemp.text("Temp: " + forecast.temp.day +"°F");


    var forecastHumidity = $("<p>").appendTo(cardBody);
    forecastHumidity.addClass("card-text");
    forecastHumidity.text("Humidity: " + forecast.humidity+ "%")

  }

  ("forecast.temp.day");
  //displays the results section
  $("#results").removeClass("hidden");
}
