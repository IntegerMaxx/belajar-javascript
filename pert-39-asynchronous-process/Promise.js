// PROMISE

/*
PENJELASAN: jadi "promise" itu adalah object khusus yang menetukan keberhasilan
atau kegagalan dari proses asynchronous. Promise secara bahasa memiliki arti 
janji, dan memang konsep promise tersebut sangat cocok dengan makna dari kata
janji.

promise bekerja dengan 3 buah state.
1. Pending: kondisi awal, proses berjalan dan belum terdapat hasil yang diharapkan
2. Fulfilled: kondisi keberhasilan proses dan mengembalikan nilai positif
3. Rejected: Operasi terjadi kegagalan dan membawa alasan atau data dari kegagalan ini

Sebenarnya "promise"  ini hadir untuk menangani masalah callback hell, yang dimana terlalu
banyak pemanggilan fungsi "callback" sehingga kode program menjorok ke dalam dan menjadi
sulit untuk dimengerti saat penanganan asyncronous proccess.
*/

// CONTOH PENERAPAN PROMISE

function promiseExecutor(resolve, reject) {
    setTimeout(() => {
      console.log('Melakukan sesuatu sebelum Promise diselesaikan.');
      
      // Penentuan hasil dari proses asinkron
      const number = Math.random();
      console.log(number);
   
      // Nilai fulfillment dari Promise
      if (number > 0.5) {
        resolve('You did it!');
      }
   
      // Nilai rejection dari Promise
      else {
        reject(new Error('Sorry, something went wrong!'));
      }
    }, 2000);
}
   
function doSomething() {
    return new Promise(promiseExecutor);
}






























