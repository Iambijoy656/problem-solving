// SAME ARRAY AND FREQUENCY CHECK

//edge case
// Checking array length
// 1-1 (remove 1) [4,5,2]
//2-2(remove 2)[4,5]
// 4-4(remove 4)[5]
//5-5(remove 5)[]


// time complexity O(n^2)
//space complexity P(1)
// function isSame(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (var i = 0; i < arr1.length; i++) {
//         console.log(arr1[i]);

//         let index = arr2.indexOf(arr1[i])
//         console.log(index)
//         if (index === -1) {
//             return false;
//         } else {
//             arr2.splice(index, 1)
//         }
//         console.log(arr1[i], arr2);

//     }

//     return true;


// }

// console.log(isSame([1, 2, 4, 5], [1, 4, 5, 2]))







// efficient way 


// time complexity O(n)
function isSame(arr1, arr2) {
    const hasTable1 = {};
    const hasTable2 = {};

    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let num of arr1) {
        hasTable1[num] = (hasTable1[num] || 0) + 1;

    }
    for (let num of arr2) {
        hasTable2[num] = (hasTable2[num] || 0) + 1;

    }

    for (var elm in hasTable1) {
        if (!elm in hasTable2 || hasTable1[elm] !== hasTable2[elm]) {
            return false;
        }
        console.log(elm)
    }
    // console.log(hasTable1, hasTable2)

    return true;


}

console.log(isSame([1, 2, 4, 5], [1, 4, 5, 2]))
