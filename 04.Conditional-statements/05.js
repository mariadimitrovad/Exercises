function gozilla(input){
let budget = Number(input[0]);
let statistCount = Number(input[1]);
let clothesPriceStatist = Number(input[2]);

let decor = 0.10 * budget;
let clothesPrice = statistCount * clothesPriceStatist;

if(statistCount > 150){
  clothesPrice *= 0.90;
}

let totalPrice = decor + clothesPrice;

if(totalPrice > budget){
  let moneyNeeded = totalPrice - budget;
  console.log(`Not enough money!`);
  console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
} else {
  let moneyLeft = budget - totalPrice;
  console.log('Action!');
  console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
}
}
gozilla([
"20000",
"120",
"55.5"]);