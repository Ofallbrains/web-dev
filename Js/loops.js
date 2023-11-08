// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}

// program to display numbers from 1 to 5
const m = 5;

// looping from i = 1 to 5
for (let i = 1; i <= m; i++) {
    console.log(i);     // printing the value of i
}

// program to display the sum of natural numbers
let sum = 0;
const j = 100

// looping from i = 1 to j
for (let i = 1; i <= j; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);

// also written like this
let tot = 0;
const o = 100;

// looping from i = n to 1
// in each iteration, i is decreased by 1
for(let i = o; i >= 1; i-- ) {
    // adding i to sum in each iteration
    tot += i; // tot = tot + i
}

console.log('sum:',sum);