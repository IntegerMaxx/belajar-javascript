let temperatureInCelsius;
let temperatureInFahrenheit;

temperatureInCelsius = 50;
temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 122

temperatureInCelsius = 70;
temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 158

temperatureInCelsius = 100;
temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 212

/*
PENJELASAN: Pada kodingan diatas kita menulis berulang kali
kode yang memiliki konteks yang sama. Daripada kita menulisnya
berulang kali lebih baik kita membuatkan sebuah fungsi untuk
konversi suhu, sehingga kita hanya tinggal memanggil nama
untuk functionnya saja dan dapat meng konversi suhu
*/