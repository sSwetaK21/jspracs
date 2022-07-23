// Code language: JavaScript (javascript)

// When a function creates and returns a new object, it is called a factory function

// function createPerson(firstName, lastName) {
//     return {
//       firstName: firstName,
//       lastName: lastName,
//       getFullName() {
//         return firstName + ' ' + lastName;
//       },
//     };
//   }
  
//   let person1 = createPerson('John', 'Doe');
//   let person2 = createPerson('Jane', 'Doe');
  
//   console.log(person1.firstName);
//   console.log(person2.getFullName());

// Modifying values

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// person.firstName = 'Jane';

// console.log(person);

// let a=10;
// let b=-10;
// console.log(a==b)  //false

// console.log(null == undefined); // true

// let str='hi There!';
// console.log(str.search(/[A-Z]/, 2)) // 3
// console.log(str.startsWith('h'))  //true
// console.log(str.indexOf('i'))  // 1

let str='hi There!';
// console.log(str.trim())

// console.log(str.substring(9,3)) // There!
 //=> interchanges the positions start=3, end=9
// console.log(str.slice(9,3))  // no result