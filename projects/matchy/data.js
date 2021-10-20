/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create object variable 
var animal = {};
//Create property for animal species and assign it a value
animal.species = 'Lion';
//Create property for animal name and assign it a value
animal['name'] = 'Simba';
//Create property animal sounds and assign it a value
animal.noises = [];

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []
//push string into array
noises[0] = 'Roar'
//Push value into noises array
noises.push('Woof')
//Add value to beginning of noises array
noises.unshift('Meow');
//Add value to end of noises array
noises[noises.length] = 'Roar'



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Use bracket notation add to noises

animal.noises = noises;
animal['noises'].push('Bark')
console.log(animal)
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * - Dot, Bracket Notation
 * 2. What are the different ways of accessing elements on arrays?
 * - Bracket Notation,
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create empty array to store animal object values
var animals = [];
//Push animal object into Array
animalsArr.push(animal)
//Log Array
console.log(animals);
//Create duck object
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
//Push Duck Value into animalsArray
animals.push(duck)

//Create two more animal Objects

var tiger = {species: 'tiger', name: 'Tigger', noises: ['Roar', 'Meow', 'Purr']}
var fish = {species: 'fish', name: 'Nemo', noises: ['Aahh', 'Woof']}
//push animals into object array
animals.push(tiger, fish)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Choose data structure to hold friends
var friends = []; 
//Simple list of friends object

//Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`

function getRandom(animals, min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

animals[getRandom(0, animals.length - 1)]

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}