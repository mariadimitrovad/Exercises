function shopping(input){
let budget = Number(input[0]);
let videoCardsCount = Number(input[1]);
let processorsCount = Number(input[2]);
let ramMemoryCount = Number(input[3]);

let videoCardsPrice = videoCardsCount * 250;

let processorsPrice = 0.35 * videoCardsPrice;
let totalProcessorsPrice  = processorsPrice * processorsCount;

let ramMemoryPrice = 0.10 * videoCardsPrice;
let totalRamPrice = ramMemoryPrice * ramMemoryCount;

let totalPrice = videoCardsPrice + totalProcessorsPrice + totalRamPrice;

if(videoCardsCount > processorsCount){
  totalPrice *= 0.85;
}

if(budget >= totalPrice){
  let moneyLeft = budget - totalPrice;
  console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
} else{
  let moneyNeeded = totalPrice - budget;
  console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
}
}
shopping([
"900",
"2",
"1",
"3"]);