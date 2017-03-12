//
//
// const luckyNumber = prompt("What is your lucky number?")
//
//
// if( parseInt (luckyNumber) === 10){
//   alert('awesome')
// } else if( parseInt (luckyNumber) > 8){
//     alert("Almost awesome")
// } else{
//   alert('Not awesome')
// }

const carYear = prompt("What year is your car from?");
  if( parseInt(carYear)>2017){
    console.log("Future")
  } else if( parseInt(carYear) > 2010){
    console.log("New car")
  } else if(parseInt(carYear) > 2007){
    console.log("Old car")
  }else {
    console.log('Very old')
  }
