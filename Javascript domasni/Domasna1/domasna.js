//domasna "area"
var r = 120;
var pi = Math.PI;
var area = pi * Math.pow(r,2);//r**2
console.log(area.toFixed(2));


//domasna "price of iphones"

var total;
var qnty = 30;
var price = 899.95;
var customsRate = 5 * 899.95/100; 
var taxRate = 18 * 899.95/100;
total = qnty * (price  + customsRate + taxRate);
console.log(total);


//domasna modify
function sum(qnty,price,taxRate,customRate)
{

let taxRateTotal =taxRate * price/100;
let customRateTotal = customRate * price/100;
var total = qnty * (price+ taxRateTotal + customRateTotal);

return total;

}

var total2 = sum(30,899.95,18,5);
var total3=total2.toFixed(2);

console.log(total3);
