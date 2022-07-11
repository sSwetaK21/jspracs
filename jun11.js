
//-------------- Biggest Number--------------

// let n = [1,2,3,6,4,5];
// let max = n[0], current= [];
// for(let i=0; i<n.length; i++){
//      current = n[i];
//     if(max < current) max = current;
// } 
// console.log( max);



//-------------Repeating number----------------

let num=[1,2,3,9,3,2,8,1,5,7,8];
for(let i=0; i<num.length; i++){
    if(num.includes(num[i], i+1)){
        console.log(num[i]); 
    }
}
