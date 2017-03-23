//Hinger oreder functions
// a function that takes in functions as arguments
// and/or returns a functiona s its return value


let sayHello = function() {
    console.log("Hello");
};
sayHello();

//its not a high order function but it behaves like it
let runThree = function() {
    sayHello();
    sayHello();
    sayHello();
}
runThree();

//runThree is a higer order function because
// i takes in a function as an argument
let sayGoodbye = function() {
    console.log("Good Bye");
}
let runThreeV2 = function(func) {
    func();
    func();
    func();
}
runThreeV2(saHello);
runThreeV2(sayGoodbye);


// write a function that will double any number we give it

let doubleIt = function(number) {
    return 2 * number;
};


doubleIt(5); //10
doubleIt(10); //20
doubleIt(20); //40

//higher order function is goint to call doubleIt 3 times
let call = function(func) {
    func(5);
    func(15);
    func(50);
}
call(doubleIt);

let callV2 = function(func, num) {
    func(num);
}
callV2(doubleIt, 5);

let callV3 = function(func, num, times) {
    let total = 0;
    for (let i = 0; i < times; i++) {
        total += func(num);
    }
    return total;
}
console.log(callV3(doubleIt, 5, 3));




// step 1, make a function that takes in a number and squares it
let squareIt = function(num) {
    return num * num;
}

squareIt(2);
squareIt(6);

//step2
//make a higer order function that calls a squareIt

let call = function(func) {
    func(2);
    func(6);
}
// console.log(call(squareIt))

//step 3 make a higer order function that takes in 2 arguments
// the first being a function and the second being the value we want
//pass into that function arguments
let callV2 = function(func, num) {
    func(num);
    func(num);
}
console.log(callV2(squareIt, 2))

//step 4, pass in a third arguments that will execute the function
// a certian times

let callV3 = function(fun, num, times) {
    for (i = 0; i > times; i++) {
        func(num);
    }
}

// step 5 make things meaningful, keep running total of our sqaurse
// and return that result from out higher order function

let callV4 = function(func, number, times) {
    let total = 0;

    for (let i = 0; i < times; i++) {
        total += func(number);
    }
    return total;
}

callV4(squareIt, 6, 4);







//exrcise








//
