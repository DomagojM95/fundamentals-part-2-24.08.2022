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


/////////////////////////////////// coding challenge ////////////////////////////////////////////

const calcAverage = (score1, score2, score3) => {
  const averageScore = (score1 + score2 + score3) / 3;
  return averageScore;
};

const dolphinsAverage = calcAverage(85, 54, 71);
const koalasAverage = calcAverage(23, 34, 27);

console.log(dolphinsAverage, koalasAverage);

const checkWinner = function (dolphinsAverage, koalasAverage) {
  if (dolphinsAverage >= 2 * koalasAverage) {
    console.log(`Dolphins win (${dolphinsAverage} vs ${koalasAverage})`);
  } else if (koalasAverage >= 2 * dolphinsAverage) {
    console.log(`koalas wins ${koalasAverage} vs ${dolphinsAverage}`);
  } else {
    console.log("nobody wins");
  }
};

checkWinner(dolphinsAverage, koalasAverage);



//////////////////////////////////////////////////

//////////////////// introdzction Arrays ////////////////////////

const friends = ["perica", "ivica", "matko"];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = " marko";
console.log(friends);

// vježba

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];

console.log(ages);

//////////////////////////////////////////////////////////////



////////////////////// vježba s nikolom //////////////////////
const a = [1, 2, 3, 4, 5];
const b = [7, 8, 9, 0, 8];

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
  for (let k = 0; k < a.length; k++) {
    console.log(b[k]);
  }
}

/////////////////////////////////////////////////////////////


//////////////////// vježba ////////////////////////

const popilations = [5, 18, 20, 7];
console.log(popilations.length === 4);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const procentages = [
  percentageOfWorld3(popilations[0]),
  percentageOfWorld3(popilations[1]),
  percentageOfWorld3(popilations[2]),
  percentageOfWorld3(popilations[3]),
];

console.log(procentages);

////////////////////////////////////////////////////

//////////////////////////////// basic array oeprations ///////////////////////////

const friends = ["perica", "ivica", "matko"];

// add elements
const newlenght = friends.push("Domagoj");

console.log(friends);
console.log(newlenght);

friends.unshift("ivan");
console.log(friends);

// remove elements

friends.pop(); // last
const popped = friends.pop(); // last
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf("ivica"));

console.log(friends.includes("ivica"));

if (friends.includes("ivica")) {
  console.log("i have a friend ivica");
}


/////////////////////////////////////////// vježba//////////////////////////////////

const neighbours = ["Bosna", "Mađarska", "slovenija", "italija"];

const newNeighbor = neighbours.push("Utopia");

console.log(neighbours);

const newNeighbor2 = neighbours.pop();
console.log(neighbours);

if (neighbours.includes("germaniy")) {
  console.log("Probably  a central European country :D");
} else {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Bosna")] = "Republic of Bosna";

console.log(neighbours);

///////////////////////////////////////////////////////////////////////

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) return (tip = 0.15 * bill);
  else {
    return bill * 0.2;
  }
};

console.log(calcTip(400));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips, bills);


//////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////// introductioon objects //////////////////////////

const domagoj = {
  firstName: "Domagoj",
  lastName: "Markopvic",
  age: 2022 - 1995,
  job: "tehnicar",
  friends: ["perica", "pero", "petar"],
};

////////////////////////////////////////////////////////////////////////

//////////////////////////////////   Dot vs. Bracket Notation   /////////////////////

const domagoj = {
  firstName: "Domagoj",
  lastName: "Markopvic",
  age: 2022 - 1995,
  job: "tehnicar",
  friends: ["perica", "pero", "petar"],
};
console.log(domagoj);
console.log(domagoj.lastName);
console.log(domagoj["lastName"]);

const nameKey = "Name";
console.log(domagoj["first" + nameKey]);
console.log(domagoj["last" + nameKey]);

const interestedIn = prompt(
  "sta zelis znati o meni? Biraj izmedu firstName, lastName, age, job i friends"
);

console.log(domagoj[interestedIn]);

if (domagoj[interestedIn]) {
  console.log(domagoj[interestedIn]);
} else {
  console.log("wrong request");
}

domagoj.location = "Osijek";
domagoj["facebook"] = "marka78";
console.log(domagoj);

// Challenge

console.log(
  `${domagoj.firstName} has ${domagoj.friends.length} friends
  , and his best friend is called ${domagoj.friends[0]}`
);


//////////////////////////////  vježba   ///////////////////////////////////


const myCountry = {
  country: "finland",
  population: 6,
  neighbours: 3,
  capital: "Helsinki",
};

console.log(
  `${myCountry.country} has ${myCountry.population} million finnish-speaking people ${myCountry.neighbours} neighbouring countries and a capital called ${myCountry.capital}`
);

////////////////////////////////////////////////////////////////////// objest methods /////////////////////////////


const domagoj = {
  firstName: "Domagoj",
  lastName: "Markopvic",
  birthYear: 1995,
  job: "tehnicar",
  friends: ["perica", "pero", "petar"],
  hasDriverLicence: true,

  //calcAge: function (birthYear) {
  //return 2037 - birthYear;
  //},

  //calcAge: function () {
  //console.log(this);
  //return 2037 - this.birthYear;
  //},
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      domagoj.job
    } and he has ${this.hasDriverLicence ? "a" : "no"} drives licence`;
  },
};

console.log(domagoj.getSummary)

////////////////////////////////////////////////////////////
*/
///////////////////////////////// coding challenge #3///////////////////////

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  hight: 1.69,

  Bmi: function () {
    this.BMI = this.weight / (this.hight * this.hight);
    return this.BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  weight: 92,
  hight: 1.95,

  Bmi: function () {
    this.BMI = this.weight / (this.hight * this.hight);
    return this.BMI;
  },
};
mark.Bmi();
john.Bmi();
console.log(mark.BMI, john.BMI);

console.log(
  `${mark.firstName}'s BMI (${mark.Bmi()})is higher than ${
    john.firstName
  }'s (${john.Bmi()}).`
);

/////////////////////////////////////////////////////////////////////////////
