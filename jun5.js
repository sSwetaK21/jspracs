// Variables

//  Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and 
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

// let country = 'India';
// let continent = 'Asia';
// let population = 3.5;

// console.log(country, continent, population);


// Data Types

// 1. Declare a variable called 'isIsland' and set its value according to your 
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console.


let isIsland = true;
let language;
// console.log(isIsland, country, population);


// let, const and var

// 1. Set the value of 'language' to the language spoken where you live (some 
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never 
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

language= "Hindi";
const country = "India";
const continent = "Asia";
console.log(language , country, continent);


// Type Conversion and Coercion

// 1. Predict the result of these 5 operations without executing them:

let n = '9' - '5';     // -> 4
console.log(n);
let m ='19' - '13' + '17';    // ->  6 17
let a= '19' - '13' + 17;         // ->   6 +17 = 23
let b= '123' < 57;             // ->  false
let c= 5 + 6 + '4' + 9 - 4 - 2;        // ->    11 4 3
console.log(m,a,b,c);

// 2. Execute the operations to check if you were right

let array =['car' ,'truck', 'bike', 'motor']
console.log(array[3]);
let a1=[1,4];
let b2=[3,5];
let c1=a1+b2;
console.log(c1);
console.log(a1);
