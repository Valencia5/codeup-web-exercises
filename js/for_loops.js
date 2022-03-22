"use strict";
//
// //showMultiplicationTable
var myNumber = 1
function showMultiplicationTable(a){
for (a = 1; a <= 10; a++) {
    console.log( "7" + "x" + a + "=" + (7 * a));
}}

showMultiplicationTable(myNumber)
//
// //for (/*initialization*/; /*condition*/; /*increment*/) {
//     // body
// // Use a for loop and the code from the previous lessons to generate 10 random numbers
// // between 20 and 200 and output to the console whether each number is odd or even. For example:
//
// //create a function
// //create a loop that goes through 10 iterations
// //create a random number between 20 and 200
// //assign a number to  variable
// //console,log
//
for (var i =1; i <= 10; i++ ){
    var random=Math.floor( Math. random() * 200) +20;
    if (random % 2===0){
    console.log(random +" is even")
    }else{ console.log(random + "is odd")
}
}

//Number pyramid

for(var i=1; i<=9; i++){
    var Num='';
    for(var j=0; j<i; j++){
        Num += i;
    }
    console.log(Num) }

