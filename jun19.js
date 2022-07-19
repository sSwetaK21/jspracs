// function division (arr,n){
//     let count =0
//     for(let i=0;i<arr.length;i++){
//         if(i%n==0){
//             count++
//         }
//     }
//     return count
// }
// console.log(division([1,5,7,8],1))


//=====filter()=========
// filtered down to just the elements from the given array that pass the test implemented by the provided function

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]


// //==============every()=============
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// [12, 5, 8, 130, 44].every(x => x >= 10);   // false
// [12, 54, 18, 130, 44].every(x => x >= 10); // true

//===============fill()=============
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

// syntax: fill(value, start, end)

// let arr=['pos0','pos1','pos2','pos3','pos4'];
// console.log(arr.fill('value', 1,3))
// o/p:[ 'pos0', 'value', 'value', 'pos3', 'pos4' ]

// console.log(arr.fill('value'))
// o/p: [ 'value', 'value', 'value', 'value', 'value' ]

// console.log(arr.fill('value',1))
// o/p: [ 'pos0', 'value', 'value', 'value', 'value' ]


//////////=============find()=======
// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned

let arr=[5,2,33,44,786,10]
let found= arr.find(value => value>=10);
console.log(found)

