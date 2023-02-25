/* celsius-to-fahrenheit.js */
/* node celsius-to-fahrenheit.js 100 */

/**
 * 
 * Let’s update celsius-to-fahrenheit.js and only 
 * extract the .celsiusToFahrenheit() method, 
 * leaving .fahrenheitToCelsius() behind:
 * 
 * 
 * */

/**
 * 
 * Here we are importing the module converters.js
 * 
 * */

const { celsiusToFahrenheit } = require('./converters.js');
 
 /**
  * 
  * 
  * */
 
const celsiusInput = process.argv[2]; 
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
 
console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);

/**
 * With this approach, the remainder of the program works the same way but 
 * the program avoids importing a function it does not need.
 * 
 * */
 
 
 /* node celsius-to-fahrenheit.js 100 */
 /* node celsius-to-fahrenheit.js 75 */