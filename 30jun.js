
//  \ pattern 


// let n =5;
// let star ="";
// for(i =1; i<=n; i++){
//     for(j =1; j<=n ; j++){
//         if(i==j){
//             star += "*";
//         } else {
//             star += " ";
//         }
//     }
//     star += "\n";
// }
// console.log(star);


// o/p:
// *    
//  *
//   *
//    *
//     *
    
//  pattern /


// let n =5;
// let star ="";
// for(i =1; i<=n; i++){
//     for(j =1; j<=n ; j++){
//         if(i+j == 6){
//             star += "*";
//         } else {
//             star += " ";
//         }
//     }
//     star += "\n";
// }
// console.log(star);


// o/p:
//     *
//    * 
//   *  
//  *   
// *    







// X pattern

// For n = 5
// *               *
//     *       *
//        *
//     *       *
// *               *


// let n =5;
// let string ="";
// for(i =1; i<=n ; i++){
//     for(j=1; j<=n; j++){
//         if(i==j){
//             string += "*";
//         }
//         else if(i+j == 6){
//             string += "*";
//         } else{
//             string += " ";
//         }
//     }
//     string += "\n";
// }
// console.log(string);

// hollow diamond pattern

// let n =5;
// let star = "";
// for(i =1; i<n; i++){
//     for(j=1; j<n; j++){
//         if(j+i == n/2 || j+i == n-1+(n/2) || j == i+(n/2) || i == j+(n/2) ){
//             star += "*";
//         } else{
//             star += " ";
//         }
//     }
//     star += "\n";
// }
// console.log(star);