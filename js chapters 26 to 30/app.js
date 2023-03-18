
// --------------- Qustion No 1 ------------------

// var input = prompt("Enter a positive itergar");

// document.write("<h2>Number: " + input +  "<h2>");


// document.write("<h2>Round off value: " + Math.round(input) +  "<h2>");
// document.write("<h2>Ceil value: " + Math.ceil(input) +  "<h2>");
// document.write("<h2>Floor value: " + Math.floor(input) +  "<h2>");





// --------------- Qustion No 2 ------------------

// var input = prompt("Enter a Negative itergar");

// document.write("<h2>Number: " + input +  "<h2>");


// document.write("<h2>Round off value: " + Math.round(input) +  "<h2>");
// document.write("<h2>Ceil value: " + Math.ceil(input) +  "<h2>");
// document.write("<h2>Floor value: " + Math.floor(input) +  "<h2>");




// --------------- Qustion No 3 ------------------

// var input = prompt("Enter a value");

// document.write("<h2>The absolute value of  " + input + " is " + Math.abs(input) +  "<h2>");




// --------------- Qustion No 4 ------------------

// var random = Math.random() * 6;
// var dice = Math.round(random);

// document.write("<h2>Random dice value :  " + dice + "<h2>");





// --------------- Qustion No 5 ------------------

// var random = Math.random() * 2;
// var dice = Math.round(random);

// if(dice === 2){
//     document.write("<h2>Random dice value ===>>  Heads <h2>");

// }else{
//     document.write("<h2>Random dice value ===>>  Tails <h2>");

// }





// --------------- Qustion No 6 ------------------

// var random = Math.random() * 100;
// var num = Math.round(random);

// document.write("<h2>Random Number between 1 to 100 :  " + num + "<h2>");






// --------------- Qustion No 7 ------------------


// var weightInput = prompt("What is your weight?");


// var weightRegex = /^(\d+(?:\.\d+)?)\s*(?:kgs?|kilograms?)?$/i;
// var match = weightInput.match(weightRegex);
// var weight = null;
// if (match) {
//   weight = parseFloat(match[1]);
//   if (isNaN(weight)) {
//     weight = null;
//   }
// }

// // Display the user's weight in the browser
// if (weight !== null) {
//   document.write(`Your weight is ${weight} kilograms.`);
// } else {
//   document.write("Invalid weight input.");
// }






// --------------- Qustion No 8 ------------------


// var secretNumber = Math.floor(Math.random() * 10) + 1;


// var userInput = prompt("Guess a number between 1 and 10:");


// let userNumber = Number(userInput);


// if (userNumber === secretNumber) {
  
//   document.write("Congratulations! You guessed the secret number. "+ userInput);
// } else {
  
//   document.write(`Sorry, the secret number was ${secretNumber}. Please try again.`);
// }
