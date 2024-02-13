// the function finds the greatest single number within an array. (page 61)

//O(N^2)
function greatestNumber(array) {
    for (let i of array) {
        let isIValTheGreatest = true;
        for (let j of array) {
            if (array[j] > array[i]) {
                isIValTheGreatest = false;
            }
        }
        if (isIValTheGreatest) {
            return array[i];
        }
    }
    return i;
}

console.log(greatestNumber([2, 45, 72, 4, 34]));

//O(N)
function findMaxValue(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(findMaxValue([23, 45, 43, 78]));
