
//=======You are given a 2D array and arr[i] denotes a triangle and will contain 2 values, perpendicular and base. Calculate the hypotenuse for each triangle and return the triangle with the maximum hypotenuse value============//

// function hypotenuseSum(triangle){
//     let value=[];
//     let sum=0;
//     for(let i=0; i<triangle.length ; i++){
//         value = triangle[0][i] ;
//         // sum = value*value + triangle[1][i] ;
//         console.log(value)
//     }
//     return value;
// }
// hypotenuseSum([[3, 4], [9, 3], [1, 2], [5, 7]]);

// Amit goes to a restaurant, but after seeing the huge menu. He was confused about what to order. Amit wanted to have something which has Paneer and does not have Rice. Help Amit choose a food item.
// input:
// ['Paneer Butter Masala', 'Paneer Fried Rice', 'Chicken Biryani', 'Cold Coffee']
// o/p:
// Paneer Butter Masala


// function amitHelp(menu){
//     for(let i=0; i<menu.length; i++){
//         if(menu[i] === 'Paneer'){
//             console.log(menu[i]) ; ho
//         }
//     }
//     return menu;
// }


// function amitTwoo(value){
//     return amitHelp(value)   
    
// }
// amitTwoo(['Paneer Butter Masala', 'Paneer Fried Rice', 'Chicken Biryani', 'Cold Coffee'])

function amitHelp(menu){
    for(let i=0; i<menu.length;i++){
        if(menu[i] == 'Paneer Butter Masala'){
           return menu[i]  ;
        }
    }
    return false;
}

console.log(amitHelp(['Paneer Butter Masala', 'Paneer Fried Rice', 'Chicken Biryani', 'Cold Coffee']))