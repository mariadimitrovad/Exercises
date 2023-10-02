function cinema(input){
let typeProjection = input[0];
let rows = Number(input[1]);
let cols = Number(input[2]);

let income = 0;

let freePlace = rows * cols;

if(typeProjection === 'Premiere'){
  income = freePlace * 12;
} else if(typeProjection === 'Normal'){
  income = freePlace * 7.50;
} else if (typeProjection === 'Discount'){
  income = freePlace * 5;
}

console.log(`${income.toFixed(2)} leva`);

}
cinema(['Premiere','10','12']);