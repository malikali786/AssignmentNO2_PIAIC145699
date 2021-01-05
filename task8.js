/*
Write a program that takes input a number from user & state whether
the number is positive, negative or zero.
*/

var userInput = prompt("Enter the Number");
userInput = Number(userInput);
if (userInput ===0){
    document.write("YOUR HAVE A NUMBER ZERO!");
}else if (userInput<0){
    document.write("YOU HAVE A NEGATIVE NUMBER!");
}else if (userInput>0){
    document.write("YOU HAVE A POSITIVE NUMBER!");
}