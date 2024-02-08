/* Given anumber as a year create a function determining whether the given number is leap year */

const isLeapYear = (year) => {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

console.group(isLeapYear(1400));
