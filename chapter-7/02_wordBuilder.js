// The next example is an algorithm that collects every combination of two character strings built from an array of single characters. For example, given the array: ["a", "b", "c", "d"], we'd return a new array containing the following string combinations:
// [ 'ab', ac', 'ad', 'ba', 'bc', 'bd', ca', cb', 'cd', 'da', 'db', 'dc']

function wordBuilder(array) {
    let collection = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i != j) {
                collection.push(array[i] + array[j]);
            }
        }
    }
    return collection;
}

console.log(wordBuilder(["a", "b", "c", "d"]));

function wordBuilder2(array) {
    let collection = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            for (let k = 0; k < array.length; k++) {
                if (i != j && j != k && i != k) {
                    collection.push(array[i] + array[j]);
                }
            }
        }
    }
    return collection;
}

console.log(wordBuilder2(["a", "b", "c", "d"]));
