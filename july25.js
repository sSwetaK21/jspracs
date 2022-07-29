

// let obj = {
//     'key1': 'hi key',
//     'key2' : 'key2value'
// }

// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// console.log(Object.keys(obj))

// console.log(Object.values(obj))


function aplha(str){
    str = str.split('')
    for(let i=0; i<str.length;i++){
        if(Number(str[i])) return true
    }
    return false
}
console.log(aplha('air1campus'))

