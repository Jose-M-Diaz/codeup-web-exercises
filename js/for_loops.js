'use strict';

(function() {

function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        var result = i * num;
        console.log(num + " * " + i + " = " + result);
    }
}
showMultiplicationTable(7);

function showEvenOrOddNumber() {
    for (var x = 1; x <=10; x++) {
        var randomNum = Math.floor(Math.random() * 200) + 20;
        if (randomNum % 2 === 0) {
            console.log(randomNum + " is even");
        } else if (randomNum === 0) {
            console.log(randomNum + " is even");
        } else {
            console.log(randomNum + " is odd");
        }
    }
}
showEvenOrOddNumber();

function numberPyramid() {
    for (var i = 1; i <= 9; i++) {
        var space = "";
       for (var j = 1; j <= i; j++) {
           space += i;
       }
        console.log(space);
    }
}
numberPyramid();

function minusFive() {
    for (var i = 100; i >= 5; i -=5) {
        console.log(i);
    }
}
minusFive();
}())