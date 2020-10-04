var greeting = "Hello World!"
var someNum = 42;
someNum = ++someNum + 3; // 46
someNum = ((someNum + 7) * 7) + 1; // (53*7) = 371 + 372
alert(greeting + " " + someNum); //372
var answer1 = prompt("What is your number?", "42");
if (answer1 == someNum) {
    var myNumber = someNum;
    alert("That's my number too!")
}
