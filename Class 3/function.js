
functions
by convention we do noot need
to put a semi-colon at the end
of a declarative funtion
function morning (){
  console.log("------morning start-----");
  console.log("wake up")
  console.log("brush teeth")
  console.log("eat brakefast")
  console.log("get changed")
  console.log("code")
  console.log("-----morining end-------")
}

// this is how we call a function
morning();
morning();
morning();
alert("it's the weekend... lets chill");
morning();
morning();
morning();
morning();
alert("it's spring break, what am i doing here");




// /function expression  - assining a function to a variable
const PI = 3.14159;
const suffering = true; //life is suffering
// function() {} anonymous function - function that have no name
const evening = function () {
  console.log("the night time is the right time");
  console.log("the night time is the right time");
  console.log("the night time is the right time");
  console.log("the night time is the right time");
};

evening();





function add(number1,number2){
  return number1 + number2;
}

// add(); // we are wxpeting you to pass 2 arguments and you
//gave none


console.log(add(5,6))
alert(add(2,3))

let result = add(7,8);// 15

//can we prompt the user for 2 numbers
let number1 = prompt("what is your first number:")
let number2 = prompt("What is your second number")
//and can theese 2 numbers be entred in, on one
 // line (e.g "1 , 2")
let numbers = prompt("Enter in  2 numbers, comma spreated");
numbers.split(",") // will split number with coma
                      // can be used with space dot anything


// make a subtract function that takes in 2arguments, but try
// using a function expression, e.g setting an anonymous
// function to a varible
//
//
// 1. Make the functions
// 2. prompt for the numbers, storing them ni varibales
// 3. call the functions

let number2 = prompt("What is your first number");
let number3 = prompt("What is your second number");

const subtract = function (number1,number2){
  return number2 - number3;
}
console.log(subtract(number2,number3))


document.write(subtract(2,1)); //1
console.log(subtract(20,6)); // 14

// if we wanted to prompt he user for 2 numbers we wanted
// to subtract what oreder do we do it in?



// e.g
// recursion
function sort(){
  if (condition is met){
    // stop runing
  } else{
    sort()
  }
}
