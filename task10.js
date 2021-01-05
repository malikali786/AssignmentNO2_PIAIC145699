/*
Write a program that
a. Store correct password in a JS variable.
b. Asks the user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then give the
message “ Please enter your password”
ii. Check if both passwords are the same. If they are the
same, show message “Correct! The password you
entered matches the original password”. Show “Incorrect
password” otherwise.
*/

var userPassword = prompt("Enter your Password","Please Enter Your Password");
var correctPassword = Number(123456);
userPassword = Number(userPassword);


if ( userPassword === correctPassword){
    document.write("<h1>Correct!</h1> The password you entered matches the origional password.");
}else if (userPassword!== correctPassword){
    document.write("Incorrect Password.");
}