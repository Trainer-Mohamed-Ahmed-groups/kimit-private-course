var myName = "Mohamed",
    lastName = "Ahmed",
    job = "frontend developer and frontend instructor";

console.log(myName);
/**************************** length ************************************/
console.log(myName.length);

/**************************** charAt ************************************/

console.log(myName.charAt(1))
/**************************** charCodeAt ***************************/

console.log(lastName.charCodeAt(0))

/**************************** fromCharCode ************************************/

console.log(String.fromCharCode(65, 66, 67, 68, 69))
/**************************** concat ************************************/

console.log(myName.concat(lastName, " ", job))

/**************************** startsWith ************************************/

console.log(job.startsWith("f"))
/**************************** endsWith ************************************/

console.log(job.endsWith("w"))

/**************************** includes ************************************/

console.log(job.includes("and"))

/**************************** indexOf ************************************/
console.log(job.indexOf("e"))

/**************************** lastIndexOf ************************************/
console.log(job.lastIndexOf("e"))

/**************************** match ************************************/
// console.log(job.match("front"))
console.log(job.match(/Front/gi))

/**************************** repeat ************************************/
console.log(myName.repeat(5))

/**************************** replace ************************************/

console.log(job.replace("frontend", "new"))
console.log(job.replace(/frontend/g, "new"))

// gi
/**************************** search ************************************/
console.log(job.search(/DEVELOPER/gi))

/**************************** slice ******************VIMP******************/

console.log(job.slice(0, 9))

/**************************** split *********************VIMP***************/

console.log(job.split(""))
/**************************** substr ************************************/
console.log(myName.substr(1, 3))

/**************************** substring ************************************/
console.log(myName.substring(1, 3))

/**************************** toLowerCase ************************************/

console.log(myName.toLowerCase())

/**************************** toUpperCase ************************************/

console.log(myName.toUpperCase())
/**************************** trim ************************************/

var newJob = "             Front  end         developer             ";

console.log(newJob);
console.log(newJob.trim());
console.log(newJob.trimEnd());
console.log(newJob.trimStart());
// */


/*
JS task

Task 1
    Create an array include some names then check the names starts with letter m or not
    Then print in console   this name starts with letter m
    Use array with some capital and small example ["Mohamed" , "mahmoud" , "Ali" ] want to output mohamed and mahmoud
-------------------------------
*/

// Regex Example
var text = "Hello #world,% 12 welcome to8_ the9 unive0rse",
    email = "mohame78d_ahmed@kimit.com"
const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/g;

var result = email.match(emailRegex);
var result2 = text.match(/\s@/g);

console.log(result);
console.log(result2);
