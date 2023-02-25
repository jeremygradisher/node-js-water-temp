/* fahrenheit-to-celsius.js */
/* node fahrenheit-to-celsius.js 90 */

/**
 * 
 * Here we are importing the module converters.js
 * 
 * */

const { fahrenheitToCelsius } = require('./converters.js');
 
 /**
  * 
  * 
  * */
 
const fahrenheitInput = process.argv[2]; 
const celsiusValue = fahrenheitToCelsius(fahrenheitInput);
 
console.log(`${fahrenheitInput} degrees Fahrenheit = ${celsiusValue} degrees Celsius`);

/**
 * With this approach, the remainder of the program works the same way but 
 * the program avoids importing a function it does not need.
 * 
 * */
 
 
 /* node fahrenheit-to-celsius.js 90 */
 /* node fahrenheit-to-celsius.js 75 */
 /* node fahrenheit-to-celsius.js 20 */