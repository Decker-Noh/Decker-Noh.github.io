const weatherBox = document.querySelector(".weather h3");

const apiKey = "d03712891157aad73f904b0511e55af6";

function success(position) {
    console.dir(position);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`
    console.dir(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        weatherBox.innerText = `Weather : ${data.weather[0].main} \nLocation : ${data.sys.country}`
        console.log(data.weather[0].main);
        console.log(data.sys.country);
    })
}
function fail() {
    alert("I don't know your location");
}
navigator.geolocation.getCurrentPosition(success, fail);