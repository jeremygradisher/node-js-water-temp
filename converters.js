/* converters.js */

/**
 * 
 * At the top of the new file, converters.js, the function celsiusToFahrenheit() is declared.
 * 
 * */
function celsiusToFahrenheit(celsius) {
  return celsius * (9/5) + 32;
}
 
 /**
  * 
  * On the next line of code, the first approach for exporting a function from a module is shown. In this case,
  * the already-defined function celsiusToFahrenheit() is assigned to module.exports.celsiusToFahrenheit.
  * 
  * */
 
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;
 
 /**
  * 
  * Below, an alternative approach for exporting a function from a module is shown. 
  * In this second case, a new function expression is declared and assigned to 
  * module.exports.fahrenheitToCelsius. This new method is designed to 
  * convert Fahrenheit values back to Celsius.
  * 
  * */
 
module.exports.fahrenheitToCelsius = function(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
};

/**
 * 
 * Both approaches successfully store a function within the module.exports object.
 * 
 * */