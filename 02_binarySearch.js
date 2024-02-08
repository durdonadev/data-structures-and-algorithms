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
