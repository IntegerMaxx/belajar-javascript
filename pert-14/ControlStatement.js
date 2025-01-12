// CONTROL STATEMENT
/*
PENJELASAN: jadi control statement itu berfungsi untuk
menghentikan eksekusi kode. Contohnya break dan continue.
*/

// BREAK

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    
    console.log(i);
}
console.log("ini test");
/*
'break' satatement hanya bisa digunakan dalam konteks perulangan
ataupun 'switch case'

PENJELASAN: jadi break itu, kita memberitahukan kepada
interpreter bahwa 'hentikan pengeksekusian kode'. 
Sehingga jika terdapat baris yang memiliki 'break'
statement maka statement atau baris kode selanjutnya dalam
cakupan tidak akan dieksekusi. Ingat ini terjadi hanya
dalam cakupan atau scope

Pada contoh diatas ketika nilai 'i' sama identik dengan 5
maka break, sehingga angka yang tampil hanya 1-4, 5-9 tidak
ditampilkan karena eksekusi kode telah dihentikan oleh
interpreter oleh break.
*/

console.log('\n');

// CONTINUE

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

/*
'continue' satatement hanya bisa digunakan dalam konteks perulangan

PENJELASAN: alih-alih kita menghentikan pengeksekusian kode dengan
'break' statement kita bisa pelompati baris kode dengan menggunakan
'continue' statement. Pada contoh diatas angka 5 tidak ditampilkan
namun dia tetap melanjutkan perulangan
pertama 0-4 >> lewati angka 5 >> kedua 6-9

ketika nilai variabel i sama dengan 5, iterasi akan dihentikan dan lanjut ke iterasi berikutnya 
*/











