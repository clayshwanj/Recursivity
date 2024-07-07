// Leap Year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2020));
console.log(isLeapYear(1991));

//Ticket Pricing
function getTicketPrice(age) {
  if (age <= 12) {
    return "$10";
  } else if (age >= 13 && age <= 17) {
    return "$15";
  } else {
    return "$20";
  }
}
console.log(getTicketPrice(16));
console.log(getTicketPrice(25));
