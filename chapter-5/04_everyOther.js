// The function iterates over an array of numbers. As it does so. it focuses on every other number while ignoring the numbers in between. For each "focus number", the function proceeds to print out every number from the array - one at a time - after being added to the focus number. (page 77)

function everyOther(array) {
    array.forEach((number, index) => {
        if (index % 2 === 0) {
            array.forEach((otherNumber) => {
                console.log(number + otherNumber);
            });
        }
    });
}

everyOther([1, 2, 3, 4, 5]);
