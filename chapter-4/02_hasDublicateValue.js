// The function hasDuplicateValue that takes an array of integers as input and returns true if the array contains any duplicate values; otherwise, it returns false. (page 56)

function hasDublicateValue(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(hasDublicateValue([1, 5, 3, 9, 1, 4]));

function hasDublicateValueLinerSearch(array) {
    let existingNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (existingNumbers[array[i]] === 1) {
            return true;
        } else {
            existingNumbers[array[i]] = 1;
        }
    }
    return false;
}

console.log(hasDublicateValueLinerSearch([1, 5, 3, 9, 4]));
