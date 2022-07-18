// An equal array is one which has equal frequencies of elements. If both the arrays are equal return true return fals

// function isArray(arr1, arr2){
//     // arr1.every(arr2)
//     if(arr1.length == arr2.length){
//         // console.log('Array is true')
//         return true
//     } else{
//         return false
//     }

// }
// console.log(isArray([1, 5, 7, 8],[5,6,7,8]))

// [1, 5, 7, 8]
// [5, 8, 7, 1]
// true


//=qst2====
// In the range of [1 to n], add all the numbers in the middle of the array and return the array.

// function array(arr,n){
//     let start =0;
//     let end = arr.length -1;
//     if(start < end){
//         let mid = Math.floor(start + end / 2);
//         console.log(mid);
//         if(arr[mid]){
//             for(let i=n; i<=1;i--){
//                 arr.splice(mid,0,i); // mid= [1,mid,2,3] 
//             }
//         }
//     }

//     return arr;

// }
// console.log(array([1,2,3], 4))

//Perfrom the operations given in the array and return the resulting array.
//[2, 'ADD_BEG', 3, 'ADD_BEG', 'REM_BEG', 4, 'ADD_END']
//[2,4]

// function operations(arr){
//     let array=[];
    
//     for(let i=0; i<arr.length; i++) {
//         if(arr.includes('ADD_BEG')){
//             array = arr.unshift()
//         }
        // if(arr.includes('ADD_END')){
        //     array = arr.push();
        // }
        // if(arr.includes('REM_BEG')){
        //     array = arr.shift();
        // }
        // if(arr.includes('REM_END')){
        //     array = arr.pop();
        // }
    // }
    // return array;

// }
// console.log(operations([2, 'ADD_BEG', 3, 'ADD_BEG', 'REM_BEG', 4, 'ADD_END']))

// Return the position of kid who has got highest choclates and least choclates

// function findMax(arr){
//     let array =[];
//     let max=arr[0],min=arr[0];
//     for(let i=0; i<arr.length; i++){
//         let present = arr[i];
//         if(min > present){
//             min = present;
//         }
//     }
//     // array.push(min);
//     array.push(arr.indexOf(min));

//     for(let i=0; i<arr.length; i++){
//       let current = arr[i];
//       if(max<current){
//         max = current;
//       }
//     }
//    array.push(arr.indexOf(max));
//     // array.push(max);
 

//     return array;
// }

// console.log(findMax([1,2,5,6,3]))

// he wants to give 2 more chocolates to kids who less than 5 and reduce 1 chocolate who got more than 10

// function choco(arr){
//     for(let i=0; i <arr.length; i++){
//         if(arr[i] < 5){
//             arr[i] = arr[i] + 2;
//         }
//         if(arr[i] >10){
//             arr[i] = arr[i] - 1
//         }
//     }
//     return arr;
// }
// console.log(choco([1,2,5,7,11]))

// Three numbers m ,n and pos. Here m is the number of pens, n is the number of houses with kids and pos is where Mary lives.
// m = 5 n=10 pos = 2
// [5,10,0,10,5,5,5,5,5,5]

// pos = 0
// n = m +5;
// n= number
// function mary(m,n,pos){
//     let arr=[]
//     for(let i=0;i<n; i++){
//         if(pos==i){
//             arr[i]= 0;
            
//         }
//          else{
//             arr[i]= m;
//             // arr[pos]= arr.indexOf(arr[pos+1]);
//         }
//     }
//     arr[pos +1] = arr[pos+1] + 5;
//     arr[pos - 1] = arr[pos-1] + 5
//     return arr;
// }
// console.log(mary(5,10,2))

//Return an array where the first element is sum of odd elements and second element is sum of even elements.

// function oddeven(arr){
//     let oddsum=0;
//     let evensum=0;
//     let array=[]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] %2 == 0){
//             evensum = evensum +arr[i];
//             // console.log(evensum)
//         } else{
//             oddsum = oddsum + arr[i];
//         }
//     }
   
//     return [oddsum, evensum];
// }
// console.log(oddeven([1, 5, 7, 8]))

// Return the number of integers which are divisible by its index

// function divisibleBy(arr){
//     let count =0;
//     for(let i=0; i<=arr.length; i++){
//      let index = arr.indexOf(arr[i]) +1
//         if(arr[i] % index == 0){
//             count +=1
//         }
//     }
//    return count;
// }
// console.log(divisibleBy([1, 5, 7, 8]))

//Return the subarray from the start index to end index.

// [1, 2, 3, 4, 5]
// 1 3
// [1,4,9,4,5]
// function subarray(arr,start, end) {
//     for(let i =start; i<end; i++){
//         arr[i] = arr[i]** 2;
//     }
//     return arr;
// }
// console.log(subarray([1,2,3,4,5],1 , 3))


// Return the output array after changing the elements
// arr = [1, 5, 7, 8]
// pos = [0]
// ele = [4]
// [4, 5, 7, 8]
// function change(arr,pos,ele){
//     for(let i=0; i<arr.length; i++){
//         // fill(value, start, end)
//         arr.fill(ele, pos[i],pos[i]+1)

//     }
//     return arr;
// }
// console.log(change([1,5,7,8], 0,4))


// function binary(arr){
//     arr.sort();
//     for(let i=0; i<arr.length;i++){
//         if(arr[i] <= arr[i]+1) return true;
//     }
//     return false;
// }
// console.log(binary([1,3,2]))

// const array1 = [1, 3, 2];

// console.log(Math.max(...array1));
// expected output: 3

let max= arr.indexOf(Math.max(...arr))
let min= arr.indexOf(Math.min(...arr))