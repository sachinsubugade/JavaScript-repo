/*
////////////// VALUES AND VARIABLES ///////////////
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = "Sachin";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let sachin_subugade = "Sachin Subugade";
console.log(sachin_subugade);

let $function = 27;
let person = "Sachin";

let myFirstJob = "Programmer";
console.log(myFirstJob);


////////////// DATA TYPES //////////////
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

console.log(typeof "Sachin");
console.log(typeof 24);
console.log(typeof true);

javascriptIsFun = "Yes !";
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(typeof year);

console.log(typeof null);



let age = 23;
age = 24;

const birthYear = 1997;
// birthYear = 1996;
// const job;

var job = "programmer";
job = "teacher";

firstName = "Sachin";
console.log(firstName);



// Mathematical Operators
const now = 2021;
const ageSachin = now - 1997;

console.log(ageSachin , ageSachin);
console.log(ageSachin * 2);
console.log(ageSachin / 2);
console.log(2 ** 3);

const firstName = "Sachin";
const lastName = "Subugade";
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 5 + 10;
x += 20;
x *= 2;
x /= 2;
x++;
x--;
x--;
console.log(x);

// Comparision Values
console.log(ageSachin > 18);
console.log(ageSachin > 50);

console.log(now - 1997 > now - 2000);



/////////////// CODING CHALLENGE 1////////////

const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;
console.log(weightMark, heightMark);
console.log(weightJohn, heightJohn);

const markBMI = weightMark / heightMark ** 2;
console.log(markBMI);
const johnBMI = weightJohn / heightJohn ** 2;
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI ;
const johnHigherBMI = johnBMI > markBMI;
console.log(markHigherBMI);
console.log(johnHigherBMI);



/////////// Strings and Template Literals ///////////

const firstName = "Sachin";
const job = "Programmer";
const birthYear = 1997;
const year = 2021;

const sachin = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(sachin);

///// Template Literal /////
 const sachinNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
 console.log(sachinNew);

 console.log(`Just a regular string !`)

 console.log('String with \n\
 multiple\n\
 lines');

 console.log(`String with
 multiple
 lines`);

 

 /////////// IF/ELSE Statements /////////

 const age = 24;

 if (age >= 18) {
     console.log('Sachin can start with the driving license 🏍🚗');
 }
 else{
     yearsLeft = 18 - age;
     console.log(`Sachin is too young. Wait another ${yearsLeft} years ;)`);
 }

 const birthYear = 1997;
 let century;
 if(birthYear <= 2000){
    century = 20; 
 }
 else{
     century = 21;
 }
 console.log(century);


 ////////// Coding Challenge #2 /////////

const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;
console.log(`Mark's Weight: ${weightMark} and Height: ${heightMark}`);
console.log(`John's Weight: ${weightJohn} and Height: ${heightJohn}`);

const markBMI = weightMark / heightMark ** 2;

const johnBMI = weightJohn / heightJohn ** 2;
if (markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI} is higher than John's (${johnBMI})!)`)
}
else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}


////// Type Conversion
const inputYear = '1997';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 24 );

console.log(Number('Sachin'));
console.log(typeof NaN);

console.log(String(24), 24);

////// Type Coercion

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23'/'2');

let n = '1' + 1;
n = n - 1;
console.log(n);



///// 5 falsy values: 0, '', undfined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sachin'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money){
    console.log("Don't spend it all!");
}
else{
    console.log("You should get a job");
}

let height = 150;
if(height){
    console.log("Height is Defined!");
}
else{
    console.log("Height is UNDEFINED!");
}


/////////// Equality Operators ==(loose) Vs ===(Strict )

const age = 18;
if (age === 18) console.log("You'r just became an adult! (Strict)");

if (age == 18) console.log("You'r just became an adult! (Loose)");

const favourite = Number(prompt("What is your favourite number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 24){
    console.log("Cool! 24 is an amazing");
}
else if(favourite === 10){
    console.log("10 is also a cool number");
}

if (favourite !== 24){
    console.log("Why not 24 ?");
}


////////// Logocal Operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired){
    console.log("Sachin is able to drive");
}
else{
    console.log("Someone else should drive...");
}


///////////// Coding Challenge #3

// const scoreDolphin = 96 + 108 + 89;
// const scoreKoalas = 88 + 91 + 110;
// const averageDolphin = scoreDolphin / 3;
// const averageKoalas = scoreKoalas / 3;
// console.log(averageDolphin, averageKoalas);

// if (averageDolphin > averageKoalas){
//     console.log("Dolphin is a winner !");
// }
// else if (averageDolphin < averageKoalas) {
//     console.log("Koalas is a winner !");
// }
// else if(averageDolphin === averageKoalas) {
//     console.log("Draw!");
// }

///////// BONUS 1

const scoreDolphin = 97 + 112 + 101;
const scoreKoalas = 109 + 95 + 106;
const averageDolphin = scoreDolphin / 3;
const averageKoalas = scoreKoalas / 3;
console.log(averageDolphin, averageKoalas);

if (averageDolphin > averageKoalas && averageDolphin >= 100){
    console.log("Dolphin is a winner🏆 !");
}
else if (averageDolphin < averageKoalas && averageKoalas >= 100) {
    console.log("Koalas is a winner🏆 !");
}
else if(averageDolphin === averageKoalas && averageDolphin >=100 && averageKoalas >= 100) {
    console.log("Both wins Trophy🏆 !");
}
else{
    console.log("No teams wins a Trophy🏆");
}


/////////// Switch Case

const day = 'sunday';

switch (day){
    case 'monday':
        console.log("Plan Study time");
        console.log("Work on Communication skills");
        break;
    case 'tuesday':
        console.log("Do coding practice");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Do Excercise !");
        break;
    case 'friday':
        console.log("Prepare aptitude");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend!");
        break;
    default:
        console.log("Not a Valid Day!");
}

///// Above conditions using If/Else
if(day === 'monday'){
    console.log("Plan Study time");
        console.log("Work on Communication skills");
}
else if(day === 'tuesday'){
    console.log("Do coding practice");
}
else if(day === 'wednesday' || day === 'thursday'){
    console.log("Do Excercise !");
}
else if(day === 'friday'){
    console.log("Prepare aptitude");
}
else if(day === 'saturday' || day === 'sunday'){
    console.log("Enjoy the weekend!");
}
else{
    console.log("Not a Valid Day!");
}


/////////// The Conditional(Ternary) Operator

const age = 24;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water💧💦');

const drink = age >= 18 ? 'wine 🍷' : 'water💧💦' ;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
}
else{
    drink2 = 'water💧💦'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water💧💦'}`);




/////////// Coding Challenge #4

// const bill = 430;
// const tip15 = (bill * 15) / 100;
// const tip20 = (bill * 20) / 100;
// let tip;
// console.log( `${bill > 50 && bill < 300}` ? `The bill was ${bill}, the tip was ${tip15} and the total value ${bill + tip15}` : `The bill was ${bill}, the tip was ${tip20} and the total value ${bill + tip20} ` );

const bill = 430; 
const tip = bill>= 50 && bill<=300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/
