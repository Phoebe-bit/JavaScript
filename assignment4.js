//TEST DATA1
const bill = 275;
const tipRate = bill >= 50 && bill <= 300;
const tipPercentage = tipRate ? 0.15 : 0.20;
const tipAmount = bill * tipPercentage;
const total = bill + tipAmount
//console.log(`The bill was $${bill}, the tip was $${tipAmount}¢ and the total is $${total}¢`);

const bill2 = 40;
const tipRate2 = bill2 >= 50 && bill2 <= 300;
const tipPercentage2 = tipRate2 ? 0.15 : 0.20;
const tipAmount2 = bill2 * tipPercentage2;
const total2 = bill2 + tipAmount2;
//console.log(`The bill was $${bill2}, the tip was $${tipAmount2}¢ and the total is $${total2}¢`);

const bill3 = 430;
const tipRate3 = bill3 >= 50 && bill3 <= 300;
const tipPercentage3 = tipRate3 ? 0.15 : 0.20;
const tipAmount3 = bill3 * tipPercentage3;
const total3 = bill3 + tipAmount3
//console.log(`The bill was $${bill3}, the tip was $${tipAmount3}¢ and the total is $${total3}¢`);


