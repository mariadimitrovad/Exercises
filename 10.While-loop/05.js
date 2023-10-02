function cake(input){
let index = 0;
let width = Number(input[index]);
index++;
let length = Number(input[index]);
index++;
let piecesTaken = (input[index]);
index++;

let cakeVolume = width * length;

while(piecesTaken !== 'STOP'){
  piecesTaken = Number(piecesTaken);
  cakeVolume -= piecesTaken;

  if(cakeVolume <= 0){
    break;
  }
  
  piecesTaken = (input[index]);
  index++;
}

if(piecesTaken === 'STOP'){
  console.log(`${cakeVolume} pieces are left.`);
} else {
  console.log(`No more cake left! You need ${Math.abs(cakeVolume)} pieces more.`);
}
}
cake([
"10",
"10",
"20",
"20",
"20",
"20",
"21"]);