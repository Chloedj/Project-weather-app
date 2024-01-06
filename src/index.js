function updateWeather(response){
    console.log(response.data.temperature.current);
    let temperature = Math.round(response.data.temperature.current);
    let tempertureElement = document.querySelector("#temperature")
    tempertureElement.innerHTML = `${temperature}`;
    let cityElement = document.querySelector("#weather-app-city")
cityElement.innerHTML = response.data.city;

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
}

let searchFormElement = document.querySelector("#search-form")

searchFormElement.addEventListener("submit", searchSubmit)

searchCity("Paris")
