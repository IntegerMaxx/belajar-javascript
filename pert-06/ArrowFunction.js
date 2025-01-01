let temperatureInFahrenheit = null;

// DEKLARASI FUNCTION DENGAN REGULAR FUNCTION
const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

// DEKLARASI FUNCTION DENGAN ARROW FUNCTION
const convertCelciusToFahrenheitUsingArrowFunction = (temperature) => {
    const result = (9/5) * temperature + 32;
    return result;
};

temperatureFahrenheit = convertCelciusToFahrenheitUsingArrowFunction(90);
console.log('Hasil konversi:',temperatureFahrenheit)
/*
PENJELASAN: perbedaannya pada arrow function tidak perlu menggunakan kata kunci
"function" untuk mendeklarasikannya. Cukup gunakan arah panah "=>" setelah
parentheses
*/

// ARROW FUNCTION DENGAN VERSI LEBIH RINGKAS
const convertCelsiusToFahrenheitInConciseSyntax = (temperature) => (9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

/*
PENJELASAN: Jadi arrow function itu memang meringkas penulisan.
Pertama, kita tidak perlu membuat keyword function
kedua, tidak perlu menggunakan kurung kurawal
ketika, tidak perlu menuliskan return. Nilai return akan diambil setelah penulisan notasi "fat arrow"
*/