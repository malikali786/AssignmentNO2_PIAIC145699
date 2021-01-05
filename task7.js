/*
Write a program to create a calculator for +,-,*, / & % using if
statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.
*/

var firstInput = prompt("Enter The First Number");
firstInput = Number(firstInput);
var secondInput = prompt("Enter The Second Number");
secondInput = Number(secondInput);
var operation = prompt( "Which operation to be performed");

if (operation==="+"){
    document.write("Addition of Both Numbers is:", firstInput+secondInput);
}else if (operation==="-"){
    document.write("Subtraction of Both Numbers is:", firstInput-secondInput);
}else if (operation==="*"){
    document.write("Multiplication of Both Numbers is:", firstInput*secondInput);
}else if (operation==="/"){
    document.write("Division of Both Numbers is:", firstInput/secondInput);
}else if (operation==="%"){
    document.write("Remainder of Both Numbers is:", firstInput%secondInput);
}else if (operation!=="+" && operation!=="-" && operation!=="*" && operation!=="/" && operation!=="%"){
    document.write("INVALID OPERATION!");

}