let addOne = function(number) {
  return number + 1;
};
addOne(10); // 11
addOne(256); // 257



let addOneV2 = function(numbers) {
  let resultArray = [];
  // loop through the array
  for (let number of numbers) {
    resultArray.push(number + 1);
  }
  // return a new array with the updated numbers
  return resultArray;
}

addOneV2([1,2,3]); // [2,3,4]

let call = function(func){
  func([1,2,3]);
};

call(addOneV2);

let callV3 = function(func, array) {
  func(array);
};

callV3(addOneV2, [1,2,3]);

let callV4 = function(fun, array){
  return func(array);
}
//map
console.log(callV4(addOneV2,[1,2,3]));


//make a higer order map function that will produce an array of squares
//for the following values [1,2,3,4,5,6,7,8,9]


let doubleIt = function(number) {
    return number * number;
};


let callV4 = function(fun, array){
  return func(array);
}

callV4(doubleIt,[1,2,3,4,5,6,7,8,9])


//[2,4,6,9,16,36,49,etc]
let callV4 = function(func, array){
  return func(array);
}

let squareIt = function(number) {
  return ( number * number);
}




let doubleIt2 = function(numbers) {
  let resultArray = [];
  // loop through the array
  for (let number of numbers) {
    resultArray.push(number*number);
  }
  // return a new array with the updated numbers
  return resultArray;
};

callV4(doubleIt2, [1,2,3,4,5,6,7,8,9]);


//
