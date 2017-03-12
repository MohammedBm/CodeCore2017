


let numOne  =  prompt("Enter your first Number between 1 and 100");
let numTwo  =  prompt("Enter your second Number between 1 and 100");

for (i  = 1 ; i <= 100 ; i++){
  if (i % numTwo == 0 && i % numOne == 0) {
    console.log("FizzBuzz");
  } else if(i % numOne == 0){
    console.log("Fizz");
  } else if (i % numTwo ==0){
    console.log("Buzz");
  } else{
    console.log(i);
  }
}
