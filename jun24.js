// let n=[1,4,32,5,6]
// n.sort(function(a,b){
//     return a-b
// })
// n.sort(  (a,b) => b-a

// )
// console.log(n)


// let arr=[1,2,3,4,10];
// let arr1 =arr.every(x => x<10)
// console.log(arr1)


// let arr=[1,2,3,4,5]
// let map1= arr.map(value => value*2)
// console.log(map1)

// function sum(x,y,z){
//     return x + y + z
    
// }
// console.log(sum(...[1,2,3]))

// let str = 'Hi Shweta here!. Hi Im back again'
// console.log(str.replace(/hi/ig, 'Hello'))

// console.log(str.split(' '))

// function sum(){
//     console.log('hi')
//     function add(){
//         console.log('hello')
//     }
//     add()
// }
// sum()
// setTimeout(function(){
//     console.log('timeout')
// },1000)

// let str = 'java script is good language'
// console.log(str.split(' ',3))   // [ 'java', 'script', 'is' ]

// let str='hi'
// let str2='jay'
// console.log(str.concat(' ' ,str2))

// let res=[1,2,3]
// let num=[...res]
// console.log(num)

// let nestedNumbers = [[1], [2]];
// let numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));
// console.log(numbersCopy)


// let person={
//     fname:"jane",
//     lname: "doe",
//     age: 22
// }
// let text= '';
// for(let i of person.fname){
//     text+= i
// }
// console.log(text)


//first class citiizen

// function add(a,b){
//     return a+b
// }
// let sum=add;
// function result(a,b,fn){
//     return fn(a,b);
// }
// console.log(result(1,2,sum))


// anonymous function

// let sum = function(a,b){
//     return a+b
// }
// console.log(sum(1,2))


//IIFE

// (function(){
//     console.log('IIFE')
// }) ();

//Arrow function

// let add = (a,b)=>(a+b)
// console.log(add(1,2))

// show();

// function show(){
//     console.log('inside show')
// }

// console.log(a)

// var a=0;

//array notation accesing objects

// let person = {
//     fname:'Jamee',
//     'building no' : 123,
//     greet : function(){
//         console.log('insdie objj')
//     }
// }
// console.log(person['building no'])

//modifying

// person.fname = 'Joe'
// console.log(person)

//adding new property

// person.age =  22
// console.log(person)

//deleting property

// delete person.age
// console.log(person)

//checking if property exists

// console.log('age' in person)  //true

//obj methods

// person.greet()

//getter and settersss

// let person={
//     fname:'Joe',
//     lname: 'Kodam',
//     get fullName(){
//         return `${person.fname}  ${person.lname}`
//     },
//     set fullName(newname){
//         let parts = newname.split(' ');
//         this.fname = parts[0]
//         this.lname = parts[1]
//     }
// }
// person.fullName = 'Sachin Tendulkar'
// console.log(person.fullName)


//Destructuring obj

// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }
  
//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021, 
//     color: 'yellow'
//   }
  
//   const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
//   //Check the result object in the console:
//   console.log(myUpdatedVehicle);


//destructuring array

// let arr=[1,2,34,5,6]
// let [num1,num2,...rest] = arr
// console.log(num1,num2,...rest)


//copying array

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined)

//constructor object

// function Person(fname,lname,age){
//    this.fname = fname,
//    this.lname = lname,
//    this.age = age

// }
// let father = new Person('Ganga', 'Kodam', 48);
// let mother = new Person('lavanya','Kodam', 44)
// console.log(mother)


//for...in loop

// let total =0;
// for(let i in person){
//     total += person[i]
// }
// console.log(total)

// /factory function obj

// function person(fname,lname){
//     return {
//         fname: fname,
//         lname: lname
//     }
// }
// let person1=person('joe','doe')
// console.log(person1)

