// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
//Create for loop measuring the length of the Array passed through
for(var i = 0; i < array.length; i++){
  //Print the itirated array
  console.log(array[i])
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //Create a for loop with a variable initialized to the length of the array descending
  for (var i = array.length - 1; i >= 0; i--){
    console.log(array[i])
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
 var output = []
  var keys
  for (keys in object){
    output.push(keys)
  }
return output
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().›
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
//Create an output array for the object's key's strings
var outputArray = [];
//Create for..in loop itirating over the argument
for (var keys in object){
  // Insert the keys into the outputArray 
  console.log(keys);
};

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //create a return arrayr value
var valuesArray = [];
  //iterate through the input object
for (var key in object){
  //add each value to return Arary
  valuesArray.push(object[key])

};
    //add each value to return Array
return valuesArray;
    //return array value
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
for (var key in object){
  console.log(object[key])
}
 
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //Create an output array for the object's keys
  var lengthArray = [];
  //Create a for..in loop pushing the object's keys into the array
  for (var key in object){
    //push the key into array
    lengthArray.push(key);
  }
  //Check length property of the array
return lengthArray.length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var outputArr = [];
  for (var key in object) {
    outputArr.push(object[key]);
  }
  
  for (var i = outputArr.length - 1; i >= 0; i--) {
   console.log(outputArr[i])
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
