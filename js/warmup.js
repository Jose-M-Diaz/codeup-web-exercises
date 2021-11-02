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

var circle = {
    radius: 36
}
var area = Math.round(Math.PI * (Math.pow(circle.radius, 2)));
    console.log(area);

    var groceries = [
        {
            name: "carrots",
            quantity: 5
        },{
            name: "yams",
            quantity: 50
        },{
            name: "oranges",
            quantity: 9
        },{
            name: "onions",
            quantity: 2
        },{
            name: "cucumbers",
            quantity: 6
        },{
            name: "potatoes",
            quantity: 8
        }
    ];
function getHighestCount(array){
    var obj = {
        name: 'something',
        quantity: 0
    }
    array.forEach(function(el){
        if(el.quantity > obj.quantity){
            obj = el;
        }
    });
    return obj;
}
console.log(getHighestCount(groceries));


})();


