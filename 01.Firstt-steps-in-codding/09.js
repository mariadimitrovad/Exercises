function greening(input) {
  let greeningMeters = Number(input[0]);

  let priceForGreening = greeningMeters * 7.61;

  let priceWithDiscount = 0.18 * priceForGreening;

  let totalPrice = priceForGreening - priceWithDiscount;

  console.log(`The final price is: ${totalPrice} lv.`);
  console.log(`The discount is: ${priceWithDiscount} lv.`);
}
greening(['550']);
