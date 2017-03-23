 // Part 1
 // Write a function that takes a number and returns whether the number is positive or not.
 //
 // [Stretch]: return false if the parameter is not a number.
 //
 // Part 2
 // Write a function called filter that takes two parameters, an array (a) and another function (fn). This function should return a new array containing all the items in a for which fn returns true. For example, you should be able to call it like this:
 //
 // filter([1,3,4], function(num){
 //   return num > 2;
 // });
 // Test filter using the isPositive function you wrote above and the following array [-5, 0, 1, 'car'].
 //
 // Find a function in the lodash library which implements this for you.

 //Part 1
 function isPostive(vlaue) {
     if (vlaue > 0) {
         console.log("number is positive ");
     } else if (vlaue < 0) {
         console.log("number is negative");
     } else {
         console.log("flase");
     }
 }


 // Part 2

 let filter = function(array, fn) {
     for (let num of array) {
         isPostive(num);
     }
 }

 filter([-5, 0, 1, 'car'], isPostive)
