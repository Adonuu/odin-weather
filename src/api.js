export async function getWeather(cityName) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=Q24LPQN2637PHLLSF64TVF6T4&contentType=json`);
    const data = await response.json();
    return data;
}