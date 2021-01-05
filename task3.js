/*
Run this script, & check whether alert message would be displayed or
not. Record the outputs.
*/
// option a

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}// true displayed

// option b

var b = 82;
if (b++ ===83){
    alert ("given condition for variable b is true");
}//false not displayed

// option c

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}//false not displayed
if (c === 13){
alert("condition 2 is true");
}//true displayed
if (++c < 14){
alert("condition 3 is true");
}//false not displayed
if(c === 14){
alert("condition 4 is true");
}// true displayed

// option d

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}//true displayed

// option e
if (true){

    alert("True");
    }
    if (false){
    alert("False");
    }//true displayed

    // option f

    if("car" < "cat"){

        alert("car is smaller than cat");
        }// logical boolean value conversion displayed

        