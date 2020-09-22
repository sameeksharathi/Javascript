# Synchronous and Asynchronous Programming

**In Synchronous, response to one request is done at a time, back to back.**<br>
Page will remain blocked until a response is sent to the client. means no other server will be responded until one request is done.<br>

**In Asynchronous , response to multiple request is done at the same time.** <br>
Multiple clients can sent request to the server and will be responded as soon (including client's internet speed and the time server take to serve the request) when their work is done.<br>

- Any Computation we do requires processor for javascript engine to get the job done. <br>
- Many requests interact with things outside of the processor. example: theymay communicate over a network or request data from storage disk.<br>
- This is a lot slower than getting it from memory.<br>
- We don't want our processor to sit idle, when such things are happening.

- When you call a function that performs a long action, returns only when the action is finished until then it keeps the domain blocked (or stops the program for the time the action takes) in case of synochronous. In this case, we should use Asynchronous, So it can return the result.

## Ways to write Asynchronous Program:

1. Async / Awaits
2. Callbacks
3. Promises



### Async / Awaits

**Async always returns a Promise** which means we can use resolve() and there is no need to use 2 thens as we did in Fetch API => <a href = "FretchApi.js">Fetch API Js file</a>.

<pre>

async function tom(){
    console.log('Inside tom function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

    // return "tom";
}

console.log("Before calling tom")
let a = tom();
console.log("After calling tom")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")

</pre>




### Callbacks

<pre>

// Pretend that this response is coming from the server
const students = [
    {name: "Tom", subject: "JavaScript"},
    {name: "Jerry", subject: "Machine Learning"}
]


function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = {name:"Matt", subject:"Python"}
enrollStudent(newStudent, getStudents);
// getStudents();

</pre>




### Promises

#### Code1:

<pre>
// Promise: Have 3 kind of results
// -resolve
// -reject
// -pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Tom: Thanks for resolving")
}).catch(function(error){
    console.log("Tom: Very bad bro. Reason: " + error)
})

</pre>

#### Code2:

<pre>
// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
// getStudents();


// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
</pre>