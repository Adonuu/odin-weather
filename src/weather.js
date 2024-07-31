// class used for storing relavent information from the api query
export class Weather {
    constructor(apiData) {
        this.currentCity = apiData.address;
        this.cityLatitude = apiData.latitude;
        this.cityLongitude = apiData.longitude;
        this.currentDay = new Day(apiData.currentConditions);
        this.nextWeek = this.createNextWeek(apiData.days.slice(1, 7));
    }

    createNextWeek(apiData) {
        return apiData.map(dayData => new Day(dayData));
    }

    getCurrentCity() {
        return this.currentCity;
    }

    getCityLatitude() {
        return this.cityLatitude;
    }

    getCityLongitude() {
        return this.cityLongitude;
    }

    getCurrentDay() {
        return this.currentDay;
    }

    getNextWeek() {
        return this.nextWeek;
    }

    setNewCity(apiData) {
        this.currentCity = apiData.address;
        this.cityLatitude = apiData.latitude;
        this.cityLongitude = apiData.longitude;
        this.currentDay = new Day(apiData.currentConditions);
        this.nextWeek = this.createNextWeek(apiData.days.slice(1, 7));
    }
}

// class to store weather information for each day
// makes it easier to ensure each day is the same
export class Day {
    constructor(apiData) {
        this.date = apiData.datetimeEpoch;
        this.currentWeather = apiData.conditions;
        this.currentWeatherIcon = apiData.icon;
        this.temperature = apiData.temp;
        this.feelsLike = apiData.feelslike;
    }

    getDate() {
        return this.date;
    }

    getCurrentWeather() {
        return this.currentWeather;
    }

    getCurrentWeatherIcon() {
        return this.currentWeatherIcon;
    }

    getTemperature() {
        return this.temperature;
    }

    getFeelsLike() {
        return this.feelsLike;
    }
}