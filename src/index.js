import "./index.css";
import { getWeather } from "./api";
import { Weather } from "./weather";
import { renderDay } from "./domRender";

const currentDay = document.querySelector('#currentDay');

let localWeather = await getWeather("Cincinnati");
console.log(localWeather);
let weatherClass = new Weather(localWeather);
let currentDayDiv = renderDay(weatherClass.currentDay);
currentDay.appendChild(currentDayDiv);