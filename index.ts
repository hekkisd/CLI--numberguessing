//!# /usr/bin/env node

import inquirer from  "inquirer";

const randomNumber = Math.floor(Math.random() *12 + 1);


const answer = await inquirer.prompt([
 {
    name: "userGuessedANumber",
   type:"number",
   message: "please guess a number between 1-12"
  }
]);
if(answer.userGuessedANumber === randomNumber){
    console.log("congratulation you gussed a right number");
}else {
    console.log("sorry you gussed a wrong number");
}

