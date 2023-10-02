function hotelRoom(input) {
  let month = input[0];
  let nightsCount = Number(input[1]);

  let stuioPrice = 50;
  let apartmentPrice = 65;
  let rentStudio = 0;
  let rentApartment = 0;

  switch (month) {
    case "May":
    case "Ocober":
      rentStudio = stuioPrice * nightsCount;
      rentApartment = apartmentPrice * nightsCount;

      if (nightsCount > 7) {
        rentStudio *= 0.95;
      } else if (nightsCount > 14) {
        rentStudio *= 0.7;
        rentApartment *= 0.90;
      }
      break;

    case "June":
    case "September":
      stuioPrice = 75.2;
      apartmentPrice = 68.7;

      rentStudio = stuioPrice * nightsCount;
      rentApartment = stuioPrice * nightsCount;
      
      if (nightsCount > 14) {
        rentStudio *= 0.8;
        rentApartment *= 0.90;
      }
      break;

    case "July":
    case "August":
      stuioPrice = 76;
      apartmentPrice = 77;

      rentStudio = stuioPrice * nightsCount;
      rentApartment = apartmentPrice * nightsCount;

      if (nightsCount > 14) {
        rentApartment *= 0.9;
      }
      break;
  }

  console.log(`Apartment: ${rentApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${rentStudio.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
