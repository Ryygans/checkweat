let searchButton = document.querySelector("#button-addon2");
let inputKeyword = document.querySelector(".input-keyword");
let result = document.querySelector(".result");

searchButton.addEventListener('click', function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputKeyword.value + "&appid=6153f1f7d1a887223df9c824336d5623&units=metric")
    .then((response) => response.json())
    .then((data) => {
        result.innerHTML = `
            <h2 style="margin-bottom: 15px;">${data.name}, ${data.sys.country}</h2>
            <h5><span class="temp">${data.main.temp} °C</span> <span class="temp">${data.weather[0].description}</span></h5>
            <p style="margin-bottom: 17px;">Temperature from ${data.main.temp_min} °C to ${data.main.temp_max} °C</p>
            <h5>Wind Speed: ${data.wind.speed} m/s</h5>
            <h5 style="margin-bottom: 17px;">Clouds: ${data.clouds.all} %</h5>
            <h4 style="color: #012443;">Geo Coordinates: [${data.coord.lat}, ${data.coord.lon}]</h4>
        `;
        inputKeyword.value = null;
    })
    .catch((error) => {
        console.error('Error fetching weather data:', error);
    });
});

