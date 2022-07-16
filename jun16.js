
// //=======SPIRAL MATRIX============


// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ];
  
//   // 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
//   let top = 0,bottom = 3, left = 0, right = 3, direction = 0;
  
//     while(left <= right && top<=bottom) {
//       if(direction == 0) {
//           for(let i=left; i<=right; i++) {
//               console.log(matrix[top][i]);
//           }
//           top += 1;
//           direction = 1;
//       }
  
//       if(direction == 1) {
//           for(let i=top; i<=bottom; i++) {
//               console.log(matrix[i][right]);
//           }
//           right -= 1;
//           direction = 2;
//       }
  
//       if(direction == 2) {
//           for(let i=right; i>= left; i--) {
//               console.log(matrix[bottom][i]);
//           }
//           bottom -= 1;
//           direction = 3;
//       }
  
//       if(direction == 3) {
//           for(let i=bottom; i>=top; i--) {
//               console.log(matrix[i][left]);
//           }
//           left += 1;
//           direction = 0
//       }
//     }
  


    //===PRAC======
    // Given a string, add all the characters of the string to an array, excluding whitespaces. Return the character array

// function char(str){
//    return  str.replace(/ /g, '').split('');
   
    
// }
// console.log(char('air campus'))


//======SPREAD OPERATOR========

// used to copy all elements and return it into new array

// Given a string, count the number of vowels present in the string and return it.

// function arrayVolwel(string) {
//     let count =0;
//     for(let i=0; i<string.length; i++) {
//         if(string.charAt(i) == 'a' || string.charAt(i) == 'e' ||string.charAt(i) == 'i' ||string.charAt(i) == 'o' || string.charAt(i) == 'u'){
//             count +=1;
//         }
//     }
//     return count;
// }
// console.log(arrayVolwel('aircampus'))

// Given a string, change all the characters to uppercase and return the new string.