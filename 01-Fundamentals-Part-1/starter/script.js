// 10. VALUES AND VARIABLES
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Mattias");
console.log(23);

let firstName = "Mattias";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// JavaScript VARIABLE NAME CONVENTIONS

// always start variables in lowercase and use camel convention
let person = 'mattias';

// reserved variable names:
// - function
// - new
// - name (in some cases)
// you can use _ or $ in front of the reserved name
let $function = "calculator";

// all upper case is used for variable names that will never change i.e. CONSTANTS
let PI = 3.1415;



// 12. DATA TYPES
// - number
// - string
// - boolean
// - undefined
// - null
// - symbol (ES2015)
// - BigInt (ES2020)
let javascriptIsFun = true;
console.log(javascriptIsFun);

// 'typeof' operator
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Mattias');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1993;
console.log(typeof year);

console.log(typeof null);




// 13. let, const and var
// "let" variables can change value / mutate throughout the code 'mutable'
let age = 27;
age = 28;

// "const" variables cannot mutate 'immutable'
// constants must be initialized in declaration
const birthYear = 1993;

// "var"
var job = 'programmer';
job = 'engineer';



// 14. Basic Operators
// math operators
const NOW = 2022;
const ageMattias = NOW - 1993;
const ageSarah = NOW - 2018;
console.log(ageMattias, ageSarah * 2, ageMattias / 2, 2 ** 3);

const firstName = 'Mattias';
const lastName = 'Andersen';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5; // x will be assigned as 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// comparison operators
// >, <, >=, <=
console.log(ageMattias > ageSarah);
console.log(ageSarah >= 18);

console.log(NOW - 1993 > NOW - 2018);



// 15. Operator Precedence
// Link to JavaScript precedence table:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence



// 16. Coding Challenge #1
let markWeight = 78;
let markHeight = 1.69;
let markBMI;
let johnWeight = 92;
let johnHeight = 1.95;
let johnBMI;
let markHigherBMI;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);



// 17. Strings and Template Literals
const firstName = 'Mattias';
const job = 'engineer';
const birthYear = 1993;
const now = 2022;

// bad way
const mattias = "I'm " + firstName + ', a ' + (now - birthYear) + ' years old ' + job + "!";
console.log(mattias)

// good way "Template Literals"
// Have to use `` "Backticks"
const mattiasNew = `I'm ${firstName}, a ${now - birthYear} years old ${job}!`;
console.log(mattiasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);



// 18. Taking Decisions: if / else Statements
const age = 19;

if (age >= 18) {
    console.log('Sarah can start taking her driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young to start her driving license and has to wait ${yearsLeft} years.`);
}

const birthYear = 1993;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(`Mattias is born in the ${century} century.`)



// 19. Coding Challenge #2
let markWeight = 78;
let markHeight = 1.69;
let markBMI;
let johnWeight = 92;
let johnHeight = 1.95;
let johnBMI;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}



// 20. Type Conversion and Coercion
// Conversion: manual conversion of type
// Coercion: JS automatic conversion of type

// type conversion
const inputYear = 1993;
console.log(Number(inputYear), inputYear);
console.log((Number(inputYear) + 18));

console.log(Number('Mattias'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 28 + ' years old.'); // number converted to string
console.log('23' - '10' - 3); // strings converted to numbers
console.log('23' * '2'); // strings converted to numbers (because of * operator)

// guess the output
let n = '1' + 1; // + operator will convert number to string (n='11')
n = n - 1; // - operator will convert string to number (n=10)
console.log(n);



// 21. Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Mattias')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 0;
// money will be converted to a boolean (type coercion)
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("YAY! Height is defined!");
} else {
    console.log("Height is undefined!");
}



// 22. Equality Operators: == vs. ===
// == -> equality operator WITH type coercion
// === -> STRICT equality operator WITHOUT type coercion
// != -> inquality operator WITH type coercion
// !== -> inquality operator WITHOUT type coercion
const age = 18;
if (age == '18') console.log('You just became an adult! (loose 1)');
if (age === 18) console.log('You just became an adult! (strict 1)');
if (age == 18) console.log('You just became an adult! (loose 2)');
if (age === '18') console.log('You just became an adult! (strict 2)');

// prompt on screen a dialog box
const favourite = prompt("What's your favourite number?");
console.log(favourite, typeof (favourite));

if (favourite == 23) { // '23' == 23 (true)
    console.log("Cool! 23 is an amazing number!");
}
if (favourite === 23) { // '23' === 23 (false)
    console.log("Cool! 23 is an amazing number!");
}



// 23. Boolean Logic
// Already known basics



// 24.  Logical Operators
const hasDriversLicense = true;    // A
const hasGoodVision = true;         // B

console.log(hasDriversLicense && hasGoodVision);    // AND
console.log(hasDriversLicense || hasGoodVision);    // OR
console.log(!hasDriversLicense);                    // NOT

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = true;               // C

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}



// 25. Coding Challenge #3
// Data:
// Dolphins:    96, 108, 89
// Koalas:      88, 91, 110

// 1. Calculate the average score for each team
let dolphinsAvg = (96 + 108 + 89) / 3;
let koalasAvg = (88 + 91 + 110) / 3;
console.log(`Average Score
Dolphins: ${dolphinsAvg}
Koalas: ${koalasAvg}`);

// 2. Compare the team's average scores to determine the winner
if (dolphinsAvg > koalasAvg) {
    console.log('The winner is the Dolphins!');
} else if (koalasAvg > dolphinsAvg) {
    console.log('The winner is the Koalas!');
} else if (dolphinsAvg === koalasAvg) {
    console.log("It is a draw!");
}

// (BONUS) 3. Include a requirement for a minimum score of 100
// Data:
// Dolphins:    97, 112, 101
// Koalas:      109, 95, 123
dolphinsAvg = (97 + 112 + 101) / 3;
koalasAvg = (109 + 95 + 123) / 3;
console.log(`Average Score
Dolphins: ${dolphinsAvg}
Koalas: ${koalasAvg}`);

if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
    console.log('The winner is the Dolphins!');
} else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
    console.log('The winner is the Koalas!');
} else if (dolphinsAvg === koalasAvg) {
    console.log('It is a draw!');
} else {
    console.log('There are no winners...');
}

// (BONUS) 4. Minimum score of 100 also applies to a draw
// Data:
// Dolphins:    97, 112, 101
// Koalas:      109, 95, 106
dolphinsAvg = (97 + 112 + 101) / 3;
koalasAvg = (109 + 95 + 106) / 3;
console.log(`Average Score
Dolphins: ${dolphinsAvg}
Koalas: ${koalasAvg}`);

if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
    console.log('The winner is the Dolphins!');
} else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
    console.log('The winner is the Koalas!');
} else if (dolphinsAvg >= 100 && koalasAvg >= 100 && dolphinsAvg === koalasAvg) {
    console.log('It is a draw!');
} else {
    console.log('There are no winners...');
}



// 26. The Switch Statement
const day = 'sunday';

switch (day) {
    // day will be STRICTLY (===) compared to each case statement e.g. 'monday'
    case 'monday':
        console.log('Course material 1');
        break;
    case 'tuesday':
        console.log('Course material 2');
        break;
    case 'wednesday':
    case 'thursday':
        // code will be executed for both 'wednesday' and 'thursday'
        console.log('Course material 3');
        break;
    case 'friday':
        console.log('Course material 4');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Netflix and chill ;)');
        break;
    default:
        console.log('Not a valid day!');
        break;
}



// 27. Statements and Expressions
// A statement produces an action (declare a  variable, if/else etc.)
// An expression produces a value (2+2, "Mattias is the best")



// 28. The Conditional (Ternary) Operator
// Ternary operator is an expression
const age = 28;
age >= 18 ? console.log('I like to drink beer 🍺') : console.log('I like to drink water 🧊');

const drink = age >= 18 ? 'beer 🍺' : 'water 🧊';
console.log(`I like to drink ${drink}`);

// BEST WAY
console.log(`I like to drink ${age >= 18 ? 'beer 🍺' : 'water 🧊'}`);



// 28. Coding Challenge #4
const bill = 275

// 1. Calculate the tip depending on bill, using ternary operator
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log('Amount to tip: ' + tip);

// 2. Print all values (bill, tip and total amount) to the console
console.log(`The bill is ${bill}, the tip is ${bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2} and the total amount is ${bill >= 50 && bill <= 300 ? bill + (bill * 0.15) : bill + (bill * 0.2)}`);



