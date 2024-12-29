const age = 20;
const message = 'Umurku: ' + age;

console.log(`jenis tipe data ${typeof message}, nilai = ${message}`); // output: Umurku: 20
/*
PENJELASAN: pada kodingan diatas, variabel age otomatis diubah 
menjadi string. Karena operator "+" digunakan untuk penggabungan
string
*/

const strNumber = '123';
const result = strNumber * 2;

console.log(`\njenis tipe data ${typeof result}, nilai = ${result}`);
/*
PENJELASAN: pada kodingan diatas, variabel strNumber otomatis diubah 
menjadi number. Karena operator "*" digunakan untuk operasi matematika
*/

const bool = true;
const result2 = 3 + bool;

console.log(result2); // output: 2
/*
PENJELASAN: pada kodingan diatas, variabel bool otomatis diubah 
menjadi number. Karena operator "+" digunakan untuk operasi matematika.
Seperti kita ketahui bersama true mewakili angka 1 dan false mewakili
angka 0
*/