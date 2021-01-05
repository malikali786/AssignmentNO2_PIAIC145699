/*

Write a program to take “city” name as input from user. If user enters
“Karachi”, welcome the user like this: “Welcome to city of lights”
*/

var city = prompt("ENTER THE NAME OF CITY");
var welcomeCity = "karachi";
if (city === welcomeCity){

    document.write("Welcome to the city of lights");
} else {
    document.write("Your city name is ", city);
}