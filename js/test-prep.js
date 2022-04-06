
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


function sortArr(array){
    return ([array.sort() & array.length])
}
console.log( sortArr([5,8,2,6,9,3,2]))

//TODO: what to do with neg numbers in the array;

//TODO: how to remove duplicates;

//TODO: how to remove non-numbers and convert string number to numbers.










