console.log("Hello from external Javascript!");
alert("Welcome to my Website!");

var userInput = prompt ('what is your favorite color?');
console.log(userInput +  "is my favorite color too!");
alert(userInput + " is my favorite color too!")
var littlerMermaid = prompt("How many days are you renting Little Mermaid?")
var  brotherBear = prompt( "How many days are you renting BrotherBear?")
var hercules = prompt( "How many days are you renting BrotherBear?")
var totalCostOfRentals = (littlerMermaid * 3)+(brotherBear * 3) + (hercules *3)
alert (totalCostOfRentals);

var Google= prompt ( "How many hours did you work for Google?");
var Amazon= prompt ( "How many hours did you work for Amazon?");
var Facebook= prompt ( "How many hours did you work for Facebook?");
var totalWeeklyPay = (Google * 400) + (Amazon * 380) + (Facebook * 350);
alert(totalWeeklyPay);

var classNotFull = true;
var noScheduleConflict= true;
var canEnroll = classNotFull && noScheduleConflict;
alert("You can Enroll!!!");

var moreThanTwo = true;
var notExpired = true;
var premiumMember = true;
var productOffer = moreThanTwo && notExpired || premiumMember
alert ("You are eligible for product offer!");