// Falsy Values
// - 0
// - null
// - undefined
// - NaN
// - false

// Truthy Values
// - Anything that is not falsy
// - true
// - "0" (when in string)
// - " " (space in string)
// - []
// - {}

const x = 0;

if(x){
    console.log("This is not true");
} else{
    console.log("This is true");
}

const children = 0;

if(!isNaN(children)){
    console.log(`You have ${children} children`);
} else{
    console.log("You have no child")
}


// && will assign falsy value or right side true value

let num = 0 && 10;
num = 10 && 20;
num = 10 && 15 && 30;

num &&= 20;

console.log(num);


// || will assign True value or right side false value

let or = 0 || 10;
or = 0 || false;

console.log(or);

// ?? will assign true value or null or undefined

let numx = 10 ?? null;
numx = 0 ?? 10;

console.log(numx);


// Ternary Operator
const age = 20;

if(age >= 18){
    console.log("You can vote!")
} else {
    console.log("You can not vote!")
}

// Shorthand
age>=18 ? console.log("You can vote!") : console.log("You can not vote");

// You can store condition to a variable
const canVote = age>=18 ? true : false;
const canVote2 = age>=18 ? "You can Vote" : "You can not vote";

console.log(canVote);
console.log(canVote2);

let auth = true;
// let redirect;

// if(auth){
//     alert("Welcome to the DashBoard!");
//     redirect = "/dashboard";
// } else {
//     alert("Access Denied!");
//     redirect = "/login";
// }

// Shorter form
const redirect = auth ? (console.log("Welcome to the dashboard!"),'/dashboard'): (console.log("Access Denied!"),'/login');

// const redirect2 = auth ? (console.log("Welcome to the dashboard!"),'/dashboard') : null;

auth &&= console.log("Welcome to the dashboard");

// calculator(num1,num2,operator)