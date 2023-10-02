function balance(input){
let totalMoney = 0;
let index = 0;
let sumToBalance = input[index];

while(sumToBalance !== 'NoMoreMoney'){
 let sumToBalanceAsNumber = Number(sumToBalance);

  if(sumToBalanceAsNumber < 0){
    console.log(`Invalid operation!`);
    break;

  }
  totalMoney += sumToBalanceAsNumber;

  console.log(`Increase: ${sumToBalanceAsNumber.toFixed(2)}`);

  index++;
  sumToBalance = input[index];
}

console.log(`Total: ${totalMoney.toFixed(2)}`);
}
balance(["5.51",
"69.42",
"100",
"NoMoreMoney"]); 