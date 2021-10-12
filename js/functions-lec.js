'use strict';

// A function is a block of reusable code that performs a specific task.
// functions typically take in an input, and produces an output.

// functions we have used so far: promp(), alert(), parseFloat(), parseInt(), .toFixed(), etc...

// when executing a function, we call the name of the function, inside of the parenthesis we place the argument

//function structure

//function todaysDate(parameters1, parameters2, etc...) {
    //Do something
    //return something
//}

var sayBye = function(name) {
    return 'Goodbye ' + name;
}

//console.log(sayBye(name:'Jose'));

//create a function which takes in two number parameters to find the Hypotenuse angle.
function findHypotenuse(a, b) {
    var result;
    result = Math.sqrt((a * a) +(b * b))
    return result;
}

//Have a triangle with the sides of 4 and 5.
//execute our function to find the hypotenuse.

//Arguments are the values  that are put into the function when executed
console.log(findHypotenuse(4, 5));

function greeting() {
    var firstName = 'David';
    var lastName = 'Stephens';
    return 'Hello ' + firstName + lastName
}
console.log(greeting());
console.log(firstName, lastName);

//Immediately invoked function expression (IFFE)
(function () {
    var ifyVar = 'I am local to IIFE'
})();
console.log(IfyVar); //will not compile due to scope