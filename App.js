// CONTROL FLOW
// statement to buy salt
let item = "Annapurna";
// let item = "Gino";  
// condition if salt is Annapurna, if 
if (item === "Annapurna") { 
    console.log("Buy Annapurna");

} else if (item === "U2"){
    console.log("Buy U2");
} else if (item === "A1"){
    console.log("Buy A1");

    // let item = "Gino"; 
} else {
    console.log("Buy Rocky Salt");
}

// GRADING SYSTEM

let score = 90;
// for && operator to be true  then all condition needs to be true. "or" needs only one true to run

if (score>=90) {
    console.log("Excellent");

} else if (score >= 80) {
    console.log("Very Good");
} else if (score >= 70) {
    console.log("Good");
} else if (score >=60) {
    console.log("Average");
} else if (score >=50){
    console.log("Credit");
} else if (score >=40) {
    console.log("Pass");
}  else if (score >=0) {
    console.log("Fail");
}

// for && operator to be true  then all condition needs to be true. "or" needs only one true to run
if (score >= 90 && score <=100){
    console.log("Excellent");
}

// let score = 100;
// if (score >= 0 && score <=100) {
//     console.log(Please Enter a valid score )
// }

// FUNCTION
// let x=10
// let y=20

function sum(x,y) {
    console.log(x*y)
}

sum(10,20)
