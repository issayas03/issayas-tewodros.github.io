
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  for (let i = '#'; i.length <= num ; i += '#') {
    console.log(i)
  }
  }
  
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (let i = 1; i <= 15; i++) {
    let output = ''
    if (i % 3 === 0 && i % 5 === 0) {
      output += 'fizzbuzz'
    }  else if (i % 3 === 0) {
      output += 'fizz'
    } else if (i % 5 === 0) {
      output += 'buzz'
    }
    console.log(output || i)
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  let output = [];
  for (let i = 0; i < number; i++) {
    let row = '';
    if (i % 2 === 0) {
      row = ' '
      for (let j = 0; j < number; j++) {
        if (j % 2 === 0) {
          row += '#'
        } else {
          row += ' '
        }
      } 
    } else {
      for (let k = 0; k < number; k++) {
        if (k % 2 === 0) {
          row += '#'
        } else {
          row += ' '
        }
      }
    }
    output.push(row)
  }
  return output.join('\n') + '\n'
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
