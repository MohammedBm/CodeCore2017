let i = 0;

while ( i < 20 ) {
  console.log("Hello world");
  //remember to always to have a wawy for the condition to be net ub irder for
  // loop to stoop other wise u will end up with infinite loop
  i++;
}

//print from 1 to 100
let i = 0;
while (i<= 100) {
  console.log(i);
  i++;
}

// same as below
// console.log("Print all number be    tween 20 to 40");
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 ===0) {
//     console.log(i);

//   }
// }

// print even nubmer between 0 and 100
let i = 0;
  while (i <= 100){
    if(i%2 ===0){
      console.log(i);
    }
    i++;
  }

  //beer rhyme
  for (let i = 100 ; i>0; i-- ){
    console.log(i +" "+ "bottels of beer on the wall")
    console.log(i + " "+"bottles of beer")
    console.log("Take one down, pass it around " +i-- +" bottles of the beer on the wall");
    console.log();

  }

// beer rhyme
  for(let i = 100; i >= 1; i--) {
    console.log(`${i} bottles of beer on the wall`);
    console.log(`${i} bottles of beer`);
    console.log(`Take one down, pass it around, ${i - 1} bottles of beer
                  on the wall`);
  }



// guess random number game
let guess;
while(true){
  guess = parseInt(prompt("What is the lucky number?"));
  if(guess ===9){
    alert('good guess');
    console.log("GREAT")
    break;
  } else {
    alert('Sorry! guesse again')
  }
}
