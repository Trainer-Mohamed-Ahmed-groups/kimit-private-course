"use strict";
var employees = [
    { name: "Alice", age: 30, department: "HR" },
    { name: "Bob", age: 25, department: "Engineering" },
    { name: "Charlie", age: 35, department: "Sales" }
];

var newCustomer = { name: "Charlie", age: 35, department: "Sales" }

var i = 0;

// while (i < 10) {
//     console.log(i)
//     i++;
// }

// do {
//     console.log(i)
//     i++
// } while (i< 10);


for (let j = 0; j < 10; j++) {
    // if (j === 5) { break; }
    if (j % 2 === 0) { continue }
    console.log(j)
}
console.log("*****************")
for (let j = 2; j < 10; j += 2) {
    console.log(j)
}
console.log("*****************")

for (let index = 0; index < employees.length; index++) {
    const element = employees[index];
    console.log(element)
}
console.log("*****************")
for (const employee of employees) {
    console.log(employee)
}
console.log("*****************")
for (const key in newCustomer) {
    console.log(key + ": " + newCustomer[key])
}
console.log("*****************")
var newArr = [1, 2, 3, 4].forEach(num => num * 2);
console.log(newArr)
console.log("*****************")
var newArr2 = [1, 2, 3, 4].map(num => num * 2);
console.log(newArr2)
console.log("*****************")

sayOk();
// Declaration Function
function sayOk() {
    console.log("test 1")
}
// Expression Function || Anonymous Function
var sayOk2 = function () {
    console.log("test 2")
}
sayOk2();

/************************* Type casting *******************************/
var firstName = "Mohamed",
    lastName = "Ahmed";

console.log(firstName + lastName) //Concatenation
console.log(firstName + " " + lastName) //Concatenation with space
console.log("*** Implicit ******");

console.log(5 + "5")
console.log(5 * "5")
console.log(5 * "K")
console.log(9 + true)
console.log(9 + false)
console.log("*** Explicit ******");


console.log(Number("5"))
console.log(String(123))
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean("Hello"))
console.log(Boolean(""))
console.log(parseInt("5.78"))
console.log(parseFloat("5.78"))
