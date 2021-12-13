'use strict';

/*
// // Arithmatic Operators
const number1 = 20;
const number2 = 10;
const sum = number1 + number2;
const sub = number1 - number2;
const multiply = number1 * number2;
const divide = number1 / number2;
const power = 3 ** 2;

// console.log(`Addition:`+ sum ,`Substraction:`+ sub, `Multiplication:`+ multiply,`Division:`+ divide,`Power:`+ power);

//Fundamentals 1 - Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// GOOD LUCK 😀


const marksMass =78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsHeight = 1.95;

const markBMI = marksMass / marksHeight ** 2;
const johnBMI = johnsMass / johnsHeight ** 2;
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
const johnHigherBMI = johnBMI > markBMI;

console.log(markHigherBMI, johnHigherBMI);



//Fundamentals 1 - Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement 😉

// GOOD LUCK 😀

const marksMass =78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsHeight = 1.95;

const markBMI = marksMass / marksHeight ** 2;
const johnBMI = johnsMass / johnsHeight ** 2;
if(markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI}).`);
}
else{
    console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI}).`);
}


//Fundamentals 1 - Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// GOOD LUCK 😀

const dolphinAvg = (97 + 112 + 101) / 3;
const koalasAvg = (109 + 95 + 123) / 3;

if (dolphinAvg > koalasAvg) {
    console.log('Dolphins are winners !');
}
else if (koalasAvg > dolphinAvg) {
    console.log('Koalas are winners !');
}
else {
    console.log('DRAW !!');
}
// BONUS 1
if (dolphinAvg > koalasAvg && dolphinAvg >= 100) {
    console.log('Dolphins are winners !');
}
else if (koalasAvg > dolphinAvg && koalasAvg >= 100) {
    console.log('Koalas are winners !');
}
// BONUS 2
else if(dolphinAvg === koalasAvg && dolphinAvg >= 100 && koalasAvg >= 100) {
    console.log('DRAW !')
}
else {
    console.log('No One wins the Trophy !');
}

*/