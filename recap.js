function add(price1, price2){
    const total = price1 + price2;
    return total;
}
const bill= add(5, 80);
console.log(bill);
//another way

function add2(bill2){
    return bill1 + bill2;
}
const bill2= add(6, 80);
console.log(bill2);

//another return

function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = num1 * num2;
    const result = multiply /2;
    return result;
}
 const result= doMath(10, 5);
 console.log(result);