//functions reusuable , modulat, lis of instruction that we can call
//and over again



///declaritive function
function morning() {
    console.log("wake up!");
    console.log("eat brakefast");
    console.log("transit");
    console.log("Code");
}

morning();
morning();
morning();
morning();

function add(x, y) {
    return x + y;
}

console.log(add(5, 4));
document.write(add(5, 3))
alert(add(2, 3))

//
// function expression
let mutiply = function(2, 4) {
    return 2 * 5;
};


mutiply(2, 7); //14
console.log(mutiply(2, 7));




//data structure
//arrays



let name = "mohammed";

let fullName = "Mohammed Bamhraz";

let fullName = new Array();
let fullName = ["Mohammed", "Bamhraz"]

// 0: "Mohammed"
// 1: "Bamhraz"

fullName[0]; // "Mohammed"
fullName[1]; //"Bamhraz"

//we can create some lists like

//shopping lists
//packing lists
//to do lists

fullName.push("Abdullah")
// [ "Mohammed", "Bamhraz", "Abdullah"]

fullName.pop();
//["Mohammed", "Bamhraz"]

//other usefull instrment
//sift , unshit, splice , sort
// for more infromation about that visit MDN Array


// [[],[],[]]  //multi-dimensional arrays

//2 dimensional array - 2 pieces of information to acess my data
//row, columns - 2 dimensional arrays


//e.g of 2D arrays
//spraedsheetsgame
//tictactoe
//bingo
//battleship
//calender


let row1 = [null, null, null]
let row2 = [null, null, null]
let row3 = [null, null, null]

let tictactoe = {
    row1;
    row2;
    row3;
}


let tictactoe = [
    // 0      1        2
    [null, null, null], //0
    [null, "X", null], //1
    [null, null, null] //2
]
tictactoe[1][1];
//tictac [ row][col]

let numbers = [1, 2, 3, 4, 5, 6];

for (let number of numbers) {
    console.log(number);
}


for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}



let middleRow = 1;
let middleColumn = 1;

tictactoe[middleRow][middleColumn] = "X";
//tictactoe["middle"]  <---------- throws an error


//objects -  surround us every day
//we describe objects in our world, but describing their properties

let me = {}:
    let me = new Object();

let me = {
    name: "Mohammed",
    weight: 120
};

me.height = "5.7\""

me.name; //"Mohammed"
me.age; //"undfined"
me.age = 21;

me = {
    name: 'Mohammed',
    weight: 120,
    age: 21
}


me.hobbies = ["Gaming", "Reading", "magic"]
me.baby = {
    name: "junior",
    age: 1
}


///dot operator to acess properties in my obejcts
me.baby.age; //1

me.hobbies[1]; //Reading


//me.hair color
me["Hair color"] = "balck"

// me = {

//     property:value
//     name: 'Mohammed',
//     weight: 120,
//     age: 21,
//     hair color:"balck"
// }

let property = "hair color";
me[] = "black";


let jane = {};
jane[property] = "blonde"


let color = "pink";

let newProperty = "favruite color";
new [newProperty] = color;

//const for objects
//const me = {};





//for .... of  --> arrays
//for ... in ---> objects
// step through my object prinint out all the properties

for (let property in me) {
    console.log(property);
    console.log(me[property]);
}




//input

"Catch me if you can"

// ["catch" , "me" , "if" , "you","can"]
// turn a string into an array using the split method


//catch -->there are 5 charcters in the word catch
//me
//if
//you
//can



// 1. split the sentence into  alist of words
// 2. count how many words we have, we have 5 words
// 3. make an object
// 4. how many charcters are in each word?
// 5. amke an object with properties name "catch", "me", "if", "you","can"
// 6. give each one of theses properties a numberical value

let words = "catch me if you can".split(" ") //this turns a setnce into an array
//words.length //this will give me how many charcters are in my list
"catch".length // thi will give me how many charcters are in a string

//
result = {};
// result["catch"] = 5;
//
// let nenwProperty = "me"
// result[newProperty] = newProperty.length;
//
// let nenwProperty2 = "if"
// result[newProperty2] = newProperty2.length;

// stepping through the arays of words
for (let word of words) {
    result[word] = word.length;
}

function wordlengths(sentence) {
    let obj = {};
    let words = sentence.split(" ");

    for (let word of words) {
        obj[word] = word.length;
    }

    return obj;
}









//object
{
    catch: 5,
    me: 2,
    if: 2,
    you: 3,
    can: 3
}









//
