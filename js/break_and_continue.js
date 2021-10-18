'use strict';

(function() {

function skip () {
    var input;
    while(true) {
        input = prompt("Enter an odd number between 1 and 50.");
        if(input % 2 !== 0 && input > 0 && input < 51) {
            break;
        }
    }
    console.log("Number to skip is: " + input);

    for(var i = 1; i <=50; i += 2) {
        if(i == input) {
            console.log("Yikes! skipping number: " + i);
            continue;
        }
        console.log("Here is an odd number: " + i);
    }
}
skip();


}());