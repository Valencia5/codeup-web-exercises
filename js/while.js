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




var amtToSell=Math.floor(Math.random() * 50) + 50;
var amtBought;

do{
    amtBought=Math.floor(Math.random() * 5) + 1;
    amtToSell-=amtBought;
    console.log(amtBought + " cones sold");
}while (amtToSell> amtBought);
console.log("amtToSell after the loop: ", amtToSell)
console.log("amtBought: " + amtBought);

// }
// Miltiplacatin table
// or (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log("----------------");
// }