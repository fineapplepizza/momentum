const API_KEY = "b0b205b3983a27f42d986cae988a0f9e";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
  console.log("You leave in", lat, lon);
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url).then(response => response.json())
  .then((data) => {
   const weather = document.querySelector("#weather span:first-child");
   const city = document.querySelector("#weather span:last-child");

    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  }); // javascript가 url을 부른다
}
function onGeoError(){
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);