// Searching for a value not contained within the array. (page 20)

function searchNotInArray(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return false;
        }
    }
    return true;
}

const array = [1, 2, 3, 4, 5];
const target = 6;
console.log(searchNotInArray(array, target));
