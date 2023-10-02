function toyShop(input){
let vacationPrice = Number(input[0]);
let puzzlesCount = Number(input[1]);
let dollsCount = Number(input[2]);
let bearsCount = Number(input[3]);
let minionsCount = Number(input[4]);
let trucksCount = Number(input[5]);

let totalPrice = puzzlesCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
let totalToysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

if(totalToysCount >= 50){
  totalPrice *= 0.75;
} 

totalPrice *= 0.90;

if(totalPrice >= vacationPrice){
  let moneyLeft = totalPrice - vacationPrice;
  console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
} else{
  let moneyNeeded = vacationPrice - totalPrice;
  console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
}
}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"]);