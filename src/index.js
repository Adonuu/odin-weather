import "./index.css";
import { getWeather } from "./api";
import { Weather } from "./weather";

console.log('Hello Webpack!');

let localWeather = await getWeather("Cincinnat");
console.log(localWeather);
let weatherClass = new Weather(localWeather);
console.log(weatherClass);
let londonWeather = await getWeather("London");
console.log(londonWeather);
weatherClass.setNewCity(londonWeather);
console.log(weatherClass);