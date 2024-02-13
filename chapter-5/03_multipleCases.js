// Function accepts an array of strings and prints each string in multiple cases. (page 77)

function multipleCases(array) {
    array.forEach((string) => {
        console.log(string.toUpperCase());
        console.log(string.toLowerCase());
        console.log(string[0].toUpperCase() + string.slice(1).toLowerCase());
    });
}

multipleCases(["hello", "World", "EVERYONE"]);
