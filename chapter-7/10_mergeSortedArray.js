// Function merges two sorted arrays together to create a new sorted array containing all the values from both arrays (page 110)

function mergeSortedArray(array1, array2) {
    const newArray = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < array1.length || pointer2 < array2.length) {
        if (!array1[pointer1]) {
            newArray.push(array2[pointer2]);
            pointer2++;
        } else if (!array2[pointer2]) {
            newArray.push(array1[pointer1]);
            pointer1++;
        } else if (array1[pointer1] < array2[pointer2]) {
            newArray.push(array1[pointer1]);
            pointer1++;
        } else {
            newArray.push(array2[pointer2]);
            pointer2++;
        }
    }
    return newArray;
}

console.log(mergeSortedArray([3, 5, 8], [1, 6, 9]));
