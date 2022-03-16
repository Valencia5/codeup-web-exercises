"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
//create function name sayHello
//use the perameter "name"
//return a message that says hello + name
function sayHello(name){
    return "Hello " + name +"!";
}
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage= sayHello("Moses")
console.log(helloMessage)
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
    //create a variable called myName
    //pass input varibale to sayHello function
    //console log function
    var myName = "Moses"
    sayHello(myName)
    console.log(sayHello(myName))
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
//Make a fucntion called isTwo
//give the function a paramater
//return a boolean value on weather or not the number = 2
//call the function and pss the var of random in argurment
//console.log it
//
function isTwo(number){
    if (number===2) {
        return true
    }else{
        return false
    }
}
console.log(isTwo(random))
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
//create function called calculateTip
//need 2 parameters
//needs 2 variables, one for tip and one for total cost
//should return tip percetage
//console.log return
var myTip= 20;
var myBill= 100;
var tipPaid= calculateTip(myBill,myTip);
function calculateTip(total, tip){
    return (tip / 100)* total;
}
console.log('$' + tipPaid);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
//create a prompt asking the percentage they would like to tip
//create alert for the amount they should tip
//create a variable for the user input
//create a function to take user input and change percentage to dollars
// plug the total into calculator anc console.log it

var totalBill = prompt("What is the bill total?");//100
//console.log(typeof totalBill); //string
var totalBillNumber= Number(totalBill);
//console.log(typeof totalBillNumber)
var totalTipPercentage = (prompt("What percentage would you like to tip?"));//10
 //console.log(typeof totalTipPercentage);//number
var totalTipNumber= Number(totalTipPercentage);
//console.log(typeof totalTipNumber);
//var totalTipWholeNumber = totalTipNumber/100;//10/100=10
var feedBackForUser = calculateTip(totalBillNumber,totalTipNumber); //100/10=10
console.log(feedBackForUser);
alert("The total amount that should be tipped is " + "$" +feedBackForUser);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
//create function called "applyDiscount"
//need price before discount applied as a parameter
//creat function that applies discount tp full price
// The return total after discount

var fullPrice= 50;
var totalSavings = .5;

function applyDiscount(price,discount ){
   return fullPrice * totalSavings
}
console.log("$" + applyDiscount() + ".00");