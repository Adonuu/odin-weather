import "./index.css";
import { getWeather } from "./api";
import { Weather } from "./weather";
import { renderDay } from "./domRender";

const currentDay = document.querySelector('#currentDay');

let localWeather = await getWeather("Cincinnati");
let weatherClass = new Weather(localWeather);
let currentDayDiv = renderDay(weatherClass.getCurrentDay());
currentDay.appendChild(currentDayDiv);

for (let i = 0; i < 6; i++) {
    let nextWeekDiv = renderDay(weatherClass.getNextWeek()[i]);
    let nextWeekDay = document.querySelector('#nextWeek' + i);
    nextWeekDay.appendChild(nextWeekDiv);
}