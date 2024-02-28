// A function everyPassword that generates every possible string of a given length using lowercase English alphabet characters. It uses recursion to generate all possible combinations of characters and prints them out. The example usage demonstrates how to generate all possible 3-character passwords. (page 107)

function everyPassword(n) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < Math.pow(26, n); i++) {
        let str = "";
        let num = i;

        while (num > 0) {
            let remainder = num % 26;

            str = alphabet[remainder] + str;
            num = Math.floor(num / 26);
        }

        while (str.length < n) {
            str = "a" + str;
        }
        console.log(str);
    }
}

everyPassword(2);
