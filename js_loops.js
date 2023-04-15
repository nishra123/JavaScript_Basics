var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(arr)

// 1. For Loop
// itha size sathi arr.length asta! WITH NO BRACKETS!!!!
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 2. forEach(function()) Loop
var arr1 = [12, 213, 564, 135, 74, 798]
console.log(arr1)

// notice the syntax within brackets!!
arr1.forEach(function (element) {
    console.log(element)
})

//VIP: with "let": you can make temporary variables with block-level scope that only exist dduring the function
// but with var, variables exist in memory - so it is better to use let than using var for variables!!
let j = 0;

//const is used when you have to assign only a single unique value to a variable and you do not want it to be overwritten
// if const variable is overwritten again, then it shows an error!
const a = 1;


// 3. While loop:
let g = 0;
while (g < arr.length) {
    console.log(arr[g]);
    g++;
}

// 4. do while loop:
do {
    console.log(arr[g]);
    g++;
} while (g < arr.length)

//difference between while and do while:
/*
do while at least runs the loop once without checking the condition.
however while loop checks the condition first and then runs the loop.
if the condition becomes false at just the starting, then while loop will return nothing but do while loop will return 'undefined' 
*/


