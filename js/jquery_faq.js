'use strict';

$(document).ready(function(){
    $('button').click(function(){
        $('dd').toggleClass('invisible');
    });

    $('dt').click(function(){
        $(this).toggleClass('highlighter');
    })
});