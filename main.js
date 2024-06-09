let getInfo = async () => {
    try {
        let city = document.getElementById('cityname').value;
        if (city === "") {
            alert("Please enter a city name");
            return;
        }

        let key = 'b7ff41a475d90285794def964a1d939b'; // Replace this with your actual OpenWeatherMap API key
        let wurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        let resp = await fetch(wurl);

        if (!resp.ok) {
            throw new Error(`City ${city} not found or invalid API key`);
        }

        let data = await resp.json();
        let maxtemp = data.main.temp_max;
        let mintemp = data.main.temp_min;
        let weather = data.weather[0].main;
        let weatherDesc = data.weather[0].description;
        let windSpeed = data.wind.speed;
        let wicon = data.weather[0].icon;
        let wimagesrc = `http://www.openweathermap.org/img/w/${wicon}.png`;

        document.getElementById("mydiv").innerHTML = `
            <div class="weather-info">
                <h2>Weather today in <b>${city}</b></h2>
                <img src='${wimagesrc}' alt='weather image here'/>
                <p>Max Temp: ${maxtemp}&#176;C</p>
                <p>Min Temp: ${mintemp}&#176;C</p>
                <p>Weather: ${weather}</p>
                <p>Description: ${weatherDesc}</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            </div>
        `;

        console.log(`Weather: ${weather}`);
        changeBackgroundImage(weather);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

let changeBackgroundImage = async (weather) => {
    const pexelsAccessKey = 'X426t2ReRzeBiebZh2XoU0jVyyGWz2EIDXPQkIUQQ88N1MSLMyRqF5g0'; // Replace this with your actual Pexels API access key
    const weatherQuery = {
        Clear: 'clear sky',
        Clouds: 'cloudy',
        Rain: 'rain',
        Drizzle: 'drizzle',
        Thunderstorm: 'thunderstorm',
        Snow: 'snow',
        Mist: 'mist',
        Smoke: 'smoke',
        Haze: 'haze',
        Dust: 'dust',
        Fog: 'fog',
        Sand: 'sand',
        Ash: 'ash',
        Squall: 'squall',
        Tornado: 'tornado'
    };

    const query = weatherQuery[weather] || 'weather';
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;

    try {
        const response = await fetch(pexelsUrl, {
            headers: {
                Authorization: pexelsAccessKey
            }
        });
        const data = await response.json();
        const imageUrl = data.photos[0].src.original;
        
        console.log(`Setting background image: ${imageUrl}`);
        document.body.style.backgroundImage = `url(${imageUrl})`;
        console.log(`Current background image: ${getComputedStyle(document.body).backgroundImage}`);
    } catch (error) {
        console.error('Error fetching image from Pexels:', error);
        document.body.style.backgroundImage = 'url("https://source.unsplash.com/1600x900/?weather")';
    }
}
