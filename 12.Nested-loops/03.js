function solve (input){
let num = Number(input[0]);
let result = '';

for(let curNum = 1111; curNum <= 9999; curNum++){
  let isSpecial = true;

  let curNumStr = curNum.toString();

  for(let i = 0; i < curNumStr.length; i++){
    let curDigit = Number(curNumStr[i]);

    if(num % curDigit !== 0){
      isSpecial = false;
      break;
    }
  }

  if(isSpecial){
    result += curNum + ' ';
}
}
console.log(result);
}
solve(["3"]);