// let  number1 = parseInt(prompt("Firs number please"));
// let  number2 = parseInt(prompt("Second number please"));
//
// if ( number1>number2 ){
//   alert(`The larger number is ${number1}`)
// }else {
//   alert(`The larger number is ${number2}`)
// }


// cities = { vancouver: 603502, burnaby: 223220, langley: 104177 }
//

// and prints if the city is large (more than 150,000) or small (otherwise).
// The printout should look something like: vancouver is a large city
//
// for (let city in cities){
//   if (cities[city] >150000){
//     console.log(`${city} is a larger city`);
//   }else {
//     console.log(`${city} is a small city`)
//   }
// }
//
// let sideA = parseInt(prompt("Enter the length of angle A"));
// let sideB = parseInt(prompt("Enter the length of side B"));
// let sideC = parseInt(prompt("Enter the length of side C"));
//
// let s = (sideA + sideB+ sideC)/2;
// let area = Math.sqrt(s*(s-sideA)*(s-sideB)*(s-sideC));
// document.write(area);
//
// names = {
//     mike: 2,
//     john: 3,
//     jen: 5,
//     eli: 1
// }
//
//
// function pop(names) {
//     for (let name in names) {
//         if (names[name]> 4  ) {
//             console.log(`The most popular name is ${name}`)
//         }
//
//     }
//     return name;
// }
//
// console.log(pop(names))


// function pop(names) {
//   let temp = -1;
//   let Pop =  "";
//
//
//     for (let name in names) {
//         if (names[name] > temp  ) {
//           temp = names[name];
//           Pop = name;
//         }
//
//     }
//
//     return Pop;
// }
//
// console.log(pop(names))

//
//
// let tempInC = parseInt(prompt("enter the temprture in C"))
//
// function tempInF (tempInC){
//   F = tempInC * (9/5) +32;
//   return F;
// }
//
// console.log(tempInF(tempInC))



let arrayC = [23,26,30];
let array2 = [];
function tempInF1(array){
  for (let i = 0 ; i < array.length; i++){
    array2.push(Math.round(array[i] * (9/5) +32));

  }
    return array2;

}


console.log("The temprture is " + tempInF1(arrayC) );
















//
