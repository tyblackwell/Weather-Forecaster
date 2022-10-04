import { options } from "./keys.js";

fetch(
  "https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => toggleBtn.classList.toggle("active"));
