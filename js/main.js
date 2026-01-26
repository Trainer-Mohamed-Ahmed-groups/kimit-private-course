let x = 9.656;
console.log(x.toFixed(2))
console.log(x.toPrecision(2))
console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.isSafeInteger(9007199254740992))
const d = new Date();
console.log(d)
console.log(d.getTime() / 1000 / 60 / 60 / 24)

console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.characterSet)
console.log(document.forms)
console.log(document.images)


// Selectors
const header = document.getElementById("header")
console.log(header)


const myDivisions = document.getElementsByClassName("testClass")
console.log(myDivisions)

const myDivs = document.getElementsByTagName("div")
console.log(myDivs)

const inputs = document.getElementsByName("username")
console.log(inputs)
console.log(inputs[0])
console.log(inputs[0].getAttribute("placeholder"))


const sectionChildren = document.querySelectorAll("section > .testClass")
console.log(sectionChildren)

const mySection = document.querySelector("section")
console.log(mySection)
console.log(mySection.children)
console.log(mySection.childNodes)
console.log(mySection.innerHTML)
console.log(mySection.outerHTML)


let output = document.getElementById("output")

function addAttributeToHeader() {
    // inputs[1].setAttribute("placeholder", "New Placeholder Text")
    // console.log(inputs[1].value)
    // inputs[1].style.backgroundColor = "yellow"

    // output.textContent = "Button Clicked!"
    // output.textContent = "<span>test</span>"
    // output.innerHTML = "<span>test</span>"


    // var newElement = document.createElement("p")
    // var textNode = document.createTextNode("This is a new paragraph.")
    // var commentedTextNode = document.createComment("This is a comment node.")
    // newElement.append(textNode)
    // output.appendChild(newElement)
    // output.appendChild(commentedTextNode)

    var username = "Mohamed"
    output.innerHTML += `<div class='newDiv'>${username} New Div Added <!--Comment --></div>`
}

function handleShowingPassword() {
    const passwordInput = document.getElementById("passwordInput"),
        showBtn = document.getElementById("btn")
    if (passwordInput.getAttribute("type") === "password") {
        passwordInput.setAttribute("type", "text")
        showBtn.textContent = "Hide"
    }
    else {
        passwordInput.setAttribute("type", "password")
        showBtn.textContent = "Show"
    }
}
/////////////////////////////////////////////////////////
let testId = document.getElementById("testId")
console.log(testId)
function handleClick() {
    // testId.className = "active"
    // testId.classList.add("active")
    // testId.classList.remove("test")
    // console.log(testId.classList.contains('test3'))
    // console.log(testId.classList.item(1))
    testId.classList.toggle("hide")
}

/////////////////////////////////////////////////////////
console.log(mySection.children[0])
console.log(mySection.firstElementChild)
console.log(mySection.lastElementChild)
console.log(mySection.firstChild)
console.log(mySection.lastChild)

mySection.removeChild(mySection.lastElementChild)
mySection.insertBefore(document.createElement('p'), mySection.children[2])
console.log(mySection.nextElementSibling)
console.log(mySection.previousElementSibling)
/////////////////////////////////////////////////////////
var testBtn = document.getElementById('testBtn');

// testBtn.onclick = function () {
//     console.log("first 1")
// }
// testBtn.onclick = function () {
//     console.log("first 2")
// }

// testBtn.addEventListener("click", function () {
//     console.log("Clicked 1")
// })

testBtn.addEventListener("contextmenu", function () {
    console.log("Clicked 2")
})
