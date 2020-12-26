var readlineSync = require("readline-sync");
var chalk = require("chalk");


var userName = readlineSync.question(chalk.red("What is your name? "));

console.log(chalk.bgBlack("Welcome " + userName));

  function play(question) {
    var userYear = readlineSync.question(chalk.greenBright
    (question));
    if(isNaN(userYear)){
      console.log(chalk.bgRed("Error: You have entered wrong type")); 
    }else {
        if(userYear % 4 === 0 && userYear % 100 !== 0 || userYear % 400 === 0){
        console.log("Yay! it's a leap year");
      }else{
        console.log("Sorry! not a leap year");
      }
    }
  }


var question ="Is your birth year is a leap year? ";

play(question);

