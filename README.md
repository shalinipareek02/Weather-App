# Weather-App
This Weather App fetches and displays the current weather information for a specified city using the OpenWeatherMap API. It also dynamically updates the background image based on the current weather condition using the Pexels API.

# Features
Fetch current weather data for any city.
Display maximum and minimum temperature, weather description, wind speed, and an icon representing the weather condition.
Dynamically change the background image according to the weather condition.

# Technologies Used
HTML
CSS (Bootstrap)
JavaScript
OpenWeatherMap API
Pexels API

# Setup
Prerequisites
A web browser
An OpenWeatherMap API key
A Pexels API key

# Installation
Clone the repository to your local machine:

Copy code
git clone https://github.com/your-username/weather-app.git
Navigate to the project directory:

Copy code
cd weather-app
Open weather.html in your preferred text editor and replace the placeholder API keys with your actual API keys:

Replace YOUR_OPENWEATHERMAP_API_KEY with your OpenWeatherMap API key.
Replace YOUR_PEXELS_API_KEY with your Pexels API key.
Running the App
Open weather.html in a web browser to run the app.

# Usage
Enter the name of the city you want to check the weather for in the input field.
Click the "Get Weather" button.
The weather information will be displayed, and the background image will change based on the weather condition.

Code Overview
HTML
The index.html file contains the structure of the app, including the input field for the city name and the button to fetch weather data.

CSS
Basic styling is provided using Bootstrap for a clean and responsive design. Additional custom styles are included in the <style> tags within index.html.

JavaScript
The main.js file contains the logic for fetching weather data and updating the UI:

getInfo: Fetches weather data from the OpenWeatherMap API and updates the weather information displayed on the page.
changeBackgroundImage: Fetches a background image from the Pexels API based on the current weather condition and updates the background image of the page.

# License
This project is open source and available under the MIT License.

# Acknowledgements
OpenWeatherMap for providing weather data.
Pexels for providing high-quality images.
