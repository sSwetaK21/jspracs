
// Switch case

//------------------Syntax--------------------
//used when you want to check a set of conditions 
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

// The "default" keyword specifies the code to run if there is no case match
// The default case does not have to be the last case in a switch block


// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed


// if (condition) {

//     //statement

// } else if (condition){

//     // statement

// } else (condition){

//     // statement

// }





// switch (key) {
//     case value:
//         //statement
//         break;

//     default:
//         break;
// }

//------------Example-------------------------

// let age = 18;
// switch (age) {
//     case 18:
//         console.log("Your age is 18");
//         break;
//     case 21:
//         console.log("Your age is 21");
//         break;
//     case 30:
//         console.log("Your age is 30");
//         break;
//     default:
//         console.log("Your age is unknown");
//         break;
// }


//--------multiple criterias--------------------------------
// Sometimes you will want different switch cases to use the same code, then we can use multicase criteria

// var Animal = 'Cow';

// switch (Animal) {
//   case 'Cow':
//   case 'Giraffe':
//   case 'Dog':
//   case 'Pig':
//     console.log('This animal is not extinct.');
//     break;
//   case 'Dinosaur':
//     console.log('This animal is extinct dinosaurs.');
//     break;
//   default:
//     console.log('This animal is not defined');
// }


//--------------Without using Break--------------------
// If you omit the break statement, the next case will be executed even if the evaluation does not match the case.


// var foo = 7;
// var output = 'Output: ';
// switch (foo) {
//   case 0:
//     output += 'So ';
//     break;
//   case 1:
//     output += 'What ';
//     output += 'Is ';
//   case 2:
//     output += 'Your ';
//   case 3:
//     output += 'Name';
//   case 4:
//     output += '?';
//     console.log(output);
//     break;
//   case 5:
//     output += '!';
//     console.log(output);
//     break;
//   default:
//     console.log('Please pick a number from 0 to 5!');
// }


//------------------With Boolean Values-------------------

// let num = 20;

// switch (num) {
//     case num > 10: true = 1
//         console.log(num);
//         break;

//     default:
//         console.log("default", num>10,num);
//         // console.log("default: " + num);
//         break;
// }


// Example



// function big(num, num2) {

//     switch (num > num2) {
//         case true:
//             return num;
//             break;
//     }

//     switch(num2>num){
//         case true:
//             return num2;
//             break;
//     }
// }

// console.log(big(20,10));


//-----Uses STRICT COMPARISON (===)-----------
// A strict comparison can only be true if the operands are of the same type

// let x = "0";
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }

// Example

// let x = 1;
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }