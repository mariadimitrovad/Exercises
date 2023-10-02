function nums(input){
let num = Number(input[0]);
let index = 1;
let curNumber = Number(input[index]);
let sum = 0;

while(sum < num){
  sum += curNumber;
  index++;
  curNumber = Number(input[index]);
}

console.log(sum);
}
nums(["100", "10", "20", "30", "40"]);