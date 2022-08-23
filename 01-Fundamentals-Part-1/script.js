/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Syafiq");
console.log(23);

let firstName = "Mohamad Syafiq Syazre";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let syafiq_syazre = "SS";
let $function = 29;

let person = "syafiq";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 29);
// console.log(typeof 'Syafiq');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1993;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1993;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageShikin = now - 1992;
const ageSyafiq = now - 1993;
console.log(ageShikin, ageSarah);

console.log(ageSyafiq * 2, ageSyafiq / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Syafiq';
const lastName = 'Syazre';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageShikin > ageSyafiq); // >, <, >=, <=
console.log(ageSyafiq >= 18);

const isFullAge = ageSyafiq >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageShikin = now - 1992;
const ageSyafiq = now - 1993;

console.log(now - 1992 > now - 1993);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageShikin + ageSyafiq) / 2;
console.log(ageShikin, ageSyafiq, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Syafiq and Shikin are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Syafiq's and Shikin's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Syafiq has a higher BMI than Shikin.

TEST DATA 1: Syafiq weights 78 kg and is 1.69 m tall. Shikin weights 92 kg and is 1.95 m tall.
TEST DATA 2: Syafiq weights 95 kg and is 1.88 m tall. Shikin weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/


/* const massSyafiq = 70;
const heightSyafiq = 1.66;
const massShikin = 59;
const heightShikin = 1.56;

const BMISyafiq = massSyafiq / heightSyafiq ** 2;
const BMIShikin = massShikin / (heightShikin * heightShikin);
const markHigherBMI = BMISyafiq > BMIShikin;

console.log(BMISyafiq, BMIShikin, markHigherBMI);

////////////////////////////////////
// Strings and Template Literals
const firstName = 'Syafiq';
const job = 'developer';
const birthYear = 1991;
const year = 2037;

const syafiq = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(syafiq);

const syafiqNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(syafiqNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
 */

////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log('Syafiq can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Syafiq is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

