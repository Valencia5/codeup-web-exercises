"use strict"
console.log("hello World");

//TODO: Add an alert to tell you the DOM has finished loading. Check for expected results.

// $(document).ready( function (){
//     alert( " The DOM has finished loading!!!")
// })

//Todo: ID selectors

// var fortWorth = $('#hometown').html();
//     alert(fortWorth);

// //more than one ID with the same name will cause only the first ID to run.
// var worstCity = $('#worst').html();
// alert(worstCity);
//
// var fav= $('#loveThisPlace').html();
// alert(fav)


// Todo: Class Selectors

// $('.codeUp').css('border','1px solid red');
// $('p').css('font-size', '14px');

// Todo: Element Selectors
// $("li").css('font-size', '20px')
//
// $("h1, p, li").css("background-color", "yellow")
//
// var alertH1 = $("h1").html();
// alert( alertH1)

// Todo: Mouse Events
$("h1").click(function() {
    $(this).css("background-color", "red").css('color', 'white')
});

$("p").dblclick(function () {
    $('p').css("font-size","18px").css('font-weight', 'bolder').css('text-decoration', 'underline')
});

$('li').hover(function () {
    $(this).css('background-color', 'red').css('color', 'black')
},
    function () {
    $(this).css('background-color', 'black').css('color','white').css('font-size', '50px')

    });

