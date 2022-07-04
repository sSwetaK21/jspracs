let n=6;
let star ='';
for(let i=0; i<n-1; i++){
    for(let j=0; j<n; j++){
        if(i == 0 || j==0 || i== n-2 || j== n-1){
            star += "8";
        } else{
            star += " ";
        }
    }
    star += "\n";
}
console.log(star)