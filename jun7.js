// practice

// -----------qst 1------------

// You are given an array arr, if the length of the array is greater than 5 return “Hello” else return “World”

// function arrayHelloWorld(arr){
//   if(arr.length > 5){
//     console.log("Hello")
//   } else{
//     console.log("World")
//   }
//   return arr;
// }
// arrayHelloWorld([1,2,3,4,5]);

//-----------CONCAT()-------------------

// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.

// let arr1 = [1,2,3];
// let arr2 = [4,5,6,7];
// console.log(arr1.concat(arr2));



//--------Slice-------------

// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a given end.
// The slice() method does not change the original array.


// slice(starting index, ending index (not mentioned))

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.slice(1, 3));

// o/p:
// [ 'Orange', 'Lemon' ]

//----------indexOf-----------

// indexOf() returns the position of a specified value in an array

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.indexOf("Lemon"));