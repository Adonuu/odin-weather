import { Day } from "./weather";
import { convertEpochToDayOfWeek } from "./date";

export function renderDay(Day) {
    let baseDiv = document.createElement('div');
    baseDiv.classList.add('day');
    let dayDiv = document.createElement('h2');
    dayDiv.classList.add('dayTitle');
    dayDiv.innerHTML = convertEpochToDayOfWeek(Day.getDate());
    baseDiv.appendChild(dayDiv);
    let iconDiv = document.createElement('img');
    iconDiv.classList.add('icon');
    iconDiv.alt = Day.getCurrentWeatherIcon();
    baseDiv.appendChild(iconDiv);
    let conditionDiv = document.createElement('div');
    conditionDiv.classList.add('condition');
    conditionDiv.innerHTML = Day.getCurrentWeather();
    baseDiv.appendChild(conditionDiv);
    let temperatureDiv = renderLabel('Temperature', Day.getTemperature(), '℃');
    baseDiv.appendChild(temperatureDiv);
    let feelsLikeDiv = renderLabel('Feels Like', Day.getFeelsLike(), '℃');;
    baseDiv.appendChild(feelsLikeDiv);
    return baseDiv;
}

function renderLabel(name, value, unit) {
    let baseDiv = document.createElement('div');
    // create elements for each component
    let nameDiv = document.createElement('div');
    nameDiv.innerHTML = name + ':';
    baseDiv.appendChild(nameDiv);
    let valueDiv = document.createElement('div');
    valueDiv.innerHTML = value;
    baseDiv.appendChild(valueDiv);
    let unitDiv = document.createElement('div');
    unitDiv.innerHTML = unit;
    baseDiv.appendChild(unitDiv);
    // apply styling
    baseDiv.style.display = 'flex';
    baseDiv.style.flexFlow = 'row nowrap';
    baseDiv.style.width = "100%";
    baseDiv.style.height = "100%";
    baseDiv.style.justifyContent = 'center';
    valueDiv.style.marginLeft = '5px';
    return baseDiv;
}