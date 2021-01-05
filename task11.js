/*
Write a program that take time as input from user in 24 hours clock
format like: 1900 = 7pm. Implement the following case using if, else &
else if statements
*/

var time = prompt("Enter the Time");
time = Number(time);
if (time>=0000 && time<1200){
    document.write("Good Morning!");
}else if (time>= 1200 && time< 1700){
    document.write("Good Afternoon!");
}else if (time>= 1700 && time<2100){
    document.write("Good Evening!");
}else if (time >=2100 && time<=2359){
    document.write("Good Night!");
}