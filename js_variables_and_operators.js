//variables - containers to store data values
var num1 = 14;
var num2 = 23;
console.log(num1 * num2);
// prints the output 14*23 in console

// multi line comments in js: use   /* ............. */ or just select lines and use Ctrl + \   


//Data types in js:
//Numbers
var a = 124;
var b = 42.35;

//strings
var str1 = "Kasa kay bhau?";
var str2 = "Aajcha divas laich bhaari!!";
var str3 = "This is a string";
var str4 = 'This is also a string';

//objects
var cost = {
    coffee: 15.89,
    tea: 89.21,
    bru: 12.12
}

console.log(cost);

// here if you keep semicolon after each sentence or not doesn't matter but its better to keep as a habit from cpp!

//boolean functions
var q = true;
var w = false;
console.log(q);
console.log(w);
console.log(q, w);

//undefined - where the value is not defined, it means that if you don't assign any value to var, then it will show undefined!
var babu;
console.log(babu);

//null
var chotu = null;
console.log(chotu);

/* at a very high level, there are 2 types of data types in JS:
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

//creating array in JS
var arr = [1, 3, 5, 7, 9]
console.log(arr);
console.log(arr[0]);
//you can access the array elements just ike in other prog languages

var arr2 = [1, "shona", 5, "bunty", 9, "chapri", 13]
console.log(arr2)


//OPERATORS IN JS:
//Arithmetic Operators:
var a = 23;
var b = 12;

console.log("The value of a+b is: ", a + b);
console.log("The value of a-b is: ", a - b);
console.log("The value of a*b is: ", a * b);
console.log("The value of a/b is: ", a / b);

//Assignment operators:
var c = b;
c += 2;
c -= 2;
c *= 2;
c /= 2;
console.log(c)

//Comparison Operators
var x = 56;
var y = 49;
console.log(x == y) // returns false as x is not equal to y
console.log(x >= y) // returns true as x is greater than y
console.log(x <= y) // returns false as x is not less than y

//Logical operators:
//logical and:
console.log(true && true)
console.log(false && true)
console.log(true && false)
console.log(false && false)

//logical or:
console.log(true || true)
console.log(false || true)
console.log(true || false)
console.log(false || false)

//logical not:
console.log(!false)
console.log(!true)

