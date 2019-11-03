function displayTemperature(response) {
  let description = document.querySelector("#description");
  let temperature = document.querySelector("#temperature");
  let wind = document.querySelector("#wind");
  let humidity = document.querySelector("#humidity");

  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  temperature.innerHTML = `${Math.round(response.data.main.temp)}`;
  description.innerHTML = response.data.weather[0].description;

  console.log(response.data);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=0785a4a35a0652a43276acb84a9d4cbe`;

  axios.get(url).then(displayTemperature);
}

function convertToCelsius() {
  let link = document.querySelector("#celsius");
  link.classList.add("active");
  let fahrenheitLink = document.querySelector("#fahrenheit");
  fahrenheitLink.classList.remove("active");
}

function convertToFahrenheit() {
  let temperature = document.querySelector("#temperature");
  let link = document.querySelector("#fahrenheit");
  link.classList.add("active");
  let celsiusLink = document.querySelector("#celsius");
  celsiusLink.classList.remove("active");
  temperature.innerHTML = Math.round((22 * 9) / 5 + 32);
}

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToCelsius);
convertToCelsius();

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let dateContainer = document.querySelector("#current-date-time");
let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let day = days[currentTime.getDay()];
dateContainer.innerHTML = `${day} ${hours}:${minutes}`;
