let addOne = function(number) {
    return number + 1;
};
let call = function(addOne, number) {
    return addOne(number);
};

console.log(addOne(6)); // 7
console.log(call(addOne, 10)); // 11
console.log(call(function(num) {
    return num + 1
}, 20)); // ???
//

let squareIt = function(number) {
    return number * number;
}

call(squareIt, 5)

call(function(number) {
    return number * number
}, 5)

//timing - higher order function
//setTimeout(function,delay);

let sayHello = function() {
    console.log("Hello");
}

//1000ms = 1 second
setTimeout(sayHello, 5000)

//sayHello is the callback function im my setTimeout methods




setTimeout(function() {
    console.log("goodbye");
}, 10000)

//eex

console.log("Loading....");
setTimeout(function() {
    console.log("Hello,World");
}, 3000)

////ex strtch

setTimeout(function() {
    console.log("Readdy...");
}, 1000)



setTimeout(function() {
    console.log("Set....");
}, 2000)



setTimeout(function() {
    console.log("Go!");
}, 3000)


setTimeout(function() {

}, 1000)




//setTimeout - will run once after x number of ms
//setinterval - will run every x number of ms
let counter = 0;
let intervalID = setInterval(function() {
    console.log("hello");
    counter++;
    if (counter == 10) {
        clearInterval(intervalID);
    }
}, 1000)



//

counter = 0;
let invertalID = setInterval(function() {
    console.log(".")
    counter++;
    if (counter == 10) {
        clearInterval(invertalID);
    }

}, 1000)
//mothod 1

counter = 10;
let blast = setInterval(function() {
    console.log(counter--)
    if (counter == 0) {
        setTimeout(function() {
            console.log("BlastOff")
        }, 1000)
        clearInterval(blast);

    }

}, 1000)
//mthod 2
let counter = 10;
let intervalId = setInterval(function() {
    if (counter > 0) {
        console.log(counter);
    } else {
        console.log("Blast Off!");
        clearInterval(intervalId);
    }
    counter--;
}, 1000);



let counter({})





//
