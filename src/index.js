function updateWeather(response){
    console.log(response);
    console.log(response.data.temperature.current);
    let temperature = Math.round(response.data.temperature.current);
    let tempertureElement = document.querySelector("#temperature");
        let cityElement = document.querySelector("#weather-app-city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let iconElement = document.querySelector("#icon");

tempertureElement.innerHTML = `${temperature}`;
cityElement.innerHTML = response.data.city;
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = response.data.temperature.humidity;
windSpeedElement.innerHTML = response.data.wind.speed;
iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}



function searchCity(city) {
let apiKey = "ab6f607t41943e02220ae3724eo64aeb";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateWeather);
}





function searchSubmit(event) {
    event.preventDefault();
let searchInput = document.querySelector("#search-form-input");

searchCity(searchInput.value);
searchInput.value = "";
}

let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Paris");


function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

