// EXPORT
/*
PENJELASAN: jadi export itu terbagi menjadi 2 yakni
default export dan named export
*/

export const name = 'Maxx';
export const email = 'maxx@gmail.com';
export const age = 21;

/*
PENJELASAN: Pada kodingan diatas kita menggunakan keyword
export sebelum inisialisasi dilakukan
*/

const name1 = 'John';
const email1 = 'john@gmail.com';
const age1 = 25;
 
export { name1, email1, age1 };

/*
PENJELASAN: Pada kodingan diatas kita menggunakan keyword
export setelah inisialisasi dilakukan
*/

export default function goodMorning () {
    console.log('Good morning!');
}

/*
PENJELASAN: jadi pada kodingan diatas itu keyword 'default' hanya
bisa digunakan pada satu buah function/variable/method. Jika kita
menggunakan keyword 'default' pada variable 'name1' diatas dan
menggunkannya lagi pada function diatas maka kodingan akan error
*/

















