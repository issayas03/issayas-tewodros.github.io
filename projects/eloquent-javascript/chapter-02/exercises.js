
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
  // for (let i = 1; i <= 15; i++) {
  //   let output = ''
  //   if (i % 3 === 0 && i % 5 === 0) {
  //     output += 'fizzbuzz'
  //   }  else if (i % 3 === 0) {
  //     output += 'fizz'
  //   } else if (i % 5 === 0) {
  //     output += 'buzz'
  //   }
  //   console.log(output || i)
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {

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
