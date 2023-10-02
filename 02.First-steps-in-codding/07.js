function foodDelivery(input){
let chickenMenus = Number(input[0]);
let fishMenus = Number(input[1]);
let vegMenus = Number(input[2]);

let chickenMenusPrice = chickenMenus * 10.35;
let fishMenusPrice = fishMenus * 12.40;
let vegMenusPrice = vegMenus * 8.15;
let totalMenusPrice = chickenMenusPrice + fishMenusPrice + vegMenusPrice;

let dessertPice = 0.20 * totalMenusPrice;

let totalPrice = totalMenusPrice + dessertPice + 2.50;

console.log(totalPrice);
}
foodDelivery([
"2 ",
"4 ",
"3 "]);