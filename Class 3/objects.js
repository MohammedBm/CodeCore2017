//objects

// sperated by property : porperty value
// const me = {
//   name: "Mohammed",
//   age: 21,
//   birthPlace: "KSA",
//   hobbies: ["Reading", "Gaming","Cars"]
// };
//
// const byonce = {
//   name: "Beyonce",
//   fetus : {
//     name: "Peanut",
//     age: -1
//   }
// }


// dot operator to acccess the properties of an object
// console.log(me.name);
// console.log(me.age);
// console.log(me.birthPlace);

//creating an object
// let hobbies = new Array();
// let hobbies = ["Gaming","Reading", "Cars"];


//method 1
// const myCar = {
//   name: "Tesla",
//   modle:"Modle 3",
//   color: "red"
// }
//
// console.log(myCar.color);
// console.log(myCar.modle);
// console.log(myCar.name);

// method 2
// const car = new Object();
// car.name = "Tesla"
// car.modle = "Modle 3 "
// car.color = "red"
// car.cpacity = "5"
//
// // console.log(car.color);
// // console.log(car.modle);
// // console.log(car.name);
//
// console.log(` I want a ${car.color} ${car.name} ${car.modle}`);
// console.log(`I want a ${car.color} ${car.name} ${car.modle} that seeats ${car.cpacity}`);

//
//
// let me = {
//   name : "Mohammed",
//   age : 21,
//   occupation : "Studetn",
//   "Hair colour": "black"
// };
//
// me.occupation = "Javascript expert";
// me.skills = [ "ruby", "Rails","javascript"];
// // console.log(me.skills);
// me["hair colour"] = "black"; // set
// me["hair colour"] // get
// me[0]
//
//
//
// const obj = {
//   a:5,
//   b:6
// };
//
// //ex
//
// //1
// const user ={
//   name:"Mohammed",
//   age:21
// };
//
// const tam ={
//   name:"tam",
//   age:23
// };
//
// const mad ={
//   name:"Mad",
//   age:42
// };
//
//
//
// function about(user){
//   console.log(`${user.name} is ${user.age} years old`);
// }
//
// function about2(user) {
//   return `${user.name} is ${user.age} years old.`;
// }
//
// about(user);
// about(tam);
// about(mad);
//
// console.log(about2(user));
// document.write(about2(user));
// window.alert(about2(user));


// an array of words
// let words = "all you need is love love is all you need".split(" ");
// // const beatles = {};
// const beatles = new Object();
//
// for (let word of words) {
//   // if this is the first time the word has occurred, then we need to initialize
//   // it to one
//   if (beatles[word] == undefined) {
//     beatles[word] = 1;
//   }
//
//   // undefined + 1 -> NaN
//   beatles[word] += 1;
//   console.log(beatles);
// }

// const prince = {
//   name: "Prince"
// };
//
// prince.name = "Symbol";
// prince.name = "Prince";


function count(sentence){
  let words = sentence.split(" ")

  const obj = new Object();
  for (let i = 0 ; i < words.length; i++){
    obj[words[i]] |= words[i].length;
  }
  return obj;
}



//
//
// function wordLengths (sentence){
//   let words = sentence.split(" ")
//   const obj = new Object();
//   for (let word of words){
//     obj[word] = word.length;
//   }
//   return obj;
// }


console.log(count("hello there fellow human"))























//
