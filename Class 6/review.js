//review for the past starday Class 5

//Methods  - an object has properties. if one of thoese properties
// has a value that is a function. its called a method.

function drving() {
    console.log("Driving.....");
}


const car = {
    speed: 200,
    make: "Honda",
    model: "Civic",
    capacity: 5,
    parts: ["steering wheel", "seats", "sun roof", ],
    enging: {
        numOfPistons: 8,
    }
    // drive: drving, //<--- verison one, setting a functions name to
    //the value of our drive propety - we dont need to excute the function inside the method so we dont need to use the brackets "()". we use it only when we call the propety outside the obejct.
    // drive: function() {
    //     console.log("Driving......");
    // } //<---- version two
    // drive() {
    //     console.log("Driving.......");
    // } //<--- verison 3 --writing this method from now on
}
//arrays
// let number = [];
// numbers.push();
// numbers.pop();
// number.shift();
car.drive();

//high order functions - a function takes in function as an arguments-- a function that returns a function.

let addOne = function(number) {
    return number + 1;
}

addOne(100); //101;

let call = function(func) {
    return console.log(func(10));
};

call(addOne);

let call2 = function(func, number) {
    return console.log(func(number));
}

call2(addOne, 21);
call2(addOne, 2123);
call2(addOne, 323);


let squareIt = function(number) {
    return number * number;
}


call2(squareIt, 10); //100
call2(squareIt, 20); //200
call2(squareIt, 12930); //167184900

//timing functions

let sayHello = function() {
    console.log("HOwdy!!");
};
sayHello();


//4000ms = 4 second
setTimeout(sayHello, 4000)
setTimeout(function() {
    console.log("goodbye");
}, 4000)



// setTimeout(function,dealy); <-- well only excute the ffunction once after the dealy
// setInterval(function , delay)<-- this excute hello every 4 second
//setinterval return uniqure ID
let intervalId = setInterval(sayHello, 4000);

//we can stop this interval by doing what?
clearInterval(intervalId);


let j = 0;
let intervalId2 = setInterval(function() {
    console.log("Goodbye");
    j++;
    if (j > 3) {
        clearInterval(intervalId2);
    }
}, 1000)
/// Create 2 people objects;

const jack = {
    name: "Jack",
    age: 10
}


const jill = {
    name: "Jill"
    age: 9
}

//poeple Class
//we are creating an instance of array calss
let number = new Array();


// a funfcion with a aname that starts with a capital letter is a Class
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let jack = new Person("Jack", 10);
let jill = new Person("Jill", 9);

jack.hairColour = "brown";

let people = [jack, jill]

for (let person of people) {
    console.log(`$(person.name) is $(person.age) years old`);
}
//
