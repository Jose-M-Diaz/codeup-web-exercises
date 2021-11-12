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

    var products = [
        {
            name: 'Playstation 5',
            price: 599.99
        }, {
            name: 'Logitech Wireless Mouse',
            price: 23.99
        }, {
            name: 'Macbook Pro',
            price: 1099.99
        }, {
            name: 'GoPro HERO10',
            price: 399.99
        }, {
            name: '12" & 6" Metal Ruler Set',
            price: 5.99
        }]
    function sortByName(arr){
            return arr.sort(function(a, b) {
                var aLower = a.name.toLowerCase();
                var bLower = b.name.toLowerCase();

                if(aLower < bLower){
                    return -1;
                }else if(aLower > bLower){
                    return 1;
                }else {
                    return 0;
                }
        });

        }
    console.log(sortByName(products));


    var bBallPlayers = [
        {
            name: "Hakeem Olajuwon",
            height: 213
        }, {
            name: "Muggsy Bogues",
            height: 160
        }, {
            name: "Chris Paul",
            height: 183
        }, {
            name: "Bol Bol",
            height: 218
        }, {
            name: "Moochie Norris",
            height: 185
        }, {
            name: "Manu Ginobili",
            height: 198
        }
    ];
    var lowestHeight = bBallPlayers.filter((bBallPlayer) => {
        return bBallPlayer.height < 180;
    })
    console.log(lowestHeight);

    var myCharacter = {
        name: 'Elven Ranger',
        hitPoints: 100,
        class: 'Warrior',
        abilities: {
            attack: function(obj) {
                console.log(myCharacter.name + " hit " + obj.name + " for " + myCharacter.weapon.damage + ":");
                obj.hitPoints -= myCharacter.weapon.damage;
                console.log(obj.name + " has " + obj.hitPoints + " left.");
            },
        },
        magicPoints: 0,
        weapon: {
            name: 'Silver Sabre',
            damage: 16,
            type: 'sword'
        }
    }

    var enemy = {
        name: 'Savage Orc',
        hitPoints: 100,
        class: 'Warrior',
        magicPoints: 0,
    }
    myCharacter.abilities.attack(enemy);

    function randomEL(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    console.log();
})();


