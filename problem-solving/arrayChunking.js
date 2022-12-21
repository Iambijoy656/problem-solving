/**
 
 * --------Direction----------
Given an array and chunk size, divide the array into sub-array

 * where each sub-array is os length size

------------------Example---------------------
chunk([1,2,3,4], 2) ----> [[1,2],[3,4]]
chunk([1,2,3,4,5], 2) ----> [[1,2],[3,4],[5]]
chunk([1,2,3,4,5,6,7,8], 3) ----> [[1,2,3],[4,5,6],[7,8]]
chunk([1,2,3,4,5], 4) ----> [[1,2,3,4],[5]]
chunk([1,2,3,4], 10) ----> [[1,2,3,4]]

 */


//Solution 1

// function chunk(arr, size) {
//     const chunked = [];
//     for (const elm of arr) {
//         const last = chunked[chunked.length - 1] //lastIndexValue

//         if (last && last.length < size) {
//             last.push(elm)
//             console.log(last);

//         } else {
//             chunked.push([elm])

//         }

//         console.log(chunked)

//     }
// }

// //[[1,2],[3,4]]
// chunk([1, 2, 3, 4, 5], 2)



// const array = [1, 2, 3, 5, 4, 7]
// const lastIndexValue = array[array.length - 1]
// console.log(lastIndexValue);





// Solution 2

function chunk(arr, size) {
    const chunked = [];
    let index = 0;
    while (index < arr.length) {
        const slicedArr = arr.slice(index, index + size)
        chunked.push(slicedArr)
        console.log(index, slicedArr, chunked)
        index += size

    }

    console.log(chunked);
}

//[[1,2],[3,4]]
chunk([1, 2, 3, 4, 5], 2)

