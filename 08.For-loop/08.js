function tenis(input){
let tournamentCount = Number(input[0]);
let startPoints = Number(input[1]);

let pointsWon = 0;
let tournamentWon = 0;

for(let i = 2; i <= tournamentCount + 2; i++){
  let currentTournament = input[i];

  if(currentTournament === 'W'){
    pointsWon += 2000;
    tournamentWon++;
  } else if(currentTournament === 'F'){
    pointsWon += 1200;
  } else if(currentTournament === 'SF'){
    pointsWon += 720;
  }
}
let totalPoints = startPoints + pointsWon;
let avgPoints = pointsWon / tournamentCount;
let percent = (tournamentWon / tournamentCount) * 100;
console.log(`Final points: ${totalPoints}`);
console.log(`Average points: ${Math.floor(avgPoints)}`);
console.log(`${percent.toFixed(2)}%`);

}
tenis([
"5",
"1400",
"F",
"SF",
"W",
"W",
"SF"]);