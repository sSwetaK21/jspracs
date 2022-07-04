
// function even(num){
//     let sum = 0;
//     let temp =num;
//     if(num > 0){
//      temp = Math.floor(num % 10);

//      if(temp % 2 == 0){
//         sum += temp;
//      } else {
//         return -1;
//       }
//       let digit = Math.floor(temp / 10)
//     }
//     return sum;
// }

// console.log(even(1234));

// let num1;
// let temp = num1;
// let digit;
// let sum = 0;

// function sumEven(num1) {
//     while (temp > 0) {
//         digit = Math.floor(temp % 10);
//         if (digit % 2 == 0) {
//             sum += digit;
//         } else {
//             return -1;
//         }
//         temp = Math.floor(temp / 10);
//     }
//     return sum;

// }

// console.log(1234);

// let number = parseInt(process.argv[2]);
// let reverse = 0;
// let count =0;
// let temp = number;
// while(temp > 0){
//     let digit = Math.floor(temp % 10);
//     reverse = reverse*10 + digit;
//     temp = Math.floor(temp / 10);
//     count++
// }
// console.log(reverse);



// let sum =1;
// for(i=5; i>=1; i--){
//     // let star = "";
//     for(j=i; j<=5; j++){
//     //   star += j;
//       sum += i;
//     }

// }
// console.log( sum);

// let row = 5;
// for(let i=1; i<=row; i++){
//   let star = '';
//   for( let j=1; j<=i; j++){
//     star = i*(i+1)/2 ;
//   }
//   console.log(star);
// }


// let n = 5;
// let string = "";

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (i === 0 || i === n - 1 || j == 0 || j == n - 1 ) {
//             string += "8";

//         }  else if(i == 1 && j == 1 || i == 1 && j ==3){
//             string += "8";
//         } else if(i == 3 && j == 1 || i == 3 && j ==3){
//             string += "8";
//         }
//          else {
//             string += " ";
//         }
//     }
//     string += "\n";
// }
// console.log(string)



let n = 6;
let string = "";

for (let i = 0; i < n-1 ; i++) {
    for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 2 || j == 0 || j == n - 1) {
            string += "8 ";

        } else if (i == 1 && j == 1 || i == 1 && j == n - 2) {
            string += "8 ";

        } else if (i == n - 3 && j == 1 || i == n-3 && j == n - 2) {
            string += "8 ";
        }
        else {
            string += "  ";
        }
    }
    string += "\n";
}
console.log(string)

// o/p:
// 888888
// 88  88
// 8    8
// 88  88
// 888888




// for(i=1; i<=5; i++)
// {
//  for(j=5; j>=1; j--)
//  {
//   if(j > i)
//    document.write("&nbsp;&nbsp;");
//   else
//    document.write(j);
//  }
//  document.write("<br>");
// }




// let num = 5;
// let star = "";
// for (i = 1; i <= num; i++) {
//     for (j = i; j <= num; j++) {
//             star += j;

//     }
//     for (let k = 1; k < i; k++) {
//         star += k;
//       }

// star += "\n";
// }
// console.log(star)

// function makePizza(message,callback){
//     console.log(message);
//     callback();
// }

// function orderPizza(){
//     console.log( "order a pizza");
// }
// function process(){
//     console.log("pizza order processing");
// }

// function ingridents(){
//     console.log("ingredeinats ready");
// }
// function flavours(){
//     console.log("falvoured are added");
// }
// function cooking(){
//     console.log("cooked and backed");
// }
// function pizzaReady(){
//     console.log("ready and out for delivery");
// }
//  function pizzaDone(){
//     console.log("pizaa received and ate it");
//  }

//  makePizza('step 1:', orderPizza);
//  makePizza('step 2:', process);
//  makePizza('step 3:', ingridents);
//  makePizza('step 4:', flavours);
//  makePizza('step 5:', cooking);
//  makePizza('step 6:', pizzaReady);
//  makePizza('step 7:', pizzaDone);


// let sum =0;
// let n=2;
// let star = "";
// for(let i = n ; i>=1; i--){
//     for(let j=i; j<=n; j++){
//         star = " " + j;
//         sum += j;
//     }
// }
// console.log(sum)



// for(i=1;i<=5;i++)
//     {
//         for(j=1;j<=i;j++)
//         {
//             if(k%2==0)
//             {
//                 printf("0");
//             }
//             else
//             {
//                 printf("1");
//             }
//             k++;
//         }
//         printf("\n");
//     }




// let row =5;
// let count =1;
// let k=1;
// for(i=1; i<=row; i++){
//   let star = "";
//   for(j=1; j<=i; j++){
//     if( k % 2 == 0){
//       count =0;
//     } else{
//       count =1;
//     }
//     k++;
//     star = star + count;
//   }
//   console.log(star);
// }


// o/p:
// 1
// 01
// 010
// 1010
// 01010


// function armstr(num) {
//     let arm = 0, a;

//     temp = num;
//     while (temp > 0) {
//         a = temp % 10;
//         temp = Math.floor(temp / 10);
//         arm = arm + a * a * a;
//     }
//     if (arm == num) {
//         console.log("Armstrong number");
//     }
//     else {
//         console.log("Not Armstrong number");
//     }
//     return arm;
// }
// armstr(123);



// function armstrng(num){
//     let first, mid,last,sum = 0;
//     let temp = num;
//     while (temp >0){
//         first = Math.floor(num / 100);
//         mid = Math.floor(num /10) % 10;
//         last = num % 10;
//         sum = Math.pow(first, 3) + Math.pow(mid, 3) + Math.pow(last, 3);

//     }
//     if (sum == num) {
//                 console.log("Armstrong number");
//             }
//             else {
//                 console.log("Not Armstrong number");
//             }
//             return sum;

// }
// console.log(armstrng(123))


// function special(num){
//     let digit, sum=0, fact=1;
//     let temp = num;
//     if(temp>0){
//         digit =Math.floor(temp % 10);
//         fact *= temp;
//            sum += fact;
//         temp = Math.floor(temp / 10);
//     }
//     if(sum == num){
//         console.log("YES");
//     } else{
//         console.log("NO");
//     }
// }
// console.log(special(145))

// let num = 5;
// let temp=1;
// for (let i = 1; i <= num; i++) {
//     let star = '';
//     for (let j = 1; j <= i; j++) {
//         temp = i * (i + 1) / 2;
//         star += temp;
//     }
//     console.log(star);
// }
