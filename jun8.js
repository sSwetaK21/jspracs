// function sumlast(arr){
//     let first = arr[0];
//     let last = arr[arr.length - 1];
//     let sum = first + last;
//     return sum;
// }

// console.log(sumlast([1,2,3,4]));

// Given an integer array and an element as function parameter, return the index of the given element if it exists, else return “Not Found”. If the array contains multiple occurence of an element return the index of last occurrence of the element.

function arraySum(arr, element){
    if(arr[i]== element){
        return arr.lastIndexOf(element);
    }  else{

        return "Not Found"
    }
}
console.log(arraySum([1,2,3,4,5,3],3))