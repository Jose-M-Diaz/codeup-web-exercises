'use strict';

$(document).ready(function(){
    $('#btn-1').click(function(){
        $('dd').toggleClass('invisible');
    });

    $('dt').click(function(){
        $(this).toggleClass('highlighter');
    });
//Create a button that, when clicked, makes the last li in each ul have a yellow background.
    $('#btn-2').click(function(){
        $('ul').children(':last-child').css( 'background-color', 'yellow');
    });
//When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this
    $('h3').click(function(){
        $('ul').children().css('font-weight', 'bold');
    });
//When any list item is clicked, first li of the parent ul should have a font color of blue
    $('li').click(function(){
        $('ul').children(':first-child').css('color', 'blue');
    });

});