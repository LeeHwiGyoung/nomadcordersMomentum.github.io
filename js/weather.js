const API_KEY = "8cf6ee11831738597eacbef45646aa58"
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
    fetch(url);
}

function onGeoError() {
    alert("Can't find you. No weather for you.")    
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
