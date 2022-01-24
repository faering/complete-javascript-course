// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// 59. Using Google, StackOverflow and MDN
// PROBLEM 1
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// - What is temperature amplitude? Answer: difference between highest and lowest temperature
// - How to compute max and min temperature?
// - What's a sensor error and what to do with errors?

// 2) Divide and Conquer: Break problem into sub-problems
// - How to ignore errors?
// - Find max value in temperature array.
// - Find min value in temperature array.
// - Subtract min from mac to find amplitude and return it.

const calcTempAmplitude = function (temps) {
    let min = temps[0];
    let max = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof temps[i] !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    const amp = max - min;

    console.log(min, max, amp);

    return amp;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2
// Function should now receive two arrays of temperatures.

// 1) Understanding the problem
// - With two arrays, should we implement the same functionality twice? NP! Just merge the two arrays.

// 2) Divide and Conquer: Break problem into sub-problems
// - Merging two arrays

const calcTempAmplitude2 = function (t1, t2) {
    // Merge / concatenate arrays
    const temps = t1.concat(t2);

    let min = temps[0];
    let max = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof temps[i] !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    const amp = max - min;

    console.log(min, max, amp);

    return amp;
};

const amplitude2 = calcTempAmplitude2(temperatures, [1, -50, 40]);
console.log(amplitude2);

// 61. Debugging with the Console and Breakpoints
const measureKelvin = function () {
    const measurements = {
        type: 'temp',
        unit: 'celsius',

        // C) FIX
        value: Number(prompt('Degrees celsius:')),
    };

    // B) FIND
    console.table(measurements);

    const kelvin = measurements.value + 273;

    return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// 62. Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// 1) Understand the problem

// 2) Break into sub-problems
// - Use Template Literal for forecasting string
// - Retrieve values from array one by one

const printForecast = function (arr) {
    let forecast = '';
    for (let i = 0; i < arr.length; i++) {
        forecast = forecast.concat(`${arr[i]}°C in ${i + 1} days ... `);
    }
    console.log(forecast);
};

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

printForecast(temps2);
