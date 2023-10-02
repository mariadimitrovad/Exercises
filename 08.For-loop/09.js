function catFood(input){
let catsCount = Number(input[0]);

let group1 = 0;
let group2 = 0;
let group3 = 0;
let totalGrams = 0;

for(let i = 1; i <= catsCount; i++){
  let grams = Number(input[i]);
  totalGrams += grams;

  if(grams >= 100 && grams <= 200){
    group1++;
  } else if(grams <= 300){
    group2++;
  } else if(grams <= 400){
    group3++;
  }
}
let gramsInKg = totalGrams / 1000;
let totalPrice = gramsInKg * 12.45;

console.log(`${group1} cats`);
console.log(`${group2} cats`);
console.log(`${group3} cats`);
console.log(`${totalPrice.toFixed(2)} lv.`);

}
catFood(['6',
'102',
'236',
'123',
'399',
'342',
'222',
'10',
'256',
'348',
'198',
'322',
'186',
'294',
'321',
'100',
'200',
'300',
]);