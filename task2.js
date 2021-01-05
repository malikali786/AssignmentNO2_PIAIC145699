/*
Write a program to take input color of road traffic signal from the user
& show the message according to this table:
*/

var userColor = prompt("Enter the Traffic Signal Color");
var a = "red";
var b = "yellow";
var c = "green";
if (userColor === a) {
    document.write("MUST STOP!");
} else if (userColor === b) {
    document.write("Ready to move");
} else if(userColor === c)
    document.write("MOVE ON!")
