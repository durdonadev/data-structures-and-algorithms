// The following function accepts an array of strings and returns a new array that only contains the strings that start with the character "a". Use Big O Notation to describe the time complexity of the function. (page 46)
// Input: ["apple", "babana", "orange", "cherry", "avacado"]
// Output: ["apple", "avacado"]

function selectAStrings(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith("a")) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(selectAStrings(["apple", "babana", "orange", "cherry", "avacado"]));
