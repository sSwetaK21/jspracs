//=======Array.isarray()========
// The Array.isArray() method determines whether the passed value is an Array.


// let arr = {name: 'shweta'};
// let arr =[1,2,3,4]
// let arr = 'shweta'  //=> shweta is not an array
// if(Array.isArray(arr)){
//     console.log(arr);
// } else{
//     console.log(`${arr} is not an array`)
// }


//==========concat()=======
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// let num3 = [7, 8, 9];

// let numbers = num1.concat(num2, num3);

// console.log(numbers);

//======join()========
// Returns a array as STRING

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // expected output: "FireAirWater"

// console.log(elements.join('-'));
// // expected output: "Fire-Air-Water"

//================includes()===========
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// let num = [1,2,3,4,5,6];
// console.log(num.includes(3))  // this will search 3
// //if there it will return TRUE

// console.log(num.includes(4,2))  //4 is value we what to search & 2 is index number, it will search from 2, returns true if there

// console.log(num.slice(-1))

//==indexOf()======
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax:
// indexOf(searchElement, fromIndex)


// let num =[1,2,3,2,4,5,6,7]
// console.log(num.indexOf(2,2)); //1


//=========lastIndexOf()=============
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// // console.log(animals.lastIndexOf('Dodo'));
// // expected output: 3
// console.log(animals.lastIndexOf('Dodo', -2)); // 0


//===========push()==========
// The push() method adds one or more elements to the end of an array and returns the new length of the array

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Giraffe'];
// animals.push('Dog');
// console.log(animals);

//======pop()==========
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Giraffe'];
// animals.pop();
// console.log(animals);


//=========shift()==============
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Giraffe'];
// animals.shift();
// console.log(animals)


//===========unshift()===========
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// let n=[3,4,5,6];
// n.unshift(1,2)
// console.log(n)


//==========slice()=======
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// console.log(animals.slice(-4,-1));
// console.log(animals.slice(-4));

//==========toString()===========
// The toString() method returns a string representing the specified array and its elements

// let number=[1,2,3,4,5];
// console.log(number.toString())

//========sort()========
// Sorts elements in ascending and descending order


// ascending 

// let num = [4,2,5,6,3,1];
// num.sort(function(a,b){
//     return a-b;
// })
// console.log(num);


// descending 

// let num=[4,3,2,5,6,7,1]
// num.sort(function(a,b){
//     return b-a;
// })
// console.log(num)


//=====filter()=========
// filtered down to just the elements from the given array that pass the test implemented by the provided function.

// let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);
// console.log(result);


//======replace()=====
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp.
// The original string is left unchanged.

// Syntax:
// replace(regexp, newSubstr)
// replace(regexp, replacerFunction)

// replace(substr, newSubstr)
// replace(substr, replacerFunction)

// let names='dog is barking and it is dancing dog';
// console.log(names.replace(/dog/ig, 'Fox'));

// let re = /(\w+)\s(\w+)/
// let str = 'John Smith'
// let newstr = str.replace(re, '$2  $1')
// console.log(newstr)

//=======stratsWith()=============
// The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

// let names='Shweta';
// if(names.startsWith('S')){
//     console.log('Starts with S')
// } else{
//     console.log('Doesnot starts')
// }


//====endsWith()===========
// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate

// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best!'));
// // expected output: true



//===========

// let names='Shweta is a good girl';
// let reverse= ''
// for(let i=0; i<names.length;i++){
//     reverse = names[i] + reverse;

// }
// console.log(reverse)

// const array1 = ['a', 'b', 'c'];
// let array1= 'Shweta'

// for (const element of array1) {
//   console.log(element);
// }
//output:
        //  s 
        //  h
        //  w
        //  e
        //  t
        //  a
// expected output: "a"
// expected output: "b"
// expected output: "c"


//========fill()========
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.