function nums(input){
let num1 = Number(input[0]);
let num2 = Number(input[1]);

let sum = 0;
let output = '';

for(let i = num1; i <= num2; i++){
  if(i % 9 === 0){
    sum += i;
    output = output + `${i} `;
  }
}

console.log(sum);
console.log(output);
}
nums(['100','200']);