// // arrays - data stucture
//
// //lists
// // shopping list
// // packing lists
// // to do list
//
// //name convention - camelCase
// let shoppingList = new Array();
// shoppingList.push("chesse");
// shoppingList.push("toilet paper");
// shoppingList.push("cucumbers");
// shoppingList.push("Beer");
//
//
//
// let packingList = ["underwear", "socks","toothbrush"];//same as the one above
// //but different way of writing
//
// document.write(packingList)
//
// //push  --->adds an item to the end of your list
// //pop --> removes an item from the end of yout list
// packingList.pop(); // removes in item from the end of your arrays
// document.write(packingList)
//
// //go search: MDN arrays
// //push , pop, shift, unshift, slice.....
//
// console.log(shoppingList.length)//print the length of your array
// console.log(packingList.length)
//
// //in javascript, arrays values can be mixed type
//              // 0,1,2,  3          4    5    6
// let mixedBag = [1,2,3,"mohammed","se",true,false]
// //in javascript, array are dynamically sized
//
// //how to access single element from the array
// mixedBag[0]
//
// //what happens if we do mathematically operation on tow different
// //data subtracts
// // mixedBag [ 0] + mixedBag[3]; //number * string
// // mixedBag[4] - mixedBag[2];//string * number
// // mixedBag[5] * mixedBag[1];// boolean * number
//
//
// var first = ["hello", 5 , "a"]
//
// first[1] = 6;
// console.log(first[1])
//
// let second = []
// for (let i = 0; i <= 100; i++){
//   second.push(i);
// }
// console.log(second.length);
//
// // quck create ranges in javascript
//
// let letters = [ 'a' , 'b', 'c' ,'d']
//   for (let letter of letters){
//     console.log(letter);
//   }
//
//
//   for (let i = 0; i<letters.length;i++){
//     console.log(letters[i])
//   }
// for...of - used for arrays
//for...in - used for object

// //exersice
//
// let numbers = [ 0, 5, 6 ,-12];
// let result = 0;
// for (let number of numbers){
//   result = result +number;
// }
// console.log(result);
//
// let array1 = ["apple","dog","computer","cup"];
// for (i=0; i<array1.length;i++){
//   console.log(`${array1[i]} has ${array1[i].length} characters`);
//
// }
// //another method for the second exersice
// let words = ["apple", "dog", "computer", "cup"];
// for (let word of words) {
//   console.log(`${word} has ${word.length} characters.`);
// }

//
// //strings are an array of chatchters
// let name = "Mohammed";
// name[0];
// name[3];
// name[2] = "#" //dose not change to "Moh#mmed"
//
// //split - is in arry method
// let charachters = name.split("")// turn string into an array of charachters
// //["m",'h','a','m','e','d']
//
// //join - is an array method
// name  = charachters.join("")//tur an array into a string
//ex

//1
let greeting = "hello";
// turn greeting into an arra of characters
// ['h','e','l','l','o']
console.log(greeting.split(""))

let char = greeting.split("");
console.log(char);


//2
let sentence = prompt("Write a sentence here");
let longSen = sentence.split(" ")
for (var i = 0; i < longSen.length; i++) {
    console.log(`Your sentce has ${longSen.length} sentences`);
}



//3

//my method
let Numbers = []
for (let i = 0; i <= 100; i++) {
    Numbers.push(i);
}
let joinNum = Numbers.join("")
console.log(joinNum)































//
