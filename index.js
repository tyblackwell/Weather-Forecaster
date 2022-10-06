// Write your code below this line
import { options } from "./keys.js";

const weatherApiUrl = "https://weatherapi-com.p.rapidapi.com/forecast.json?q=";

const searchForm = document.getElementById("weather-search");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let requestedCity = e.target.cityinput.value;
  //console.log(requestedCity); //Works
  fetchCityWeather(requestedCity);
  searchForm.reset();
});

function fetchCityWeather(city) {
  //console.log(city); //Works
  fetch(`${weatherApiUrl}${city}&days=3`, options)
    .then(res => res.json())
    .then(weatherReport => {
      locationSpotlight(weatherReport);
    })
    .catch((err) => console.error(err));
}

function locationSpotlight(weatherReport) {
//console.log(weatherReport) //Works

//Display Setup for the locations name in Location Highlight
  let locationName = document.createElement('h2');
  locationName.textContent = `${weatherReport.location.name} , ${weatherReport.location.region}`;
  
  let nameHighlight = document.getElementById('city-name');
  nameHighlight.innerHTML = '';
  nameHighlight.append(locationName);

//Display Setup for the locations country in Location Highlight
  let locationCountry = document.createElement('h2');
  locationCountry.textContent = weatherReport.location.country;

  let countryHighlight = document.getElementById('country');
  countryHighlight.innerHTML = '';
  countryHighlight.append(locationCountry);
}

// This is on hold because I can't get layout to work
// const toggleBtn = document.querySelector(".toggle");

// toggleBtn.addEventListener("click", () => toggleBtn.classList.toggle("active"));
