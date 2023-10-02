function workingTime(input){
let time = Number(input[0]);
let day = input[1];

if(time >= 10 && time <= 18){
  console.log('open');
} else {
  console.log('closed');
}
}
workingTime(['11','Monday']);