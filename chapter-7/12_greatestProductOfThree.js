// The function finds the greatest product of three numbers from a given array

function greatestProductOfThree(array) {
    let max = array[0] * array[1] * array[2];
    let i = 0;

    while (i < array.length) {
        let j = i + 1;
        while (j < array.length) {
            let k = j + 1;
            while (k < array.length) {
                if (array[i] * array[j] * array[k] > max) {
                    max = array[i] * array[j] * array[k];
                }
                k++;
            }
            j++;
        }
        i++;
    }
    return max;
}

console.log(greatestProductOfThree([1, 2, 3, 4, 5]));
