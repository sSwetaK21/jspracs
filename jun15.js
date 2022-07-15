//======Diagonal MAtrix

// let matrix =[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]
// let rows = matrix.length;
// let cols = matrix[0].length;
// let sum =0;
// for(let i=0; i<rows ; i++){

//     sum += matrix[i][i];

//     // for(let j=0; j<cols; j++){
//     //     if(i==j){                   /=> another way
//     //         sum +=matrix[i][j]
//     //     }
//     // }
// }
// console.log(sum);     //=>34

//======straight


// let matrix =[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],       //=> 1+5+9+13
//     [13,14,15,16]
// ]
// let rows = matrix.length;
// let start =0, sum =0;

// for(let i=0; i<rows; i++){
//     sum += matrix[i][start];
// }
// console.log(sum)     //=>28


//=========Snake======

// let matrix =[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],       
//     [13,14,15,16]
// ]
// let rows = matrix.length;
// let cols= matrix[0].length ;
// for(let i=0; i<rows ; i++){
//     if(i % 2 == 0){
//         for(let j=0; j<cols;j++){
//             console.log(matrix[i][j])
//         }
//     } else {
//         for(let j=cols -1; j>=0;j--){
//             console.log(matrix[i][j])
//         }
//     }
// }
