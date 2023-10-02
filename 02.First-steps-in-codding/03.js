function depositCalc(input){
let depositSum = Number(input[0]);
let depositLimit = Number(input[1]);
let annualInterestPercent = Number(input[2]);

let percentInterest = annualInterestPercent / 100;

let interest = depositSum * percentInterest;

let sum = depositSum + depositLimit * ((depositSum * percentInterest) / 12);

console.log(sum);
}
depositCalc([
"200 ",
"3 ",
"5.7 "]);