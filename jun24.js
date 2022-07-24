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


// let person = {
//     fname:'Jamee',
//     'building no' : 123
// }
// console.log(person['building no'])