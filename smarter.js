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
for (i = 1; i < 5; i++) {
    numbers.unshift(i);
}
alert(numbers);
var oldNumbers = numbers.slice(4,7);
numbers.splice(4,7);
alert("Old: " + oldNumbers + "New: " + numbers);
numbers[3] = numbers.shift();
alert(numbers.pop());
var realNumber = false;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] == answer1) {
        alert("That's a low number!");
        realNumber = true;
        break;
    }    
}
if (realNumber === false) {
    alert("That's not a real number!");
}
var books = ["matthew", "mark", "luke", "john"];
//alert(books.length + " Books");
var chapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,24,25,26,27,28,29];
//alert(chapters.length + " Chapters");
var verses = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,24,25,26,27,28,29];
//alert(verses.length + " Verses");
var bibleVerses = [];
//alert ("References" + bibleVerses +" ?");
for (var i = 0; i < books.length; i++){
    //alert("books index: " + i);
    for (var j = 0; j < chapters.length; j++){
        //alert("chapter index: " + j);
        for (var k = 0; k < verses.length; k++) {
            //alert("verses index: " + k);
            bibleVerses.push([books[i] + " " + chapters[j] + ":" + verses[k]])
        }
    }
}
alert(bibleVerses[someNum + 1]);
var favBook = prompt("What's your favorite gospel book?", "Matthew");
var favBookLowerCase = favBook.toLowerCase();
//alert(favBookLowerCase);
var firstLetter = favBook.slice(0,1).toUpperCase();
//alert(firstLetter);
var otherLetters = favBook.slice(1, favBook.length).toLowerCase();
//alert(otherLetters);
var favBookCap = firstLetter + otherLetters;
alert(favBookCap);
var bibleIndex = "";
for (var i = 0; i < bibleVerses.length; i++) {
    bibleIndex = bibleIndex + " " + bibleVerses[i];
}
alert(bibleIndex);
var matthewIndex = bibleIndex.indexOf("matthew");
var lastMatthewIndex = bibleIndex.lastIndexOf("matthew");
//alert("index: " + matthewIndex);
//alert("last: " + lastMatthewIndex);
if ( matthewIndex !== -1){
    //alert("Not -1");
    for (var i = 0; matthewIndex <= lastMatthewIndex && matthewIndex !== -1; i++) {
        //alert("Iteration: " + i);
        matthewIndex = bibleIndex.indexOf("matthew");
        bibleIndex = bibleIndex.slice(0,matthewIndex) + "Mat" + bibleIndex.slice(matthewIndex + 7);
        //alert(bibleIndex);
    }
}
alert(bibleIndex);
alert(bibleIndex.charAt(42));
bibleIndex = bibleIndex.replace(/Mat/g, "Mt");
alert(bibleIndex);
