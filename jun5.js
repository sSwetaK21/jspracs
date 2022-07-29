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


// let isIsland = true;
// let language;
// console.log(isIsland, country, population);


// let, const and var

// 1. Set the value of 'language' to the language spoken where you live (some 
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never 
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

// language= "Hindi";
// const country = "India";
// const continent = "Asia";
// console.log(language , country, continent);


// Type Conversion and Coercion

// 1. Predict the result of these 5 operations without executing them:

// let n = '9' - '5';     // -> 4
// console.log(n);
// let m ='19' - '13' + '17';    // ->  6 17
// let a= '19' - '13' + 17;         // ->   6 +17 = 23
// let b= '123' < 57;             // ->  false
// let c= 5 + 6 + '4' + 9 - 4 - 2;        // ->    11 4 3
// console.log(m,a,b,c);

// 2. Execute the operations to check if you were right

// console.log(typeof(null))    //object
// console.log(typeof(undefined))   //undefined
// console.log(typeof([1,2,3,4]))      //object
// console.log(typeof(''))   //string
// console.log(typeof({}))    //object

// 1.

// let n = 9 - '5'    //4
// let n = '9' - '5'     //4
// let n= 9 + '5'   //95
// let n ='9' + '5'    //95

// let n =  '123' > 66   //true
//  let n ='123' < 55    //false
// let n ='a' < 22       //false

// let n = '10 ' * 3   //30
// let n = '10' /3      //3.3333333333335
// let n ='10' % 3     //1


// let  n = 'a' * 3  //NaN
// let n = 'a' / 3      //NaN


// let n = 1/0  

// console.log(n)
// console.log(!undefined)

// console.log(true || false)
// console.log(undefined || null)

// console.log(!undefined); // true
// console.log(!null); // true
// console.log(!20); //false
// console.log(!0); //true
// console.log(!NaN); //true
// console.log(!{}); // false
// console.log(!''); //true
// console.log(!'OK'); //false
// console.log(!false); //true
// console.log(!true); //false


// console.log(3 === '3')


// console.log(NaN/2); // NaN
// console.log(NaN == NaN); // false


// let person = {
//     firstName : 'Shwey',
//     lastName : 'Kodam',
//     greet : function(){
//         return `My name is ${this.firstName} ${this.lastName}`
//     }
// }

// console.log(person.greet())

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//       continue;
//     }
//     console.log(i);
//   }

// let myTime = setTimeout(function(){
//     console.log('inside timer')
// }, 1000)


// clearTimeout(myTime)

//seInterval

// let intervalFn = setInterval(function(){
//     console.log('interval')
// },1000)

// function stopfn(){

//     clearInterval(intervalFn)
// }
// stopfn()

// function compareBy(propertyName) {
//     return function (a, b) {
//       let x = a[propertyName],
//         y = b[propertyName];
  
//       if (x > y) {
//         return 1;
//       } else if (x < y) {
//         return -1;
//       } else {
//         return 0;
//       }
//     };
//   }

//   let products = [
//     { name: 'iPhone', price: 900 },
//     { name: 'Samsung Galaxy', price: 850 },
//     { name: 'Sony Xperia', price: 700 },
//   ];
  
//   // sort products by name
//   console.log('Products sorted by name:');
//   products.sort(compareBy('name'));
  
//   console.table(products);
  
//   // sort products by price
//   console.log('Products sorted by price:');
//   products.sort(compareBy('price'));
//   console.table(products);
  