// The mean average of even numbers will be defined as the sum of the even numbers divided by the count of even numberS, SO We # keep track of both the sum and the count. (page 96)

function mMeanAverageOfEvens(array) {
    let sum = 0.0;
    let countOfEvenNumbers = 0;

    array.forEach(function (number) {
        if (number % 2 === 0) {
            sum += number;
            countOfEvenNumbers++;
        }
    });

    return sum / countOfEvenNumbers;
}

const numbers = [2, 4, 6, 8, 10];
const meanAverage = mMeanAverageOfEvens(numbers);
console.log("Mean Average of Even Numbers:", meanAverage);
