// This function solves a famous problem known as "finding a needle in the haystack." Both the needle and haystack are strings. For example, if the needle "def" and the haystack is "abcdefghi", the needle is contained somewhere in the haystack, as "def" is a substring of "abcdefghi". However, if the needle is 'dd", it cannot be found in the havstack of "abcdefghi". This function returns true or false, depending on whether the needle can be found in the haystack. (page 111)

function needleAndHaystack(haystack, needle) {
    let needleIdx = 0;
    const needleLength = needle.length;
    const haystackLength = haystack.length;

    while (needleIdx <= haystackLength - needleLength) {
        let match = true;

        for (let j = 0; j < needleLength; j++) {
            if (haystack[needleIdx + j] !== needle[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            return true;
        }

        needleIdx++;
    }

    return false;
}

console.log(needleAndHaystack("Hello World", "World"));
console.log(needleAndHaystack("Hello World", "Foo"));
