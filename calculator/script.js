"use strict";

var input = document.getElementById('show-str'),
    answerArea = document.getElementById('answer-area'),
    resultDisplayed = false;
$('.value').click(function (e) {

    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if result is not diplayed, just keep adding
    if (resultDisplayed === false) {
        input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "/") {
        // if result is currently displayed and user pressed an operator
        // we need to keep on adding to the string for next operation
        resultDisplayed = false;
        input.innerHTML += e.target.innerHTML;
    } else {
        // if result is currently displayed and user pressed a number
        // we need clear the input string and add the new input to start the new opration
        resultDisplayed = false;
        input.innerHTML = "";
        input.innerHTML += e.target.innerHTML;
    }
})
$('.operator').click(function (e) {
    console.log(resultDisplayed)

    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if ((lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "/")) {
        var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
        input.innerHTML = newString;
    } else if (currentString.length == 0) {
        console.log("enter a number first");
    } else if (resultDisplayed == true) {
        // console.log("enter a number first");
    } else {

        input.innerHTML += e.target.innerHTML;
    }

});

$('#answer').click(function () {
    if (resultDisplayed == false) {

        var inputString = input.innerHTML;

        var numbers = inputString.split(/\+|\-|\×|\//g);

        var operators = inputString.replace(/[0-9]|\./g, "").split("");

        console.log(inputString);
        console.log(operators);
        console.log(numbers);
        console.log("----------------------------");



        var divide = operators.indexOf("/");
        while (divide != -1) {
            numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
            operators.splice(divide, 1);
            divide = operators.indexOf("/");
        }

        var multiply = operators.indexOf("×");
        while (multiply != -1) {
            numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
            operators.splice(multiply, 1);
            multiply = operators.indexOf("×");
        }

        var subtract = operators.indexOf("-");
        while (subtract != -1) {
            numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
            operators.splice(subtract, 1);
            subtract = operators.indexOf("-");
        }

        var add = operators.indexOf("+");
        while (add != -1) {
            
            numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
            operators.splice(add, 1);
            add = operators.indexOf("+");
        }
        input.innerHTML = inputString + ' = ' + numbers[0]; 
        answerArea.innerHTML = numbers[0]; 
    }
    resultDisplayed = true; 
});

$(".ac-div").click( function () {
    input.innerHTML = "";
    answerArea.innerHTML = "";
})