// RECURSIVE

/*
PENJELASAN: jadi pada functional programming itu, tidak terdapat istilah
for ataupun while dalam melakukan perulangan. Namun kita bisa menggunakan
recursive.

Pada perulangan dengan for atau while itu tidak mendukung pure function
karena akan terjadi perubahan data pada cunter. 
*/

// PERULANGAN DENGAN FOR
// function generateArray(n){
//     const result =[];
//     for(let counter = 0; counter <= n; counter += 1){
//         result.push(counter);
//     }
//     return result;
// }

// console.log(generateArray(-1));


function generateArray(n) {
    if (n < 0) {
      return [];
    }
  
    return [...generateArray(n - 1), n];
  }
  
  console.log(generateArray(5)); 

/*
PENJELASAN: sebenarnya " n];" ini adalah nilai sementara untuk melakukan pengecekkan.
function "...generateArray(n - 1)" akan melakukan perulangan, memasukkan ke dalam
array dan melakukan pengecekkan sampai "n" kurang dari 0. Jika "n" kurang dari 0
maka dia akan mengembalikan array kosong, sehingga perulangan berhenti.

hanya akan melakukan perulangan function
dan 
*/


if(-1 < 0){
    console.log("tst");
}






































