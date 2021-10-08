"use strict";
console.log("Hello from external JavaScript");

var welcomeAlert =alert("Welcome to my Website!");
console.log(welcomeAlert);

var favoriteColor = prompt("What is your favorite color?");
console.log("Ha! " + favoriteColor + " is my favorite color too.");


// 1st Exercise
var pricePerDay = 3;
var mermaid = prompt("How Many days did you rent The Little Mermaid?");
console.log(mermaid + " days");
var broBear = prompt("How many days did you rent Brother Bear?");
console.log(broBear + " days");
var hercules = prompt("How many days did you rent Hercules?");
console.log(hercules + " days");
var totalCost = (parseInt(mermaid) + parseInt(broBear) + parseInt(hercules)) * pricePerDay;
var totalCostAlert = alert("Your total for the rentals is " + "$"+totalCost);
console.log(totalCostAlert);


// 2nd Exercise
var googleHourly = prompt("How much does Google pay you an hour?");
console.log(googleHourly);
var googleHours = prompt("How many hours did you work at Google?");
console.log(googleHours);
var amazonHourly = prompt("How much does Amazon pay you an hour?");
console.log(amazonHourly);
var amazonHours = prompt("How many hours did you work at Amazon");
console.log(amazonHours);
var facebookHourly = prompt("How much does Facebook pay you an hour?");
console.log(facebookHourly);
var facebookHours = prompt("How many hours did you work at Facebook?");
console.log(facebookHours);
var totalPaycheck = (parseInt(googleHourly) * parseInt(googleHours)) + (parseInt(amazonHourly) * parseInt(amazonHours)) + (parseInt(facebookHourly) * parseInt(facebookHours));
var totalPaycheckAlert = alert("You will receive a total of " + "$"+totalPaycheck + " this week.");
console.log(totalPaycheckAlert);


// 3rd exercise
var enrollment = confirm("Are you interested in enrolling for class?");
console.log(enrollment);
var classFull = confirm("Is the class you are interested in, currently full?");
console.log(classFull);
var scheduleConflict = confirm("Does the class start time conflict with your schedule?");
console.log(scheduleConflict);
var enrolled = (classFull || scheduleConflict);

if (enrolled) {
    alert("Sorry, can not register at this time")
    console.log(enrolled);
} else {
    alert("Congratulations, you have enrolled successfully.")
    console.log(enrolled);
}


// 4th exercise
var premiumMembership = confirm("Are you a premium member?");
console.log(premiumMembership);
var items = prompt("How many items are you purchasing today?")
console.log(items);
var cart = items >= 2;
var productOffer = confirm("Is the offer still valid");  //better to have true value be better path.
console.log(productOffer);
var discount = (premiumMembership && productOffer) || (cart && productOffer);

if(discount) {
    alert("Discount Applied")
    console.log(discount);
} else if (discount) {
    alert("Unfortunately you do not have enough items and/or offer has expired.")
    console.log(discount);
} else {
    alert("Unfortunately you do not have enough items and/or offer has expired.");
    console.log(discount);
}
