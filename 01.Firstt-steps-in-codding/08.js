function zooStore(input){
let dogFoodCount = Number(input[0]);
let catFoodCount = Number(input[1]);

let dogFoodPrice = dogFoodCount * 2.50;
let catFoodPrice = catFoodCount * 4;
let totalPrice = dogFoodPrice + catFoodPrice;

console.log(`${totalPrice} lv.`);
}
zooStore(['5','4']);