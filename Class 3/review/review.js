//javascript - livescript
//mr echt the creater of javasscript
//it was created in 10 days at "netscape headquarters"
//ECMAScript 6 - latest verison of javascrat
//babel compiler



//varibles
// var <- older way of defining variables
//
// let <- new way of defining variables
// const <- constant - will not change


let name = "mohammed";
let age = 21;


let surName = "Bmahraz"
let lastName = surName;


//logic gating
//or and
// == , < , >= , <= != (! == not), ===

// === three euqals, will check the type of variables as well
if (2 == "2") {
    console.log("Yes it dose");
}

// === data type
// str or int

if (2 === "2") {
    console.log("yes it dose");
}


if (age > 16) {
    console.log("You can drive");
} else {
    console.log("You are too young");
}


// if else
//switch case

//loops
//for
//while/
// do ... while


while (true) {
    console.log('hello')
}

let counter = 0;
while (counter < 10) {
    console.log("goodbye");
    counter++;
    counter = counter + 1;
    counter += 1;
}


//break

counter = 0;
while (counter < 10) {
    console.log("goodbye");
    counter++;
    if (counter == 5) {
        break; // exit out of my loop reagdless of what is in the while statement
    }
}
// when do you use a for and when do use a while loops
for (let i = 0; i < 10; i++) {
    console.log("goodbye");}



// today's lesson
let numbers = [1,2,3,4,5];
// increment ++
for (let number in numbers) {
  console.log(numbers[number]);
}
