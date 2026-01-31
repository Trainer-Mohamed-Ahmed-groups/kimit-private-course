// JSON => Javascript object notation
// API  => Application programming interface => Endpoint
// AJAX => Asynchronous JavaScript And XML
// XML  => Extensible Markup Language
// XHR  => XMLHttpRequest
// HTTP => Hypertext Transfer Protocol


let person = {
    name: "Yahia",
    age: 25,
    isMarried: undefined,
    test: true
}


console.log(person)
console.log(typeof person)
console.log(JSON.stringify(person))
console.log(typeof JSON.stringify(person))
console.log('*'.repeat(25))

let personJson = `{
    "name": "Yahia",
    "age": 25,
    "isMarried": true,
    "test": true
}`

console.log(personJson)
console.log(typeof personJson)
console.log(JSON.parse(personJson))



// 0- No connection
// 1- Connection established
// 2- Request received
// 3- Request processing
// 4- Request finished and data is ready


let postsRequest = new XMLHttpRequest(),
    output = document.querySelector("#output");
console.log(output)

postsRequest.onreadystatechange = function () {
    if (postsRequest.readyState === 4 && postsRequest.status === 200) {
        const res = JSON.parse(postsRequest.response)
        output.innerHTML = ''
        for (let index = 0; index < res.length; index++) {
            const post = res[index];
            output.innerHTML += `<li class='item'>${post.title}</li>`
            // output.innerHTML += "<li>" + post.title + "</li>"
        }
    }
}

postsRequest.open("GET", "https://jsonplaceholder.typicode.com/posts/")

postsRequest.send()


fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(res => console.log(res))




//////////////////////////////////////////////
const user = { username: 'john_doe', email: 'john@example.com', password: 'pass123' };

fetch('https://fakestoreapi.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
})
    .then(response => response.json())
    .then(data => console.log(data));


fetch('https://fakestoreapi.com/users')
    .then(response => response.json())
    .then(data => console.log(data));
