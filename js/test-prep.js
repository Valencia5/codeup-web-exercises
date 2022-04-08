//TODO: make it lowercase and string*
//problem 1
// Define a function named lowerCase that takes in an input and returns that input as a string in all lower case letters.
// Returns false if the input passed is not a string.
//1name the function
//2. it takes an input
//3. returns input in string of lowercase
//4. if input passed is not a string, return false

function lowerCase(input) {
    if( typeof input == "string"){
        return (input.toLowerCase())
    }else{
        return false
    }
}
//TODO: return true, all lowercase, and if not, it returns false
//problem 2
// Define a function named isAllLowerCase that takes in a string and returns true if all characters in the string are
// lowercase otherwise it should return false.
//1. create the function
//2. takes a string and returns a boolian
//3. needs to have an if statement
//4. it will be true if all letters in the string are lowercase and false otherwise

function isAllLowerCase(input) {
    if( typeof input == "string" && input === input.toLowerCase()){
        return true
    }else{
        return false
    }
}
//problem 3
//TODO: Define a function named isAllUpperCase that takes in a string and returns true if all characters in the string
// are uppercase otherwise it should return false.
function isAllUpperCase(input) {
    if( typeof input == "string" && input === input.toUpperCase()){
        return true
    }else{
        return false
    }
}
//problem 5
//TODO: Define a function named multiplyBy2 that takes in an input and multiplies it by 2 if the input is numeric.
// If the input is Not A Number, then return false.
//1. create the fucntion
//2. takes and input
//3 returns the input * 2
//4. input must be numeric
//if the input is not a number, return false

function multiplyBy2 (input){
    var makeNumber = parseInt(input)
    if(makeNumber==input){
        return makeNumber * 2
    }else {
        return false
    }
}
//problem 6
//TODO:Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number of hours
// into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.
//1 create function
//2.

function convertHourToSec (hours){
    var makeNum = parseInt(hours)
    if(makeNum==hours && makeNum >= 0){
        return makeNum * 3600
    }else {
        return false
    }
}
//TODO:adding arrays together

var passedNumbers = [1,'2',3,4,5];
var result = 0;
function sumArr(input) {
    input = passedNumbers.map(Number);
    if (input === "") return "sum not available";
    for (var i = 0; i < passedNumbers.length; i++) {
        result += input[i];

    } return result;
}
sumArr(passedNumbers);



//TODO: sort array and find length;

// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7
// some possible test cases to think about:
//     should be called ‘sortArr’
// function should return an array
// function should accept an array
// BONUS thoughts
// what would happen if you had negative numbers in your list
// can you sort and then remove any duplicates (would it be more/less efficient to remove duplicates and then sort?)
// if your array has non-numbers can you still sort the numbers? ex: input:
// [3,“b”,8,5,9,true”,
// 4,“xyz”] expected output: [3,4,5,8,9];


// function sortArr(array){
//     return ([array.sort() & array.length])
// }
// console.log( sortArr([5,8,2,6,9,3,2]))

var myArray= [5,-8,2,6,8,"b",3,2]
var noDupesArray= [];
var result= [];
function sortArray(input) {
    noDupesArray = [...new Set(input)];
    for (var i = 0; i < noDupesArray.length; i++) {
        if ((/[0-9]/.test(input[i]))) {
            result.push(noDupesArray[i])
        }
    }return result.sort();
}
console.log(sortArray(myArray))
//TODO: what to do with neg numbers in the array;

//TODO: how to remove duplicates;
//
//TODO: how to remove non-numbers and convert string number to numbers.






//validation
//TODO: Method 1
function lowerCase(input) {
    console.log(typeof input)
//    object boolean undefined number
    if (typeof input === "object" || typeof input === "boolean" || typeof input === "undefined" || typeof input === "number") {
        return false;
    }
 //TODO: method 2;
//     if (typeof input !== "string") {
//         return false;
//     }
    else {
        // lowercases input, does not check for other inputs
        return input.toLowerCase();
    }
}
//TODO: method 3
function lowerCase(aa){
    if (typeof aa !== 'string'){
        return false;
    }
    else{
        return aa.toLowerCase();
    }
}
console.log(aa);

//TODO: corey's filter method
if ( !(/[0-9]/.test(input))


//TODO: Write a function that accepts a string and returns a map with
// the strings character frequency.

function charFreq(str, letter){
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) == letter){
            count +=1;
        }
    }
    return count
}
console.log(charFreq())


// TODO: 1. Make a function named isOdd(number)
function numberIsOdd(number){
    if ( !(/[0-9]/.test(number)) || number % 2 === 0) {
        return false
    }else {
        return true
    }
        }

//
// TODO: 2. Make a function named isEven(number)
function numberIsEven(number){
    if ( !(/[0-9]/.test(number)) || number % 2 === 1) {
        return false
    }else {
        return true
    }
}

//
// TODO: 3. Make a function named isMultipleOfFive(input)
function idMultipleOfFive(num){
    if ( !(/[0-9]/.test(num)) || num % 5 !== 0  ){
        return false;
    }else{
        return true;
    }
}

//
// TODO: 4. Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n){
    if ( !(/[0-9]/.test(target)) ||  !(/[0-9]/.test(n)) || target % n !== 0 ) {
        return false
    }else{
        return true
    }
}

//
// TODO: 5. Make a function named isVowel(letter)
function isVowelRegEx(char) {
    if (char.length === 1) {
        return /[aeiou]/.test(char);
    } else {
        return false;
    }
}
// TODO: 6. Write a function called first(input) that returns the first character in the provided string.
function first(string){
    return string.charAt(0)
}
// TODO: 7* Create a function that takes in two string inputs.
// -- If the second string input is present in the first, return the first input string with the second input
// string removed from it.
// -- If the second string input is present multiple times in the first, the second string will only be removed where it
// first occurs in the first string.
// -- If the second string input is not present in the first, return the first string as entered in the function.
function ranFunction(str1, str2){

}

// TODO: 8. Make a function named isSpace(letter) that returns if a character is a space character
function isSpace(letter){
    if (letter===" "){
        return true
    }else{
        return false
    }
}

// TODO: 9. Write a function named squareRoot(n) that returns the square root of the input
function squareRoot(n){
    if ( !(/[0-9]/.test(n))) {
        return "invalid input";
    }else if (n>0) {
        return Math.sqrt(n)
    }else{
        return Math.sqrt(n<0 ? n * -1 : n);
    }
}
// TODO: 10* create a function that will return how many whitespace characters are at the beginning of a string
//  (hint: use regex).
function whiteSpace(string){
    //return how many spaces are at the beginning of string
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            count++;
        }
    }
    return count;

// TODO: 11. Write a function named invertSign(number) that returns a negative version of a postive number, a positve
//  version of negative, and false for all else.
//
// TODO: 12. Write a function named getRandomQuote().
// //   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
// //   getRandomQuote should generate a random number between 0 and the array's length minus 1
// //   use the randomly generated number as your index
// //   return a random quote.
//
// TODO: 13. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers
