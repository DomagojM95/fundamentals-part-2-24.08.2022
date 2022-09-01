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

////////////////////////////////////////////// vježba //////////////////////////////////

function procentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const procentagee1 = procentageOfWorld1(1441);
const procentagee2 = procentageOfWorld1(4);
const procentagee3 = procentageOfWorld1(6);
console.log(procentagee1, procentagee2, procentagee3);

const procentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const procentage1 = procentageOfWorld2(1441);
const procentage2 = procentageOfWorld2(4);
const procentage3 = procentageOfWorld2(6);
console.log(procentage1, procentage2, procentage3);

////////////////////////////////////////////////////////////////////////////////

////////////////////////// Arrow function ///////////////////////

// arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Domagoj"));
console.log(yearsUntilRetirement(1980, "Bob"));
 

/////////////////////////////////// vježba ///////////////////////

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const populationChina = percentageOfWorld3(1441);
console.log(populationChina);
////////////////////////////////////////////////

////////////////////// functions calling other functions ////////////////////////

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitprocessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitprocessor(2, 3));

////////////////////////////////////////////////////// vježba////////////////////////////

///////mojeee///////////////////////////////////
function procentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const populationProsentage = procentageOfWorld1(population);
  return `${country} has 1441 million people,
  which is about ${populationProsentage} of the world `;
}

console.log(describePopulation("china", 1441));

/////// njegovo/////////////////////
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million
  people, which is about ${percentage}% of the world.`;
  console.log(description);
};
describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);

*/
////////////////////////////////////////////////////////////////////////////

////////////////////// reviewing Functions ////////////////////////

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
