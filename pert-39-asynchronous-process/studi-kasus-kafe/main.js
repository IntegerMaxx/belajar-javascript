import { makeCoffee, sendCoffee } from './coffee.js';

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then(
    (value) => {
      return sendCoffee(value);
    },
    (error) => {
      console.error(error.message);
      throw error;
    },
  )
  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    },
    (error) => {
      console.error(error.message);
      throw error;
    },
  ).catch((error) => {
    console.log(error.message);
  });


/*
PENJELASAN: jadi dua parameter pada chaining method "then()" itu berasal dari 
object "Promise()" yang dikembalikan function "makeCoffee()" >> karna object
"Promise()" disini kita sudah atur bisa menerima 1 parameter dan mengembalikan
2 callback function >> "return new Promise((resolve, reject) => {}" >> "resolve"
dan "reject" disini sebagai callback function yang dimana membuat method chaining
"then()" dapat menerima 2 argumen

method "catch()" akan dijalnkan ketika error terjadi
*/




















