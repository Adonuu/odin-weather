import "./index.css";
import { getWeather } from "./api";
import { Weather } from "./weather";
import { renderDay } from "./domRender";

const currentDay = document.querySelector('#currentDay');
const cityName = document.querySelector('#cityName');
const cityLatitude = document.querySelector('#cityLatitude');
const cityLongitude = document.querySelector('#cityLongitude');

let localWeather = await getWeather("Cincinnati");
let weatherClass = new Weather(localWeather);

renderPage(weatherClass);

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
    let currentDayDiv = renderDay(weatherClass.getCurrentDay());
    currentDay.appendChild(currentDayDiv);
    cityName.innerHTML = weatherClass.getCurrentCity();
    cityLatitude.innerHTML = 'Latitude: ' + weatherClass.getCityLatitude();
    cityLongitude.innerHTML = 'Longitude: ' + weatherClass.getCityLongitude();
    
    for (let i = 0; i < 6; i++) {
        let nextWeekDiv = renderDay(weatherClass.getNextWeek()[i]);
        let nextWeekDay = document.querySelector('#nextWeek' + i);
        nextWeekDay.appendChild(nextWeekDiv);
    }
}

