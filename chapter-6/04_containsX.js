// The following function returns whether or not a capital “X” is present within a string. (page 94)

function containsX(string) {
    let foundX = false;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "X") {
            foundX = true;
        }
    }
    return foundX;
}

console.log(containsX("eXam"));
