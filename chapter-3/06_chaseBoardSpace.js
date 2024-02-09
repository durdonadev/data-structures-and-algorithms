/* Imagine you have a chessboard and put a single grains of rice one square. On the second square, you put 2 grains of rice, since that is double the amount of rice privous square. On the third square, you put 4 grains. On the fourth square, you put 8 grains, and on the fifthsquare, you put 16 grains and so on.
The function calculates which square you'll need to place a certain number of rice grains.
Input: 64
Output:7 */

const chaseboardSpace = function (numOfGrains) {
    let spaces = 1;
    let placedGrains = 1;
    while (placedGrains < numOfGrains) {
        placedGrains *= 2;
        spaces++;
    }
    return spaces;
};

console.log(chaseboardSpace(64));
