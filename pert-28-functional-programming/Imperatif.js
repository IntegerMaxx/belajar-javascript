// FUNCTIONAL PROGRAMMING
/*
PENJELASAN: Functional Programming merupakan paradigma pemrograman
yang bisa diterapkan pada JavaScript. Paradigma ini didasarkan pada
fungsi matematika murni, yakni fungsi harus menghindari perubahan data 
sehingga selalu menghasilkan nilai yang sama ketika diberikan argumen 
yang sama.
*/

// GAYA IMPERATIF
const names = ['Harry','Ron','Jeff','Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++){
    newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);
/*
PENJELASAN: pada kodingan diatas kita berusaha menyelesaikan masalah
dengan gaya imperatif. Masalahnya disini adalah memasukkan nila pada
array 'names' ke dalam array 'newNamesWithExcMark'. Itu dilakukan
dengan perulangan yang dimana kita menyelesaikan permasalahnnya
dengan banyak perintah.

Intinya imperatif itu kita menyelesaikan masalah langkah demi langkah
seperti mendeklarasikan, melakukan perbandingan, dan melakukan increment

gaya imperatif memang berfokus pada "how to solve" bukan "what to solve"
*/































