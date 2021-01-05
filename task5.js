/*
Store a secret number (ranging from 1 to 10) in a variable. Prompt
user to guess the secret number.
*/

var secretNumber = 5;
var userGuess = prompt("GUESS THE NUMBER FROM 1 TO 10");
userGuess = parseInt(userGuess);

if (userGuess===secretNumber){
    document.write("<h1>Bingo!</h1> CORRECT ANSWER!");
}else if ((userGuess+1)===secretNumber){
    document.write("Close enough to the CORRECT ANSWER!");
}else if (userGuess!==secretNumber){
    document.write("TRY AGAIN!")
}
