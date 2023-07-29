/*
    Thirty days hath September,
    April, June, and November
    All the rest hath 31
    Except February 28 in fine,
    And 29 on leap, because Bill forgot the rhyme.
    https://www.linkedin.com/in/willmilligan/
*/
// January = 1
// February = 2
// March = 3
// April = 4
// May = 5
// June = 6
// July = 7
// August = 8
// September = 9
// October = 10
// November = 11
// December = 12
var monthNum = 3;
var isLeapYear = false;
// Your job is to print the number of days in monthNum.
// Just print it, using console.log
// You only need one if/else structure (maybe with multiple else ifs)
// one more thing!  I need you to put typescriptHello into github.
//      1.  Create a project in github
//      2.  Use the commands in github to connect to your local
//      3.  Push the files from local to github (3 steps)
if (isLeapYear && monthNum == 2) {
    console.log(29);
}
else if (monthNum == 2) {
    console.log(28);
}
else if ((monthNum < 8 && monthNum % 2 == 1) || (monthNum >= 8 && monthNum % 2 == 0)) {
    console.log(31);
}
else {
    console.log(30);
}
