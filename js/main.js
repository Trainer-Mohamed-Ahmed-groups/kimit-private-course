"use strict";
// Object
var car = {
    model: 2025,
    name: "Mercedes C300",
    country: "Germany",
    isSold: true,
    owner: undefined,
    features: ["Turbo", "10 airbags", "ABS"]
    // Key : value
}

console.log(car)
console.log(typeof car)
// Bracket notation
console.log(car["country"])
console.log(car["features"][2])
// Dot notation
console.log(car.name)
console.log(car.features[2])


// VOID function
function firstFn() {
    console.log("Hello function")
}
console.log(typeof firstFn)


firstFn()
firstFn()

// Returning value function
function calc() {
    return 5 + 5
}

console.log(calc())


// function calc2(x = 0, y = 0) {
//     return x + y
// }

// var calc2 = function (x = 0, y = 0) {
//     return x + y
// }

var calc2 = (x = 0, y = 0) => x + y

console.log(calc2(10, 5))
console.log(calc2(108, 513))
console.log(calc2(108))

console.log(typeof NaN)

console.log("****************************")
/*         Control flow                 */
var myNum = 0
if (myNum > 0) {
    console.log("Greater")
} else if (myNum < 0) {
    console.log("Lower")
}
else {
    console.log("Zero")
}


var y = 10;

if (y !== '10') {
    console.log("YES")
} else {
    console.log("NO")
}

// Unary arithmetic operators ++ --
var t = 10;
console.log(++t)
console.log(t--)
console.log(t--)
console.log(t)

// Binary arithmetic operators + - * / %

console.log(12 % 3)
console.log(8 % 2)

// Relational operators > < >= <= == === != !==

// Assignment operators = += -= *= /= %=
var e = 50;
console.log(e)
e += 10;
console.log(e)


// Logical operators ! && ||

if (5 > 4 || 5 > 40) {
    console.log("YES")
} else {
    console.log("NO")
}

console.log("first" && 50)
console.log("first" && 0 && "OK")


var p = "Mahmoud"

switch (p) {
    case "Mohamed":
    case "Mahmoud":
        console.log("first")
        break;
    case "Yahia": console.log("Second")
        break;
    default:
        console.log("Other")
}

///////////////////////////////

try {
    // console.log(first);
} catch (error) {
    console.error(error.message)
} finally {
    console.log("Come")
}



console.log("Hello");


function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw "Parameters is not valid"
    }
    else {
        return width * height
    }
}

console.log(getRectArea(8, 5))

try {
    // console.log(getRectArea(8, "s"))
    console.log(getRectArea(8, 2))
} catch (error) {
    console.error(error)
}

console.log("first")
console.log(1 / 0)


q = 90;
console.log(q)
