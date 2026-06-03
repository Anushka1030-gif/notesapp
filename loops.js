// 1
// for(let i=1;i<10;i++){
//     console.log(i);
// }
// 2
// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }
// 3
// for (let i=1;i<=20;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }
// 4
// let i=1;
// while(i<=15){
//     if(i%2===1){
//         console.log(i);
//     }
//     i++;
// }
// 5

// for(let i=1;i<=10;i++){
//     console.log(`5x${i}=`,5*i)
// }
// 6
// let sum=0;
// for(let i=1;i<101;i++){
//     sum=sum+i;
    
// }
// console.log(sum);
// 7
// for(let i=1;i<50;i++){
//     if(i%3===0){
//         console.log(i);
//     }
// }
// 8
// let val=prompt("give a number to find each number between 1 to that is odd or even :")
// for (let i=1;i<=val;i++ ){
//     if(i%2===0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
// }
// 9
// let cnt=0;
// for(let i=1;i<100;i++){
//     if(i%3===0 && i%5===0){
//         cnt++;

//     }
// }
// console.log("total number of number divisible by 3 and 5 is :",cnt);
// 10
// for(let i=1;i<100;i++){
//     console.log(i);
//     if(i%7===0){
//         break;
//     }
    
// }
// 11
// for(let i=1;i<100;i++){
//     if(i%3===0){
//         continue;
//     }
//     console.log(i);
// }
// 12
let cnt=0;
for(let i=1;i<100;i++){
    if(i%2===1){
        cnt++;
        console.log(i);
    }
    if(cnt ===5)break;
    
}