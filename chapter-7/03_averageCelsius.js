// This JavaScript function takes an array of Fahrenheit temperature readings as input.
// It converts each Fahrenheit reading to Celsius and adds it to an array of Celsius numbers.
// Then, it calculates the sum of all Celsius numbers and divides it by the count of Celsius numbers to find the mean average Celsius temperature.

function averageCelsius(fahrenheitReadings) {
    let celsiusNumbers = [];

    fahrenheitReadings.forEach(function (fahrenheitReading) {
        let celsiusConversion = (fahrenheitReading - 32) / 1.8;
        celsiusNumbers.push(celsiusConversion);
    });

    let sum = 0.0;
    celsiusNumbers.forEach(function (celsiusNumber) {
        sum += celsiusNumber;
    });

    return sum / celsiusNumbers.length;
}

console.log(averageCelsius([100, 300, 355]));
