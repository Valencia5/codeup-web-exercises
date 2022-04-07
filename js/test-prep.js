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

// TODO: same thing as last but with array

