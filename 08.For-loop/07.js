function trakingMania(input){
let gruopsCount = Number(input[0]);

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

let totalPeople = 0;

for(let i = 1; i <= gruopsCount; i++){
  let peoplesCount = Number(input[i]);
  totalPeople += peoplesCount;

  if(peoplesCount <= 5){
    count1+=peoplesCount;
  } else if(peoplesCount <= 12){
    count2+=peoplesCount;
  } else if(peoplesCount <= 25){
    count3+=peoplesCount;
  } else if(peoplesCount <= 40){
    count4+=peoplesCount;
  } else if(peoplesCount >= 41){
    count5+=peoplesCount;
  }
}

let p1 = (count1 / totalPeople) * 100;
let p2 = (count2 / totalPeople) * 100;
let p3 = (count3 / totalPeople) * 100;
let p4 = (count4 / totalPeople) * 100;
let p5 = (count5 / totalPeople) * 100;

console.log(`${p1.toFixed(2)}%`);
console.log(`${p2.toFixed(2)}%`);
console.log(`${p3.toFixed(2)}%`);
console.log(`${p4.toFixed(2)}%`);
console.log(`${p5.toFixed(2)}%`);
}
trakingMania([
"10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);