//======Practice===========

// let arr=[1,2,3,4,5];

// if(Array.isArray(arr)){
//     console.log(arr);
// } else{
//     console.log("Not an array")
// }

//======join()=======

// let n=[1,2,3,5];
// console.log(n.join('-'))

//=====includes()=========

// let n=[1,2,3,4,5];
// console.log(n.includes(3,1))

//========indexOf()===========

// let n=[1,3,3,4,5,6,3,7];
// console.log(n.indexOf(3,4))
// // o/p: 6
// n.shift(1)
// console.log(n)

//======

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1,0)
// console.log(months)


//==========

// let num=[4,2,3,5,1];
// num.sort(function(a,b){
//     return a-b;
// });
// console.log(num)

// let num=[1,2,3];
// let arr=num.map(value => value * value);
// console.log(arr)

//========

let menu = ['Panner Butter Masala', 'Panner Fried Rice', 'Chicken Biryani', 'Cold Coffee'];
for (let i = 0; i < menu.length; i++) {
    if (menu.filter(word => word.includes('Panner'))) {
        if (menu.filter(word => word.includes('Rice'))) {
            console.log('Rice')
        } else{
            console.log(menu.filter(word => word.includes('Panner') ))
        }

    } 
}

// words.filter(word => word.length > 6);

// let res = menu.filter(word => word.includes('Panner') && !word.includes('Rice'));
// console.log(res)

let arr=[4, 9, 25, 49];
let arr1= []
// for(let i=0; i<arr.length; i++){
//  arr1[i] = arr[0] * Math.sqrt()

// }
arr1 = arr.map(value => value * Math.sqrt(value));
console.log(arr1);


function lostPlanet(planets){
    let missing =[],j=0;
    for(let i=0; i<=planets.length; i++){
          if(planets.includes(i) == false){
            // return i;
            missing[j] = i;
            j++;
          }
      }  
          return missing;
  }
  console.log(lostPlanet([0,1,4,3,5,6,8]))