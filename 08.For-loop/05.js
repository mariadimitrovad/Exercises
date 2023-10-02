function salary(input) {
  let openTabs = Number(input[0]);
  let salary = Number(input[1]);

  for (let curWebsite = 2; curWebsite <= openTabs + 2; curWebsite++) {
    let theTab = input[curWebsite];

    if (theTab === "Facebook") {
      salary -= 150;
    } else if (theTab === "Instagram") {
      salary -= 100;
    } else if (theTab === "Reddit") {
      salary -= 50;
    }

    if (salary <= 0) {
      break;
    }
  }

  if (salary <= 0) {
    console.log(`You have lost your salary.`);
  } else {
    console.log(salary);
  }
}
salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
