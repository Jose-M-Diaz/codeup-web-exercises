'use strict';

var img = document.querySelector('#human')
var cImg = document.querySelector('#skynet')
let playerScore = 0;
let pcScore = 0;

$( document ).ready(function() {
    console.log( "ready!" );

    function computerChoice() {
        var pcChoices = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
        var randomChoice = Math.floor(Math.random() * pcChoices.length);

        return pcChoices[randomChoice];
    }

    $("#scissors").on('click', function(){
        var result = compare('scissors', computerChoice());
        img.src = 'img/cutman.png';
        $("#decision").html(result);
    });

    $('#rock').on('click', function(){
        var result = compare('rock', computerChoice());
        img.src = 'img/rock.png';
        $("#decision").html(result);
    });

    $('#paper').on('click', function(){
        var result = compare('paper', computerChoice());
        img.src = 'img/paperscroll.png';
        $("#decision").html(result);
    });
    $('#lizard').on('click', function(){
        var result = compare('paper', computerChoice());
        img.src = 'img/lizard.png';
        $("#decision").html(result);
    });
    $('#spock').on('click', function(){
        var result = compare('paper', computerChoice());
        img.src = 'img/spock.png';
        $("#decision").html(result);
    });


    var compare = function(player, computer) {
        if(player === 'rock') {

            if(computer === 'rock') {
                return 'Tie';
            } else if (computer === 'paper') {
                return 'My rock lost to paper :(';
            } else if (computer === 'scissors') {
                return 'My rock crushed scissors! >:)';
            }

        } else if (player === 'paper') {

            if(computer === 'paper') {
                return 'Tie';
            } else if (computer === 'rock') {
                return 'My paper beat rock :)';
            } else if (computer === 'scissors') {
                return 'My paper got cut by scissors! >:)';
            }
        } else if (player === 'scissors') {

            if(computer === 'scissors') {
                return 'Tie';
            } else if (computer === 'paper') {
                return 'My scissor beat paper :(';
            } else if (computer === 'rock') {
                return 'My scissor got crushed! >:)';
            }
        } else {
            return "That doesn't make any sense!"
        }
    };

});