import type { Add, Employee, Person, PersonType } from "./person.interface.js"

let x: number = 10



function add(a: number, b: number): number {
    return a + b
}

let persons: string[] = ["Alice", "Bob", "Charlie"]
let person2: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35, major: 'Computer Science' }
]


let testData: (string | number)[] = [454, 23, 67, 89, 12, 34, "Hello", "World"]


function printPersonInfo(person: Person): void {
    console.log(`Name: ${person.name}, Age: ${person.age}, Major: ${person.major ?? "N/A"}`)
}

function printTestData<T>(input: T): T {
    return input
}

printTestData("test")
printTestData(89)




/////////////////////////////////////////
let userStatus: PersonType = "active"

////////////////////////////////////
let addition: Add = (a, b) => a + b + 9


////////////////////////////
let yahia: Employee = {
    name: "Yahia",
    age: 30,
    employeeId: 12345,
    major: "Software Engineering"
}
