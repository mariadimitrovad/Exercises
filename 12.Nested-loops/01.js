function sums(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);

  let result = "";
  let digitSum = 0;

  for (let curNum = num1; curNum <= num2; curNum++) {
    let oddPositionSum = 0;
    let evenPossitionSum = 0;

    let numAsStr = curNum.toString();

    for (let i = 0; i < numAsStr.length; i++) {
      let curDigit = Number(numAsStr[i]);
      let position = i + 1;

      if (position % 2 === 0) {
        evenPossitionSum += curDigit;
      } else {
        oddPositionSum += curDigit;
      }
    }

    if (evenPossitionSum === oddPositionSum) {
      result += numAsStr + " ";
    }
  }

  console.log(result);
}
sums(["100000", "100050"]);
