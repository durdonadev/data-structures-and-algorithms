/* Given a sorted array of unique integers, and a target value determine the index of a matching value within the array. If there is not match, return -1.
Input: [1, 2, 3, 4, 5], 4
Output: 3
*/

const binarySearch = (arr, ele) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((end + start) / 2);
        let midValue = arr[mid];

        if (ele === midValue) {
            return mid;
        } else if (ele < midValue) {
            end = mid - 1;
        } else if (ele > midValue) {
            start = mid + 1;
        }
    }

    return -1; // Return -1 if the element is not found in the array
};

console.log(binarySearch([1, 2, 3, 4, 5], 4));
