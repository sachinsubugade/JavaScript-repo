'use strict';
/*
let hasDrivingsLicense = false;
const passTest  = true;

if (passTest) hasDrivingsLicense = true;
if (hasDrivingsLicense) console.log('I can Drive :D');

// const interface = 'Audio';
// const private = 100;


function logger() {
    console.log("My Name is Sachin !");
};

// Calling / Running / Invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 2);
console.log(appleOrangeJuice);


/////// Function Declaration

function calcAge1(birthYear) {
    return 2021 - birthYear;
};

const age1 = calcAge1(1997);
console.log(age1);

//////// Function Expression

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
};

const age2 = calcAge2(1997);
console.log(age2);


// Arrow Function

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1997, 'Sachin'));


const cutPieces = function (fruit){
    return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
};

console.log(fruitProcessor(2,3));


const calcAge = function (birthYear) {
    return 2021 - birthYear
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else{
        console.log(`${firstName} has already retired!`);
        return -1;
    }
};


console.log(yearsUntilRetirement(1997, 'Sachin'));
console.log(yearsUntilRetirement(1950, 'Amar'));


/////// Coding Challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27); 
console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas){
    if (avgDolphins >= (avgKoalas * 2)){
        return `Dolphins wins (${avgDolphins} Vs. ${avgKoalas})`;
    }
    else if (avgKoalas >= (avgDolphins * 2)) {
        return `Koalas wins (${avgKoalas} Vs. ${avgDolphins})`;
    }
    else{
        return `Draw !`;
    }
};

console.log(checkWinner(avgDolphins, avgKoalas));


////// Introduction to Arrays

const friend1 = 'Sachin';
const friend2 = 'Amar';
const friend3 = 'Ganesh';
const friends = ['Sachin' , 'Amar' , 'Ganesh'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[3] = 'Jayesh';
friends[4] = 'Asit';
console.log(friends);
const firstName = 'Sachin';
const sachin = [firstName, 'Subugade', 2021 - 1997, 'Progrmmer', friends];
console.log(sachin);

// Excercise

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}
const years = [1997, 1998, 1996, 1995, 1994];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// Basic Array Operations

const friends = ['Sachin' , 'Amar' , 'Ganesh'];
// Add Elements
const newLength = friends.push('Jayesh') // .push() function returns the length of the array
console.log(friends);
console.log(newLength); 
// Add First element of an array
const fisrtElement = friends.unshift('Asit')// It also returns the length of the array

console.log(friends);
console.log(fisrtElement); 
// Remove Elements
const popped = friends.pop(); // It returns the popped value
console.log(friends);
console.log(popped);  
// Removes First Element
const shifted = friends.shift();
console.log(shifted);
// indexOf returns Index of element in an array
console.log(friends.indexOf('Ganesh'));
console.log(friends.indexOf('Subugade')); // If an element is not in array it returns -1

// includes returns true if the element is present in an array and 
// returns fals if not present.
console.log(friends.includes('Sachin'));
console.log(friends.includes('Subugade'));


// const bill = 430; 
// const tip = bill>= 50 && bill<=300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

const calcTip = function (bill) {
   return bill>= 50 && bill<=300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
console.log(bills, tip, total);


///// Creating Objects

const sachin = {
    firstName: 'Sachin',
    lastName: 'Subugade',
    age: 2021 - 1997,
    job: 'Programmer',
    friends: ['Sachin', 'Asit','Amar','Ganesh','Jayesh']
}
console.log(sachin);
console.log(sachin.lastName);
console.log(sachin['firstName']);

const nameKey = 'Name';
console.log(sachin['first' + nameKey]);
console.log(sachin['last' + nameKey]);

// const userInput = prompt('What do you want to know about Sachin? Choose between firstName, lastName, age, job, friends');
// if(sachin[userInput]){
// console.log(sachin[userInput]);
// }
// else{
//     console.log('Wrong Request !'); 
// }

sachin.location = 'India';
sachin['instagram'] = '@mesachin';
console.log(sachin);
// Challenge
console.log(`${sachin.firstName} has ${sachin.friends.length} friends, and his best friend is called ${sachin.friends[0]}`);


//this keyword
const sachin = {
    firstName: 'Sachin',
    lastName: 'Subugade',
    birthYear: 1997,
    job: 'Programmer',
    friends: ['Sachin', 'Asit','Amar','Ganesh','Jayesh'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){
    //     return 2021 -birthYear;
    // }

    // calcAge: function(){
    //     console.log(this);
    //     return 2021 - this.birthYear;
    // }
    
    calcAge: function(){
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' :'no'} drivers license.`;
    }
};
console.log(sachin.calcAge());
console.log(sachin.age);
console.log(sachin.age);
console.log(sachin.age);

console.log(sachin.getSummary());




// Coding Challenge #3

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}
console.log(mark.calcBMI());
console.log(john.calcBMI());
// console.log(mark.BMI);
console.log(mark.BMI > john.BMI ? `${mark.firstName} ${mark.lastName}'s BMI(${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s BMI(${john.BMI})` : `${john.firstName} ${john.lastName}'s BMI(${john.BMI}) is higher than ${mark.firstName} ${mark.lastName}'s BMI(${mark.BMI})`);



// For Loop
// For loop keeps running while condition is true

for(let rep = 1; rep <=10; rep++) {
    console.log(`Lifitng weights repetition ${rep} 🏋️‍♂️.`);
} 


// Looping Arrays, Breaking and Counting

const sachin = [
    'Sachin',
    'Subugade',
    2021-1997,
    'Programmer',
    ['Reading Books', 'Watching Movies', 'Playing Cricket'],
    true
];
const types = [];
for(let i = 0; i < sachin.length; i++) {
    // Reading from Array
    console.log(sachin[i], typeof sachin[i]);
    // types[i] = typeof sachin[i];
    types.push(typeof sachin[i]);

}

console.log(types);

const years = [1994,1995,1996,1997,1998];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}
console.log(ages);
// continue and break
console.log('----ONLY STRING----');
for(let i = 0; i < sachin.length; i++) {
    if(typeof sachin[i] !== 'string') continue;

    console.log(sachin[i], typeof sachin[i]);
}

console.log('----BREAK WITH NUMBER----');
for(let i = 0; i < sachin.length; i++) {
    if(typeof sachin[i] === 'number') break;

    console.log(sachin[i], typeof sachin[i]);
}


//// Looping Backwards
const sachin = [
    'Sachin',
    'Subugade',
    2021-1997,
    'Programmer',
    ['Reading Books', 'Watching Movies', 'Playing Cricket'],
    
];

for(let i = sachin.length - 1;i>=0;i--) {
    console.log(i,sachin[i]);
}

// Loop inside a Loop

for(let exercise = 1;exercise < 4;exercise++) {
    console.log(`-----Starting Excercise ${exercise}`);
    for(let rep=1;rep<6; rep++) {
        console.log(`Excercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️.`);
    }
}


let rep = 1;
while(rep<=10) {
    //console.log(`While :Lifitng weights repetition ${rep} 🏋️.`);
    rep++;
}

//Example to understand while loop conditions
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end...');
}
*/

//// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const bills = 430;
const tips = [];
const totals = [];

const calcTip = function (bills) {
    return bills>= 50 && bills<=300 ? bills * 0.15 : bills * 0.2;
 }
 
 
 for(let i = 0; i < bills.length; i++) {
     const tip = calcTip(bills[i]);
     tips.push(tip);
     totals.push(tip + bills[i]);
     
 }
 console.log(tips);
 console.log(totals );

 const calcAverage = function (arr) {
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum = sum + arr[i]
    }
    return sum / arr.length;
 }
 console.log(calcAverage([2,3,7]));
 console.log(calcAverage(tips));
 console.log(calcAverage(totals));