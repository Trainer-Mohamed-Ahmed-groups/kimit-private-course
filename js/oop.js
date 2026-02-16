var person = {
    name: "John",
    age: 30
}

console.log(person)

// let Person = function (name, age) {
//     this.name = name;
//     this.age = age;
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);

console.log(person1)
console.log(person2)


export default class Employee extends Person {
    constructor(name, age, title) {
        super(name, age);
        this.title = title;
    }
}

let employee1 = new Employee("Alice", 28, "Manager");

console.log(employee1)

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}

console.log("Yahia".reverse())
console.log(String.prototype)


/////////////////////////////////////////
let x = 5;
let y = 50;
export { x, y };
