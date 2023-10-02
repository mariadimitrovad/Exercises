function school(input){
let pensPacksCount = Number(input[0]);
let markersPacksCount = Number(input[1]);
let preparatLiters = Number(input[2]);
let percentSale = Number(input[3]);

let pensPrice = pensPacksCount * 5.80;
let markersPrice = markersPacksCount * 7.20;
let preparatPrice = preparatLiters * 1.20;
let totalMaterialsPrice = pensPrice + markersPrice + preparatPrice;

let totalPercentSale = percentSale / 100;

let priceWithSale = totalMaterialsPrice - (totalMaterialsPrice * totalPercentSale);

console.log(priceWithSale);
}
school(["2 ",
"3 ",
"4 ",
"25 "]);