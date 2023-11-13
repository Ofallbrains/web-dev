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


let d = 1;
const p = 5;

do {
    console.log(d);
    d++;
} while(d <= p);

// program to print the value of i
for (let r = 1; r <= 5; r++) {
    // break condition     
    if (r == 3) {
        break;
    }
    console.log(r);
}