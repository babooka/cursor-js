const meat = 15.678, bread = 123.965, cheese = 90.2345;

let sumRound = (Math.floor(meat) + Math.floor(cheese) + Math.floor(bread) );
let sum = (meat + bread + cheese);
let sale = Math.random();

console.log ('Meat price is ' + meat + '\nBread price is ' + bread + '\nCheese price is ' + cheese);

console.log("Max price is " + Math.max(meat, bread, cheese) + "\nMin price is " + Math.min(meat, bread, cheese));

console.log("Summ is " + sum);

console.log("Summ floor is " + (Math.floor(meat) + Math.floor(cheese) + Math.floor(bread) ) );

console.log("Summ round is " + Math.round(sumRound/100)*100);

function isEven () {
    if ((Math.floor(sum)) % 2 == 0) {
       return true }
            else {
        return  false }
    };

console.log("Summ Even is " + (isEven()));

console.log('Change from 500 is ' + (500 - sum));

console.log('Price average is ' + Math.round((sum/3) * 100)/100);

console.log('Discount price is ' + (Math.round((sum*sale)*100)/100));

console.log('Original price is ' + sum + '\nDiscount is ' + (Math.round(sale*100)) + '%' + '\nPayed ' + (sum-(sum*sale)) + '\nCost price is ' + (sum/2) + '\nProfit ' + ((sum/2)-(sum-(sum*sale))));
