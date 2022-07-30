// Arrow functions



// let add = (a,b) =>{
//   console.log(this);
//     return a+b;
// }
// // add(5,6)

// console.log(add(5,6));


// function add(a,b){
//   console.log(this);
//       return a+b;
// }

// console.log((10).toString(8));
// console.log(add(1,2))



// let sumOfSquare = (num) => {
//     let sum = 0;
//     for(let i=1; i<=num; i++){
//         sum += i*i;
//     }
//     return sum;
// }
// console.log(sumOfSquare(5));


// let userName = "John";

// function  greetUser(){
//     let message = "Hello " + userName;
//     console.log(message);
// }

// greetUser();


// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return console.log('Do you have permission from your parents?');
//     }
//   }
  
//   let age = 13;
  
//   if ( checkAge(age) ) {
//     console.log( 'Access granted' );
//   } else {
//     console.log( 'Access denied' );
//   }



// function x(para) {
//   // para();
// }

// function y() {
//   console.log("Hello");
// }

// x(y);



// recursion fact

// function y(num,fact){
//   if(num>0){
//     fact *= num;
//     return y(num-1 ,fact);
//   }
//   return fact;
// }

// console.log(y(5,1))




// function add(a, b){
//   return a+b;
// }

// function print(n1, n2){
//  return add(n1, n2);
// }

// print(2,3);