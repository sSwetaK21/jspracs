// let n=6;
// let star ='';
// for(let i=0; i<n-1; i++){
//     for(let j=0; j<n; j++){
//         if(i == 0 || j==0 || i== n-2 || j== n-1){
//             star += "8";
//         } else{
//             star += " ";
//         }
//     }
//     star += "\n";
// }
// console.log(star);

let m=5;
let n=6;
let string = "";
for(let i=1; i<=m;i++){
  for(let j=1; j<=n;j++){
    if(i==1|| j==1|| i==m ||j==n){
      string += "8";
    } else if((j==2 || j== n-1) &&  i!= Math.ceil(n/2)){
      string+= "8";
    }  else{
      string += " ";
    }
  }
  string +="\n";
}
console.log(string);