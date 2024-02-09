// The following function calculates the median from an ordered array. Describe its time complexity in terms of Big O Notation. (page 46)
// Input: [4,5,6,7,8]
// Output: 6

function median(array) {
    const middle = Math.floor(array.length / 2);

    // If array has even amount of numbers:

    if (array.length % 2 === 0) {
        return (array[middle - 1] + array[middle]) / 2;
    } else {
        // If array has odd amount of numbers:

        return array[middle];
    }
}

console.log(median([4, 5, 6, 7, 8]));
console.log(median([4, 5, 6, 7, 8, 9]));
