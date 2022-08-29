///////////// strict mode ////////////////////
/*
"use strict";

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("i can drive");

/////////////////////////////////////////////////


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


////////////////////vježba////////////////////////////

function describeCountry(country, population, capitlCity) {
  return `${country} has ${population} million people and its capital is ${capitlCity}.`;
}

const country = describeCountry("Finland", 6, "Helsinki");
console.log(country);

const country2 = describeCountry("croatia", 4, "zagreb");
console.log(country2);
*/
/////////////////////////////////////////////////////

//////////////////////////////// function decalration vs expresionb //////////////////////////////////////

// function declaration
function caclAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = caclAge1(1991);
console.log(age1);

// function expresion

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);
