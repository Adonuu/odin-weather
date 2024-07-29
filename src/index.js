import "./index.css";
import { getWeather } from "./api";
import { Weather } from "./weather";

console.log('Hello Webpack!');

let localWeather = await getWeather("Cincinnati");
console.log(localWeather);
let weatherClass = new Weather(localWeather);
console.log(weatherClass);