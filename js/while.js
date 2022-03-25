"use strict";

var i = 2;

while (i <= 65536) {
    console.log(i);
    i=i*2;
}




//1. create a while loop
//2. generate a random number between 50 and 100 to know how many cones to sell before you start the loop
//3. create a while loop to generate a number between 1 and 5
//4. creat ea d-wile loop to console log teh ammount of conse sold to each person.




var amtToSell = Math.floor(Math.random() * 50) + 50;

do {
    var amtBought = Math.floor(Math.random() * 5) + 1;
    amtToSell = amtToSell - amtBought;
    // amtToSell--

} while (amtBought < amtToSell)

if (amtToSell > 0) {
    console.log(amtToSell + " cones sold")
} else if (amtToSell >= 0) {
    console.log("sorry, I cant sell you " + amtToSell + "  due to the fact that i om;y have " + amtBought + " availible .")
} else {
    console.log("Awesome, I can finally go home!!! all my cones and go home")
}

// }
// Miltiplacatin table
// or (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log("----------------");
// }




var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var shuffledArray = array.sort((a, b) => 0.5 - Math.random());

console.log()

function mixed(input){
   return input.sort((a, b) => 0.5 - Math.random());
}
console.log(mixed(array))