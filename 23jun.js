
// fibonacci series

// function fibo(first, second, counter) {
//     if (counter <= 10) {
//         var c = first + second;
//         return fibo(second, c, counter + 1);

//     }
//     console.log(first);
// }
// fibo(1, 1, 1);

// factorial


// function y(num,fact){
//   if(num>0){
//     fact *= num;
//     return y(num-1 ,fact);
//   }
//   return fact;
// }

// console.log(y(5,1));


// Given a number n, print numbers from 1 to n using recursion.


// function range(num, num2){
//     for(i = num ; i <= num2; i++ ){
//         console.log(i);
//         return range(num+1, num2 );
//     }
// }
// console.log( range(1,4) );

// normal function

// function range(num1 , num2){
//     for(i =num1 ; i<=num2; i++){
//         console.log(i);
//     }
// }

// console.log(range(1,4));


// Given a number n, print numbers from n to 1 using recursion

function range(num, num2){
    if(num>=num2){
        console.log(num);
        return range(num-1, num2 );
    }
        
    }
    console.log( range(6 , 1) );

