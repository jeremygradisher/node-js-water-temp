/* water-limits.js */

/**
 * 
 * This is the 'og' or older way to do this.
 * see water-limits.js for an updated way.
 * 
 * Suppose you wanted to write a simple program that would display the freezing point and 
 * boiling point of water in Fahrenheit. However, you only know the values in Celsius to 
 * be 0 (freezing) and 100 (boiling). Luckily you happen to know how to convert Celsius 
 * to Fahrenheit!
 * 
 */

/**
 * At the top of the file, the function celsiusToFahrenheit() is declared. When given a 
 * value in Celsius, it will return the value converted to Fahrenheit. 
 * Both input and output will be a number.
 */

function celsiusToFahrenheit(celsius) {
  return celsius * (9/5) + 32;
}
 
 /**
  * Below, freezingPointC and boilingPointC are assigned the known values 0 and 100, respectively.
  */
 
const freezingPointC = 0;
const boilingPointC = 100;

/**
 * Using these values and the function celsiusToFahrenheit(), 
 * the additional values freezingPointF and boilingPointF are calculated.
 * 
 */
 
const freezingPointF = celsiusToFahrenheit(freezingPointC);
const boilingPointF = celsiusToFahrenheit(boilingPointC);

/**
 * Lastly, these values are printed to the console.
 */
 
console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);



/**
 * 
 * Executing this file using Node would look something like this:
 * $ node og-water-limits.js
 * The freezing point of water in Fahrenheit is 32
 * The boiling point of water in Fahrenheit is 212
 */