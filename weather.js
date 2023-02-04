const API_KEY = "7b729e9da8f30e9c2933350229dc1a1c";

function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      const temp = Math.round(data.main.temp);
      weather.innerText = `${data.weather[0].main} ${temp}°C`;
    });
}

function geoNo() {
  alert("Can't find your location");
}
navigator.geolocation.getCurrentPosition(geoOk, geoNo);
