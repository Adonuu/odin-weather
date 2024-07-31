export async function getWeather(cityName) {
    try {
        // fetch weather based on city name entered into form
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=Q24LPQN2637PHLLSF64TVF6T4&contentType=json`);
        // handle response errors
        if (!response.ok) {
            // if get a 400 response that means the city isn't there
            if (response.status === 400) {
                throw new Error("City does not exist. Please enter a valid city.");
            } else {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
        }
        // transform promise into json data to return
        const data = await response.json();
        return data;
    } catch (error) {
        // handle json parsing errors
        throw error;
    }
}