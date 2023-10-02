function lilly(input){
let age = Number(input[0]);
let washMachinePrice = Number(input[1]);
let pricePerToy = Number(input[2]);

let moneySaved = 0;
let moneyWon = 10;

for(let curBirthday = 1; curBirthday <= age; curBirthday++){
  if(curBirthday % 2 !== 0){
    moneySaved += pricePerToy;
  } else {
    moneySaved += (moneyWon - 1);
    moneyWon += 10;
  }
}

if(moneySaved >= washMachinePrice){
  let moneyLeft = moneySaved - washMachinePrice;
  console.log(`Yes! ${moneyLeft.toFixed(2)}`);
} else {
  let moneyNeeded = washMachinePrice - moneySaved;
  console.log(`No! ${moneyNeeded.toFixed(2)}`);
}
}
lilly([
"10",
"170.00",
"6"]);