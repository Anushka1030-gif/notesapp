// 🧩1.let a=7;
// let b=3;
// console.log(a+b);



// 🧩2.Check Even or Odd
// let a=8;
// if(a%2===0)console.log("this number is even");
// else console.log("this number is odd");



//🧩3.Swap Two Numbers
// let a=5;
// let b=9;
// a=a+b;b=a-b;a=a-b;
// console.log(a);
// console.log(b);



//🧩4.Find Maximum of Two Numbers
// let a=16;
// let b=10;
// if (a>b) console.log("a is greater than b ");
// else console.log("b is greater than a");



//🧩5.Sum of first 10 numbers
// let sum=0;
// for (let i=1;i<=10;i++){
//     sum=sum+i;
// }
// console.log("sum of first 10 number is :",sum);



//🧩6.Multiplication Table
// let a=prompt("enter a number ");
// for (let i=1;i<=10;i++){
//     console.log(a*i);
// }



//🧩7.Factorial
// let a=prompt("enter a number");
// let fact=1;
// for(let i=1;i<=a;i++){
//     fact=fact*i;
//     console.log(fact);
// }



//🧩8.Reverse a String
// let string=prompt("enter a string");
// let reversed="";
// for(let i=string.length;i>=0;i--){
//     reversed +=string[i];
   
// }
// console.log(reversed);



//🧩9.Count vowels
// let a=['a','e','i','o','u'];
// let count=0;
// let string=prompt("enter a string");
// for(let i=0;i<string.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(string[i]===a[j]){
//             count+=1;
//         }
//     }
// }
// console.log(count);



//🧩10.Simple Calculator
// let firstnum=Number(prompt("enter firstnum"));
// let secondnum=Number(prompt("enter secondnum"));
// let result=firstnum + secondnum;
// console.log(result);



//🧩11.Positive, Negative, or Zero
// let a=Number(prompt("enter a number"));
// if(a<0)console.log("a is negative number ");
// else if(a>0)console.log("a is positive number");
// else console.log("its a zero");



//🧩12.Even Numbers in Range
// let num=Number(prompt("enter number"));
// for(let i=1;i<=num;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }



// 🧩13. Factorial using Function
// function findfactorial(num){
//     let fact=1;
//     for(let i=1;i<=num;i++){
//         fact=fact*i;

//     }
//     return fact;
// }
// factorial=findfactorial(9);
// console.log(factorial);



// 🧩14. Reverse a Number
// let num = Number(prompt("Enter a number"));
// let ld, rev = 0;
// while (num != 0) {
//     ld = num % 10; 
//     rev = rev * 10 + ld;
//     num = Math.floor(num / 10); 
// }
// console.log("Reversed number:", rev);



//🧩15.To check palindrom
// let a=prompt("enter any number or string ");
// let reversed="";
// for(let i=a.length-1;i>=0;i--){
//      reversed +=a[i];
     
// }
// if (reversed === a) {
//     console.log("It's a palindrome");
// } else {
//     console.log("Not a palindrome");
// }



//🧩16. Count Even and Odd Digits
// let a=Number(prompt("enter a number"));
// let even=0;
// let odd=0;
// for (let i=a;i>0;i-- ) {
//     i= Math.floor(i / 10)
//     let digit = i % 10;

//     if (digit%2===0){
//         even++;
//     }
//     else{
//         odd++;
//     }
// }
// console.log("the number of even is " ,even,"and odd is ",odd);



//🧩17. Largest of Three Numbers
// Teen numbers input lo aur batao kaunsa sabse bada hai.
// let firstnum=Number(prompt("enter a number"));
// let secondnum=Number(prompt("enter a number"));
// let thirdnum=Number(prompt("enter a number"));
// if(firstnum>secondnum){
//     if(firstnum>thirdnum){
//         console.log("first number is greater");
//     }
// }
// else if(secondnum>firstnum){
//     if(secondnum>thirdnum){
//         console.log("second number is greater");
//     }
// }
// else {
//     console.log("third number is greater ");
// }





// 🧩18. Simple Interest
// Principal, Rate, Time input lo aur simple interest calculate karo.
// Formula: SI = (P * R * T) / 100
// let principal=Number(prompt("enter your principal"));
// let Rate=Number(prompt("enter your rate"));
// let Time=Number(prompt("enter your time"));
// console.log((principal*Rate*Time)/100);





// 🧩20. Find Power of Number
// Without using Math.pow(), ek function likh jo base aur exponent le aur power calculate kare.
// let num=Number (prompt("enter a number"));
// let num2=Number(prompt("enter number to the power of  ",num));
// console.log(num**num2);






// 🧩21. Sum of N Natural Numbers using Function
// Ek function likh sumNatural(n) jo 1 se n tak ka sum return kare.
// function sumNatural(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum=sum+i;
//     }
//     return sum;
// }
// let n=Number(prompt("enter n"));
// console.log("sum",sumNatural(n));




// 🧩22. Count Vowels and Consonants
// Ek string lo aur count karo vowels aur consonants kitne hain.
// let string=prompt("enter a string");
// let vowel=0;
// let consonant=0;
// for(let i=0;i < string.length;i++){
//     let ch=string[i].toLowerCase();
//     if(ch=="a" || ch=="e" || ch=="i"  ||ch=="o" || ch=="u"){
//         vowel++;
//     }
//     else if(ch>="a" && ch<="z"){
//         consonant++;
//     }
// }
// console.log("vowels:",vowel);
// console.log("consonant:",consonant);





// 🧩23. FizzBuzz
// 1 se 50 tak numbers print karo:
// 3 ke multiple pe print "Fizz"
// 5 ke multiple pe print "Buzz"
// 3 aur 5 dono ke multiple pe print "FizzBuzz"

// for(let i=1;i<=50;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
    
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
    
//     else {
//         console.log(i);
//     }
// }




// 🧩 24Count the number of digits
// Take a number as input and count how many digits it has.
// Example: 1234 → 4 digits
// let num=prompt("enter a number");

// let count=0;
// for(let i=num;i>0;i=Math.floor(i/10)){
//     count++;
// }
// console.log(count);






// 🧩 25. Check Armstrong number
// Example:153 = 1³ + 5³ + 3³ = 153 → Armstrong number
// Write a program to check that.
let num=Number(prompt("enter a number"));
let count=0;
for(let i=num;i>0;i=Math.floor(i/10)){
    count++;

}
console.log()






// 🧩 26. Check if number is Prime
// Take a number and check whether it’s prime or not.








// 🧩 27. Sum of even numbers
// Take n from user → find the sum of all even numbers from 1 to n.








// 🧩 28. Find power without Math.pow()
// Example: input base = 2, exponent = 5 → output = 32
// (Use loop multiplication logic.)







// 🧩 28. Sum of digits until single digit
// Example:999 → 9+9+9 = 27 → 2+7 = 9
// Continue until result is single-digit.








// 🧩 30. Find factorial using function
// Write a function findFactorial(n) that returns factorial of n.








// 🧩 31. Find LCM of two numbers
// (Use loops and % operator.)

