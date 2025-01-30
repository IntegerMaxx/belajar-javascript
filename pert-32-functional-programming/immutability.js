// IMMUTABILITY
/*
PENJELASAN: jadi immutability itu adalah sebuah konsep
yang menjelasakan bahwa segala sesuatu yang telah dibuat
atau diatur tidak dapat diubah lagi
*/

// MASALAH PADA MUTATOR FUNCTION

function max(arrayOfNumbers){
    return arrayOfNumbers.sort((a, b) => a -b).pop();
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest);
console.log(numbers);
/*
PENJELASAN: jadi pada kodingan diatas kita telah berhasil membuat
mutator function atau function yang bersifat mutable. Artinya
segala sesuatu yang keluar dari function itu bisa berubah-ubah
berlawanan dengan prinsip pure function, dimana function tersebut
menghasilkan nilai yang berbeda dengan argumen yang dimasukan. Sehingga
data yang keluar tidak terprediksi.

Sebenarnya masalah pada kodingan diatas adalah data number "42" itu
diambil dan tidak sudah tidak terdapat pada variabel array "numbers"
ketika dilakukan pengecekkan yang tersisa hanyalah data array 
"[ 7, 10, 18, 23, 24 ]" >> lihat angka "42" sudah tidak ada
*/

console.log("\n");

// SOLUSI DENGAN ACCESSOR FUNCTION
function max2(arrayOfNumber) {
  return [...arrayOfNumber].sort((a, b) => a - b).pop();
}

const numbers2 = [10, 23, 24, 7, 42, 18];
const largest2 = max2(numbers2);

console.log(largest2);
console.log(numbers2);
/*
PENJELASAN: solusi pada kodingan diatas adalah mengembalikan data baru
sehingga data lama tidak termodifikasi, jadi data lama masih sama saat
dimasukkan ke dalam function dan keluar dari function.
*/

console.log("\n");

const user = {
    name: 'Maxx',
    email: 'integermaxx@gmail.com',
};
  
// Membekukan objek user
Object.freeze(user);
  
// Mencoba mengubah properti dari objek yang dibekukan
// user.email = 'test@gmail.com'; >> erorr
console.log(user); // Output: { name: 'Maxx', email: 'integermaxx@gmail.com' }

/*
PENJELASAN: pada kodingan diatas kita mencoba fungsi "freeze()" pada class 
Object. Yang dimana function ini dapat membekukan object sehingga
data pada object bersifat tetap dan tidak berubah-ubah, kita juga telah
mencoba melakukan perubahan terhadap data dan yang terjadi adalah error
*/


console.log("\n");


// OBJECT FREEZE DENGAN DIABAIKAN
function deepFreeze(object) {
    Object.keys(object).forEach((name) => {
      const prop = object[name];
      if (typeof prop == 'object' && prop !== null) {
        deepFreeze(prop);
      }
    });
  
    return Object.freeze(object);
  }
  
  const complexUser = {
    name: 'Bob',
    email: 'bob@dicoding.com',
    preferences: {
      newsletter: true,
      notifications: 'weekly',
      address: {
        city: 'New York',
        zip: '10001'
      }
    }
  };
  
  deepFreeze(complexUser);
  
  // Diabaikan
//   complexUser.preferences.address.city = 'Los Angeles';
  
  console.log(complexUser.preferences.address.city); // Output: 'New York'































