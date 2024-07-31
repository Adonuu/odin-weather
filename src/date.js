// converts date time epoch to a string telling the day of the week
export function convertEpochToDayOfWeek(epoch) {
    let date = new Date(epoch * 1000);

    let dayIndex = date.getDay();

    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return daysOfWeek[dayIndex];
}