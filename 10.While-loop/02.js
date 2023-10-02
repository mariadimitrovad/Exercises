function pr(input){
let index = 0;
let badGradesCount = Number(input[index]);
index++;
let problemName = input[index];
index++;
let problemGrade = Number(input[index]);
index++;

let badGrade = 0;
let problemGradeSum = 0;
let finishProblems = 0;
let lastProblem = '';

while(problemName !== 'Enough'){
lastProblem = problemName;
problemGradeSum += problemGrade;

if(problemGrade <= 4){
  badGrade++;
}

if(badGrade === badGradesCount){
  console.log(`You need a break, ${badGrade} poor grades.`);
  break;
}

finishProblems++;
problemName = input[index];
index++;
problemGrade = Number(input[index]);
index++;
}

let avgScore = problemGradeSum / finishProblems;

if(problemName === 'Enough'){
  console.log(`Average score: ${avgScore.toFixed(2)}`);
  console.log(`Number of problems: ${finishProblems}`);
  console.log(`Last problem: ${lastProblem}`);
}
}
pr(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);