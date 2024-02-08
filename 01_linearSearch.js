const linearSearch = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        } else if (array[i] > value) {
            break;
        }
    }
};

console.log(linearSearch([3, 17, 75, 80, 202], 22));
console.log(linearSearch([3, 17, 75, 80, 202], 17));
