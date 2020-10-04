var greeting = "Hello World!"
var someNum = 42;
someNum = ++someNum + 3; // 46
someNum = ((someNum + 7) * 7) + 1; // (53*7) = 371 + 372
alert(greeting + " " + someNum); //372
var answer1 = prompt("What is your number?", "42");
var numbers = [someNum, "42"];
if (answer1 == someNum) {
    var myNumber = someNum;
    alert("That's my number too!" + " " + numbers[0]);
}
else if (answer1 === numbers[1]) {
    alert("What is the meaning of life?");
}
else {
    alert("I don't like that number!");
    numbers.push(answer1);
}
alert(numbers);