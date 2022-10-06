// Import your abstracted API Key
import { options } from "./keys.js";

const weatherApiUrl = "https://weatherapi-com.p.rapidapi.com/forecast.json?q=";

const searchForm = document.getElementById("weather-search");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e.target.cityinput.value) //Works
  let requestedCity = e.target.cityinput.value;
  fetchCityWeather(requestedCity);
  searchForm.reset();
});

function fetchCityWeather(city) {
  // console.log(city); //Works
  fetch(`${weatherApiUrl}${city}&days=3`, options)
    .then((res) => res.json())
    .then((weatherReport) => {
      locationSpotlight(weatherReport);
      weatherCardFahrenheit(weatherReport);
    })
    .catch((err) => console.error(err));
}

function locationSpotlight(weatherReport) {
  //console.log(weatherReport); //Works

  //Display Setup for the locations name in Location Highlight
  let locationName = document.createElement("h1");
  locationName.textContent = `${weatherReport.location.name} , ${weatherReport.location.region}`;

  let nameHighlight = document.querySelector(".city-name");
  nameHighlight.innerHTML = "";
  nameHighlight.append(locationName);

  //Display Setup for the locations country in Location Highlight
  let locationCountry = document.createElement("h1");
  locationCountry.textContent = weatherReport.location.country;

  let countryHighlight = document.querySelector(".country");
  countryHighlight.innerHTML = "";
  countryHighlight.append(locationCountry);
}

function weatherCardFahrenheit(weatherReport) {
  //console.log(weatherReport); //Works

  //Display Setup for Current Date and Time for Weather Card
  let currentDateTime = document.createElement('h2');
  currentDateTime.textContent = `Local Date / Time : ${weatherReport.location.localtime}`;

  let currentDateTimeCard = document.querySelector('.current-date-time');
  currentDateTimeCard.innerHTML = "";
  currentDateTimeCard.append(currentDateTime);

  //Display Setup for current Temp for Weather Card
  let currentTemp = document.createElement('h2');
  currentTemp.textContent = `Current Temp : ${weatherReport.current.temp_f} °F`;
  let currentTempCard = document.querySelector('.current-temp');
  currentTempCard.innerHTML = "";
  currentTempCard.append(currentTemp);

  //Display Setup for Feels Like Temp for Weather Card
  let feelsLikeTemp = document.createElement('h2');
  feelsLikeTemp.textContent = `Feels Like : ${weatherReport.current.feelslike_f} °F`;
  let feelsLikeTempCard = document.querySelector('.feels-temp');
  feelsLikeTempCard.innerHTML = "";
  feelsLikeTempCard.append(feelsLikeTemp);
}

function weatherCardCelsius(weatherReport) {
  let currentDateTime = document.createElement('h2');
  currentDateTime.textContent = `Local Date / Time : ${weatherReport.location.localtime}`;

  let currentDateTimeCard = document.querySelector('.current-date-time');
  currentDateTimeCard.innerHTML = "";
  currentDateTimeCard.append(currentDateTime);

  let currentTempCelsius = document.createElement('h2');
  currentTempCelsius.textContent = `Current Temp : ${weatherReport.current.temp_c} °C`;
  let currentTempCardCelsuis = document.querySelector('.current-temp');
  currentTempCardCelsius.innerHTML = "";
  currentTempCardCelsius.append(currentTempCelsius);

  let feelsLikeTempCelsius = document.createElement('h2');
  feelsLikeTempCelsius.textContent = `Feels Like : ${weatherReport.current.feelslike_c} °C`;
  let feelsLikeTempCardCelsius = document.querySelector('.feels-temp');
  feelsLikeTempCardCelsius.innerHTML = "";
  feelsLikeTempCardCelsius.append(feelsLikeTempCelsius);
}

// This is on hold because I can't get layout to work
// const toggleBtn = document.querySelector(".toggle");

// toggleBtn.addEventListener("click", () => toggleBtn.classList.toggle("active"));
