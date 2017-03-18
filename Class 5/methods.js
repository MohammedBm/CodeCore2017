//array of methods
// construction an instance of the array class
//creating an array object, storing it in the numbers variable

let numbers = new Array();
numbers.push(1)
numbers.pop();
numbers.slice();
numbers.shift();
numbers.unshift();


///mario object
let mario = new Object();
let mario = {
    image: "mario.png",
    clothing: ["hat", "overall", "gloves"],
    lives: 2,
    hitPoints: 1,
    jump: function() {
        console.log("Leap 20 meters");
    }
};

//function (){}  <--- anonyomus function
console.log(mario.image);
console.log(mario.clothing);
mario.jump();


function sit() {
    console.log("Sit");
}

function rollOver() {
    console.log("Roll Over");
}

function shakePaw() {
    console.log("Shake a Paw");
};



let dog = {
    name: "Summer",
    breed: "Goolden Doodle",
    age: 2,
    trick: sit
    //tricks:[sit,rollover,shakePaw]
}

dog.trick();
//dog.tricks[0]();



let clean = function() {
    console.log("clean");
}
let cat = {
    name: "Tom",
    groom: clean
}

cat.groom();

//exercise





function parking() {
    console.log("yes");
}

function noParking() {
    console.log("No");
}

let car = {
    color: "red",
    year: 1996,
    park: parking;
}



///mae car objects
//add properties to it
// add a aprk stop method to it
//let car = {];



function parking() {
    console.log("parking .....");
}

function stopping() {
    console.log("Stopping.....");
}
const car = {
    make: "Tesla",
    model: "Model 3",
    capacity: 3,
    //method 1 - assising an annoymouns fucntion
    // park: function() {}
    // console.log("Parking...");
    // stop: function() {
    //     console.log("Stopping...");
    // },
    //methodd 2 pointion to functions
    park: parking,
    stop: stopping
}
console.log(car.make);
console.log(car.model);
console.log(car.capacity);

car.park();
car.stop();





//adapt this method for writing methods-- a
// another method of writing methods
const car = {
    make: "Honda",
    model: "Civic",
    capacity: 5,
    park() {
        console.log("parking....");
    },
    stop() {
        console.log(stopping);
    }
}
car.park();
car.stop();


///----
//this is creating a  me objects
const car = {
  speed:200,
  drive(){
    console.log(`I am driveing at a speed of ${this.speed} km/hs `);
    //both works but `this` is more flexable.
    // console.log(`I am driveing at a speed of ${car.speed} km/hs `);
  }
};

console.log(car.speed);
car.drive();



















































//









//
