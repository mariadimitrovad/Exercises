function moving(input){
let index = 0;
let widthFreePlace = Number(input[index]);
index++;
let lengthFreePlace = Number(input[index]);
index++;
let heightFreePlace = Number(input[index]);
index++;
let cashonCount = (input[index]);
index++;

let availablePlace = widthFreePlace * lengthFreePlace * heightFreePlace;

let totalCashonPlace = 0;

while(cashonCount !== 'Done'){
  cashonCount = Number(cashonCount);

  availablePlace -= cashonCount;

  if(availablePlace <= 0){
    break;
  }

  cashonCount = input[index];
  index++;
}

if(cashonCount === 'Done'){
  console.log(`${availablePlace} Cubic meters left.`);
} else {
  console.log(`No more free space! You need ${Math.abs(availablePlace)} Cubic meters more.`);
}
}
moving([
"10",
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);