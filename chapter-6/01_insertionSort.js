// In insertionSort function sorts the arr array using the Insertion Sort algorithm. It iterates through each element of the array, starting from index 1, and places each element in its correct position in the already sorted part of the array to the left. Finally, it returns the sorted array.

function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;

        while (j >= 0) {
            if (array[j] > temp) {
                array[j + 1] = array[j];
                j = j - 1;
            } else {
                break;
            }
        }
        array[j + 1] = temp;
    }
    return array;
}

console.log(insertionSort([4, 2, 7, 1, 3]));
