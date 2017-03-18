

//3 ways of defining variblaes in javascript
let name  = 'mohammed';
var student = "Jill"
const PI = 3.14;


// data structures
//indexed list of information
//one ddimensional array -  we need 1 piece of information
// to access the data
let names = ["Mohammed", "Jill"]
//0: "Mohammed"
//1: "Jill"
names[0]; //"Mohammed"
names[1];//"Jill"


let lyric = "Let it be"
//array of characters
lyric[0]; //"L"
lyric[8]; // "e"



let number = [];
//i am creating a varibale named numbers
//i am assising numbers the value of array objects
//which is an instance of the array class
let numbers = new Array();

//objects
let me = {};
let me = new Object();
//properties are one way to describe the objects aronud us

let puppy = {
  //propert:value;
  name: "Summer",
  breed: "Goolden Doodle",
  weight: 15,
  age:2
};


puppy.trick = "Sit";
puppy.baby = {};
puppy.tricks = ["sit", "shake paw", "roll over"]



//functions
// 2 ways of declare functions in javascript
//declartive function
// puts the morning function the global name space
function morning (){
  console.log("wake up");
  console.log("Brush teeth");
  console.log("transit");
  console.log("Code");
};

// function expression
let evening  =  function (){
  console.log("Eat dinner");
  console.log("study");
  console.log("Sleep");
};

evening();
evening();
evening();


//write a function that take in a number, but always return zero.

function zero(num){
  return num * 0
};

console.log(zero(1231))

function multiply (x,y){
  //return x*y
  let result = x*y;
  return result;
};

let multiply = function (number){
  let result = x*y;
  return result;
};

multiply(5,6);
console.log(multiply(5,6));
docment.write(multiply(5,6));
window.alert(multiply(5,6));


//loops
//for
//while
//counting from 1 to 10l
for (let i =1 ; i<=10; i++){
  console.log(i);
};

let counter = 1;
while (counter <= 10){
  console.log(counter);
  counter++;
}
// for ...of <--- loop thrugh arrays
//for ... in ---> loops through objects



let numbers = [1,2,3,4,5,6,7,8]
for (let number of numbers){
  console.log(number);
}

for (let i = 0 ; i < numbers.length; i++){
  console.log(numbers[i]);
}

let tictactoe = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

for (let row of tictactoe){
  console.log(row);
  for (let col of row){
    console.log(col);
  }
}


// array of obejcts
let mohammed = {
  specmen:"spaien"
}

let summer = {
  spcimen: "cannie"
}

let things  = [mohammed, summer];

for (let thing of things){
  for (let properties in thing){
    console.log(`The ${properties} is ${thing[properties]}`);
  }
}



































//
