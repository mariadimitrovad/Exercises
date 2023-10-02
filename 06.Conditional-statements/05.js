function store(input) {
  let product = input[0];
  let town = input[1];
  let quantity = Number(input[2]);

  let totalPrice = 0;

  if (town === "Sofia") {
    switch (product) {
      case "coffee":
        totalPrice = quantity * 0.5;
      case "water":
        totalPrice = quantity * 0.8;
      case "beer":
        totalPrice = quantity * 1.2;
      case "sweets":
        totalPrice = quantity * 1.45;
      case "peanuts":
        totalPrice = quantity * 1.6;
        break;
    }
  } else if (town === "Plovdiv") {
    switch (product) {
      case "coffee":
        totalPrice = quantity * 0.4;
      case "water":
        totalPrice = quantity * 0.7;
      case "beer":
        totalPrice = quantity * 1.15;
      case "sweets":
        totalPrice = quantity * 1.3;
      case "peanuts":
        totalPrice = quantity * 1.5;
        break;
    }
  } else if (town === "Varna") {
    switch (product) {
      case "coffee":
        totalPrice = quantity * 0.45;
      case "water":
        totalPrice = quantity * 0.7;
      case "beer":
        totalPrice = quantity * 1.1;
      case "sweets":
        totalPrice = quantity * 1.35;
      case "peanuts":
        totalPrice = quantity * 1.55;
        break;
    }
  }
  console.log(totalPrice);
}
store(["coffee", "Varna", "2"]);
