/*
Write a program to take input the marks obtained in three subjects &
total marks. Compute & show the resulting percentage on your page.
Take percentage & compute grade as per following table:
*/

var subject_1Marks= prompt("ENTER THE FIRST SUBJECT MARKS");
var subject_2Marks= prompt("ENTER THE SECOND SUBJECT MARKS");
var subject_3Marks= prompt("ENTER THE THIRD SUBJECT MARKS");
var totalMarks = 300;
// marks obtained in three subjects
var sumObtained = Number(subject_1Marks)+Number(subject_2Marks)+Number(subject_3Marks);
// total percentage of obtained marks
var percentage = (sumObtained/totalMarks)*100;
document.write("<h1> Marks Sheet </h1>");
document.write("Total marks:", totalMarks);
document.write("<br> Marks obtained:", sumObtained);
document.write("<br> Percentage:", percentage);

if (percentage >= 80 && percentage<=100){

    document.write("<br>Grade : A-one");
    document.write("<br>Remarks: Excellent");
    
}else if (percentage >= 70 && percentage < 80){
    document.write("<br>Grade : A");
    document.write("<br>Remarks: Good");
}else if ( percentage >= 60 && percentage <70){
    document.write("<br>Grade : B");
    document.write("<br>Remarks: You need to improve");
} else if (percentage< 60){
    document.write("<br>Grade : Fail");
    document.write("<br>Remarks: Sorry");
} else {
    document.write("<br>ADDED AN INVALID NUMBER");

}