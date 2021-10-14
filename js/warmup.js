'use strict';
(function(){
    function returnSeven() {
        return 7;
    };
    console.log(returnSeven());

    if (false) {
        console.log('Am I seen?');
    }

    // 10/14/2021
    var hadBreakfast = Boolean(Math.round(Math.random()));
    var hadBreakfastMessage = (hadBreakfast) ? "I had a delicious breakfast!" : "I could really go for some iHop breakfast";
    console.log(hadBreakfastMessage);

})();


