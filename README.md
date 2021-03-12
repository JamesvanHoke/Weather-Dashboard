# Weather Dashboard

## Purpose

To create an application that allows users to search cities and recieve both a current weather radout, but also a 5-day forecast. this app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code

## Project Criteria
```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
## Approach

A basic web interface was created to hold the generated data. The API Functionality was then setup, and tested until  the required data was being recieved. After which the web interface was overhauled to match the project critera mockup. All functionality was relinked and then dynamic generation of cards using bootstrap to print out the 5-day forecast began. Once that was achieved. code went through many iterations to get local storage set/get functional. Afterwards bug cleanup, and commenting to improve readability of the code was implemented.

## Preview
<img src=https://gyazo.com/28fd07b29667436d149bbf9764a7dbeb.png>

## Link
https://jamesvanhoke.github.io/Weather-Dashboard/
