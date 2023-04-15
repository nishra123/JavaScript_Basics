// JSON = Java Script Object Notation - used in data transport between prog languages
// JSON  ALWAYS REQUIRES GIVEN OBJECT INSIDE DOUBLE QUOTES, OTHERWISE IT RETURNS STRING WITH BACKSLASHES / 

obj = {
    name: "baburao", length : 1, a: {hech: 'te"ch'}
}

// conversion of JS object to JSON string - JSON.stringify()
jso = JSON.stringify(obj)
console.log(jso)    // returns : {"name":"baburao","length":1,"a":{"hech":"te\"ch"}}
console.log(typeof obj)
console.log(typeof jso)


// JSON.parse() -> printing object

parsed = JSON.parse(`{"name":"baburao","length":1,"a":{"hech":"tech"}}`)
console.log(parsed)



// ECMAScript - standardized version of javascript

// template literals - backticks ``
a = 12;
console.log(`this is apun ka ${a}`)  // then it is replaced by variable in the string
