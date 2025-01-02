function getWeather() {
    const apikey = '6e823b01f7ac0db5c68f99b81d8ed371';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;

    // Clear previous forecast data
    document.getElementById('hourlyForecast').innerHTML = '';

    // Show weather content and hide welcome message
    document.getElementById('welcomeMessage').style.display = 'none';
    document.getElementById('weatherContent').style.display = 'block';

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error(error);
            alert('Error fetching weather data');
            showWelcomeMessage();
        });

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.list);
        })
        .catch(error => {
            console.error(error);
            alert('Error fetching forecast data');
        });
}

function displayWeather(data) {
    const tempInfo = document.getElementById('temp');
    const weatherInfo = document.getElementById('weatherInfo');
    const weatherIcon = document.getElementById('weatherIcon');

    // Clear previous content
    tempInfo.innerHTML = '';
    weatherInfo.innerHTML = '';

    if (data.cod === '404') {
        weatherInfo.innerHTML = `<p>${data.message}</p>`;
        showWelcomeMessage();
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        tempInfo.innerHTML = `<p>${temperature}°C</p>`;
        weatherInfo.innerHTML = `
            <p>${cityName}</p>
            <p>${description}</p>
        `;
        
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;
        weatherIcon.style.display = 'block';
    }
}

function displayHourlyForecast(hourlyData) {
    const hourlyForecast = document.getElementById('hourlyForecast');
    const next24Hours = hourlyData.slice(0, 8);

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourlyItem">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly weather icon">
                <span>${temperature}°C</span>
            </div>`;
        hourlyForecast.innerHTML += hourlyItemHtml;
    });
}

function showWelcomeMessage() {
    document.getElementById('welcomeMessage').style.display = 'flex';
    document.getElementById('weatherContent').style.display = 'none';
    document.getElementById('hourlyForecast').innerHTML = '';
}

let search = document.getElementById('search')
document.addEventListener('keypress',(e)=>{
    if(e.key == 'Enter'){
        getWeather()
    }
})