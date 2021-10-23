//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function objectValues(object) {
return Object.values(object)
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
var x = Object.keys(object)
return x.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var x = []
    for (var key in object) {
        if (typeof object[key] == 'string')
          x.push(object[key])
    }
return x.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)) {
        return 'array'
    } else {return 'object'}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var strHALF = string.slice(1)
    var firstLetter = string[0].toUpperCase()
    return firstLetter + strHALF
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
   var stringArr = string.split(' ');
   var outputArr = [];
   for (var i = 0; i < stringArr.length; i++) { 
       var stringFirstLetter = stringArr[i][0];
       var firstCap = stringFirstLetter.toUpperCase();
       var half = stringArr[i].slice(1);
       outputArr.push(firstCap += half)
   }
   return outputArr.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function welcomeMessage(object) {
    // var firstLetter = object.name[0];
    // var firstCap = firstLetter.toUpperCase();
    // var restWord = object.name.slice(1)
    // var capName = firstCap += restWord
    return `Welcome ${capitalizeWord(object.name)}!`
      }

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

   return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(object.noises && object['noises'].length !== 0) {

        var joinedArray = object.noises.join(' ')
        return joinedArray
    } else {return 'there are no noises'}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
var flagBool = false
strSpl = string.split(' ')

for (var i = 0; i < strSpl.length; i++) {
    if (strSpl[i] === word) {
        flagBool = true
    }
}
return flagBool
} 

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name)
return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
var flagBool = false;
var friendsArray = object.friends

if (object.friends === undefined){
    return flagBool
}

    for (var i = 0; i < friendsArray.length; i++) {
        if (friendsArray[i] === name) {
            flagBool = true;
        }
    }

    return flagBool

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, arr){
    var listNames = [];
    var result = [];

    for(var i = 0; i < arr.length; i++){
        if(name === arr[i].name){
            current = arr[i];
        } else{
            listNames.push(arr[i].name);
        }
    }

    for(var i=0; i< listNames.length; i++){
        if(current.friends.indexOf(listNames[i]) == -1){
            result.push(listNames[i]);
        }
    }

    return result;

}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, keys, value) {
  for (var key in object) {
    if (key === keys) {
       object[key] = value
    } else if (key !== keys) {
       object[keys] = value
    }
  }
  return object
}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var keys in object) {
        for (var i = 0; i < array.length; i++) {
            if (keys === array[i]) {
                delete object[keys]
            }
        }
    }
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
for (var i = 0; i < array.length; i++) {
    for (var j = array.length; j > 0; j--) {
        if (array[i] === array[j]) {
           let x = array.splice(j, 1)
           return x
        } else {return array}
    }
}
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}