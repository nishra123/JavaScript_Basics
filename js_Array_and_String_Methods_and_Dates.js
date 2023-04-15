// ARRAY METHODS:
let arr = [23, "babu", 573, "chintu", 12, "pintyabhai"]
//size of array
console.log(arr.length)

// removing last element from array
arr.pop();

// adding element in last of array
arr.push("goti soda an batli phoda");
console.log(arr)

// removing first element from array
arr.shift()
console.log(arr)

// adding element in starting of array
arr.unshift("Shantabai")
console.log(arr)

// coverting array to string
console.log(arr.toString())

// sorting the array
let arr1 = [23,15,9,36,777,231]
console.log(arr1.sort())
// here, sort function arranges the given array in Lexicographical order(as in the dictionary) and not as how the numbers are sorted
// first it converts the given elements into string and then it arranges them by comparing their lexicographical orders


// STRING METHODS:
let str = "Baburao apun ka favourite hai, ka?!";

//length of string
console.log(str.length)

//index of a character of string (if given word means returns the index of starting character of word)
console.log(str.indexOf("ka"))

//returns the last index of occurence in string
console.log(str.lastIndexOf("ka"))

//string slicing
console.log(str.slice(0,8))

// replacing a word/ character in string - replaces only first occurence, not all occurences
console.log(str.replace("apun", "sab"))



// DATES IN JS:
let dt = new Date();

// returns the date and time with timezone
console.log(dt)

//returns time in seconds
console.log(dt.getTime())

//returns year
console.log(dt.getFullYear())

// returns day no = 7 for Sunday, 0 for Monday
console.log(dt.getDay())

// returns minutes
console.log(dt.getMinutes())

// returns hours
console.log(dt.getHours())


