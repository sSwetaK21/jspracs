
//-------------- Biggest Number--------------

// let n = [1,2,3,6,4,5];
// let max = n[0], current= [];
// for(let i=0; i<n.length; i++){
//      current = n[i];
//     if(max < current) max = current;
// } 
// console.log( max);



//-------------Repeating number----------------
// function isDup(num){
//     for(let i=0; i<num.length; i++){
//         if(num.includes(num[i], i+1)){
//             return true; 
//         } 
//     }
//     return false;

// }
// console.log(isDup([1,2,3,4,2]))

// ----delete-----------

// function delDup(arr) {
//     // let temp=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(arr[i], i + 1)) {
//             arr.splice(i, 1);
//         }
//     }
//     return arr;
// }
// console.log(delDup([1, 2, 2, 3, 4, 4, 5]))


//----------missing number-------------

function missingNum(n){
    let total = Math.floor((n + 1) * (n + 2) / 2);
        for (let i = 0; i < n; i++)
            total -= a[i];
        return total;
}
console.log(missingNum([1,2,3,6,7,8,,4]))