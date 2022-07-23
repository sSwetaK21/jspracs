// indexOf()

// function indexofNum(arr,n){
//     for(let i=0;i<arr.length;i++){
//        if(arr[i] == n){
//             // console.log(i);
//             return i
//        }
//     }

// }
// console.log(indexofNum([1,2,3,4],2))

// o/p: 1

//reverse()======

// function reverseOfArr(arr){
//     for(let i=arr.length; i>=0;i--){
//         // console.log(arr[i]) ;
        // return arr[i]
//     }
// }
// console.log(reverseOfArr([1,2,3,4]))

//=======max()=========

// function maxMethod(arr){
//     let max= arr[0]
//     for(let i=0; i<arr.length;i++){
//         let current =arr[i]
//         if(max < current){
//             max =current;
//         }
//     }
//     return max;
// }
// console.log(maxMethod([2,8,5,9]))

//=======min()===========

// function minMethod(arr){
//     let min= arr[0];
//     for(let i=0;i<arr.length;i++){
//         let current = arr[i];
//         if(min > current){
//             min = current;
//         }
//     }
//     return min
// }
// console.log(minMethod([6,9,3,3,5]))


//=======sort()======

// function sortedArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr
// }
// console.log(sortedArray([4,33,78,999,22]))

//==find()============
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.find(word => word.length > 6);

// function findMethod(arr){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] == 6){
//            arr = arr[i]
//         }
//     }
//     return arr;
// }
// console.log(findMethod([1,2,3,6,4,5,6,7,8,6]))

// filter()======
// returns all the values which satisfy condition

// function filterMethod(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 6) {
//             console.log(i)
//         }
//     }
//     return arr;
// }
// filterMethod([1, 2, 3, 6, 4, 5, 9, 7, 8, 6])

//========fill()==========

// function fillMethod(arr,value,n){
//     for(let i=0; i<arr.length;i++){
//         arr[n] = value
//     }
//     return arr
// }
// console.log(fillMethod([1,2,4,5,6],3,2))

// o/p:  [ 1, 2, 3, 5, 6 ]


//=======slice()=======

// function sliceMethod(arr,start,end){
//     let arr1=[]
//     for(let i=start;i<end;i++){
//        arr1[i] = arr[i]
//     }
//     return [...arr1]
// }
// console.log(sliceMethod([1,2,3,4,5],2,4))

///=====splice()========

// function spliceMethod(arr,start, value){
//     for(let i=start; i<arr.length;i++){
//         arr[i]=value
//     }
//     return arr
// }
// console.log(spliceMethod([1,2,3,4],1,7))

// o/p:  [ 1, 7, 7, 7 ]