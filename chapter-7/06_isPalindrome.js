// A palindrome is a word or phrase that read the same both forward and backward. Example: "racecar", "kayak", and "deified" (page 103)

function isPalinrrome(string) {
    left = 0;
    right = string.length - 1;
    while (left < string.length / 2) {
        if (string[left] !== string[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalinrrome("racecar"));
