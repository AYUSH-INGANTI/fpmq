// change screen function
function chscreen(value) {
    window.location = value;
}

document.getElementById("text").innerHTML = localStorage.getItem("highscore", highScorebla);
// game
var point = 0;
var highScorebla = localStorage.setItem("highscore", 0);
var number1 = Math.random(1, 10);
var number2 = Math.random(1, 10);
var symbol = Math.random(1, 4);
var symbolbla;
var question = "";
var ans;

if (symbol == 1) {
    symbolbla = "/";
    question = number1 + symbol + number2;
    console.log(question);
}
if (symbol == 2) {
    symbolbla = "/";
    question = number1 + symbol + number2;
    console.log(question);
}
if (symbol == 3) {
    symbolbla = "-";
    question = number1 + symbol + number2;
    console.log(question);
}
if (symbol == 4) {
    if (number1 <= number2) {
        symbolbla = "/";
        question = number2 + symbol + number1;
        console.log(question);
        ans = number2 / number1;
    } else if (number1 > number2) {
        symbolbla = "/";
        question = number1 + symbol + number2;
        console.log(question);
        ans = number1 / number2;
    }
}

document.getElementById("boii").innerHTML = question;

var userans = document.getElementById('answer').value;

if (userans == ans) {
    point = point + 1;
    if (point > highscore) {
        highscore = localStorage.setItem("highscore", point);
    }
}