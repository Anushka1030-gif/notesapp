// (a,b)=>{
//     return a*b;
// }
// function abs(...val){
//     console.log(val);
// }
// function calculator(weight,height){
//     return weight/(height*height);
// }
// console.log(calculator(44,1.49).toFixed(2));
function discountcalculator(discount){
    return function(price){
        return price-price*(discount/100);
    };
}
let discounter=discountcalculator(10);
console.log(discounter(200));