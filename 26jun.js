// a = 1;
// if(a>10){
//     console.log("hello world!");
//     a++;
// }



// function pallindrome(str){
//     let reverse = 0;
//     let count =0;
//     let temp = str;
//     if(temp > 0){
//         let digit = Math.floor(temp % 10);
//         reverse = reverse*10 + digit;
//         temp = Math.floor(temp / 10);
//         count++;
//     }
//      console.log(count);
//   }
//   console.log(pallindrome(12345));



// function marsNumber(n){
//     let temp = n;
//     let sum =0;
//     while(temp > 1){
//       let digit = temp % 10;
//      sum = sum + digit;
//     }
//     return marsNumber(sum);
// }
 
//  console.log(marsNumber(199)) 


// Take a number and find the sum all the even digits of the number. if there are no even digit in number return -1.


// function even(num){
//     let sum = 0;
//     let temp =num;
//     if(num > 0){
//      temp = Math.floor(num/10);
//      if(temp % 2 == 0){
//         sum += temp;
//         return even(num, sum);
//      } else {
//         return -1;
//       }
//     }
// }

// console.log(even(1234));


// let count = 0;
// function numOfDig(num){
//     if(num > 0){
//         num = Math.floor(num/10);
//         count++;
//         return numOfDig(num);
//     }
//     console.log(count);
// }

// numOfDig(1234);

//series

// function sumOfSeries(n)
//     {
//         let sum = 0;
//         for (let i = 1 ; i <= n ; i++)
//             for (let j = 1 ; j <= i ; j++)
//                 sum += j;
//         return sum;
//     }

    // S = 1 + 2/(1+2) + 3/(1+2+3) + 4/(1+2+3+4) …….n/(1+2+3...n)



    // function sumOfSeries(n){
    //     let sum =0;
    //     if(1<=n){
    //         if(n>=1){
    //             sum += n;

    //         }
    //         sum = sum.toFixed(3);
    //         return sum;
    //     }
    // }
    // console.log(sumOfSeries(3));


    // For number from 1 to "n" count total numbers that are divisible by 3, also find sum of all numbers that are divisible by 5, if number is divisible by both 3 and 5 take product of those number. and finally return the sum of all three ans.


// function calculate(num){
//     let sum = 0;
//     if(num>1){
//         if(num %3 ==0){
//             let  ans = sum;
//             sum++;
//         } else if (num % 5 == 0){
//             let ans2 = sum;
//             sum += num;
//             sum++;

//     } else if (num % 3==0 && num %5 == 0){
//         sum *= num;
//         sum++;

//     }   
// let ans3= ans + ans2;
// }
// return calculate(num,sum ,ans3);
// }

// console.log(calculate(10));

// for(i=0; i<5; i++){
//     for(j=0; j<5; j++){
//         console.log(i,j);
// }

// }