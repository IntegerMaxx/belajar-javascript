function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
  
    console.log('Hasil konversi:', temperatureInFahrenheit);
}
  
const temperatureInCelsius = 90;

// Hanya menampilkan nilai function
console.log(convertCelsiusToFahrenheit);
// Output => [Function: convertCelsiusToFahrenheit]

// Akan menjalankan isi function
convertCelsiusToFahrenheit(temperatureInCelsius);
// Output => Hasil konversi 194

greetWorld();

function greetWorld(){
    console.log('Hello, world!');
}