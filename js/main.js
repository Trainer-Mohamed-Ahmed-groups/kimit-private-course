// asynchronous js

let i = 0
function sayHello() {
    console.log("Hello : " + i)
    i++
}

// let myInterval = setInterval(sayHello, 1000)
let myTimeout = setTimeout(sayHello, 5000)

function sayGoodbye() {
    // clearInterval(myInterval)
    clearTimeout(myTimeout)
}



// Built in objects in JavaScript

console.log(Math.max(4, 84, 45, 14, 408, 6, 87))
console.log(Math.min(40, 84, 45, 14, 48, 6, 87))
console.log(Math.round(3.8))
console.log(Math.ceil(3.1))
console.log(Math.floor(3.9))
console.log(Math.pow(5, 3))
console.log(Math.sqrt(25))
console.log(Math.abs(-45))
console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10))
console.log(Math.trunc(5))
