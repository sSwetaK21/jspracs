// Arrow functions



// let add = (a,b) =>{
//     return a+b;
// }

// console.log(add(5,6));

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


function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = 18;
  
  if ( checkAge(age) ) {
    console.log( 'Access granted' );
  } else {
    console.log( 'Access denied' );
  }