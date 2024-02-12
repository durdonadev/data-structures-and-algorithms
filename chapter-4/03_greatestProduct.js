// Function that finds greatest product of any pair of two numbers within a given arrray. (page 60)

function greatestProduct(array) {
    let maxProduct = array[0] * array[1];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i != j && i * j > maxProduct) {
                maxProduct = array[i] * array[j];
            }
        }
    }
    return maxProduct;
}

console.log(greatestProduct([1, 2, 3, 4, 5]));
