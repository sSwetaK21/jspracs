// function sumlast(arr){
//     let first = arr[0];
//     let last = arr[arr.length - 1];
//     let sum = first + last;
//     return sum;
// }

// console.log(sumlast([1,2,3,4]));

// Given an integer array and an element as function parameter, return the index of the given element if it exists, else return “Not Found”. If the array contains multiple occurence of an element return the index of last occurrence of the element.

// function arraySum(arr, element){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == element){
//             return arr.lastIndexOf(element);
//         }  
//     }
//         return "Not Found" ;
// }
// console.log(arraySum([1,2,3,4,5],3));


// A teacher is about to take the attendance of the class, you being the monitor someone informs you that one student is missing. Check if the student is present in the class or not.

// function arrStudent(arr,stu){
//     if(arr.includes(stu)){
//         return "Present";
//         } else{
//             return "Not present";
//         }
// }
// console.log(arrStudent([1,2,3,4], 5));

// Given an array of numbers, sort the array in ascending order and then return the sorted array.

// function arrSort(arr){
//     return arr.sort();
// }
// console.log(arrSort(['a','c','d','b']));

// Given an array of strings, sort the array and then return concatinating the 2nd and 2nd last element of the array.

// function arraySum(arr) {
//     arr.sort();
//   //  arr=  ;
//   return arr.toString(arr[1] + arr[arr.length - 2]);
//     // arr;
// }
// console.log(arraySum([1,2,3,4,5]))

// 1,2,3,4,5

// 24

function arraysum(arr1,arr2) {
  let arr3 = [];
  let arr4 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]  % 2 !== 0) {
       arr3 = arr1[i];
    }
  }
  for (let i = 0; i < arr2.length; i++) { 
    if (arr2[i]  % 2 !== 0) {
       arr4 = arr2[i];
    }
  }
//  let arr5=[]
//  arr5 = ;
 console.log(arr3.concat(arr4))

  
}
console.log(arraysum([1, 2, 3, 4,5,6,7,8], [2,3,4,5]))

// let arr1 = [1, 2, [3, 4]];
// let arr2 = [[5, 6], 7, 8];
// let arr3 = arr1.concat(arr2);
// console.log(arr3)