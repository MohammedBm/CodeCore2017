// to declare a varible we can use let and const
let = 1; // <-- for virables that change
const name = "mohammed"; //<-- const is used for varibles that dosent change.

//array or data structure
let array = [1, 2, 3]
//an object
let object = {
    a: 1,
    b: 2
}

//a function
let func = function(x) {
    return x * x;
}

if (object.a === 1) {
    console.log("A is 1");
}
////// method one
const isEven = function(x) {
    return x % 2 === 0;
}

function filter(array, func) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) == true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
//method 2
const isEven = function(x) {
    return x % 2 === 0;
}

const filter = function(array, fn) {
    let resultArray = [];
    for (let i of array) {
        if (fn(array[i])) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}
//more readable Code

const isOdd = function (x){return x%2 !==0}

const filter = function(array, fn) {
    let resultArray = [];
    for (let element of array) {
        if (fn(element)) {
            resultArray.push(element);
        }
    }
    return resultArray;
}
// we can use this piece of code in different ways

filter([1,2,3,4,5,6],isOdd)








//
