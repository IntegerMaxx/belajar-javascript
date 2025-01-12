// Masalah Pada Program >> Harus mencetaknya satu per satu
const foods = ['Nasi Goreng', 'Pasta', 'Sate'];

console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);

console.log('\n');

// PERULANGAN 'for'
for(let i = 0; i < 5; i++){
    console.log(`Angka ke-${i} adalah ${i}`);
}



console.log('\n');

// PERULANGAN 'for in'
const person = {name : 'Fulan', origin : 'Bandung', birthYear: 2024};

for(const property in person){
    console.log(`${property} bernilai ${person[property]}`);
}

/* 
PENJELASAN: jadi pada kodingan diatas kita mengakses property dan nilai
pada properti menggunakan for in. Maksud dari 'person[property]' adalah
kita mengakses nilai yang ada pada property kalau maksud dari '{property}'
adalah kita hanya mengakses property-nya saja
*/




console.log('\n');

// PERULANGAN 'for of'
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (let item of names) {
    console.log(item);
}

// for (let [key, value] of person) { >> Akan erorr "for of" tidak dapat dilakukan pada object literals, karena object literals bukan iterable  
//     console.log(item);
// }

/*
PENJELASAN: jadi for in tidak dapat dilakukan pada object literals
karena object literals bukan iterable.

Contoh iterable adalah array, string, map, set, dan lainnya
*/

console.log('\n');

// PERULANGAN 'while'
let i = 0;

var test = ["ayam","sapi","kambing","kuda"];
while( i < 2){
    console.log(`Hewan ke-${i} adalah ${test[i]}`);
    // console.log(`Angka ke-${i} adalah ${i}`);
    i++;
}

/*
PENJELASAN: keunggulan menggunakan while adalah, perulangan akan tetap
akan dilakukan tanpa perlu informasi jumlah iterasi diawal.

variabel 'i' atau indeks harus di inisialisasikan sebelum while

while itu inisialisasi dulu, kemudian cek nilai iterasi, kemudian lakukan sesuatu
dan tambah nilai iterasinya
*/

console.log('\n');

// PERULANGAN 'do-while'
let j = 0;

do{
    console.log(`Hewan ke-${j} adalah ${test[j]}`);
    j++
} while (j<5)

/*
PENJELASAN: 

do-while itu inisialisasi dulu, kemudian lakukan sesuatu, tambah nilai iterasi
dan cek nilai iterasinya, jika cek nilai bernilai true maka lakukan proses
perulangan
*/













