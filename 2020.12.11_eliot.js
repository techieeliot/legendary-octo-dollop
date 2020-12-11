// 1. Return a new array with unique members.

var arr1 = [1, 5, 5, 7, 3, 20];
var arr2 = [6, 6, 3, 100, 2, 12, 5];

const arr3 = [...arr1, ...arr2]
const findUnique = (arr) => {
    const result = []
    for (const i of arr) {
        if (result.indexOf(i) === -1) {
            result.push(i)
        }  
    }
    console.log("1. new array w/ unique numbers: ", result)
}

findUnique(arr3)

// 2. Flatten array and return a new array with members at the same level.

var arr = [5, 12, [1, [8, 10, 2], 1, 100], [15], 7];

const newArr = arr.flat(3)
console.log("2. flatten new array: ", newArr)

// 3. Sort result array from above.

const sortedNewArr = newArr.sort((a,b) => a - b)
console.log("3. sorted list: ", sortedNewArr)

// 4. Remove all duplicates and return new array with unique members.

const uniqueSortedNewArr = sortedNewArr.filter((num, i) => sortedNewArr.indexOf(num) === i)
console.log("4. no duplicates: ", uniqueSortedNewArr)