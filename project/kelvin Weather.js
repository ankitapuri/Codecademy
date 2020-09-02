//let kelvin = 294;
const kelvin = prompt('What is the Kelvin temperature today');
let celsius = kelvin - 273.15;

console.log(kelvin);
console.log(celsius);

// Convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit);

//Converting it to a whole number
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
