// The function returns true if the array is a "100-Sum Array", and false if it is not. criteria:
// Its first and last numbers add up to 100.
// Its second and second to last numbers add up to 100.
// Its third and third to last numbers add up to 100 and so on. (page 109)

function sumArray100(array) {
    left = 0;
    right = array.length - 1;
    while (left < array.length / 2) {
        if (array[left] + array[right] !== 100) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(sumArray100([1, 2, 3, 4, 96, 97, 98, 99]));
