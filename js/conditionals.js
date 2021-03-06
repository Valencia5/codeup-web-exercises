"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
    //1.Make a function called analyze color
    //2. make a parameter the name of a color in string form
    //3. return a statement related to the color
    //4. else, return a string stating those colors are not there

function analyzeColor(colorName){
    var result;
    if (colorName == "red"){
        result="Roses are red";
    }else if (colorName == "green"){
        result="Cash is green$$$"=
    }else{
        result= "IDK that color"
    }
    return result;
}
console.log(analyzeColor("green"))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//1. use random color variable in the analyzeColor function
//2. console.log the function
//3. see results change
// console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//1, create a function called analyzeColor
//2. Make parameter colorName
//3. Use switch instead of if statement
//4. return statement related to color
//5.
function analyzeColor(colorName){
    var result= '';
    switch(colorName) {
        case "red":
            result="Roses are red"
                break;
        case "green":
            result="Cash is green$$$";
            break;
        default:
            result= "idk that color!!";
    }
return result;
}
console.log(analyzeColor("red"));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//1. create a prompt that requests a color
//2. use input in analyzeColor function
//3. create alert to toeel the user the input from teh function

// var userInput = prompt('What color are you thinking of?')
console.log(userInput)
alert(analyzeColor(userInput))
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// create a variable for a lucky number between 0-5
// create a conditional that goes through all the lucky number possibilities within the function
// write a function called calculateTotal
// creat two paramters that are luckyNumber and totalAmount

var total = prompt("what is the total amount?")
function calculateTotal(luckyNumber, totalAmount){
    if (luckyNumber===1){
        return  (totalAmount-(totalAmount *.1))
    } else if (luckyNumber===2){
       return (totalAmount (totalAmount*.25))
    } else if (luckyNumber ===3) {
        return (totalAmount (totalAmount *.35))
    } else if (luckyNumber ===4) {
        return (totalAmount (totalAmount *.5))
    } else if (luckyNumber===5){
        return (totalAmount)
    }else{
        return totalAmount
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// //Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
console.log(calculateTotal(luckyNumber,total))
// var finalPrice = calculateTotal(luckyNumber,total)
// alert("Your lucky number is " + luckyNumber);
// alert("your original price was " + "$" + total)
// alert("your final price is " + "$" +finalPrice)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//create a confirm asking if they would like to enter a number
//if ok, prompt the user to enter a number
// create a function telling the user if the number is even or odd
//alert the user the result of the function
//creat a function that takes the user input and adds 100 is
// create an alert tellling the result of the function
// create a function that takes the user input and tell if the number is negitive or positive.
//create an alert that returns weather the input was negitive or positive

var enterNumber= confirm("would you like to enter a number?");

if (enterNumber===true){
    var userInputNumber= Number(prompt("please enter the number:"))
} else{
    console.log("user chose not to enter a number")
}

function evenOdd(userInput){
    if (userInput % 2 ===1){
        return alert("The number you chose is odd")
    } else if (userInput % 2 ===0){
        return alert("The number you chose was even")
    } else {
        return alert("The input is invalid")
    }
}
console.log(evenOdd(userInputNumber))

function plusHund(userInput, nubToAdd){
return userInput + nubToAdd
}
alert("The Number you chose plus one hundred is equal to " + plusHund(userInputNumber,100))

function negPos(input){
    if (input < 0){
        return alert( "The number you chose is a negative number!!!")
    }else if (input > 0){
        return alert ("The number you have chosen is positive!!!")
    }else{ alert("The input is invalid")}
}
console.log(negPos(userInputNumber))
//done