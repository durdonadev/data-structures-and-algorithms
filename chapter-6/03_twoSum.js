// The following function checks whether an array of numbers contain a pair of two nambers that add upp to target nem. (page 93)

function twoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] + array[j] === target) {
                return true;
            }
        }
    }
    return false;
}

console.log(twoSum([1, 2, 3, 4, 5], 7));
console.log(twoSum([1, 2, 3, 4, 5], 17));
