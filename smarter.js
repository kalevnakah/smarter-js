var greeting = "Hello World!"

function chapter1_25() {
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
}
function chapter26_35() {
    alert("Round 2.51 " + Math.round(2.51) + " " + Math.ceil(2.51) + " " + Math.floor(2.51));
    alert("Dice Roll: " + Math.floor((Math.random() * 6) + 1));
    alert("Dice Roll: " + Math.floor((Math.random() * 6) + 1));
    alert("Dice Roll: " + Math.floor((Math.random() * 6) + 1));
    alert(("42" + 42) + " " + ("42" - 5) + " " + (parseInt("42") + 42) + " " + (parseFloat(1.2345) + 42));
    var stringNumber = 42;
    var numberNumber = stringNumber.toString();
    alert("This number was a number: " + numberNumber);
    var tax = .0675;
    var value = 10.00;
    var total = value * tax;
    var prettyTotal = total.toFixed(2);
    alert("$" + prettyTotal);
    var dayOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var now = new Date();
    var today = now.getDay();
    alert("Today is: " + dayOfTheWeek[today]);
    var msDiff = new Date("February 5, 2021").getTime() - new Date().getTime();
    alert("My B-Day is " + Math.floor(msDiff/(1000*60*60*24)) + " days away!");
}
function chapter36_44() {
    function chapter36(d, s, num) {
        alert(d + " " + s + " " + num);
    }
    var d = "Sunday";
    var s = "is a day of rest";
    var num = 7;
    chapter36(d,s,num);
    function chapter37(d,s,num){
        return (d + " " + s + " " + (num - 1));
    }
    alert(chapter37(d,s,num));
    var currentChpt = 38;
    function chapter38(chpt) {
        var chpt38 = chpt;
        return chpt38;
    }
    alert("Chapter " + chapter38(currentChpt) + " completed!");
    var dayOfWk = "Sun";
    switch(dayOfWk) {
        case "Sun":
            alert("Church Day");
            break;
        case "Mon":
            alert("Should of stayed in bed");
            break;
        case "Wed":
            alert("The other church day");
            break;
        case "Fri":
            alert("Whoopie!");
            break;
        case "Sat":
            alert("Day of Rest");
            break;
        default:
            alert("Just another day");
            break;
    }
    var whileCounter = 3;
    while (whileCounter >= 0) {
        alert("Count Down : " + whileCounter);
        whileCounter--;
    }
    var doCounter = 3;
    do {
        alert("I run this code once every time! " + doCounter);
        doCounter++;
    } while (doCounter <= 2); 
    /* Muti-Line
    Comment
    Goes
    Here */
}

