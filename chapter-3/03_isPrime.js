/* Given a number create a function determining whether the given number is prime.
Input: 4
Output: false
Input: 3
Output: true */

const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime(4));
console.log(isPrime(3));
