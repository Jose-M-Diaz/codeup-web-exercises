'use strict';

(function() {

    function timesTwo() {
        var number = 1;
        while (number < 65536) {
            number *= 2;
            console.log(number);
        }
    }

    timesTwo();


    function iceCream() {
        var allCones = Math.floor(Math.random() * 50) + 50;

        do {
            var clientCones = Math.floor(Math.random() * 5) + 1;

            if (allCones < clientCones) {
                console.log("I can't sell you " + clientCones + " I only have " + allCones + " available.");
            continue;
        }
            allCones -= clientCones;
        console.log(clientCones + " cones sold...")
    }

    while (allCones > 0) ;
    console.log("Yay! I sold them all!");
}
iceCream();

}())