/*
Write a program that checks whether the given input is an even
number or an odd number.
*/
var userInput = prompt("ENTER THE NUMBER");
userInput = Number(userInput);
if ((userInput%2)===0){
    document.write("YOUR NUMBER IS EVEN");
}else if ((userInput%2)!==0){
    document.write("YOUR NUMBER IS ODD");
}