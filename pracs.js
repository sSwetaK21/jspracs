
// Formula for converting Celsius to Fahrenheit is : (9/5)*C+32.

// let temp = parseInt(process.argv[2]);
// let fahrenheit = (9/5)*temp+32;
// console.log(fahrenheit);

//         //  ---- with function-----

// function convertCtoF(temp){
//     let fahrenheit = (9/5)*temp+32;
//     return fahrenheit;
// }
// console.log(convertCtoF(temp));

                        // -----qst 2 -----

//  SSwap two numbers   

// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);
// let temp = a;
// a = b;
// b = temp;
// console.log(a,b);

// using function

// function swap(a,b){
//     let temp = a;
//     a = b;
//     b = temp;
//     return (a, b);
// }
// console.log(swap(a,b));

                        // -----qst 3 -----
 
// Take salary of five employees and print the average salary of all the employees. 

// function average(a,b,c,d,e){
//     let avg = (a + b + c + d + e) / 5 ;
//     return avg;
// }
// console.log(average(100,200,300,400,500));

                        // -----qst 4 -----

// Take a number and print the number of digits in the number.

// let number = parseInt(process.argv[2]);
// let count = 0;
// while(number>0){
//     number = Math.floor(number/10);
//     count++;
// }
// console.log(count);


                        // -----qst 5 -----
//  Take input as x and y and print the profit of Aman.

// let cost = parseInt(process.argv[2]);
// let sell = parseInt(process.argv[3]);
// if(sell>cost){
//     let profit = sell - cost;
//     console.log(profit);
// } else{
//     console.log("profit is zero " + 0);
// }


                        // -----qst 6 -----
// Take a number and print out the first digit of the number.

//  let number = parseInt(process.argv[2]);
//       number = Math.floor(number/100);
 
//     console.log(number);

                        // -----qst 7 -----

// Take a number and print out the last digit of the number.

// let number = parseInt(process.argv[2]);
// number = number%10;
// console.log(number);

                        // -----qst 8 ----- 
// Take a number and print out the first and last digits of the number.

//  let number = parseInt(process.argv[2]);
// let last  = number%10;
// let first = number;
//     while (first>10){
//          first = Math.floor(first/100);
//     }
// console.log(first+ " "+ last);

                        // -----qst 9 ----- 
// Take a number and print out the reverse digit of the number.

// let number = parseInt(process.argv[2]);
// let reverse = 0;
// let temp = number;
// while(temp > 0){
//     let digit = Math.floor(temp % 10);
//     reverse = reverse*10 + digit;
//     temp = Math.floor(temp / 10);
// }
// console.log(reverse);


                        // -----qst 10 -----
// Take two numbers a,b and print the exponential power of the first number raised by the second

// let num = parseInt(process.argv[2]);
// let exp = parseInt(process.argv[3]);

// let ans = Math.pow(num,exp);
// console.log(ans);        

                        // -----qst 11 -----        
// Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b      

// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);
// // let ans = a/b;
// console.log(ans.toFixed(2));

// another way

// let num1 = a / b;
// let num2 = Math.floor(a / b);
// let ans = num1 - num2;
// console.log(ans);


                        // -----qst 12 -----            
// Take a number and convert it to year, months and days. 
// Result: sum of Years months + remaining Days

// let number = parseInt(process.argv[2]);
// let years = Math.floor(number/365);
// let months = Math.floor((number%365)/30);
// let days = Math.floor((number%365)%30);
// console.log(years+" years "+months+" months "+days+" days");

// // sum
// console.log(years+months+days);


                        // -----qst 13 -----

// Take years, months and days and convert it to number of days.

//  let years = parseInt(process.argv[2]);
//     let months = parseInt(process.argv[3]);
//     let days = parseInt(process.argv[4]);
//     let number = (years*365)+(months*30)+days;
//     console.log(number);