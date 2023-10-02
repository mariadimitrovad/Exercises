function lunchBreak(input){
let serialName = input[0];
let episodeDuration = Number(input[1]);
let breakDuration = Number(input[2]);

let lunchDuration = ( 1 / 8 ) * breakDuration;
let breatheDuration = ( 1 / 4 ) * breakDuration;

let totalTakenTime = lunchDuration + breatheDuration;
let leftTime = breakDuration - totalTakenTime;

if(leftTime >= episodeDuration){
  let timeLeft = leftTime - episodeDuration;
  console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeLeft)} minutes free time.`);
} else {
  let timeNeeded = episodeDuration - leftTime;
  console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
}
}
lunchBreak([
"Game of Thrones",
"60",
"96"]);