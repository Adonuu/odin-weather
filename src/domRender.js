import { Day } from "./weather";
import { convertEpochToDayOfWeek } from "./date";

export function renderDay(Day) {
    let baseDiv = document.createElement('div');
    baseDiv.style.display = 'grid';
    baseDiv.style.gridTemplateColumns = '1fr 1fr';
    baseDiv.style.gridTemplateRows = '2fr 1fr 1fr';
    baseDiv.style.gap = '0.2em';
    baseDiv.style.width = '100%';
    baseDiv.style.height = '100%';
    let iconDiv = document.createElement('div');
    iconDiv.id = convertEpochToDayOfWeek(Day.getDate());
    changeSVGToWhite(`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Monochrome/${Day.getCurrentWeatherIcon()}.svg`, convertEpochToDayOfWeek(Day.getDate()));
    iconDiv.style.width = '80px';
    iconDiv.style.height = '80px';
    iconDiv.style.stroke = 'white';
    baseDiv.appendChild(iconDiv);
    let dayDiv = document.createElement('div');
    dayDiv.innerHTML = convertEpochToDayOfWeek(Day.getDate());
    dayDiv.style.alignSelf = 'center';
    dayDiv.style.textAlign = 'left';
    dayDiv.style.fontWeight = 'bold';
    dayDiv.style.fontSize = '1.5rem';
    baseDiv.appendChild(dayDiv);
    let conditionDiv = renderLabel('Conditions', Day.getCurrentWeather(), '');
    conditionDiv.style.marginTop = '0.2em';
    conditionDiv.style.gridColumn = 'span 2';
    baseDiv.appendChild(conditionDiv);
    let temperatureDiv = renderLabel('Temperature', Day.getTemperature(), '℃');
    temperatureDiv.style.gridColumn = 'span 2';
    baseDiv.appendChild(temperatureDiv);
    let feelsLikeDiv = renderLabel('Feels Like', Day.getFeelsLike(), '℃');
    feelsLikeDiv.style.gridColumn = 'span 2';
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
    baseDiv.style.alignItems = 'center';
    baseDiv.style.paddingLeft = '0.5em';
    valueDiv.style.paddingLeft = '0.5em';
    unitDiv.style.paddingLeft = '0.2em';
    return baseDiv;
}

async function changeSVGToWhite(svgUrl, containerId) {
    try {
        const response = await fetch(svgUrl);
        const data = await response.text();
    
        // parse the svg content
        const parser = new DOMParser();
        const svgData = parser.parseFromString(data, 'image/svg+xml');
        const element = svgData.documentElement;
    
        const lines = element.querySelectorAll('*');
        lines.forEach((val) => {
            val.setAttribute('stroke', 'white');
            val.setAttribute('fill', 'white');
        });

        const styleTags = element.querySelectorAll('style');
        styleTags.forEach(styleTag => {
            let cssText = styleTag.textContent;
            // Replace all color definitions in CSS text with white
            cssText = cssText.replace(/fill\s*:\s*#[0-9a-fA-F]{6}/g, 'fill: white');
            cssText = cssText.replace(/stroke\s*:\s*#[0-9a-fA-F]{6}/g, 'stroke: white');
            styleTag.textContent = cssText;
        });
    
        const serializer = new XMLSerializer();
        const modifiedData = serializer.serializeToString(element);
    
        const container = document.querySelector('#' + containerId);
        container.innerHTML = modifiedData;
    } catch (error) {
        console.log(error);
    }
}