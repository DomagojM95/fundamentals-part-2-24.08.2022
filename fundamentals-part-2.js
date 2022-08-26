///////////// strict mode ////////////////////
/*
"use strict";

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("i can drive");

/////////////////////////////////////////////////

*/
/////////////// functions ////////////////////

function logger() {
  console.log("my name is domagoj");
}

logger();

function fruitprocessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitprocessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitprocessor(2, 4);

console.log(appleOrangeJuice);
/////////////////////////////////////////////////////////////////////////////////////////////
