// An algorithm that accepts an array of numbers and returns the product of every combination of two numbers. page(103)
// input: [1,2,3,4,5]
// output: [2, 3, 4, 5,6, 8, 10, 12, 15, 20]

function twoNumbersProduct(array) {
    let products = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            products.push(array[i] * array[j]);
        }
    }
    return products;
}

console.log(twoNumbersProduct([1, 2, 3, 4, 5]));
