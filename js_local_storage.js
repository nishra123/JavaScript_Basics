// local means storing at that particular instance, temporarily but not permanently

localStorage.setItem('name', 'baburao')
console.log(localStorage)

// clear local storage - localStorage.clear()

a = localStorage.getItem('name')
console.log(a)

//  do not keep any sensitive data in local storage

// you can see local storage of a website by going into console and then Application - > Local Storage


// localStorage.removeItem() -> for removing item in local storage
// localStorage.clear()  -> clear local storage