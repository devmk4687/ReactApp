

let resumeScore = 75
if (resumeScore >= 90 || resumeScore <= 100) {
    console.log("You are shorlisted!")
}else if (resumeScore >= 70 && resumeScore < 90) {
    console.log("You are need to improvements.")
}else if (resumeScore >= 50) {
    console.log("try again")
}else {
    console.log("Rejected")
}

let num = 18;

if(num > 0) {
    if(num % 2 === 0) {
    console.log("Number is Even")
    }else {
        console.log("Number is Odd")
    }
}else {
    console.log("Negative number please enter proper number")
}

let age = 25;
let gender = "male";

if (age >= 18) {
    if (gender === "male") {
        console.log("You are eligible for voting as a male ")
    } else {
        console.log("You are eligible for voting as a female ")
    }
} else {
    console.log("You are not eligible for voting")
}

let userName = "admin";
let password = "admin123";

if (userName === "admin" ) {  
        if (password === "admin123") {
            console.log("Login successful");
        } else {
            console.log("Invalid password");
        }
} else {
    console.log("Invalid username or password");
}

function getStatusCode(statusCode) {

    switch (statusCode) {
        case 200:
            console.log("OK");
            break;
        case 400:
            console.log("Bad Request"); 
            break;
        case 401:
            console.log("Unauthorized");
            break;
        case 404:
            console.log("Not Found");
            break;
        case 500:
            console.log("Internal Server Error");
            break;      
        default:
            console.log("Unknown Status Code");
    }
}

let code = 400;
getStatusCode(code);


function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulating success or failure
            if (success) {
                resolve("Task completed successfully!");
            } else {
                reject("Task failed.");
            }
        }, 2000);
    });
}

asyncTask()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    }); 

const user = { 
     login(){
        console.log(this.name+" is logged in");
    }
}


const user1 = Object.create(user);
user1.name = "Alice";
//user1.login(); // Output: Alice is logged in

user1.refer = () => {
    console.log(user1.name+" is referring for someone");
}

user1.login(); // Output: Alice is logged in
user1.refer(); // Output: Alice is referring for someone

// write a program to demonstrate closure in javascript

function outerFunction(outerVariable) { 
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    }   
}

const closureExample = outerFunction("I am from outer function");
closureExample("I am from inner function");

const user2 = outerFunction("I am a user");
user2("I am a user of closure");

function cookies() {
    let cookieCount = 0; // This variable is enclosed in the closure
    return function eatCookie() {
        cookieCount++;
        console.log("You have eaten " + cookieCount + " cookies.");
    }
}

const mahesh = cookies();
mahesh();

const sushil = cookies();
sushil();
mahesh();


