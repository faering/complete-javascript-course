// 32. Activating Strict Mode
/*
Strict mode is activated by writing 'use strict' in the beginning 
of the script (before any code,  after comments i OK).

Strict mode forbids the user to do certain things, and creates
visible errors in the developer console.
*/
'use strict';

let hasDriversLicense = false;
const passTest = true;

// If NOT using strict mode, the following code will NOT produce an error
// even though we forgot the 's' in hasDriver(s)License
//
// Whereas if WE DO USE strict mode, the error will be caught
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive.');

// Strict mode also introduces a shortlist of variable names
// that are reserved for features that might be added in the
// future. Example below:
const interface = 'Audio';
const private = 'myOwn';



// 33. Functions
function logger() {
    console.log('My name is Mattias');
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



// 34. Function Declarations vs. Expressions
//
// Function declarations: can be called before declaration,
// due to hoisting in JavaScript.
//
// Function expressions: can not call function before expression.

// function declaration
const age1 = calcAge1(1993);
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1993);

console.log(age1, age2);



// 35. Arrow Functions
// Function declaration
const age1 = calcAge1(1993);
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1993);

// Arrow functions
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1993);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 67 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1993, 'Mattias'));



// 36. Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));



// 38. Coding Challenge #1
const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const dolphinsAvg = calcAvg(85, 54, 41);
const koalasAvg = calcAvg(23, 34, 27);

checkWinner(dolphinsAvg, koalasAvg);

function checkWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg >= koalasAvg * 2) {
        return console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg}) 🏆`);
    } else if (koalasAvg >= dolphinsAvg * 2) {
        return console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg}) 🏆`);
    } else {
        return console.log(`Both teams win 🏆🏆`);
    }
}



// 39. Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// literal syntax
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// use built in array function
const years = new Array(1993, 1994, 1989, 2022);
console.log(years);

// accessing array elements
console.log(friends[0]);
console.log(friends[2]);

// get number of elements in array
console.log(friends.length);

// replace element / mutate array
// notice array is declared using 'const'
// an array is not a primitive value and is therefore mutable
friends[2] = 'Jay';
console.log(friends);

// Exercise
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const years2 = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years2[0]));



// 40. Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// 'push' method: add element at end of array
friends.push('Jay');
console.log(friends);

// 'unshift' method: add element at the start of the array
friends.unshift('John');
console.log(friends);

// 'pop' method: remove last element
const poppedElement1 = friends.pop() // last
console.log(poppedElement1);
console.log(friends);

// 'shift' method: remove first element
const poppedElement2 = friends.shift();
console.log(poppedElement2);
console.log(friends);

// 'indexOf' method: get the index of element in array
console.log(friends.indexOf('Steven'));

// 'includes' method: check if value is in array (boolean return)
console.log(friends.includes('Peter'));
console.log(friends.includes('Bob'));



// 41. Coding Challenge #2
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(total);



// 42. Introduction to Objects
const mattias = {
    firstName: 'Mattias',
    lastName: 'Andersen',
    age: 2022 - 1993,
    job: 'Software Engineer',
    friends: ['Christian', 'Kristian', 'Jakob', 'Peter']
};

console.log(mattias);



// 43. Dot vs. Bracket Notation
const mattias = {
    firstName: 'Mattias',
    lastName: 'Andersen',
    age: 2022 - 1993,
    job: 'Software Engineer',
    friends: ['Christian', 'Kristian', 'Jakob', 'Peter']
};

console.log(mattias);

// access object property
console.log(mattias.lastName); // dot notation
console.log(mattias['lastName']) // bracket notation

// using bracket notation allows expressions inside the brackets [expression]
const nameKey = 'Name';
console.log(mattias['first' + nameKey]);
console.log(mattias['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Mattias? Choose between firstName, lastName, age, job and friends');
console.log(mattias[interestedIn]);

// Challenge
// Write the following sentence by accessing the object data.
// "Mattias has 4 friends, and his best friend is called Christian"
const sentence = `${mattias.firstName} has ${mattias.friends.length} friends, and his best friend is called ${mattias.friends[0]}`
console.log(sentence);



// 44. Object Methods
const mattias = {
    firstName: 'Mattias',
    lastName: 'Andersen',
    birthYear: 1993,
    job: 'Software Engineer',
    friends: ['Christian', 'Kristian', 'Jakob', 'Peter'],
    hasDriversLicense: true,

    // use a function expression inside an object
    calcAge: function (birthYear) {
        return 2022 - birthYear;
    },

    // use 'this' keyword / variable to access existing object properties
    calcAge: function () {
        return 2022 - this.birthYear;
    },

    // calculate and store a property
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    sentence: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

// compute 'age' property one time
console.log(mattias.calcAge());

// access 'age' property several times without computing it again
console.log(mattias.age);
console.log(mattias.age);
console.log(mattias.age);

// Challenge
// "Mattias is a 29-year old Software Engineer, and he has a/no driver's licence."
console.log(mattias.sentence());



// 45. Coding Challenge #3
const mark = {
    name: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}
const john = {
    name: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

console.log(mark.calcBMI(), john.calcBMI());

if (mark.bmi > john.bmi) {
    console.log(`${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s (${john.bmi}).`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s (${mark.bmi}).`);
}



// 46. Iteration: The for Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}



// 47. Looping Arrays, Breaking and Continuing
const mattias = [
    'Mattias',
    'Andersen',
    2022 - 1993,
    'Software Engineer',
    ['Christian', 'Kristian', 'Jakob', 'Peter'],
    true
];
const types = [];

for (let i = 0; i < mattias.length; i++) {
    // read from mattias array
    console.log(mattias[i], typeof mattias[i]);

    // fill types array
    types.push(typeof mattias[i]);
};
console.log(types);

const years = [1990, 1967, 2002, 2010, 2018];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
};
console.log(ages);

// Continue loop
console.log('--- Continuing a Loop ---')
for (let i = 0; i < mattias.length; i++) {
    if (typeof mattias[i] !== 'string') continue;

    console.log(mattias[i], typeof mattias[i]);
};

// Break loop
console.log('--- Breaking a Loop ---')
for (let i = 0; i < mattias.length; i++) {
    if (typeof mattias[i] === 'number') break;

    console.log(mattias[i], typeof mattias[i]);
};



// 48. Looping Backwards and Loops in Loop
const mattias = [
    'Mattias',
    'Andersen',
    2022 - 1993,
    'Software Engineer',
    ['Christian', 'Kristian', 'Jakob', 'Peter']
];

for (let i = mattias.length - 1; i >= 0; i--) {
    console.log(i, mattias[i], typeof mattias[i]);

    if (typeof mattias[i] === 'object') {
        for (let j = 0; j < mattias[i].length; j++) {
            console.log(j, mattias[i][j]);
        };
    };
};



// 49. The while Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
};

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);

    rep++;
};

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);

    dice = Math.trunc(Math.random() * 6) + 1;
};



// 50. Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);

    console.log(`${i + 1}: bill was ${bills[i]} tip was ${tips[i]} and total amount was ${totals[i]}`);
};