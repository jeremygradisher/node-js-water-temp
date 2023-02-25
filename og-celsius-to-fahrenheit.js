/* og-celsius-to-fahrenheit.js */


/**
 * This is the 'og' or older way to do this.
 * see celsius-to-fahrenheit.js for an updated way.
 * 
 * 
 * For example, you might want to be able to run such a program and see a response like so:
 * $ node og-celsius-to-fahrenheit.js 100
 * 100 degrees Celsius = 212 degrees Fahrenheit
 * 
 * 
 * 
*/

/**
 * At the top of the file, the function celsiusToFahrenheit() is declared. 
 * When given a value in Celsius, it will return the value converted 
 * to Fahrenheit. Both input and output will be a number.
 * 
 **/

function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
}
 
 /**
  * 
  * On the next line of code, celsiusInput is assigned process.argv[2]. 
  * When a program is executed in the Node environment, process.argv is 
  * an array holding the arguments provided. In this case, it looks 
  * like ['node', 'celsius-to-fahrenheit.js', '100']. So, process.argv[2] returns 100.
  * 
  * */
 
const celsiusInput = process.argv[2]; // Get the 3rd input from the argument list

/**
 * 
 * Using this value and the function celsiusToFahrenheit(), 
 * the additional value fahrenheitValue is calculated.
 * 
 * */

const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
 
 /**
  * 
  * Lastly, a message is printed to the console displaying this data.
  * 
  * */
 
console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);


/**
 * 
 * For example, you might want to be able to run such a program and see a response like so:
 * $ node og-celsius-to-fahrenheit.js 100
 * 100 degrees Celsius = 212 degrees Fahrenheit
 * 
 * 
 * 
*/