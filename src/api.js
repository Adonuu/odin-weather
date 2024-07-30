export async function getWeather(cityName) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=Q24LPQN2637PHLLSF64TVF6T4&contentType=json`);
        // handle response errors
        if (!response.ok) {
            // if get a 400 response that means the city isn't there
            if (response.status === 400) {
                throw new Error("Incorrect City Name");
            } else {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
        }
        const data = await response.json();
        return data;
    } catch (error) {
        // handle json parsing errors
        throw error;
    }
}