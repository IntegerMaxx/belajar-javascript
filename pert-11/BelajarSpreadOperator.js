// SPREAD OPERATOR

/*
PENJELASAN: Spread Operator itu seperti command yang kita
gunakan untuk menggabungkan objek atau array menjadi satu
hal yang baru. Untuk menggunakannya gunakan tanda titik
sebanyak 3 kali "..." kemudian nama object atau array.
Contohnya ada dibawah ini

Spread operator sama saja kita melakukan looping pada object
atau array kemudian menyimpannya pada satu hal yang baru
*/

// OBJECT
const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const arrayTest = [1,2,3,4];
const newObj = { ...obj1, ...obj2, ...arrayTest };

print(newObj);

/*
PENJELASAN: Pada kodingan diatas 'obj1' dan 'obj2' datanya telah
menjadi satu pada 'newObj' sehingga key valuenya mewarisi
dari kedua objek tersebut.

Operator juga dapat mempermudah penyalinan objek. Contohnya
ada dibawah ini.
*/
print('\n');
const originalObj = {...newObj}; 
print(originalObj);

/*
PENJELASAN: Jadi 'originalObj' itu meng-copy 'newObj' 

*/

print('\n');

// ARRAY
const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
const newArray = [...array1, ...array2]; // GABUNGKAN
print(newArray);

print('\n');

const original = ['apple', 'banana', 'cherry'];
const copy = [...original]; // Copy Original
print(copy);





function print(...args){
    console.log(...args);
}











