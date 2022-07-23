// let arr= 'aircampus'
// console.log(arr.split('').join(','))

// let arr=[1,2,3,4,5,66]
// console.log(arr.lastIndexOf(2,3))
// arr.push(5)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr.slice(2,4))

// arr.unshift(1)
// arr.splice(1,0,'Hi')
// console.log(arr)

// let res = arr.every(x => x <10);
// console.log(res)

// let res= arr.fill('value', 1,3)

// let res = arr.map(value => value * 2);

// let res= arr.find(value => value>10)
// let  res = arr.findIndex(value => value >10)
// console.log(res)

// function sum(x,y,z){
//     return x+y+z;
// }
// console.log(sum(...[1,2,3]))


// let str='hi Ram is working. Ram is good boy';
// let res= str.replaceAll('Ram', 'Shyam')
// console.log(res)


// let str= 'hi hey hello';
// let res = str.charAt(3)
// console.log(res)

// getName()

// let x =3;
// console.log(x)

// function getName(){
//     let a =1;
//     if(a==1){
//         let b = a
//         console.log(b)
//     }
//     // console.log(b)   throws error
//     console.log("inside a function")
// }

// function greet(){
//     counter =0;
//     return counter;
// }

// console.log(greet())

// console.log(a)
// var a=0;   //undefined
// let b=1

let person = {
    firstName: 'Jane',
    lastName  : 'Doe',
    greet: function(){
        return this.firstName + ' '+ this.lastName;
    }
}
// console.log(person.firstName)

// console.log(person['firstName'])

// person.age = 22

// delete person.age
// console.log('age' in person)

// person.greet()    //hi

// console.log(person.greet())   //jane doe