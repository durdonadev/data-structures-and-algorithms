// Function which returns the sum of all numbers of an array the numbers has been doubled. (page 76)

function doubleThenSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] * 2;
    }

    return sum;
}

console.log(doubleThenSum([1, 2, 3, 4, 5])); // 30
