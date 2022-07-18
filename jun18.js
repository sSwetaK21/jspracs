//===qst

// function isArray(arr1, arr2){
//     arr1.sort()
//     arr2.sort()
//     for(let i=0; i<arr1.length; i++){
//         if(arr1[i] == arr2[i]){
//             return true
//         }else{
//             return false
//         }
//     }
//     if(arr1.length == arr2.length){
//       return true;
//     } else{
//       return false;
//     }
//   }
//   console.log(isArray([1, 5, 7, 8],
//     [5, 8, 7, 1]))


// function arrBeg(arr){
//     let arry=[];
//     for(let i=0; i<arr.length;i++){
//         arry[i]= arr[i];
//     }
//     return arry;
// }
// console.log(arrBeg([1,]))

// function operations(arr) {
//     let array = [];
//     for (let i = 0; i < arr.length; i++) {
//         array[i] = arr[i];
//     }
//     console.log(array);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes('ADD_BEG')) {
//             array = array.unshift(arr[i])
//         }
//         if (arr.includes('ADD_END')) {
//              array.push();
//         }
//         if (arr.includes('REM_BEG')) {
//             array = array.shift(arr[i]);
//         }
//         if (arr.includes('REM_END')) {
//             array = array.pop(arr[i]);
//         }
//     }
//     return array;
// }
// console.log(operations([2, 'ADD_BEG', 3, 'ADD_BEG', 'REM_BEG', 4, 'ADD_END']))