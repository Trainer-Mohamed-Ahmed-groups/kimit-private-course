// ES6 OOP TS
// BOM
// React Next Redux

let person = {
    name: 'John',
    age: 30
}

let { name: username, age } = person;

console.log(person)
console.log(username)
console.log(age)


let people = ["Mostafa", "Ahmed", "Ali"];


let [first, , third] = people;

console.log(first)
// console.log(second)
console.log(third)



// Spread operator

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];


console.log(arr3)
console.log(Math.max(...arr3))


// Rest parameter

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

function sum(a = 0, ...numbers) {
    console.log(numbers)
}
console.log(sum(23, 65, 10, 20, 30))

const cars = ["BMW", "Volvo", "Mini", "BMW"];
console.log(cars)
for (const car of cars) {
    console.log(car)
}


for (let x in person) {
    console.log(person[x]);
}



const fruits = new Map([
    [5, 500],
    [true, 300],
    ["oranges", 200]
]);

console.log(fruits)
fruits.set("mangos", 100);
console.log(fruits)
const letters = new Set(["a", "b", "c", "a", "b"]);
console.log(letters)

const user = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let id = Symbol('id');
user[id] = 140353;

console.log(id)
console.log(user)
console.log(user.id)

function greet() {
    // window.open('https://www.google.com/search?q=');
    window.location.assign("https://www.w3schools.com")

}
console.log(window.location.protocol)



localStorage.setItem("username", "JohnDoe");
console.log(localStorage.getItem("username"))
// localStorage.removeItem("username")
// console.log(localStorage.getItem("username"))
console.log(localStorage.length)
console.log(localStorage.key(0))
console.log(localStorage.getItem(localStorage.key(0)))

document.cookie = "username=John Doe; expires=18 Dec 2033 12:00:00 UTC";
