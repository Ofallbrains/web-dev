// check if the number is positive

const number = 2

// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
}
console.log("The if statement is easy");


// check if the number is positive or negative/zero
const num = -2
// check if number is greater than 0
if (num > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}
console.log("The if...else statement is easy");


// check if the number if positive, negative or zero
const numb = 0


// check if number is greater than 0
if (numb > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (numb == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}
console.log("The if...else if...else statement is easy");


// check if the number is positive, negative or zero
const nombre = 5

if (nombre >= 0) {
    if (nombre == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}
