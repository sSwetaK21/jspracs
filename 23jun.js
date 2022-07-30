
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

// function range(num, num2){
//     if(num>=num2){
//         console.log(num);
//         return range(num-1, num2 );
//     }

//     }
//     console.log( range(6 , 1) );

// Given an array of integers, print the elements using recursion

// let arr = [1,2,3,4];

// function array(arr){
//     if(arr==0){
//         console.log(arr);
//         return array(arr);
//     }

// }

// console.log(array(arr));

// Write a Javascript program to count the number of digits a given number has using recursion.

// function numDig(num1,count ){
//     if(num1>0){
//         num1 = Math.floor(num1/10);
//         count++;
//         return numDig(num1 ,count);
//     }
//     console.log(count);
// }
// console.log(numDig(234,0));


// Convert a given decimal number to binary using recursion.

// let count =1;

// function decToBin(num){

//    if(count==1){
//        console.log(num .toString(2));
//        count+=1;
//        return decToBin(num);
//     }

// }

// decToBin(10);

// Given a number n, print all the odd numbers from 1 to n using recursion.

// function odd( num, num2){
//     for(  i = num; i <= num2 ; i++){

//         if(num %2 !== 0){
//             console.log( i + " ODD");
//         }
//     }
//     return odd(num+1 , num2);

// }

// console.log(odd(1,7));



// function odd(num, num2){
//     if(num<=num2){
//         if(num%2== 0){
//             console.log(num);
//             return odd(num+1, num2);
//         }
//     }
// }

// console.log(odd(1,6));
