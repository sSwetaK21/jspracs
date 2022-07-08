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
// The indexOf() method returns -1 if the value is not found.



// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.indexOf("Lemon"));

// o/p:
// 2


// console.log(fruits.indexOf("Pine"));

// o/p:
// -1



//--------------lastIndexOf()---------------

// The lastIndexOf() method returns the last index (position) of a specified value.
// The lastIndexOf() method returns -1 if the value is not found.

// const fruits = ["Banana", "Orange","Apple", "Lemon",  "Mango","Apple"];

// console.log(fruits.lastIndexOf("Apple"));


//------------includes()-----------------

// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Apple"));

// o/p;
// true

// console.log(fruits.includes("apple"));

// o/p:
// false


//--------filter()------------

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result);

// o/p:
// [ 32, 33, 40 ]


//------map()----------

// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.


// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr)

// o/p:
// 650,440,120,40

//-------length-----------

// The length property sets or returns the number of elements in an array.

// let arr = [1,2,3,4,5,6,5,6,5,];
// console.log(arr.length)

// o/p:
// 9

//------pop()---------

// The pop() method removes (pops out) the last element of an array.
// The pop() method changes the original array.

// let arr =[12,3,4,5,4,3,2];

// console.log(arr.pop());

// console.log(arr)    //=> 2 is last element and it is removed


//-------push()---------

// The push() method adds new items to the end of an array.
// The push() method changes the length of the array..

let arr = [1,2,3,45,6];
arr.push("hi");
console.log(arr);