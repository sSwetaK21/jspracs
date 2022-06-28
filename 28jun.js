// let row =4;
// let col=5;
// for(i=1; i<=row; i++){
//   let star = "";
//   for(j=1; j<=col; j++){
//     star += "*";
//   }
//   console.log(star);
// }

// let num =4;

// for(i=1; i<=num; i++){
//   let star = "";
//   for(j=1; j<=num; j++){
//     star += "*";
//   }
//   console.log(star);
// }

// o/p : 
// ****
// ****
// ****
// ****

// let row =4;
// for(i=1; i<=row; i++){
//   let star = "";
//   for(j=1; j<=i; j++){
//     star += "*";
//   }
//   console.log(star);
// }

// o/p:
// *
// **  
// *** 
// ****

// let row =4;
// let col =5;
// let star = '';
// for( let i = 0; i <=row; i++){
//     for( let j = 0; j <=col; j++){
//         if(i === 0 && i===row - 1){
//             star += '*';
//         } else {
//             if(j === 0 || j === col - 1) {
//               star += "*";
//             } else{
//                 star += " ";
//             }
//         }
//     }
//     console.log(star);

// }



// ------Hollow Pattern-----------------

// let n = 5; 
// let string = "";

// for(let i = 0; i < n; i++) { 
//   for(let j = 0; j < n; j++) { 
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// console.log(string);

// o/p:
// *****
// *   *
// *   *
// *   *
// *****
