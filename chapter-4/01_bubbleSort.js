// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. (page 52)
// Input : [2,4,1,3,7]
// Output: [1,2,3,4,7]

function bubbleSort(array) {
    let unsorted_idx = array.length - 1;
    sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < unsorted_idx; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sorted = false;
            }
        }
        unsorted_idx--;
    }
    return array;
}

console.log(bubbleSort([2, 4, 1, 3, 7]));
