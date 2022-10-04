import { options } from "./keys.js";

const weatherApiUrl = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=';

const searchForm = document.getElementById('weather-search');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let requestedCity = e.target.cityinput.value;
    //console.log(requestedCity); //Works
    fetchCityWeather(requestedCity);
    searchForm.reset();
})

function fetchCityWeather(city) {
    //console.log(city); //Works
    fetch(`${weatherApiUrl}${city}&days=3`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => toggleBtn.classList.toggle("active"));
