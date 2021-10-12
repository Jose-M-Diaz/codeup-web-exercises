"use strict";
(function() {


/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return 'hello, ' + name;
}
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage = sayHello('Jose Diaz');
console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = 'Jose';
console.log(sayHello(myName));
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(number) {
    return number === 2;
}
//console.log(isTwo(random));
    console.log('The random number is ' +random, isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
 // function calculateTip(percent, bill) {
 //     return percent * bill;
 // }
 // console.log(calculateTip(.20, 20));    //My code
 // console.log(calculateTip(.25, 25.50));
 // console.log(calculateTip(.15, 33.42));

    function calculateTip(tipPercentage, totalAmount) {  //review code
        return tipPercentage * totalAmount;
}
    console.log(calculateTip(.20, 20));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// function calculateTip(percent, bill) {
//     var bill = prompt('How much is the total bill?');
//     var percent = prompt('What percent of tip will you be leaving?'); //My Code
//     return (percent / 100) * bill;
// }
// alert('The total tip you should leave is ' + calculateTip());

    var totalBill = parseFloat(prompt('What is the total Bill?'));
    var amountToTip = parseFloat(prompt('How much would you like to tip?')); // Review Code

    alert('Your total tip is: $' + calculateTip(amountToTip, totalBill).toFixed(2));
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(ogPrice, discount) {
    return ogPrice - (ogPrice * discount);
}
console.log(applyDiscount(45.99,.12));

}());