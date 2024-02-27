// Count the Ones
// Here's another algorithm where the Big O is different from what it seems at first glance. This function accepts an array of arrays, where the array contain 1's and 0's. The function then returns how many 1's there. (page 102)

// Input:
[
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1],
    [1, 0]
];

// Output: 7

function countOnes(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 1) {
                count++;
            }
        }
    }
    return count;
}

console.log(
    countOnes([
        [0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1],
        [1, 0]
    ])
);
