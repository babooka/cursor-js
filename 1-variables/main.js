const meat = 15.678, bread = 123.965, cheese = 90.2345;

const sumRound = Math.round(meat) + Math.round(cheese) + Math.round(bread);
const sum = meat + bread + cheese;
let sale = Math.random();
let discountPrice = sum*sale;

console.log ('Meat price is ' + meat + '\nBread price is ' + bread + '\nCheese price is ' + cheese);

console.log("Max price is " + Math.max(meat, bread, cheese) + "\nMin price is " + Math.min(meat, bread, cheese));

console.log("Summ is " + sum);

console.log("Summ floor is " + (Math.floor(meat) + Math.floor(cheese) + Math.floor(bread) ) );

console.log("Summ round is " + (Math.floor((sum)/100)) * 100);

function isEven () {
    if ((Math.floor(sum)) % 2 === 0) {
       return true }
            else {
        return  false }
    };

console.log("Summ Even is " + (isEven()));

console.log('Change from 500 is ' + (500 - sum));

console.log('Average price ' + (sum/3).toFixed(2));

console.log('Discount price is ' + (Math.round(discountPrice*100)/100));

console.log('Original price is ' + sum + '\nDiscount is ' + (Math.round(sale*100)) + '%' + '\nPayed ' + (sum-discountPrice) + '\nCost price is ' + (sum/2) + '\nProfit ' + ((sum/2)-(sum-discountPrice)));
