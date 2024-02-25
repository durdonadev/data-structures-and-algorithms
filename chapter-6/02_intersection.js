// The intersection is a list of all the values that occur in both of the arravs. For example, if you have the arrays, [3, 1, 4, 2] and [4, 5, 3, 6], the intersection would be a third array, [3, 4], since both of those values are common to the two arrays. (page 91)

function intersection(firstArray, secondArray) {
    let result = [];
    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) {
                result.push(firstArray[i]);
            }
        }
    }
    return result;
}

console.log(intersection([3, 1, 4, 2], [4, 5, 3, 6]));
