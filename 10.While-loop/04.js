function all(input){
let index = 0;
let steps = input[index];
index++;
let goal = 10000;
let totalSteps = 0;

while(steps !== 'Going home'){
  let newSteps = Number(steps);

  totalSteps += newSteps;

  if(totalSteps >= goal){
    break;
  }

  steps = input[index];
  index++;
}

if(steps === 'Going home'){
  let stepsToHome = Number(input[index]);
  totalSteps += stepsToHome;
}

if(totalSteps >= goal){
  let stepsLeft = totalSteps - goal;
    console.log(`Goal reached! Good job!`);
    console.log(`${stepsLeft} steps over the goal!`);
  } else {
   console.log(`${goal - totalSteps} more steps to reach goal.`);
}
}
all([
"1000",
"1500",
"2000",
"6500"]);