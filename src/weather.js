export class Weather {
    constructor(apiData) {
        this.currentCity = apiData.address;
        this.currentDay = new Day(apiData.currentConditions);
        this.nextWeek = this.createNextWeek(apiData.days.slice(1, 7));
    }

    createNextWeek(apiData) {
        return apiData.map(dayData => new Day(dayData));
    }

    getCurrentCity() {
        return this.currentCity;
    }

    getCurrentDay() {
        return this.currentDay;
    }

    getNextWeek() {
        return this.nextWeek;
    }

    setNewCity(apiData) {
        this.currentCity = apiData.address;
        this.currentDay = new Day(apiData.currentConditions);
        this.nextWeek = this.createNextWeek(apiData.days.slice(1, 8));
    }
}

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