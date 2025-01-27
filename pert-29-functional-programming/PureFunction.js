// PURE FUNCTION
/*
PENJELASAN: jadi pure function itu, function berdasarkan fungsi matematika murni
yang dimana dia memiliki dua sifat berikut:
    # Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen
      yang sama 
    # Tidak memiliki efek samping yang dapat mempengaruhi keadaan di
      luar fungsi tersebut
*/


// Lawan dari pure function adalah impure function. Pada kodingan dibawah ini
// adalah impure function:

let value = 0;

function addWith(addingValue){
    value += addingValue;
    console.log(`Current value is ${value}`);
    return value;
}

const result1 = addWith(1);
const result2 = addWith(1);
const result3 = addWith(1);

console.log(result1, result2, result3);

console.log('\n');





// FURE FUNCTION YANG SEBENARNYA

function addWith2(value, addingValue){
    return value + addingValue;
}

const result4 = addWith2(0,1);
console.log(`result4 is ${result4}`);

const result5 = addWith2(result4,1);
console.log(`result5 is ${result5}`);

const result6 = addWith2(result5,1);
console.log(`result6 is ${result6}`);

console.log(result4, result5, result6);




console.log('\n');


/*
PENJELASAN: pada pure function juga terdapat teknik memoization. 
dimana kita dapat membuat fungsi, yang menerima argument fungsi
kemudian dia akan mengembalikan fungsi, pada fungsi yang akan 
dikembalikan ini, dia akan mengembalikan data atau perhitungan

teknik memoization dapat kita gunakan untuk menghemat memori, kenapa??
karna nilai pada argumen sebelumnya akan disimpan, dan jika menemukan
nilai argumen yang sama dengan sebelumnya, maka nilai itu yang akan
dikembalikan

Contoh lebih lengkap dari chat-GPT ada pada kodingan dibawah ini:
*/

function memoize(fn) {
    const cache = {}; // Cache untuk menyimpan hasil
    return function (...args) {
      console.log("Arguments received:", args); // Melihat argumen
      const key = JSON.stringify(args); // Argumen diubah jadi string untuk key cache
      if (cache[key]) {
        console.log("Fetching from cache for args:", args);
        return cache[key]; // Kembalikan hasil dari cache
      }
      console.log("Calculating result for args:", args);
      const result = fn(...args); // Hitung hasil menggunakan fungsi asli
      cache[key] = result; // Simpan ke cache
      console.log(cache);
      return result;
    };
  }
  
  const add = (a, b) => a + b; // Fungsi asli
  const memoizedAdd = memoize(add); // Membuat fungsi memoized
  
  console.log(memoizedAdd(2, 3)); // args: [2, 3] -> Menghitung
  console.log(memoizedAdd(2, 3)); // args: [2, 3] -> Cache
  console.log(memoizedAdd(4, 5)); // args: [4, 5] -> Menghitung

/*
PENJELASAN: sebenarnya "...args" pada kodingan diatas itu akan
menerima nilai dari arrow function "add()". Nilai yang dimaksud
disini adalah nilai yang disimpan pada variabel "a + b"
*/
  
























