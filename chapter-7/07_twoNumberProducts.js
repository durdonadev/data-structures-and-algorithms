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

// Dealing with multiple Datasets (page 105)
// Computing the product of every number from one array by every number of a second array
// Input: [1,2,3], [10,100,1000]
// Output: [10,100,1000,20,200,2000,30,300,3000]

function twoNumbersProduct2(array1, array2) {
    let products = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            products.push(array1[i] * array2[j]);
        }
    }
    return products;
}

console.log(twoNumbersProduct2([1, 2, 3], [10, 100, 1000]));
