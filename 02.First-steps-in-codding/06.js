function repainting(input){
let nylonQty = Number(input[0]);
let paintQty = Number(input[1]);
let thinnerQty = Number(input[2]);
let hoursForWorking = Number(input[3]);

let totalNylonQty = nylonQty + 2;
let currentPaintQty = 0.10 * paintQty;
let totalPaintQty = paintQty + currentPaintQty; 

let totalMaterialsPrice = totalNylonQty * 1.50 + totalPaintQty * 14.50 + thinnerQty * 5 + 0.40;

let workersSumPerHour = 0.30 * totalMaterialsPrice;

let totalWorkersSum = hoursForWorking * workersSumPerHour;

let totalSum = totalMaterialsPrice + totalWorkersSum;

console.log(totalSum);
}
repainting([
"10 ",
"11 ",
"4 ",
"8 "]);