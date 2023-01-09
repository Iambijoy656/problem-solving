// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.



// Example 1:
// Input: n = 3
// Output: [[1,2,3],
// [8,9,4],
// [7,6,5]]

// Example 2:
// Input: n = 3
// Output:[[1,2, 3, 4],
//[12,13,14,5],
//[11,16,15,6] 
//[10, 9, 8,7]]

// Example 3:
// Input: n = 1
// Output: [[1]]


var generateMatrix = function (n) {
    const results = [];
    for (var i = 0; i < n; i++) {
        results.push([])

    }
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    let counter = 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        //top (1,2,3) column wise 
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter //startRow[0] te column onujahi data bosate hobe

            counter++;


        }
        startRow++;

        //right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter
            counter++;
        }
        endColumn--;

        //bottom row
        // start reverse way (7,6)
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter
            counter++
        }
        endRow--;

        //start Column

        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++



    }
    console.log(results);
    return results;

};

generateMatrix(3)