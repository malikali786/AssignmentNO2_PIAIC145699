/*
Write a program that takes a character (i.e. string of length 1) and
returns true if it is a vowel, false otherwise
*/

var alphabet = prompt("ENTER THE ALPHABET!");
if (alphabet =="a"||alphabet=="e"||alphabet=="i"||alphabet=="o"||alphabet=="u"){
    document.write("It's a Vowel, TRUE");
}else {
    document.write("It's a consonants, FALSE");
}