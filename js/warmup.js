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

 var pokemon = {
     name: "Arcanine",
     type: "fire",
     weight: 341.7+"LBs",
     category: "Legendary",
     weakness: "water,ground,rock",
     abilities: "flash fire, intimidate"};
console.log(pokemon);

    var wrestlers = [
        {
            name: "Bret Hart",
            nationality: "Canadian"
        }, {
            name: "Shawn Michaels",
            nationality: "American"
        }, {
            name: "Christian Cage",
            nationality: "Canadian"
        }, {
            name: "Keiji Mutoh",
            nationality: "Japanese"
        }, {
            name: "Eddy Guerrero",
            nationality: "American"
        }, {
            name: "Owen Hart",
            nationality: "Canadian"
        }
    ];
function array(arr) {
    var bucket = []; //something to fill in new items
    arr.forEach(function(element) {
        if (element.nationality === "Canadian") {
            bucket.push(element);
        }
    });
    return bucket;
}
console.log(array(wrestlers));

})();


