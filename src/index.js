import "./index.css";
import { getWeather } from "./api";
import { Weather } from "./weather";
import { renderDay } from "./domRender";

const currentDay = document.querySelector('#currentDay');
const cityName = document.querySelector('#cityName');
const cityLatitude = document.querySelector('#cityLatitude');
const cityLongitude = document.querySelector('#cityLongitude');
const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit',  async(event) => {
    
    event.preventDefault();
    let query = event.target.querySelector('#search-input').value;
    try {
        // Attempt to get weather data
        let weatherQuery = await getWeather(query);
        
        // Check if weatherQuery is valid or if an error is returned
        if (!weatherQuery || weatherQuery.error) {
            throw new Error('City not found or invalid.');
        }
        
        // Create a new Weather instance and render the page
        let weatherClass = new Weather(weatherQuery);
        renderPage(weatherClass);

        // reset border color if there was an error before
        searchForm.style.borderColor = 'white';
        
        // Clear any previous error message
        clearErrorMessage();
        
    } catch (error) {
        // Handle errors by displaying an error message
        displayErrorMessage(error.message);
        // change search border color to better notify user
        searchForm.style.borderColor = 'red';
    }
});

function renderPage(weatherClass) {
    // reset inner html to remove old data
    currentDay.innerHTML = '';
    cityName.innerHTML = '';
    cityLatitude.innerHTML = '';
    cityLongitude.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        let nextWeekDay = document.querySelector('#nextWeek' + i);
        nextWeekDay.innerHTML = '';
    }
    // render today's weather into div
    let currentDayDiv = renderDay(weatherClass.getCurrentDay());
    currentDay.appendChild(currentDayDiv);

    // render city information
    cityName.innerHTML = weatherClass.getCurrentCity();
    cityLatitude.innerHTML = 'Latitude: ' + weatherClass.getCityLatitude();
    cityLongitude.innerHTML = 'Longitude: ' + weatherClass.getCityLongitude();
    
    // render weather for the next week
    for (let i = 0; i < 6; i++) {
        let nextWeekDiv = renderDay(weatherClass.getNextWeek()[i]);
        let nextWeekDay = document.querySelector('#nextWeek' + i);
        nextWeekDay.appendChild(nextWeekDiv);
    }
}

function displayErrorMessage(message) {
    // Get or create an element to display error messages
    let errorElement = document.getElementById('error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.id = 'error-message';
        errorElement.style.color = 'red';
        errorElement.style.marginTop = '10px';
        errorElement.style.fontWeight = 'bold';
        document.getElementById('search').appendChild(errorElement);
    }
    errorElement.textContent = message;
}

function clearErrorMessage() {
    // clear error message
    let errorElement = document.getElementById('error-message');
    if (errorElement) {
        errorElement.textContent = '';
    }
}

