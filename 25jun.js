
// Switch case

//------------------Syntax--------------------
//used when you want to check a set of conditions 

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

// var Animal = 'Pig';

// switch (Animal) {
//   case 'Cow':
//   case 'Giraffe':
//   case 'Dog':
//   case 'Pig':
//     console.log('This animal is not extinct.');
//     break;
//   case 'Dinosaur':
//     console.log('This animal is extinct dinosaurs.');
//   default:
//     console.log('This animal is not defined');
// }


//--------------Without using Break--------------------

// var foo = 0;
// var output = 'Output: ';
// switch (foo) {
//   case 0:
//     output += 'So ';
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

// let num = 10;

// switch (num) {
//     case num > 10:
//         console.log(this);
//         break;

//     default:
//         // console.log("default", num>10,num);
//         console.log("default: " + num);
//         break;
// }


// Example



function big(num, num2) {

    switch (num > num2) {
        case true:
            return num;
            break;
    }

    switch(num2>num){
        case true:
            return num2;
            break;
    }
}

console.log(big(20,10));


