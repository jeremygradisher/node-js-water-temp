/* shape-area.js */

/**
 * 
 * Complete the shape-area.js module. Your module must declare and export 
 * two functions with the following signatures:
 * circleArea(radiusLength).
 * squareArea(sideLength).
 * You may create these as either named functions or anonymous function expressions.
 * 
 * 
 **/

const PI = Math.PI;

function circleArea(r) {
  return PI * r * r;
}


function squareArea(side) {
  return side * side;
}

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;