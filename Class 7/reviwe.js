// making a varible


// let is more strict
let school = "CodeCore" // <--- the new way of declaring varible
let chool = "UBC" // <--- error
// var  <-- older wawy for declaring a varible,
// the older way of define variables is less strict
var teacher = "Mohammed"
var teacher = "jacob"

//const used for variables that we dont want to change
const PI = 3.14159;
const car = {
    make: "honda"
};

car.model = "accord"

//function expression - when an anonymous functoin is a
//assigned to a varible , we can contarol it's scope
//
const isOdd = function(number) {
    if (number % 2 != 0) {
        return true;
    }
};

isOdd(10); //flase
isOdd(5); //true


const isEven = function(number) {
    // if (number %2 === 0 ){
    //   return true;
    // }
    return (number % 2 === 0)
}
isEven(10) //true
isEven(5) //flase

//funciton declration - global namespace
//funtcion isOdd(){}




//higher oreer functions - funciton that take in funciton
//as arguments

let sayHello = function() {
    console.log("Hi!");
}

// call is a hugher order function because it takes a function as an
//arguments
let call = function(fn) {
    fn();
}
call(sayHello);
call(sayHello);
call(sayHello);

// the filter function will be a higher oreder function
// it will take in a function as an argument, it will also take in an array
//of numbers
let filter = function(fn, array) {
    ///create an empty array to store the new value
    let resultArray = [];
    for (let number of array) {
        if (fn(number) == true) {
            resultArray.push(number);
        }
    }
    return resultArray;
}



let numbers = [1, 2, 3, 4, 5]
filter(isOdd, numbers)
filter(isEven, numbers)
/// jquery


// DOM - Document Object model
// changes all our hyper links on wikipedia to pink
for (let i=0; i<document.links.length; i++) {
  document.links[i].style.color = "pink";
}

//API - application programming interface
//communcation tool for software























//
