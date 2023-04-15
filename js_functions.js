//function 1
function avg(a, b) {
    return (a + b) / 2;
}

q = avg(10, 20);
w = avg(21, 34);
console.log(q, w);

//function 2
function Voter_Age(a) {
    if (a >= 18) {
        return true;
    }
    else {
        return false;
    }
}

c = Voter_Age(17.5)
console.log(c)


// functions - DRY Principle
// DRY  - Do Not Repeat Yourself!

// if you see blue colour in chrome console means it is a number
// if you see black colour in chrome console means it is a string
console.log(7)
console.log('7')
// colours may very from theme to theme



// JS ARROW FUNCTIONS:
function sum(a,b){
    return a+b;
}

sum = (a,b)=>{
    return a+b;
}

//these two are equivalent!


// SetTimeout and setInterval

PairPado = ()=>{
    console.log("Chal paya pad bhai patkan!")
}

setTimeout(PairPado, 3000)    // executes function after .... milliseconds (10^(-3)) seconds

// if you want to use setTimeout repeatedly then use setInterval
setInterval(PairPado, 3000)

// use clearTimeout(clr)/ clearInterval(clr) to stop setTimeout/ setInterval, offcourse by first assigning variable to setTimeout/ setInterval 
// clr = setTimeout(PairPado, 3000)
// clr = setInterval(PairPado, 3000)