
// write a program to add two numbers

// let a=10;
// let b= 20;
// console.log(a+b);

// write a program for square of a number

// let num = 2;
// let sq = num*num;
// console.log(sq);

// write a program to find the area of a circle

// let radius = 5;
// let area = Math.PI*radius*radius;
// console.log(area);

// write a program to find the area of a rectangle

// let length = 5;
// let breadth = 6;
// let area = length*breadth;
// console.log(area);

// write a program to find the area of a triangle

// let base = 5;
// let height = 6;
// let area = (base*height)/2;
// console.log(area);

// write a program to find the area of a trapezium

// let base1 = 5;
// let base2 = 6;
// let height = 7;
// let area = ((base1+base2)/2)*height;
// console.log(area);

// write a program to find the area of a square

// let side = 5;
// let area = side*side;
// console.log(area);

// write a program to find the area of a cube

// let side = 3;
// let area = side*side*side;
// console.log(area);
  

// Sir practicals here :

// using looop print all natural numbers

// let number=  parseInt(process.argv[2]);
// for(let i=1;i<=number;i++){
//     console.log(i);
// }


// using looop print all even numbers

// let number=  parseInt(process.argv[2]);
// if(number%2==0){
//     console.log(number + " Even");
// } else{
//     console.log("not an even number");
// }

// print all numbers in reverse order

// let number1=  parseInt(process.argv[2]);
// let number2=  parseInt(process.argv[3]);
// for(let i=number2;i>=number1;i--){
//     console.log(i);
// }


// using while loop print all numbers in reverse order

// let number1=  parseInt(process.argv[2]);
// let number2=  parseInt(process.argv[3]);
// let i=number2;
// while(i>=number1){
//     console.log(i);
//     i--;
// }



// using while loop print all natural numbers

// let number= parseInt(process.argv[2]);
// let i=1;
// while(i<=number){
//     console.log(i);
//     i++;
// }

// using while loop print all even numbers

// let number= parseInt(process.argv[2]);
// let i=1;
// while(i<=number){
//     if(i%2==0){
//         console.log(i + " Even");
//     } else{
//         console.log("not an even number");
//     }
//     i++;
// }

// find factorial of a number

// let number= parseInt(process.argv[2]);
// let factorial=1;
// for (let i=1;i<=number;i++){
//     factorial=factorial*i;
// }
// console.log(factorial);


// let number= parseInt(process.argv[2]);
// let factorial=1;
// let i=1;
// while(i<=number){
//     factorial=factorial*i;
//     i++;
// }
// console.log(factorial);

// print all digits of a number

// let number= parseInt(process.argv[2]);
// let i=0;
// while(number>0){
//     let digit= Math.floor(number%10);
//     console.log(digit);
//     number= Math.floor(number/10);
// }

let number= parseInt(process.argv[2]);
for(let i=0;i<=number;i++){
    let digit= Math.floor(number%10);
    console.log(digit);
    number= Math.floor(number/10);
}