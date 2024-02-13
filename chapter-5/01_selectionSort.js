// Selection Sort Function. (page 69)

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let lowestNumIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowestNumIndex]) {
                lowestNumIndex = j;
            }
        }
        if (lowestNumIndex !== i) {
            let temp = array[i];
            array[i] = array[lowestNumIndex];
            array[lowestNumIndex] = temp;
        }
    }
    return array;
}

console.log(selectionSort([4, 2, 7, 1, 3])); // [1,2,3,4,7]
